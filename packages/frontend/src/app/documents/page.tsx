import { columns } from '@/components/documents/columns'
import { DocumentsTable } from '@/components/documents/documents-table'
import { mockDocuments } from '@/lib/mock-data/documents'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Documents | Compliance Platform',
  description: 'View and manage compliance documents',
}

export default function DocumentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Compliance Documents
          </h1>
          <p className="text-gray-600">
            Manage and track all compliance documentation across clients
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <DocumentsTable columns={columns} data={mockDocuments} />
        </div>
      </div>
    </div>
  )
}
