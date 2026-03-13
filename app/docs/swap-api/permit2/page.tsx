import type { Metadata } from "next"
import { DocsLayout } from "@/components/docs/docs-layout"
import { SwapApiPermit2Content } from "@/components/pages/swap-api-permit2"

export const metadata: Metadata = {
  title: "Permit2 - OpenOcean Swap API",
  description: "Using Permit2 (Uniswap SignatureTransfer) with OpenOcean Swap API.",
}

export default function SwapApiPermit2Page() {
  return (
    <DocsLayout>
      <SwapApiPermit2Content />
    </DocsLayout>
  )
}
