import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accredited Investor Certification — Mock (Reg D Rule 501)',
  description: 'Snapshot of attestation, supporting evidence and signatures',
}

export default function AccreditedInvestorReportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020617] to-[#071033] text-[#e6eef8] p-7">
      <div className="max-w-[980px] mx-auto">
        {/* Header */}
        <header className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-[10px] bg-gradient-to-br from-[#60a5fa] to-[#7dd3fc] flex items-center justify-center text-[#021124] font-bold text-lg">
            RD
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-semibold m-0">
              Accredited Investor Certification (Reg D — Rule 501) — Mock
            </h1>
            <div className="text-[#94a3b8] text-[13px]">
              Snapshot of attestation, supporting evidence and signatures
            </div>
          </div>
          <div className="ml-auto text-right">
            <div className="inline-block px-[10px] py-1.5 rounded-full bg-[rgba(96,165,250,0.12)] text-[#60a5fa] font-semibold text-[13px]">
              Mock • v1.0
            </div>
            <div className="text-xs text-[#94a3b8] mt-2">
              Generated: Oct 21, 2025
            </div>
            <div className="text-xs text-[#94a3b8]">
              Tenant: Lighthouse Capital
            </div>
          </div>
        </header>

        {/* Grid Layout */}
        <div className="grid grid-cols-[1fr_360px] gap-[18px]">
          {/* Main Content */}
          <main className="bg-[#0b1220] rounded-xl p-[18px] shadow-[0_6px_20px_rgba(2,6,23,0.6)]">
            {/* Applicant Section */}
            <section>
              <div className="text-[13px] text-[#94a3b8] uppercase tracking-[0.08em] mb-2">
                Applicant
              </div>
              <dl className="grid grid-cols-[160px_1fr] gap-y-2.5 gap-x-2.5">
                <dt className="text-[#94a3b8] text-[13px]">Type</dt>
                <dd className="m-0">
                  <span className="inline-block bg-[rgba(255,255,255,0.03)] px-[10px] py-1.5 rounded-lg">
                    Individual
                  </span>
                </dd>
                <dt className="text-[#94a3b8] text-[13px]">Client ID</dt>
                <dd className="m-0">c-789abc-def</dd>
                <dt className="text-[#94a3b8] text-[13px]">Name</dt>
                <dd className="m-0">Jordan A. Mercer</dd>
                <dt className="text-[#94a3b8] text-[13px]">DOB</dt>
                <dd className="m-0">1980-04-18</dd>
                <dt className="text-[#94a3b8] text-[13px]">Contact</dt>
                <dd className="m-0">
                  jordan.mercer@example.com • +1 (555) 221-0098
                </dd>
                <dt className="text-[#94a3b8] text-[13px]">Preferred Times</dt>
                <dd className="m-0">Tue/Thu 2-4 PM EST</dd>
                <dt className="text-[#94a3b8] text-[13px]">Communication</dt>
                <dd className="m-0">Email preferred</dd>
                <dt className="text-[#94a3b8] text-[13px]">Mailing</dt>
                <dd className="m-0">
                  422 Harbor Lane, Stamford, CT, 06901, USA
                </dd>
                <dt className="text-[#94a3b8] text-[13px]">SSN (last4)</dt>
                <dd className="m-0">1234</dd>
              </dl>
            </section>

            <hr className="my-4 border-0 border-t border-[rgba(255,255,255,0.03)]" />

            {/* Accreditation Tests Section */}
            <section>
              <div className="text-[13px] text-[#94a3b8] uppercase tracking-[0.08em] mb-2">
                Accreditation tests (Rule 501) — provided values
              </div>
              <table className="w-full border-collapse mt-2">
                <thead>
                  <tr>
                    <th className="p-2 text-left border-b border-[rgba(255,255,255,0.03)] text-[13px] font-medium">
                      Test
                    </th>
                    <th className="p-2 text-left border-b border-[rgba(255,255,255,0.03)] text-[13px] font-medium">
                      Value
                    </th>
                    <th className="p-2 text-left border-b border-[rgba(255,255,255,0.03)] text-[13px] font-medium">
                      Meets threshold?
                    </th>
                    <th className="p-2 text-left border-b border-[rgba(255,255,255,0.03)] text-[13px] font-medium">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border-b border-[rgba(255,255,255,0.03)] text-[13px]">
                      Net worth (ex primary residence)
                    </td>
                    <td className="p-2 border-b border-[rgba(255,255,255,0.03)] text-[13px]">
                      $6,500,000
                    </td>
                    <td className="p-2 border-b border-[rgba(255,255,255,0.03)] text-[13px] text-[#34d399] font-bold">
                      Yes
                    </td>
                    <td className="p-2 border-b border-[rgba(255,255,255,0.03)] text-[13px]">
                      Threshold: $1M
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b border-[rgba(255,255,255,0.03)] text-[13px]">
                      Income (last 2 years)
                    </td>
                    <td className="p-2 border-b border-[rgba(255,255,255,0.03)] text-[13px]">
                      $260,000
                    </td>
                    <td className="p-2 border-b border-[rgba(255,255,255,0.03)] text-[13px] text-[#34d399] font-bold">
                      Yes
                    </td>
                    <td className="p-2 border-b border-[rgba(255,255,255,0.03)] text-[13px]">
                      Individual ≥ $200k
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b border-[rgba(255,255,255,0.03)] text-[13px]">
                      Joint income with spouse
                    </td>
                    <td className="p-2 border-b border-[rgba(255,255,255,0.03)] text-[13px]">
                      $420,000
                    </td>
                    <td className="p-2 border-b border-[rgba(255,255,255,0.03)] text-[13px] text-[#34d399] font-bold">
                      Yes
                    </td>
                    <td className="p-2 border-b border-[rgba(255,255,255,0.03)] text-[13px]">
                      Joint ≥ $300k
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b border-[rgba(255,255,255,0.03)] text-[13px]">
                      Investable assets
                    </td>
                    <td className="p-2 border-b border-[rgba(255,255,255,0.03)] text-[13px]">
                      $5,200,000
                    </td>
                    <td className="p-2 border-b border-[rgba(255,255,255,0.03)] text-[13px] text-[#34d399] font-bold">
                      High
                    </td>
                    <td className="p-2 border-b border-[rgba(255,255,255,0.03)] text-[13px]">
                      Strong liquidity
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="flex gap-2 flex-wrap mt-3">
                <div className="inline-block bg-[rgba(255,255,255,0.03)] px-[10px] py-1.5 rounded-lg text-[13px]">
                  Primary: Net Worth Test
                </div>
                <div className="inline-block bg-[rgba(255,255,255,0.03)] px-[10px] py-1.5 rounded-lg text-[13px]">
                  Status: Accredited
                </div>
                <div className="inline-block bg-[rgba(255,255,255,0.03)] px-[10px] py-1.5 rounded-lg text-[13px]">
                  Verified: bank statements (mock)
                </div>
                <div className="inline-block bg-[rgba(255,255,255,0.03)] px-[10px] py-1.5 rounded-lg text-[13px]">
                  Verified: CPA letter (mock)
                </div>
              </div>
            </section>

            <hr className="my-4 border-0 border-t border-[rgba(255,255,255,0.03)]" />

            {/* Attestations Section */}
            <section>
              <div className="text-[13px] text-[#94a3b8] uppercase tracking-[0.08em] mb-2">
                Attestations
              </div>
              <ul className="pl-5 space-y-1">
                <li className="text-[14px]">
                  Understands risks of private/alternative investments —{' '}
                  <strong>agreed</strong>
                </li>
                <li className="text-[14px]">
                  Understands illiquidity & lock-up periods —{' '}
                  <strong>agreed</strong>
                </li>
                <li className="text-[14px]">
                  Understands private investment structures —{' '}
                  <strong>agreed</strong>
                </li>
                <li className="text-[14px]">
                  Acknowledges lock-up periods of 1-5 years —{' '}
                  <strong>agreed</strong>
                </li>
                <li className="text-[14px]">
                  Consents to verification of financial status —{' '}
                  <strong>agreed</strong>
                </li>
              </ul>
            </section>

            <hr className="my-4 border-0 border-t border-[rgba(255,255,255,0.03)]" />

            {/* Supporting Documents Section */}
            <section>
              <div className="text-[13px] text-[#94a3b8] uppercase tracking-[0.08em] mb-2">
                Supporting documents
              </div>
              <div className="space-y-1.5">
                <a
                  href="#"
                  className="block text-[#cfe9ff] underline text-[14px]"
                >
                  CPA_Letter_Jordan_Mercer.pdf
                </a>
                <a
                  href="#"
                  className="block text-[#cfe9ff] underline text-[14px]"
                >
                  Bank_Statements_Q1-Q4_2024.zip
                </a>
                <a
                  href="#"
                  className="block text-[#cfe9ff] underline text-[14px]"
                >
                  Investment_Portfolio_Summary.pdf
                </a>
                <a
                  href="#"
                  className="block text-[#cfe9ff] underline text-[14px]"
                >
                  Photo_ID_Jordan.jpg
                </a>
              </div>
            </section>

            {/* Signatures Section */}
            <div className="border-t border-dashed border-[rgba(255,255,255,0.06)] pt-2.5 mt-2.5">
              <div className="text-[13px] text-[#94a3b8] uppercase tracking-[0.08em] mb-2">
                Signatures
              </div>
              <div className="flex gap-[18px] items-center">
                <div>
                  <div className="font-bold">Jordan A. Mercer</div>
                  <div className="text-xs text-[#94a3b8] mt-2">
                    Signed: 2025-10-20
                  </div>
                </div>
                <div className="border-l border-[rgba(255,255,255,0.03)] pl-3.5">
                  <div className="font-bold">Alex R. Doyle</div>
                  <div className="text-xs text-[#94a3b8] mt-2">
                    Advisor, Lighthouse Capital
                  </div>
                  <div className="text-xs text-[#94a3b8]">
                    Signed: 2025-10-20
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="bg-[#0b1220] rounded-xl p-[18px] shadow-[0_6px_20px_rgba(2,6,23,0.6)] space-y-3.5">
            {/* Form Summary */}
            <section>
              <div className="text-[13px] text-[#94a3b8] uppercase tracking-[0.08em] mb-2">
                Form summary
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-xs text-[#94a3b8]">Applicant status</div>
                  <div className="text-[22px] font-bold text-[#60a5fa]">
                    Accredited
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-[#94a3b8]">Compliance Score</div>
                  <div className="text-[22px] font-bold">95/100</div>
                </div>
              </div>

              <div className="flex justify-between mt-3">
                <div>
                  <div className="text-xs text-[#94a3b8]">Risk Level</div>
                  <div className="text-[#34d399]">Low</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-[#94a3b8]">
                    Primary criterion
                  </div>
                  <div className="text-[22px] font-bold">Net worth</div>
                </div>
              </div>

              <div className="text-xs text-[#94a3b8] mt-3">
                Notes: Applicant reports investable assets between{' '}
                <strong>$5M–$10M</strong>. Strong compliance history. Shown
                values are mocked for demonstration.
              </div>
            </section>

            <hr className="border-0 border-t border-[rgba(255,255,255,0.03)]" />

            {/* Metadata */}
            <section>
              <div className="text-[13px] text-[#94a3b8] uppercase tracking-[0.08em] mb-2">
                Metadata
              </div>
              <dl className="grid grid-cols-[100px_1fr] gap-y-2.5 gap-x-2.5">
                <dt className="text-[#94a3b8] text-[13px]">Form ID</dt>
                <dd className="m-0 text-[13px]">
                  f4b7b9e2-8c13-4b1d-900a-2a6a9d0d9f7b
                </dd>
                <dt className="text-[#94a3b8] text-[13px]">Tenant ID</dt>
                <dd className="m-0 text-[13px]">tenant-lighthouse-001</dd>
                <dt className="text-[#94a3b8] text-[13px]">Completed At</dt>
                <dd className="m-0 text-[13px]">2025-10-20T14:23:00Z</dd>
                <dt className="text-[#94a3b8] text-[13px]">Last Review</dt>
                <dd className="m-0 text-[13px]">2025-10-20</dd>
                <dt className="text-[#94a3b8] text-[13px]">Next Review</dt>
                <dd className="m-0 text-[13px]">2026-10-20</dd>
                <dt className="text-[#94a3b8] text-[13px]">Completed By</dt>
                <dd className="m-0 text-[13px]">Alex R. Doyle (Advisor)</dd>
                <dt className="text-[#94a3b8] text-[13px]">Firm</dt>
                <dd className="m-0 text-[13px]">Lighthouse Capital Advisors</dd>
                <dt className="text-[#94a3b8] text-[13px]">Framework</dt>
                <dd className="m-0 text-[13px]">SEC Reg D Rule 501</dd>
              </dl>
            </section>

            <hr className="border-0 border-t border-[rgba(255,255,255,0.03)]" />

            {/* Accreditation Tests */}
            <section>
              <div className="text-[13px] text-[#94a3b8] uppercase tracking-[0.08em] mb-2">
                Accreditation Tests
              </div>
              <table className="w-full border-collapse">
                <tbody>
                  <tr>
                    <td className="p-2 border-b border-[rgba(255,255,255,0.03)] text-[13px]">
                      Net Worth Test
                    </td>
                    <td className="p-2 border-b border-[rgba(255,255,255,0.03)] text-[13px] text-[#34d399] font-bold">
                      Pass
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b border-[rgba(255,255,255,0.03)] text-[13px]">
                      Income Test
                    </td>
                    <td className="p-2 border-b border-[rgba(255,255,255,0.03)] text-[13px] text-[#34d399] font-bold">
                      Pass
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b border-[rgba(255,255,255,0.03)] text-[13px]">
                      Joint Income Test
                    </td>
                    <td className="p-2 border-b border-[rgba(255,255,255,0.03)] text-[13px] text-[#34d399] font-bold">
                      Pass
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b border-[rgba(255,255,255,0.03)] text-[13px]">
                      Entity Test
                    </td>
                    <td className="p-2 border-b border-[rgba(255,255,255,0.03)] text-[13px]">
                      —
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b border-[rgba(255,255,255,0.03)] text-[13px]">
                      Professional Test
                    </td>
                    <td className="p-2 border-b border-[rgba(255,255,255,0.03)] text-[13px]">
                      —
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </aside>
        </div>

        {/* Footer */}
        <footer className="mt-[18px] text-xs text-[#94a3b8]">
          This mock document is for demonstration only and does not constitute
          legal or compliance advice. Real forms must follow firm templates and
          regulatory guidance.
        </footer>
      </div>
    </div>
  )
}
