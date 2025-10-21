import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alternative Investment Risk Disclosure & Acknowledgment — Mock',
  description: 'High-Risk Investment Disclosure',
}

export default function AlternativeInvestmentRiskDisclosurePage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#1e293b] p-7">
      <div className="max-w-[960px] mx-auto bg-white rounded-xl p-7 shadow-[0_6px_20px_rgba(0,0,0,0.08)]">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-[22px] font-semibold m-0">
            Alternative Investment Risk Disclosure & Acknowledgment
          </h1>
          <div className="text-[#64748b] text-[14px]">
            High-Risk Investment Disclosure — Mock
          </div>
          <div className="inline-block mt-2 px-[10px] py-1.5 rounded-full bg-[#fef9c3] text-[#b45309] font-semibold text-[13px]">
            Risk Level: High | Status: Compliant
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
            <dt className="text-[#64748b] text-[13px]">Accreditation Status</dt>
            <dd className="m-0 text-[14px] text-[#16a34a] font-bold">
              Accredited Investor
            </dd>
          </dl>
        </section>

        {/* Investment Information */}
        <section className="mb-[22px]">
          <div className="text-[14px] text-[#64748b] uppercase tracking-[0.08em] mb-2">
            Investment Information
          </div>
          <dl className="grid grid-cols-[200px_1fr] gap-y-2.5 gap-x-2.5">
            <dt className="text-[#64748b] text-[13px]">Fund ID</dt>
            <dd className="m-0 text-[14px]">fund-abc-series-x</dd>
            <dt className="text-[#64748b] text-[13px]">Fund Name</dt>
            <dd className="m-0 text-[14px]">Hedge Fund ABC — Series X</dd>
            <dt className="text-[#64748b] text-[13px]">Investment Type</dt>
            <dd className="m-0 text-[14px]">Alternative / Hedge Fund</dd>
            <dt className="text-[#64748b] text-[13px]">Asset Class</dt>
            <dd className="m-0 text-[14px]">Hedge Fund</dd>
            <dt className="text-[#64748b] text-[13px]">Investment Amount</dt>
            <dd className="m-0 text-[14px]">$1,500,000</dd>
            <dt className="text-[#64748b] text-[13px]">Minimum Investment</dt>
            <dd className="m-0 text-[14px]">$1,000,000</dd>
            <dt className="text-[#64748b] text-[13px]">Liquidity Terms</dt>
            <dd className="m-0 text-[14px]">
              Quarterly Redemptions, 90-Day Notice
            </dd>
            <dt className="text-[#64748b] text-[13px]">Lockup Period</dt>
            <dd className="m-0 text-[14px]">18 months</dd>
            <dt className="text-[#64748b] text-[13px]">Redemption Frequency</dt>
            <dd className="m-0 text-[14px]">Quarterly (after lockup)</dd>
            <dt className="text-[#64748b] text-[13px]">
              Expected Return Range
            </dt>
            <dd className="m-0 text-[14px]">8–20% annually (not guaranteed)</dd>
            <dt className="text-[#64748b] text-[13px]">Management Fee</dt>
            <dd className="m-0 text-[14px]">2.0%</dd>
            <dt className="text-[#64748b] text-[13px]">Performance Fee</dt>
            <dd className="m-0 text-[14px]">20% above high water mark</dd>
          </dl>
          <div className="text-xs text-[#64748b] mt-2">
            <strong>Required Documents:</strong> Subscription Agreement,
            Accredited Investor Certification, W-9 Form
          </div>
        </section>

        {/* Key Risk Disclosures */}
        <section className="mb-[22px]">
          <div className="text-[14px] text-[#64748b] uppercase tracking-[0.08em] mb-2">
            Key Risk Disclosures
          </div>
          <ul className="pl-[18px] space-y-1">
            <li className="text-[14px]">
              <strong>Speculative Risk:</strong> Investment is speculative and
              may result in substantial loss of capital. ✓
            </li>
            <li className="text-[14px]">
              <strong>Past Performance:</strong> Past performance is not
              indicative of future results. ✓
            </li>
            <li className="text-[14px]">
              <strong>Limited Liquidity:</strong> Early redemption may be
              restricted; 18-month lockup period applies. ✓
            </li>
            <li className="text-[14px]">
              <strong>Leverage & Derivatives:</strong> Fund may use leverage and
              derivatives that amplify gains or losses. ✓
            </li>
            <li className="text-[14px]">
              <strong>Regulatory & Operational Risks:</strong> Investments
              subject to regulatory, market, and operational risks. ✓
            </li>
            <li className="text-[14px]">
              <strong>Market Risk:</strong> Value may fluctuate significantly
              based on market conditions. ✓
            </li>
            <li className="text-[14px]">
              <strong>Concentration Risk:</strong> Portfolio may have
              concentrated positions increasing volatility. ✓
            </li>
            <li className="text-[14px]">
              <strong>Counterparty Risk:</strong> Exposure to counterparty
              credit risk in derivatives transactions. ✓
            </li>
          </ul>
        </section>

        {/* Client Acknowledgment */}
        <section className="mb-[22px]">
          <div className="text-[14px] text-[#64748b] uppercase tracking-[0.08em] mb-2">
            Client Acknowledgment
          </div>
          <ul className="pl-[18px] space-y-1">
            <li className="text-[14px]">
              Understands the risks and illiquidity of the investment —{' '}
              <strong>agreed</strong>
            </li>
            <li className="text-[14px]">
              Confirms sufficient financial sophistication and risk tolerance —{' '}
              <strong>agreed</strong>
            </li>
            <li className="text-[14px]">
              Receives and reviews offering materials and disclosures —{' '}
              <strong>agreed</strong>
            </li>
            <li className="text-[14px]">
              Reviewed subscription agreement thoroughly —{' '}
              <strong>agreed</strong>
            </li>
            <li className="text-[14px]">
              Understands all fees and expenses — <strong>agreed</strong>
            </li>
            <li className="text-[14px]">
              Acknowledges no liquidity guarantee during lockup —{' '}
              <strong>agreed</strong>
            </li>
            <li className="text-[14px]">
              Confirms investment suitability based on financial profile —{' '}
              <strong>agreed</strong>
            </li>
          </ul>
        </section>

        {/* Supporting Documents */}
        <section className="mb-[22px]">
          <div className="text-[14px] text-[#64748b] uppercase tracking-[0.08em] mb-2">
            Supporting Documents
          </div>
          <ul className="pl-[18px]">
            <li className="text-[14px]">Offering Memorandum (mock)</li>
            <li className="text-[14px]">Subscription Agreement (mock)</li>
            <li className="text-[14px]">Investment Risk Summary (mock)</li>
            <li className="text-[14px]">Fund Performance History (mock)</li>
            <li className="text-[14px]">
              Accredited Investor Certification (on file)
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
        <div className="mt-[18px] p-3 bg-[#fffbeb] rounded-lg border border-[#fbbf24]">
          <div className="text-[14px] text-[#64748b] uppercase tracking-[0.08em] mb-2">
            Metadata & Compliance
          </div>
          <dl className="grid grid-cols-[200px_1fr] gap-y-2.5 gap-x-2.5">
            <dt className="text-[#64748b] text-[13px]">Form ID</dt>
            <dd className="m-0 text-[14px]">aird-def789-ghi</dd>
            <dt className="text-[#64748b] text-[13px]">Tenant ID</dt>
            <dd className="m-0 text-[14px]">tenant-lighthouse-001</dd>
            <dt className="text-[#64748b] text-[13px]">Completed At</dt>
            <dd className="m-0 text-[14px]">2025-10-21T16:45:00Z</dd>
            <dt className="text-[#64748b] text-[13px]">Review Date</dt>
            <dd className="m-0 text-[14px]">2025-10-21</dd>
            <dt className="text-[#64748b] text-[13px]">Expiry Date</dt>
            <dd className="m-0 text-[14px]">2026-10-21</dd>
            <dt className="text-[#64748b] text-[13px]">Risk Level</dt>
            <dd className="m-0 text-[14px]">High</dd>
            <dt className="text-[#64748b] text-[13px]">Compliance Status</dt>
            <dd className="m-0 text-[14px] text-[#16a34a] font-bold">
              Compliant
            </dd>
            <dt className="text-[#64748b] text-[13px]">Regulatory Framework</dt>
            <dd className="m-0 text-[14px]">SEC Reg D, FINRA Rule 2111</dd>
            <dt className="text-[#64748b] text-[13px]">Advisor Firm</dt>
            <dd className="m-0 text-[14px]">Lighthouse Capital Advisors</dd>
            <dt className="text-[#64748b] text-[13px]">Advisor Contact</dt>
            <dd className="m-0 text-[14px]">alex.doyle@lighthouse.com</dd>
          </dl>
        </div>

        {/* Footer */}
        <footer className="mt-[18px] text-xs text-[#64748b]">
          Mock report for demonstration purposes only; not a legally binding
          disclosure.
        </footer>
      </div>
    </div>
  )
}
