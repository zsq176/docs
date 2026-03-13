import type { Metadata } from "next"
import { DocsLayout } from "@/components/docs/docs-layout"
import { DocSubpageContent } from "@/components/docs/doc-subpage"
import { GaslessSwapApiApiContent } from "@/components/pages/gasless-swap-api-api"

export const metadata: Metadata = {
  title: "Gasless Swap API - API - OpenOcean Documentation",
  description: "Gasless Swap API endpoints: Get a quote, Submit gasless swap, Get order status.",
}

export default function GaslessSwapApiApiPage() {
  return (
    <DocsLayout>
      <DocSubpageContent
        title="API"
        description="Reference for Gasless Swap API endpoints: Get a quote, Submit gasless swap, Get order status. Use the Swagger UI for full request/response schemas."
        parentHref="/docs/gasless-swap-api"
        parentTitle="Gasless Swap API"
      >
        <GaslessSwapApiApiContent />
      </DocSubpageContent>
    </DocsLayout>
  )
}
