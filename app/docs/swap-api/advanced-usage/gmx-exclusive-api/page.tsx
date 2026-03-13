import type { Metadata } from "next"
import { DocsLayout } from "@/components/docs/docs-layout"
import { SwapApiGmxContent } from "@/components/pages/swap-api-gmx"

export const metadata: Metadata = {
  title: "GMX Exclusive API - OpenOcean Swap API",
  description: "GMX V1 and V2 pools on Arbitrum — best trading rates.",
}

export default function SwapApiAdvancedGmxPage() {
  return (
    <DocsLayout>
      <SwapApiGmxContent />
    </DocsLayout>
  )
}
