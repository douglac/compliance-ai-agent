import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Investment Suitability Questionnaire — Mock',
  description: 'Client Profile and Risk Assessment',
}

export default function InvestmentSuitabilityQuestionnairePage() {
  return (
    <div className="min-h-screen bg-[#f1f5f9] text-[#0f172a] p-7">
      <div className="max-w-[960px] mx-auto bg-white rounded-xl p-7 shadow-[0_6px_20px_rgba(0,0,0,0.08)]">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-[22px] font-semibold m-0">
            Investment Suitability Questionnaire
          </h1>
          <div className="text-[#64748b] text-[14px]">
            Mock Report — Client Profile and Risk Assessment
          </div>
          <div className="inline-block mt-2 px-[10px] py-1.5 rounded-full bg-[#dbeafe] text-[#1e40af] font-semibold text-[13px]">
            Compliance Score: 92/100
          </div>
        </header>

        {/* Client Information */}
        <section className="mb-[22px]">
          <div className="text-[14px] text-[#64748b] uppercase tracking-[0.08em] mb-2">
            Client Information
          </div>
          <dl className="grid grid-cols-[200px_1fr] gap-y-2.5 gap-x-2.5">
            <dt className="text-[#64748b] text-[13px]">Client ID</dt>
            <dd className="m-0 text-[14px]">c-789abc-def</dd>
            <dt className="text-[#64748b] text-[13px]">Name</dt>
            <dd className="m-0 text-[14px]">Jordan A. Mercer</dd>
            <dt className="text-[#64748b] text-[13px]">Client Type</dt>
            <dd className="m-0 text-[14px]">Individual</dd>
            <dt className="text-[#64748b] text-[13px]">Email</dt>
            <dd className="m-0 text-[14px]">jordan.mercer@example.com</dd>
            <dt className="text-[#64748b] text-[13px]">Phone</dt>
            <dd className="m-0 text-[14px]">+1 (555) 221-0098</dd>
            <dt className="text-[#64748b] text-[13px]">Address</dt>
            <dd className="m-0 text-[14px]">
              422 Harbor Lane, Stamford, CT, 06901, USA
            </dd>
            <dt className="text-[#64748b] text-[13px]">Preferred Contact</dt>
            <dd className="m-0 text-[14px]">
              Email, Tuesdays & Thursdays 2-4 PM EST
            </dd>
            <dt className="text-[#64748b] text-[13px]">
              Communication Channel
            </dt>
            <dd className="m-0 text-[14px]">Email primary, phone secondary</dd>
            <dt className="text-[#64748b] text-[13px]">Relationship Manager</dt>
            <dd className="m-0 text-[14px]">Alex R. Doyle</dd>
          </dl>
        </section>

        {/* Financial Profile */}
        <section className="mb-[22px]">
          <div className="text-[14px] text-[#64748b] uppercase tracking-[0.08em] mb-2">
            Financial Profile
          </div>
          <dl className="grid grid-cols-[200px_1fr] gap-y-2.5 gap-x-2.5">
            <dt className="text-[#64748b] text-[13px]">
              Net Worth (ex primary residence)
            </dt>
            <dd className="m-0 text-[14px]">$6,500,000</dd>
            <dt className="text-[#64748b] text-[13px]">Annual Income</dt>
            <dd className="m-0 text-[14px]">$260,000</dd>
            <dt className="text-[#64748b] text-[13px]">
              Investment Experience
            </dt>
            <dd className="m-0 text-[14px]">
              10+ years (stocks, bonds, alternative investments)
            </dd>
            <dt className="text-[#64748b] text-[13px]">Experience Years</dt>
            <dd className="m-0 text-[14px]">12 years</dd>
            <dt className="text-[#64748b] text-[13px]">
              Current Investment Assets
            </dt>
            <dd className="m-0 text-[14px]">$5,200,000</dd>
            <dt className="text-[#64748b] text-[13px]">Liquid Assets</dt>
            <dd className="m-0 text-[14px]">$800,000</dd>
            <dt className="text-[#64748b] text-[13px]">Other Liabilities</dt>
            <dd className="m-0 text-[14px]">$120,000</dd>
            <dt className="text-[#64748b] text-[13px]">Employment Status</dt>
            <dd className="m-0 text-[14px]">Self-employed entrepreneur</dd>
            <dt className="text-[#64748b] text-[13px]">Industry Experience</dt>
            <dd className="m-0 text-[14px]">Technology, Real Estate</dd>
          </dl>
        </section>

        {/* Risk Tolerance Assessment */}
        <section className="mb-[22px]">
          <div className="text-[14px] text-[#64748b] uppercase tracking-[0.08em] mb-2">
            Risk Tolerance Assessment
          </div>
          <table className="w-full border-collapse mt-2">
            <thead>
              <tr>
                <th className="p-2 text-left border-b border-[#e2e8f0] text-[13px] font-medium">
                  Risk Category
                </th>
                <th className="p-2 text-left border-b border-[#e2e8f0] text-[13px] font-medium">
                  Client Response
                </th>
                <th className="p-2 text-left border-b border-[#e2e8f0] text-[13px] font-medium">
                  Assessment
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px]">
                  Investment Horizon
                </td>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px]">
                  10+ years
                </td>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px] text-[#16a34a] font-bold">
                  Long-term
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px]">
                  Loss Tolerance
                </td>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px]">
                  Can sustain 20–30% temporary losses
                </td>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px] text-[#16a34a] font-bold">
                  Moderate-High
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px]">
                  Loss Tolerance %
                </td>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px]">
                  25%
                </td>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px] text-[#16a34a] font-bold">
                  Within acceptable range
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px]">
                  Liquidity Needs
                </td>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px]">
                  Minimal
                </td>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px] text-[#16a34a] font-bold">
                  Low
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px]">
                  Investment Goals
                </td>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px]">
                  Growth, capital appreciation, tax efficiency
                </td>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px] text-[#16a34a] font-bold">
                  Aggressive
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px]">
                  Experience with Alternatives
                </td>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px]">
                  5 years in hedge funds / private funds
                </td>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px] text-[#16a34a] font-bold">
                  High
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px]">
                  Overall Risk Level
                </td>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px]">
                  Moderate-High
                </td>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px] text-[#16a34a] font-bold">
                  Aligned
                </td>
              </tr>
            </tbody>
          </table>
          <div className="text-xs text-[#64748b] mt-1.5">
            <strong>Concentration Limits:</strong> Max single investment: 20% |
            Max alternatives allocation: 40%
          </div>
        </section>

        {/* Suitability Summary */}
        <section className="mb-[22px]">
          <div className="text-[14px] text-[#64748b] uppercase tracking-[0.08em] mb-2">
            Suitability Summary
          </div>
          <ul className="pl-[18px] space-y-1">
            <li className="text-[14px]">
              Client is suitable for alternative / high-risk investments —{' '}
              <strong>confirmed</strong>
            </li>
            <li className="text-[14px]">
              Recommended allocation to alternatives: <strong>30-35%</strong>
            </li>
            <li className="text-[14px]">
              Portfolio should balance liquid and illiquid instruments —{' '}
              <strong>recommended</strong>
            </li>
            <li className="text-[14px]">
              Restricted investment types: <strong>None identified</strong>
            </li>
            <li className="text-[14px]">
              Periodic review and risk reassessment recommended —{' '}
              <strong>acknowledged</strong>
            </li>
            <li className="text-[14px]">
              Review frequency: <strong>Every 12 months</strong>
            </li>
          </ul>
        </section>

        {/* Related Entities */}
        <section className="mb-[22px]">
          <div className="text-[14px] text-[#64748b] uppercase tracking-[0.08em] mb-2">
            Related Entities
          </div>
          <table className="w-full border-collapse mt-2">
            <thead>
              <tr>
                <th className="p-2 text-left border-b border-[#e2e8f0] text-[13px] font-medium">
                  Entity
                </th>
                <th className="p-2 text-left border-b border-[#e2e8f0] text-[13px] font-medium">
                  Relationship
                </th>
                <th className="p-2 text-left border-b border-[#e2e8f0] text-[13px] font-medium">
                  Impact on Suitability
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px]">
                  JS Holdings LLC
                </td>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px]">
                  Beneficial Owner (100%)
                </td>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px]">
                  Increases net worth calculation
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px]">
                  Mercer Family Trust
                </td>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px]">
                  Trustee
                </td>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px]">
                  Additional investment capacity
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px]">
                  Sarah Johnson
                </td>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px]">
                  Spouse/Partner
                </td>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px]">
                  Joint income considerations
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Supporting Documentation */}
        <section className="mb-[22px]">
          <div className="text-[14px] text-[#64748b] uppercase tracking-[0.08em] mb-2">
            Supporting Documentation
          </div>
          <ul className="pl-[18px]">
            <li className="text-[14px]">
              Recent Investment Account Statements (mock)
            </li>
            <li className="text-[14px]">
              Net Worth Certification by CPA (mock)
            </li>
            <li className="text-[14px]">
              Risk Tolerance Questionnaire Form (mock)
            </li>
            <li className="text-[14px]">
              Investment Experience Summary (mock)
            </li>
          </ul>
        </section>

        {/* Signatures */}
        <div className="border-t border-dashed border-[#cbd5e1] pt-2.5 mt-2.5 mb-[22px]">
          <div className="text-[14px] text-[#64748b] uppercase tracking-[0.08em] mb-2">
            Signatures
          </div>
          <div className="flex gap-6 items-center">
            <div>
              <div className="font-bold">Jordan A. Mercer</div>
              <div className="text-xs text-[#64748b]">Signed: 2025-10-21</div>
            </div>
            <div className="border-l border-[#cbd5e1] pl-3.5">
              <div className="font-bold">Alex R. Doyle</div>
              <div className="text-xs text-[#64748b]">
                Advisor, Lighthouse Capital
              </div>
              <div className="text-xs text-[#64748b]">Signed: 2025-10-21</div>
            </div>
          </div>
        </div>

        {/* Metadata & Compliance */}
        <div className="mt-[18px] p-3 bg-[#f8fafc] rounded-lg">
          <div className="text-[14px] text-[#64748b] uppercase tracking-[0.08em] mb-2">
            Metadata & Compliance
          </div>
          <dl className="grid grid-cols-[200px_1fr] gap-y-2.5 gap-x-2.5">
            <dt className="text-[#64748b] text-[13px]">Form ID</dt>
            <dd className="m-0 text-[14px]">isq-456def-789</dd>
            <dt className="text-[#64748b] text-[13px]">Tenant ID</dt>
            <dd className="m-0 text-[14px]">tenant-lighthouse-001</dd>
            <dt className="text-[#64748b] text-[13px]">Last Review Date</dt>
            <dd className="m-0 text-[14px]">2025-10-21</dd>
            <dt className="text-[#64748b] text-[13px]">Next Review Date</dt>
            <dd className="m-0 text-[14px]">2026-10-21</dd>
            <dt className="text-[#64748b] text-[13px]">Risk Level</dt>
            <dd className="m-0 text-[14px]">Medium</dd>
            <dt className="text-[#64748b] text-[13px]">Compliance Score</dt>
            <dd className="m-0 text-[14px]">92/100</dd>
            <dt className="text-[#64748b] text-[13px]">Regulatory Framework</dt>
            <dd className="m-0 text-[14px]">SEC, FINRA, MiFID II</dd>
          </dl>
        </div>

        {/* Footer */}
        <footer className="mt-[18px] text-xs text-[#64748b]">
          Mock report generated for demonstration purposes only; does not
          constitute legal or compliance advice.
        </footer>
      </div>
    </div>
  )
}
