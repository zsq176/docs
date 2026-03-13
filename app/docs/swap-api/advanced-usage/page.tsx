import type { Metadata } from "next"
import { DocsLayout } from "@/components/docs/docs-layout"
import { SwapApiAdvancedUsageContent } from "@/components/pages/swap-api-advanced-usage"

export const metadata: Metadata = {
  title: "Advanced Usage - OpenOcean Swap API",
  description: "Advanced features and integration options for the Swap API.",
}

export default function SwapApiAdvancedUsagePage() {
  return (
    <DocsLayout>
      <SwapApiAdvancedUsageContent />
    </DocsLayout>
  )
}
