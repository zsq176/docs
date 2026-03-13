import type { Metadata } from "next"
import { DocsLayout } from "@/components/docs/docs-layout"
import { SweepSwapApiApiContent } from "@/components/pages/sweep-swap-api-api"

export const metadata: Metadata = {
  title: "Sweep Swap API - API - OpenOcean Documentation",
  description: "Sweep Swap API endpoints reference.",
}

export default function SweepSwapApiApiPage() {
  return (
    <DocsLayout>
      <SweepSwapApiApiContent />
    </DocsLayout>
  )
}
