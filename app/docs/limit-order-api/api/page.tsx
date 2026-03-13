import type { Metadata } from "next"
import { DocsLayout } from "@/components/docs/docs-layout"
import { LimitOrderApiApiContent } from "@/components/pages/limit-order-api-api"

export const metadata: Metadata = {
  title: "Limit Order API - API - OpenOcean Documentation",
  description: "Limit Order API endpoints reference.",
}

export default function LimitOrderApiApiPage() {
  return (
    <DocsLayout>
      <LimitOrderApiApiContent />
    </DocsLayout>
  )
}
