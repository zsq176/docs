import type { Metadata } from "next"
import { DocsLayout } from "@/components/docs/docs-layout"
import { SolanaSwapApiContent } from "@/components/pages/solana-swap-api"

export const metadata: Metadata = {
  title: "Solana Swap API - OpenOcean Documentation",
  description: "Swap API for Solana chain integration.",
}

export default function SolanaSwapApiPage() {
  return (
    <DocsLayout>
      <SolanaSwapApiContent />
    </DocsLayout>
  )
}
