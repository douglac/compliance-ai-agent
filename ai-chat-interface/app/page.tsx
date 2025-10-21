import { redirect } from "next/navigation"

export default function Home() {
  redirect("/dashboard")

  // The ChatInterface component is not needed here as we are redirecting
  // <main className="flex min-h-screen flex-col">
  //   <ChatInterface />
  // </main>
}
