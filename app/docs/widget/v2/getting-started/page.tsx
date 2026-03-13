import type { Metadata } from "next"
import { DocsLayout } from "@/components/docs/docs-layout"
import { DocSubpageContent } from "@/components/docs/doc-subpage"
import { WidgetV2GettingStartedContent } from "@/components/pages/widget-v2-getting-started"

export const metadata: Metadata = {
  title: "Getting Started - Widget V2 - OpenOcean Documentation",
  description: "Get started with OpenOcean Widget V2.",
}

export default function WidgetV2GettingStartedPage() {
  return (
    <DocsLayout>
      <DocSubpageContent
        title="Getting Started"
        description=""
        parentHref="/docs/widget/v2"
        parentTitle="Widget V2"
        swaggerHref="https://github.com/openocean-finance"
      >
        <WidgetV2GettingStartedContent />
      </DocSubpageContent>
    </DocsLayout>
  )
}
