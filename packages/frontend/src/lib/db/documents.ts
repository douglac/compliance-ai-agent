import clientPromise from '@/lib/mongodb'
import { ComplianceDocument } from '@/types/documents'

export async function getDocuments(filters?: {
  tenantId?: string
  type?: string
  status?: string
  clientName?: string
}): Promise<ComplianceDocument[]> {
  try {
    const client = await clientPromise
    const db = client.db('compliance-db')
    const collection = db.collection<ComplianceDocument>('documents')

    // Build query based on filters
    const query: any = {}

    if (filters?.tenantId) {
      query.tenantId = filters.tenantId
    }

    if (filters?.type && filters.type !== 'all') {
      query.type = filters.type
    }

    if (filters?.status && filters.status !== 'all') {
      query.status = filters.status
    }

    if (filters?.clientName) {
      query.clientName = {
        $regex: filters.clientName,
        $options: 'i', // case-insensitive
      }
    }

    const documents = await collection
      .find(query)
      .sort({ issueDate: -1 })
      .toArray()

    // Convert MongoDB _id to id
    return documents.map((doc) => ({
      ...doc,
      id: doc.id || doc._id?.toString(),
      _id: undefined,
    })) as ComplianceDocument[]
  } catch (error) {
    console.error('Error fetching documents from MongoDB:', error)
    throw error
  }
}

export async function getDocumentById(
  id: string
): Promise<ComplianceDocument | null> {
  try {
    const client = await clientPromise
    const db = client.db('compliance-db')
    const collection = db.collection<ComplianceDocument>('documents')

    const document = await collection.findOne({ id })

    if (!document) return null

    return {
      ...document,
      id: document.id || document._id?.toString(),
      _id: undefined,
    } as ComplianceDocument
  } catch (error) {
    console.error('Error fetching document by ID:', error)
    throw error
  }
}

export async function insertDocument(
  document: ComplianceDocument
): Promise<ComplianceDocument> {
  try {
    const client = await clientPromise
    const db = client.db('compliance-db')
    const collection = db.collection<ComplianceDocument>('documents')

    const result = await collection.insertOne(document)

    return {
      ...document,
      id: document.id || result.insertedId.toString(),
    }
  } catch (error) {
    console.error('Error inserting document:', error)
    throw error
  }
}

export async function updateDocument(
  id: string,
  updates: Partial<ComplianceDocument>
): Promise<ComplianceDocument | null> {
  try {
    const client = await clientPromise
    const db = client.db('compliance-db')
    const collection = db.collection<ComplianceDocument>('documents')

    const result = await collection.findOneAndUpdate(
      { id },
      { $set: updates },
      { returnDocument: 'after' }
    )

    if (!result) return null

    return {
      ...result,
      id: result.id || result._id?.toString(),
      _id: undefined,
    } as ComplianceDocument
  } catch (error) {
    console.error('Error updating document:', error)
    throw error
  }
}

export async function deleteDocument(id: string): Promise<boolean> {
  try {
    const client = await clientPromise
    const db = client.db('compliance-db')
    const collection = db.collection('documents')

    const result = await collection.deleteOne({ id })

    return result.deletedCount === 1
  } catch (error) {
    console.error('Error deleting document:', error)
    throw error
  }
}
