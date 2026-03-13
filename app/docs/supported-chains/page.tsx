import type { Metadata } from "next"
import { DocsLayout } from "@/components/docs/docs-layout"
import { SupportedChainsContent } from "@/components/pages/supported-chains"

export const metadata: Metadata = {
  title: "Supported Chains - OpenOcean Documentation",
  description: "List of supported blockchain networks, covering 40+ chains",
}

const tocItems = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "swap-api-chains", title: "Swap API supported chains", level: 2 },
  { id: "dca-api-chains", title: "DCA API supported chains", level: 2 },
  { id: "limit-order-api-chains", title: "Limit Order API supported chains", level: 2 },
  { id: "chain-ids", title: "Chain ID Reference", level: 2 },
]

export default function SupportedChainsPage() {
  return (
    <DocsLayout tocItems={tocItems}>
      <SupportedChainsContent />
    </DocsLayout>
  )
}
