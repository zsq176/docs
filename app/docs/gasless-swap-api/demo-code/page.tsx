import type { Metadata } from "next"
import { DocsLayout } from "@/components/docs/docs-layout"
import { DocSubpageContent } from "@/components/docs/doc-subpage"
import { GaslessSwapApiDemoCodeContent } from "@/components/pages/gasless-swap-api-demo-code"

export const metadata: Metadata = {
  title: "Gasless Swap API - Demo Code - OpenOcean Documentation",
  description: "Front-end code example for Gasless Swap API integration.",
}

export default function GaslessSwapApiDemoCodePage() {
  return (
    <DocsLayout>
      <DocSubpageContent
        title="Demo Code"
        description="Front-end code example. See the full repository on GitHub: OpenOcean-API-Examples / frontend."
        parentHref="/docs/gasless-swap-api"
        parentTitle="Gasless Swap API"
      >
        <GaslessSwapApiDemoCodeContent />
      </DocSubpageContent>
    </DocsLayout>
  )
}
