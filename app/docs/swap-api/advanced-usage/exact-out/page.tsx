import type { Metadata } from "next"
import { DocsLayout } from "@/components/docs/docs-layout"
import { SwapApiExactOutContent } from "@/components/pages/swap-api-exact-out"

export const metadata: Metadata = {
  title: "Exact Out - OpenOcean Swap API",
  description: "Use reverseQuote and swap for exact output amount.",
}

export default function SwapApiExactOutPage() {
  return (
    <DocsLayout>
      <SwapApiExactOutContent />
    </DocsLayout>
  )
}
