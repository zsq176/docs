import type { Metadata } from "next"
import { DocsLayout } from "@/components/docs/docs-layout"
import { DocSubpageContent } from "@/components/docs/doc-subpage"
import { WidgetOtherReferenceContent } from "@/components/pages/widget-other-reference"

export const metadata: Metadata = {
  title: "Other Reference - Widget - OpenOcean Documentation",
  description: "Custom mode, nginx config for iframe widget.",
}

export default function WidgetOtherReferencePage() {
  return (
    <DocsLayout>
      <DocSubpageContent
        title="Other Reference"
        description="If you choose to integrate an iframe from https://widget.openocean.finance, some wallets might not work properly."
        parentHref="/docs/widget"
        parentTitle="Widget"
        swaggerHref="https://widget.openocean.finance"
      >
        <WidgetOtherReferenceContent />
      </DocSubpageContent>
    </DocsLayout>
  )
}
