import { z } from 'zod'

const UUID = z.string().uuid()
const ISODate = z.string().refine((s) => !Number.isNaN(Date.parse(s)), {
  message: 'must be an ISO date string',
})

const Attachment = z.object({
  id: UUID.optional(),
  filename: z.string(),
  url: z.string().url().optional(),
  uploadedAt: ISODate.optional(),
})

const Signature = z.object({
  name: z.string(),
  role: z.string().optional(),
  signedAt: ISODate,
  signatureId: UUID.optional(),
})

const ClientInfo = z.object({
  name: z.string(),
  clientId: UUID.optional(),
  clientType: z.enum(['individual', 'entity']),
  contactEmail: z.string().email(),
  contactPhone: z.string(),
  mailingAddress: z.string(),
  preferredContactTimes: z.array(z.string()).optional(),
  communicationChannel: z
    .enum(['email', 'phone', 'portal', 'in_person'])
    .optional(),
  relationshipManager: z.string().optional(),
})

const FinancialProfile = z.object({
  netWorthExPrimaryResidence: z.number().min(0),
  annualIncome: z.number().min(0),
  investmentExperience: z.string(),
  investmentExperienceYears: z.number().min(0).optional(),
  currentInvestmentAssets: z.number().min(0),
  liquidAssets: z.number().min(0).optional(),
  otherLiabilities: z.number().min(0),
  employmentStatus: z.string().optional(),
  industryExperience: z.array(z.string()).optional(),
})

const RiskToleranceLevel = z.enum([
  'conservative',
  'moderate',
  'moderate-high',
  'aggressive',
])

const LiquidityLevel = z.enum(['high', 'moderate', 'low', 'minimal'])

const RiskToleranceAssessment = z.object({
  investmentHorizon: z.string(),
  investmentHorizonYears: z.number().min(0).optional(),
  lossTolerance: z.string(),
  lossTolerancePercentage: z.number().min(0).max(100).optional(),
  liquidityNeeds: LiquidityLevel,
  investmentGoals: z.array(z.string()),
  experienceWithAlternatives: z.string().optional(),
  experienceYears: z.number().min(0).optional(),
  overallRiskLevel: RiskToleranceLevel,
  concentrationLimits: z
    .object({
      maxSingleInvestment: z.number().min(0).max(100).optional(),
      maxAlternativesAllocation: z.number().min(0).max(100).optional(),
    })
    .optional(),
})

const SuitabilitySummary = z.object({
  suitableForAlternatives: z.boolean(),
  recommendedAllocation: z.number().min(0).max(100).optional(),
  portfolioRecommendations: z.array(z.string()).optional(),
  restrictedInvestmentTypes: z.array(z.string()).optional(),
  periodicReviewRequired: z.boolean().default(true),
  reviewFrequencyMonths: z.number().min(1).default(12),
  additionalNotes: z.string().optional(),
})

const CertificationMeta = z.object({
  formId: UUID.optional(),
  tenantId: UUID.optional(),
  completedAt: ISODate,
  completedBy: z.string().optional(),
  advisorFirm: z.string().optional(),
  advisorContact: z.string().optional(),
  lastReviewDate: ISODate.optional(),
  nextReviewDate: ISODate.optional(),
  riskLevel: z.enum(['low', 'medium', 'high']).optional(),
  complianceScore: z.number().min(0).max(100).optional(),
  regulatoryFramework: z.array(z.string()).optional(),
})

export const InvestmentSuitabilityQuestionnaire = z
  .object({
    type: z.literal('InvestmentSuitabilityQuestionnaire'),
    version: z.string().default('1.0'),
    client: ClientInfo,
    financialProfile: FinancialProfile,
    riskTolerance: RiskToleranceAssessment,
    suitability: SuitabilitySummary,
    relatedEntities: z
      .array(
        z.object({
          entityId: UUID.optional(),
          name: z.string(),
          relationship: z.string(),
          impactOnSuitability: z.string().optional(),
        })
      )
      .optional(),
    supportingDocuments: z.array(Attachment).optional(),
    signatures: z.array(Signature).min(2),
    metadata: CertificationMeta.optional(),
  })
  .superRefine((doc, ctx) => {
    // Validate that high-risk investments require appropriate financial capacity
    if (doc.suitability.suitableForAlternatives) {
      // Check minimum net worth for alternative investments
      if (doc.financialProfile.netWorthExPrimaryResidence < 1000000) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            'Alternative investments typically require minimum net worth of $1M',
          path: ['financialProfile', 'netWorthExPrimaryResidence'],
        })
      }

      // Ensure client has sufficient investment assets
      const investmentRatio =
        doc.financialProfile.currentInvestmentAssets /
        doc.financialProfile.netWorthExPrimaryResidence
      if (investmentRatio < 0.3) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            'Investment assets should represent reasonable portion of net worth',
          path: ['financialProfile', 'currentInvestmentAssets'],
        })
      }
    }

    // Validate risk tolerance alignment
    if (
      doc.riskTolerance.overallRiskLevel === 'conservative' &&
      doc.suitability.suitableForAlternatives
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          'Conservative risk tolerance may not align with alternative investments',
        path: ['suitability', 'suitableForAlternatives'],
      })
    }

    // Validate investment horizon for illiquid investments
    if (
      doc.suitability.suitableForAlternatives &&
      doc.riskTolerance.investmentHorizonYears &&
      doc.riskTolerance.investmentHorizonYears < 5
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          'Alternative investments typically require 5+ year investment horizon',
        path: ['riskTolerance', 'investmentHorizonYears'],
      })
    }

    // Validate liquidity needs
    if (
      doc.suitability.suitableForAlternatives &&
      doc.riskTolerance.liquidityNeeds === 'high'
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          'High liquidity needs may not align with illiquid alternative investments',
        path: ['riskTolerance', 'liquidityNeeds'],
      })
    }
  })

export type InvestmentSuitabilityQuestionnaire = z.infer<
  typeof InvestmentSuitabilityQuestionnaire
>
