import type { Metadata } from "next"
import { DocsLayout } from "@/components/docs/docs-layout"
import { DocSubpageContent } from "@/components/docs/doc-subpage"
import { GaslessSwapApiGuideContent } from "@/components/pages/gasless-swap-api-guide"

export const metadata: Metadata = {
  title: "Gasless Swap API - Guide - OpenOcean Documentation",
  description: "Integration guide for Gasless Swap API: quote, execute, Permit2, supported chains, and transaction flow.",
}

export default function GaslessSwapApiGuidePage() {
  return (
    <DocsLayout>
      <DocSubpageContent
        title="Guide"
        description="OpenOcean Gasless Swap lets users trade tokens without paying gas fees - OpenOcean covers the transaction costs. This function supports batch gasless transactions to minimize on-chain expenses and leverages the Permit2 authorization mechanism for enhanced security and seamless signature approvals."
        parentHref="/docs/gasless-swap-api"
        parentTitle="Gasless Swap API"
      >
        <GaslessSwapApiGuideContent />
      </DocSubpageContent>
    </DocsLayout>
  )
}
