import type { Metadata } from "next"
import { DocsLayout } from "@/components/docs/docs-layout"
import { GaslessSwapApiContent } from "@/components/pages/gasless-swap-api"

export const metadata: Metadata = {
  title: "Gasless Swap API - OpenOcean Documentation",
  description: "Gasless swap integration for supported chains.",
}

export default function GaslessSwapApiPage() {
  return (
    <DocsLayout>
      <GaslessSwapApiContent />
    </DocsLayout>
  )
}
