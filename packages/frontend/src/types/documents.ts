export interface ComplianceDocument {
  id: string
  type: string
  clientName: string
  clientId: string
  status: 'valid' | 'expiring' | 'expired' | 'pending'
  issueDate: string
  expiryDate: string | null
  complianceScore: number | null
  riskLevel: 'low' | 'medium' | 'high'
  tenantId: string
  version: number
  completedBy?: string
  advisorFirm?: string
  regulatoryFramework?: string[]
}
