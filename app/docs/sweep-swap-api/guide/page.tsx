import type { Metadata } from "next"
import { DocsLayout } from "@/components/docs/docs-layout"
import { SweepSwapApiGuideContent } from "@/components/pages/sweep-swap-api-guide"

export const metadata: Metadata = {
  title: "Sweep Swap API - Guide - OpenOcean Documentation",
  description: "Sweep Swap API integration guide.",
}

export default function SweepSwapApiGuidePage() {
  return (
    <DocsLayout>
      <SweepSwapApiGuideContent />
    </DocsLayout>
  )
}
