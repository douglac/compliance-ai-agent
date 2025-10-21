import { NextResponse } from "next/server"
import { getDatabase } from "@/lib/mongodb"

export async function GET() {
  try {
    const db = await getDatabase()

    // Query clients collection for Corporate type clients
    const companies = await db
      .collection("clients")
      .find({ type: "Corporate" })
      .toArray()

    // Map MongoDB client schema to company response
    const mappedCompanies = companies.map((client) => ({
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

    return NextResponse.json(mappedCompanies)
  } catch (error) {
    console.error("[API] Error fetching companies:", error)
    return NextResponse.json(
      { error: "Failed to fetch companies" },
      { status: 500 }
    )
  }
}
