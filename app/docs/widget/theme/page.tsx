import type { Metadata } from "next"
import { DocsLayout } from "@/components/docs/docs-layout"
import { WidgetThemeContent } from "@/components/pages/widget-theme"

export const metadata: Metadata = {
  title: "Widget Theme - OpenOcean Documentation",
  description: "Customize the look and feel of the OpenOcean Swap Widget.",
}

export default function WidgetThemePage() {
  return (
    <DocsLayout>
      <WidgetThemeContent />
    </DocsLayout>
  )
}
