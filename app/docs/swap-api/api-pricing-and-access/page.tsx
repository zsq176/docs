import type { Metadata } from "next"
import { DocsLayout } from "@/components/docs/docs-layout"
import { SwapApiPricingContent } from "@/components/pages/swap-api-pricing"

export const metadata: Metadata = {
  title: "API Pricing & Access - OpenOcean Swap API",
  description: "Free trial, public and Pro Swap API access and rate limits.",
}

export default function SwapApiPricingPage() {
  return (
    <DocsLayout>
      <SwapApiPricingContent />
    </DocsLayout>
  )
}
