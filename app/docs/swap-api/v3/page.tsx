import type { Metadata } from "next"
import { DocsLayout } from "@/components/docs/docs-layout"
import { SwapApiV3Content } from "@/components/pages/swap-api-v3"

export const metadata: Metadata = {
  title: "Swap API V3 - OpenOcean Documentation",
  description: "OpenOcean Swap API v3 — legacy compatible.",
}

export default function SwapApiV3Page() {
  return (
    <DocsLayout>
      <SwapApiV3Content />
    </DocsLayout>
  )
}
