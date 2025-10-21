import { NextResponse } from "next/server"
import { getDatabase } from "@/lib/mongodb"

export async function GET() {
  try {
    const db = await getDatabase()

    // Query clients collection for Individual type clients
    const clients = await db
      .collection("clients")
      .find({ type: "Individual" })
      .toArray()

    // Map MongoDB client schema to client response
    const mappedClients = clients.map((client) => ({
      id: client.id,
      name: client.name,
      type: client.type,
      risk_level: client.risk_level,
      net_worth: client.net_worth,
      onboarding_date: client.onboarding_date,
      last_review_date: client.last_review_date,
      preferred_contact_times: client.preferred_contact_times || [],
      investment_preferences: client.investment_preferences || [],
    }))

    return NextResponse.json(mappedClients)
  } catch (error) {
    console.error("[API] Error fetching clients:", error)
    return NextResponse.json(
      { error: "Failed to fetch clients" },
      { status: 500 }
    )
  }
}
