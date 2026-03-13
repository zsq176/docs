import type { Metadata } from "next"
import { DocsLayout } from "@/components/docs/docs-layout"
import { UseCasesContent } from "@/components/pages/use-cases"

export const metadata: Metadata = {
  title: "Use Cases - OpenOcean Documentation",
  description: "Typical use cases and integration examples for OpenOcean API",
}

const tocItems = [
  { id: "openocean-aggregator-swap-api", title: "OpenOcean Aggregator Swap API", level: 2 },
  { id: "dca-api", title: "DCA API", level: 2 },
  { id: "limit-order-api", title: "Limit Order API", level: 2 },
  { id: "zap-api", title: "ZAP API", level: 2 },
]

export default function UseCasesPage() {
  return (
    <DocsLayout tocItems={tocItems}>
      <UseCasesContent />
    </DocsLayout>
  )
}
