import type { Metadata } from "next"
import { DocsLayout } from "@/components/docs/docs-layout"
import { SwapApiSdkContent } from "@/components/pages/swap-api-sdk"

export const metadata: Metadata = {
  title: "Swap API SDK - OpenOcean Documentation",
  description: "SDK for integrating OpenOcean Swap API in your application.",
}

export default function SwapApiSdkPage() {
  return (
    <DocsLayout>
      <SwapApiSdkContent />
    </DocsLayout>
  )
}
