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
  clientType: z.enum(['individual', 'entity']),
  contactEmail: z.string().email(),
  contactPhone: z.string(),
  mailingAddress: z.string(),
})

const InvestmentInfo = z.object({
  fundName: z.string(),
  investmentType: z.string(),
  investmentAmount: z.number().min(0),
  liquidityTerms: z.string(),
  expectedReturnRange: z.string().optional(),
})

const RiskDisclosures = z.object({
  speculativeRisk: z.boolean().default(true),
  pastPerformanceDisclaimer: z.boolean().default(true),
  limitedLiquidity: z.boolean().default(true),
  leverageAndDerivatives: z.boolean().default(true),
  regulatoryAndOperationalRisks: z.boolean().default(true),
  additionalDisclosures: z.array(z.string()).optional(),
})

const ClientAcknowledgments = z.object({
  understandsRisksAndIlliquidity: z.boolean(),
  confirmsFinancialSophistication: z.boolean(),
  receivedOfferingMaterials: z.boolean(),
  additionalAcknowledgments: z.array(z.string()).optional(),
})

const CertificationMeta = z.object({
  formId: UUID.optional(),
  completedAt: ISODate,
  completedBy: z.string().optional(),
  advisorFirm: z.string().optional(),
  advisorContact: z.string().optional(),
})

export const AlternativeInvestmentRiskDisclosure = z
  .object({
    type: z.literal('AlternativeInvestmentRiskDisclosure'),
    version: z.string().optional(),
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
  })

export type AlternativeInvestmentRiskDisclosure = z.infer<
  typeof AlternativeInvestmentRiskDisclosure
>
