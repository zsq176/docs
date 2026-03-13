import type { Metadata } from "next"
import { DocsLayout } from "@/components/docs/docs-layout"
import { DocSubpageContent } from "@/components/docs/doc-subpage"
import { WidgetV2IntegrationExamplesContent } from "@/components/pages/widget-v2-integration-examples"

export const metadata: Metadata = {
  title: "Integration Examples - Widget V2 - OpenOcean Documentation",
  description: "Widget V2 integration examples.",
}

export default function WidgetV2IntegrationExamplesPage() {
  return (
    <DocsLayout>
      <DocSubpageContent
        title="Integration Examples"
        description="This guide provides step-by-step instructions for integrating OpenOcean Widget into different frameworks and setups."
        parentHref="/docs/widget/v2"
        parentTitle="Widget V2"
        swaggerHref="https://github.com/openocean-finance"
      >
        <WidgetV2IntegrationExamplesContent />
      </DocSubpageContent>
    </DocsLayout>
  )
}
