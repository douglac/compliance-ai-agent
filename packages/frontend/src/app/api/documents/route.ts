import { getDocuments } from '@/lib/db/documents'
import { auth } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // Get authenticated user and tenant
    const { userId, orgId } = await auth()

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get query parameters
    const searchParams = request.nextUrl.searchParams
    const type = searchParams.get('type') || undefined
    const status = searchParams.get('status') || undefined
    const clientName = searchParams.get('clientName') || undefined

    // Fetch documents from MongoDB
    const documents = await getDocuments({
      tenantId: orgId || undefined, // Filter by organization if available
      type,
      status,
      clientName,
    })

    return NextResponse.json({
      documents,
      count: documents.length,
    })
  } catch (error) {
    console.error('Error in documents API route:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
