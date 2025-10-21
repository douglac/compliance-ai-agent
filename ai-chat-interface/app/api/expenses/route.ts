import { NextResponse } from "next/server"

const mockExpenses = [
  {
    id: "1",
    description: "Client Dinner Meeting",
    amount: 285.5,
    category: "Meals & Entertainment",
    date: "May 15, 2024",
    status: "approved" as const,
    submittedBy: "Sarah Johnson",
  },
  {
    id: "2",
    description: "Flight to NYC Conference",
    amount: 650.0,
    category: "Travel",
    date: "May 14, 2024",
    status: "approved" as const,
    submittedBy: "Michael Chen",
  },
  {
    id: "3",
    description: "Office Supplies - Q2",
    amount: 142.75,
    category: "Office Supplies",
    date: "May 13, 2024",
    status: "pending" as const,
    submittedBy: "Emily Rodriguez",
  },
  {
    id: "4",
    description: "Software Licenses Renewal",
    amount: 1200.0,
    category: "Software",
    date: "May 12, 2024",
    status: "approved" as const,
    submittedBy: "James Wilson",
  },
  {
    id: "5",
    description: "Hotel Accommodation - Boston",
    amount: 380.0,
    category: "Travel",
    date: "May 11, 2024",
    status: "pending" as const,
    submittedBy: "Lisa Anderson",
  },
  {
    id: "6",
    description: "Team Building Event",
    amount: 520.0,
    category: "Team Activities",
    date: "May 10, 2024",
    status: "approved" as const,
    submittedBy: "David Kim",
  },
  {
    id: "7",
    description: "Marketing Materials Printing",
    amount: 95.25,
    category: "Marketing",
    date: "May 9, 2024",
    status: "rejected" as const,
    submittedBy: "Rachel Green",
  },
  {
    id: "8",
    description: "Taxi to Airport",
    amount: 45.0,
    category: "Transportation",
    date: "May 8, 2024",
    status: "approved" as const,
    submittedBy: "Tom Martinez",
  },
  {
    id: "9",
    description: "Client Gift Basket",
    amount: 125.0,
    category: "Client Relations",
    date: "May 7, 2024",
    status: "pending" as const,
    submittedBy: "Sarah Johnson",
  },
  {
    id: "10",
    description: "Conference Registration Fee",
    amount: 450.0,
    category: "Professional Development",
    date: "May 6, 2024",
    status: "approved" as const,
    submittedBy: "Michael Chen",
  },
  {
    id: "11",
    description: "Parking - Downtown Office",
    amount: 35.0,
    category: "Transportation",
    date: "May 5, 2024",
    status: "approved" as const,
    submittedBy: "Emily Rodriguez",
  },
  {
    id: "12",
    description: "Business Lunch with Vendor",
    amount: 165.5,
    category: "Meals & Entertainment",
    date: "May 4, 2024",
    status: "pending" as const,
    submittedBy: "James Wilson",
  },
]

export async function GET() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800))

  return NextResponse.json(mockExpenses)
}
