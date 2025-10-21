import { columns } from '@/components/documents/columns'
import { DocumentsTable } from '@/components/documents/documents-table'
import { getDocuments } from '@/lib/db/documents'
import { auth } from '@clerk/nextjs/server'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Documents | Compliance Platform',
  description: 'View and manage compliance documents',
}

export default async function DocumentsPage() {
  // Check authentication
  const { userId, orgId } = await auth()

  if (!userId) {
    redirect('/sign-in')
  }

  // Fetch documents from MongoDB
  let documents: any[] = []
  let error = null

  try {
    documents = await getDocuments({
      tenantId: orgId || undefined,
    })
  } catch (e) {
    console.error('Failed to fetch documents:', e)
    error = 'Failed to load documents'
  }

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

        {error ? (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            <p className="font-medium">Error loading documents</p>
            <p className="text-sm">{error}</p>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <DocumentsTable columns={columns} data={documents} />
          </div>
        )}
      </div>
    </div>
  )
}
