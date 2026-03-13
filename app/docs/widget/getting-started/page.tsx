import type { Metadata } from "next"
import { DocsLayout } from "@/components/docs/docs-layout"
import { WidgetGettingStartedContent } from "@/components/pages/widget-getting-started"

export const metadata: Metadata = {
  title: "Widget Getting Started - OpenOcean Documentation",
  description: "Get started with the OpenOcean Swap Widget.",
}

export default function WidgetGettingStartedPage() {
  return (
    <DocsLayout>
      <WidgetGettingStartedContent />
    </DocsLayout>
  )
}
