import { z } from 'zod'

const UUID = z.string().uuid()
const ISODate = z
  .string()
  .refine((s) => !Number.isNaN(Date.parse(s)), {
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

/**
 * Accredited Investor (SEC Regulation D - Rule 501) — Mock Zod schema
 *
 * NOTE: This is a schema model for data capture / validation only. It is not legal
 * advice and does not replace jurisdictional/legal requirements.
 */

const IndividualAccreditation = z.object({
  kind: z.literal('individual'),
  firstName: z.string(),
  lastName: z.string(),
  ssnLast4: z.string().length(4).optional(),
  dob: ISODate.optional(),
  citizenshipCountry: z.string().optional(),
  // Income test: lastTwoYearsIncome and expectedThisYearIncome in USD
  lastTwoYearsIncome: z
    .number()
    .min(0, 'income must be non-negative')
    .optional(),
  expectedThisYearIncome: z.number().min(0).optional(),
  // Net worth excluding primary residence (in USD)
  netWorthExPrimaryResidence: z.number().min(0).optional(),
  // Indicates whether spouse/partner income is being relied upon for joint-income tests
  jointWithSpouse: z.boolean().optional(),
  mailingAddress: z.string().optional(),
  contactEmail: z.string().email().optional(),
  contactPhone: z.string().optional(),
  supportingDocuments: z.array(Attachment).optional(),
})

const EntityAccreditation = z.object({
  kind: z.literal('entity'),
  entityName: z.string(),
  entityType: z.enum([
    'corporation',
    'llc',
    'partnership',
    'trust',
    'investmentFund',
    'other',
  ]),
  ein: z.string().optional(),
  jurisdictionOfFormation: z.string().optional(),
  totalAssetsUSD: z.number().min(0).optional(),
  // If accreditation is based on owners / principals
  principals: z
    .array(
      z.object({
        id: UUID.optional(),
        name: z.string(),
        role: z.string().optional(),
        // For principals we allow marking whether they meet accredited criteria
        accredited: z.boolean().optional(),
        // optional fields to support evaluation (same as individual)
        lastTwoYearsIncome: z.number().min(0).optional(),
        netWorthExPrimaryResidence: z.number().min(0).optional(),
      })
    )
    .optional(),
  supportingDocuments: z.array(Attachment).optional(),
  contactEmail: z.string().email().optional(),
  contactPhone: z.string().optional(),
})

const CertificationMeta = z.object({
  formId: UUID.optional(),
  completedAt: ISODate,
  completedBy: z.string().optional(), // name of advisor or preparer
  advisorFirm: z.string().optional(),
  advisorContact: z.string().optional(),
})

export const AccreditedInvestorCertification = z
  .object({
    type: z.literal('AccreditedInvestorCertification'),
    version: z.string().optional(),
    statement: z
      .string()
      .optional()
      .describe('Standard attestation language — stored for reference'),
    subject: z.discriminatedUnion('kind', [
      IndividualAccreditation,
      EntityAccreditation,
    ]),
    // explicit manual acknowledgement fields
    attestations: z.object({
      understandsRisk: z.boolean().default(true),
      acknowledgesIlliquidity: z.boolean().default(true),
      acknowledgesLossRisk: z.boolean().default(true),
      consentsToVerification: z.boolean().default(false).optional(),
    }),
    signatures: z.array(Signature).min(1),
    metadata: CertificationMeta.optional(),
  })
  .superRefine((doc, ctx) => {
    const s = doc.subject

    // For individuals: require at least one of the common Rule 501 tests to be present and satisfied:
    // - income test: lastTwoYearsIncome >= 200000 (individual) or >=300000 joint (if joint used)
    // - net worth test: netWorthExPrimaryResidence >= 1000000
    if (s.kind === 'individual') {
      const inc = s.lastTwoYearsIncome ?? 0
      const expected = s.expectedThisYearIncome ?? 0
      const net = s.netWorthExPrimaryResidence ?? 0
      const joint = !!s.jointWithSpouse

      const incomeThreshold = joint ? 300000 : 200000
      const incomePass = inc >= incomeThreshold || expected >= incomeThreshold
      const netPass = net >= 1_000_000

      if (!incomePass && !netPass) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            'Individual does not meet expected Rule 501 accreditation criteria: must meet income (>= $200k individual / $300k joint) or net worth (>= $1,000,000 excluding primary residence). Provide supporting income/net worth fields or attach verification.',
          path: ['subject'],
        })
      }
    }

    // For entities: require at least one of:
    // - totalAssetsUSD >= $5,000,000
    // - entity is an investment fund (investmentFund) OR
    // - all principals marked accredited
    if (s.kind === 'entity') {
      const assets = s.totalAssetsUSD ?? 0
      const principals = s.principals ?? []
      const allPrincipalsAccredited =
        principals.length > 0 && principals.every((p) => p.accredited === true)

      const entityQualifies =
        assets >= 5_000_000 ||
        s.entityType === 'investmentFund' ||
        allPrincipalsAccredited

      if (!entityQualifies) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            'Entity does not meet expected Rule 501 accreditation criteria: provide total assets >= $5,000,000, be an investment fund, or list principals where all are accredited.',
          path: ['subject'],
        })
      }
    }
  })

export type AccreditedInvestorCertification = z.infer<
  typeof AccreditedInvestorCertification
>
