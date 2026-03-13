import type { Metadata } from "next"
import { DocsLayout } from "@/components/docs/docs-layout"
import { DocSubpageContent } from "@/components/docs/doc-subpage"
import { WidgetV2AdvancedIntegrationContent } from "@/components/pages/widget-v2-advanced-integration"

export const metadata: Metadata = {
  title: "Advanced Integration - Widget V2 - OpenOcean Documentation",
  description: "Advanced Widget V2 integration patterns.",
}

export default function WidgetV2AdvancedIntegrationPage() {
  return (
    <DocsLayout>
      <DocSubpageContent
        title="Advanced Integration"
        description="A complete demo application showcasing the integration of OpenOcean Widget with wallet connectivity using Wagmi and RainbowKit."
        parentHref="/docs/widget/v2"
        parentTitle="Widget V2"
        swaggerHref="https://github.com/openocean-finance"
      >
        <WidgetV2AdvancedIntegrationContent />
      </DocSubpageContent>
    </DocsLayout>
  )
}
