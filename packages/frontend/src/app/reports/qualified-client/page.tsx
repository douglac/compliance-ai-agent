import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Qualified Client Acknowledgment (SEC Rule 205-3) — Mock',
  description: 'SEC Rule 205-3 Mock Report',
}

export default function QualifiedClientAcknowledgmentPage() {
  return (
    <div className="min-h-screen bg-[#f0f4f8] text-[#0f172a] p-7">
      <div className="max-w-[980px] mx-auto bg-white rounded-xl p-7 shadow-[0_6px_20px_rgba(0,0,0,0.1)]">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-[22px] font-semibold m-0">
            Qualified Client Acknowledgment
          </h1>
          <div className="text-[#64748b] text-[14px]">
            SEC Rule 205-3 — Mock Report
          </div>
          <div className="inline-block mt-2 px-[10px] py-1.5 rounded-full bg-[#e0f2fe] text-[#0284c7] font-semibold text-[13px]">
            Compliance Score: 98/100
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
            <dt className="text-[#64748b] text-[13px]">Contact Email</dt>
            <dd className="m-0 text-[14px]">jordan.mercer@example.com</dd>
            <dt className="text-[#64748b] text-[13px]">Phone</dt>
            <dd className="m-0 text-[14px]">+1 (555) 221-0098</dd>
            <dt className="text-[#64748b] text-[13px]">Mailing Address</dt>
            <dd className="m-0 text-[14px]">
              422 Harbor Lane, Stamford, CT, 06901, USA
            </dd>
            <dt className="text-[#64748b] text-[13px]">Preferred Contact</dt>
            <dd className="m-0 text-[14px]">Tuesdays & Thursdays 2-4 PM EST</dd>
          </dl>
        </section>

        {/* Qualified Client Tests */}
        <section className="mb-[22px]">
          <div className="text-[14px] text-[#64748b] uppercase tracking-[0.08em] mb-2">
            Qualified Client Tests (SEC Rule 205-3)
          </div>
          <table className="w-full border-collapse mt-2">
            <thead>
              <tr>
                <th className="p-2 text-left border-b border-[#e2e8f0] text-[13px] font-medium">
                  Criterion
                </th>
                <th className="p-2 text-left border-b border-[#e2e8f0] text-[13px] font-medium">
                  Value
                </th>
                <th className="p-2 text-left border-b border-[#e2e8f0] text-[13px] font-medium">
                  Meets Rule 205-3?
                </th>
                <th className="p-2 text-left border-b border-[#e2e8f0] text-[13px] font-medium">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px]">
                  Assets under management (with advisor)
                </td>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px]">
                  $3,500,000
                </td>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px] text-[#16a34a] font-bold">
                  Yes
                </td>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px]">
                  Threshold: $1.1M
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px]">
                  Net worth (ex primary residence)
                </td>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px]">
                  $6,500,000
                </td>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px] text-[#16a34a] font-bold">
                  Yes
                </td>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px]">
                  Threshold: $2.2M
                </td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px]">
                  Eligible account with performance fee
                </td>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px]">
                  Hedge Fund ABC
                </td>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px] text-[#16a34a] font-bold">
                  Yes
                </td>
                <td className="p-2 border-b border-[#e2e8f0] text-[13px]">
                  Qualified account
                </td>
              </tr>
            </tbody>
          </table>
          <div className="text-xs text-[#64748b] mt-1.5">
            Notes: Mock values for demonstration; satisfies SEC Rule 205-3
            thresholds for performance-based fees. Client qualifies under
            multiple tests.
          </div>
        </section>

        {/* Acknowledgments */}
        <section className="mb-[22px]">
          <div className="text-[14px] text-[#64748b] uppercase tracking-[0.08em] mb-2">
            Acknowledgments
          </div>
          <ul className="pl-[18px] space-y-1">
            <li className="text-[14px]">
              Understands performance-based fee structure —{' '}
              <strong>agreed</strong>
            </li>
            <li className="text-[14px]">
              Understands potential for high-risk / alternative investments —{' '}
              <strong>agreed</strong>
            </li>
            <li className="text-[14px]">
              Confirms current assets and net worth accurately reported —{' '}
              <strong>agreed</strong>
            </li>
            <li className="text-[14px]">
              Acknowledges fees may result in higher costs during poor
              performance — <strong>agreed</strong>
            </li>
            <li className="text-[14px]">
              Understands qualified client status requirements —{' '}
              <strong>agreed</strong>
            </li>
          </ul>
        </section>

        {/* Supporting Documentation */}
        <section className="mb-[22px]">
          <div className="text-[14px] text-[#64748b] uppercase tracking-[0.08em] mb-2">
            Supporting Documentation
          </div>
          <ul className="pl-[18px]">
            <li className="text-[14px]">
              Investment Account Statement Q3 2025 (mock)
            </li>
            <li className="text-[14px]">
              CPA Letter Verifying Net Worth (mock)
            </li>
            <li className="text-[14px]">
              Assets Under Management Verification (mock)
            </li>
            <li className="text-[14px]">Performance Fee Agreement (mock)</li>
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
        <div className="mt-[18px] p-3 bg-[#f0f4f8] rounded-lg">
          <div className="text-[14px] text-[#64748b] uppercase tracking-[0.08em] mb-2">
            Metadata & Compliance
          </div>
          <dl className="grid grid-cols-[200px_1fr] gap-y-2.5 gap-x-2.5">
            <dt className="text-[#64748b] text-[13px]">Form ID</dt>
            <dd className="m-0 text-[14px]">qc-123abc-456</dd>
            <dt className="text-[#64748b] text-[13px]">Tenant ID</dt>
            <dd className="m-0 text-[14px]">tenant-lighthouse-001</dd>
            <dt className="text-[#64748b] text-[13px]">Completed At</dt>
            <dd className="m-0 text-[14px]">2025-10-21T10:30:00Z</dd>
            <dt className="text-[#64748b] text-[13px]">Last Review Date</dt>
            <dd className="m-0 text-[14px]">2025-10-21</dd>
            <dt className="text-[#64748b] text-[13px]">Next Review Date</dt>
            <dd className="m-0 text-[14px]">2026-10-21</dd>
            <dt className="text-[#64748b] text-[13px]">Risk Level</dt>
            <dd className="m-0 text-[14px]">Low</dd>
            <dt className="text-[#64748b] text-[13px]">Compliance Score</dt>
            <dd className="m-0 text-[14px]">98/100</dd>
            <dt className="text-[#64748b] text-[13px]">Regulatory Framework</dt>
            <dd className="m-0 text-[14px]">SEC Rule 205-3</dd>
            <dt className="text-[#64748b] text-[13px]">Advisor Firm</dt>
            <dd className="m-0 text-[14px]">Lighthouse Capital Advisors</dd>
            <dt className="text-[#64748b] text-[13px]">Advisor Contact</dt>
            <dd className="m-0 text-[14px]">alex.doyle@lighthouse.com</dd>
          </dl>
        </div>

        {/* Footer */}
        <footer className="mt-[18px] text-xs text-[#64748b]">
          Mock report generated for demonstration only; does not constitute
          legal advice.
        </footer>
      </div>
    </div>
  )
}
