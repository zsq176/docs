import type { Metadata } from "next"
import { DocsLayout } from "@/components/docs/docs-layout"
import { SwapApiGuideContent } from "@/components/pages/swap-api-guide"

export const metadata: Metadata = {
  title: "Swap API Guide - OpenOcean Documentation",
  description: "Integration guide for OpenOcean Swap API — 7 steps.",
}

export default function SwapApiGuidePage() {
  return (
    <DocsLayout>
      <SwapApiGuideContent />
    </DocsLayout>
  )
}
