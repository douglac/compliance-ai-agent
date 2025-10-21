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
  accreditationStatus: z
    .enum(['accredited', 'qualified_purchaser', 'institutional'])
    .optional(),
})

const InvestmentInfo = z.object({
  fundName: z.string(),
  fundId: UUID.optional(),
  investmentType: z.string(),
  assetClass: z
    .enum([
      'hedge_fund',
      'private_equity',
      'real_estate',
      'venture_capital',
      'other',
    ])
    .optional(),
  investmentAmount: z.number().min(0),
  minimumInvestment: z.number().min(0).optional(),
  liquidityTerms: z.string(),
  lockupPeriodMonths: z.number().min(0).optional(),
  redemptionFrequency: z.string().optional(),
  expectedReturnRange: z.string().optional(),
  managementFee: z.number().min(0).optional(),
  performanceFee: z.number().min(0).optional(),
  requiredDocuments: z.array(z.string()).optional(),
})

const RiskDisclosures = z.object({
  speculativeRisk: z.boolean().default(true),
  pastPerformanceDisclaimer: z.boolean().default(true),
  limitedLiquidity: z.boolean().default(true),
  leverageAndDerivatives: z.boolean().default(true),
  regulatoryAndOperationalRisks: z.boolean().default(true),
  marketRisk: z.boolean().default(true).optional(),
  concentrationRisk: z.boolean().default(true).optional(),
  counterpartyRisk: z.boolean().default(true).optional(),
  additionalDisclosures: z.array(z.string()).optional(),
})

const ClientAcknowledgments = z.object({
  understandsRisksAndIlliquidity: z.boolean(),
  confirmsFinancialSophistication: z.boolean(),
  receivedOfferingMaterials: z.boolean(),
  reviewedSubscriptionAgreement: z.boolean().optional(),
  understandsFeesAndExpenses: z.boolean().optional(),
  acknowledgesNoLiquidityGuarantee: z.boolean().optional(),
  confirmsInvestmentSuitability: z.boolean().optional(),
  additionalAcknowledgments: z.array(z.string()).optional(),
})

const CertificationMeta = z.object({
  formId: UUID.optional(),
  tenantId: UUID.optional(),
  completedAt: ISODate,
  completedBy: z.string().optional(),
  advisorFirm: z.string().optional(),
  advisorContact: z.string().optional(),
  reviewDate: ISODate.optional(),
  expiryDate: ISODate.optional(),
  riskLevel: z.enum(['low', 'medium', 'high']).optional(),
  complianceStatus: z
    .enum(['compliant', 'pending', 'non_compliant'])
    .optional(),
  regulatoryFramework: z.array(z.string()).optional(),
})

export const AlternativeInvestmentRiskDisclosure = z
  .object({
    type: z.literal('AlternativeInvestmentRiskDisclosure'),
    version: z.string().default('1.0'),
    client: ClientInfo,
    investment: InvestmentInfo,
    riskDisclosures: RiskDisclosures,
    acknowledgments: ClientAcknowledgments,
    supportingDocuments: z.array(Attachment).optional(),
    signatures: z.array(Signature).min(2),
    metadata: CertificationMeta.optional(),
  })
  .superRefine((doc, ctx) => {
    // Validate that all required acknowledgments are true
    if (!doc.acknowledgments.understandsRisksAndIlliquidity) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          'Client must acknowledge understanding of risks and illiquidity',
        path: ['acknowledgments', 'understandsRisksAndIlliquidity'],
      })
    }

    if (!doc.acknowledgments.confirmsFinancialSophistication) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Client must confirm sufficient financial sophistication',
        path: ['acknowledgments', 'confirmsFinancialSophistication'],
      })
    }

    if (!doc.acknowledgments.receivedOfferingMaterials) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Client must acknowledge receipt of offering materials',
        path: ['acknowledgments', 'receivedOfferingMaterials'],
      })
    }

    // Validate minimum investment amount for alternative investments
    if (doc.investment.investmentAmount < 100000) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          'Alternative investments typically have minimum investment thresholds',
        path: ['investment', 'investmentAmount'],
      })
    }

    // Validate accreditation status matches investment type
    if (
      doc.investment.assetClass === 'hedge_fund' &&
      !doc.client.accreditationStatus
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Hedge fund investments require accreditation status',
        path: ['client', 'accreditationStatus'],
      })
    }

    // Validate lockup period acknowledgment
    if (
      doc.investment.lockupPeriodMonths &&
      doc.investment.lockupPeriodMonths > 12
    ) {
      if (!doc.acknowledgments.acknowledgesNoLiquidityGuarantee) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            'Extended lockup periods require explicit liquidity acknowledgment',
          path: ['acknowledgments', 'acknowledgesNoLiquidityGuarantee'],
        })
      }
    }
  })

export type AlternativeInvestmentRiskDisclosure = z.infer<
  typeof AlternativeInvestmentRiskDisclosure
>
