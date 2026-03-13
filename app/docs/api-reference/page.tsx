import { DocsLayout } from "@/components/docs/docs-layout"
import { ApiReferenceContent } from "@/components/pages/api-reference"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "API Reference - OpenOcean Documentation",
  description: "Complete API reference for OpenOcean - Swap API, Gasless API, DCA, Limit Orders, and more.",
}

const tocItems = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "authentication", title: "Authentication", level: 2 },
  { id: "base-urls", title: "Base URLs", level: 2 },
  { id: "api-endpoints", title: "API Endpoints", level: 2 },
  { id: "rate-limits", title: "Rate Limits", level: 2 },
]

export default function ApiReferencePage() {
  return (
    <DocsLayout showToc={true} tocItems={tocItems}>
      <ApiReferenceContent />
    </DocsLayout>
  )
}
