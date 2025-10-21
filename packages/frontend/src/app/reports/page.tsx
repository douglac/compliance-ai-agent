import Link from 'next/link'

export default function ReportsPage() {
  const reports = [
    {
      title: 'Accredited Investor Certification',
      description: 'SEC Regulation D - Rule 501 certification report',
      href: '/reports/accredited-investors',
      category: 'Investor Qualification',
    },
    {
      title: 'Investment Suitability Questionnaire',
      description: 'Client profile and risk assessment documentation',
      href: '/reports/investment-suitability-questionnaire',
      category: 'Suitability Assessment',
    },
    {
      title: 'Alternative Investment Risk Disclosure',
      description: 'High-risk investment disclosure and acknowledgment',
      href: '/reports/alternative-investment-risk-disclosure',
      category: 'Risk Disclosure',
    },
    {
      title: 'Qualified Client Acknowledgment',
      description: 'SEC Rule 205-3 qualified client certification',
      href: '/reports/qualified-client',
      category: 'Performance Fees',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Compliance Reports
          </h1>
          <p className="text-gray-600 text-lg">
            Mock compliance documentation templates for financial services
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reports.map((report) => (
            <Link
              key={report.href}
              href={report.href}
              className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200"
            >
              <div className="mb-3">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
                  {report.category}
                </span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {report.title}
              </h2>
              <p className="text-gray-600 text-sm">{report.description}</p>
              <div className="mt-4 text-blue-600 text-sm font-medium flex items-center">
                View Report
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
