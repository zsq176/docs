import type { Metadata } from "next"
import { DocsLayout } from "@/components/docs/docs-layout"
import { DocSubpageContent } from "@/components/docs/doc-subpage"
import { DCAApiApiContent } from "@/components/pages/dca-api-api"

export const metadata: Metadata = {
  title: "DCA API - API - OpenOcean Documentation",
  description: "DCA API endpoints: Create DCA order, Cancel, Get by address, Get all chain, Get execution details.",
}

export default function DCAApiApiPage() {
  return (
    <DocsLayout>
      <DocSubpageContent
        title="API"
        description="Reference for DCA API endpoints. View Github examples for Backend and Frontend. Use Swagger UI for full request/response schemas."
        parentHref="/docs/dca-api/guide"
        parentTitle="DCA API"
      >
        <DCAApiApiContent />
      </DocSubpageContent>
    </DocsLayout>
  )
}
