import type { Metadata } from "next"
import { DocsLayout } from "@/components/docs/docs-layout"
import { SwapApiV4Content } from "@/components/pages/swap-api-v4"

export const metadata: Metadata = {
  title: "Swap API V4 - OpenOcean Documentation",
  description: "OpenOcean Swap API v4 — recommended version.",
}

export default function SwapApiV4Page() {
  return (
    <DocsLayout>
      <SwapApiV4Content />
    </DocsLayout>
  )
}
