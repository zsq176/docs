import type { Metadata } from "next"
import { DocsLayout } from "@/components/docs/docs-layout"
import { ZapApiApiContent } from "@/components/pages/zap-api-api"

export const metadata: Metadata = {
  title: "Zap API - API - OpenOcean Documentation",
  description: "Zap API endpoints reference.",
}

export default function ZapApiApiPage() {
  return (
    <DocsLayout>
      <ZapApiApiContent />
    </DocsLayout>
  )
}
