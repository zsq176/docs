import type { Metadata } from "next"
import { DocsLayout } from "@/components/docs/docs-layout"
import { TicketApiApiContent } from "@/components/pages/ticket-api-api"

export const metadata: Metadata = {
  title: "Ticket API - API - OpenOcean Documentation",
  description: "Ticket API endpoints reference.",
}

export default function TicketApiApiPage() {
  return (
    <DocsLayout>
      <TicketApiApiContent />
    </DocsLayout>
  )
}
