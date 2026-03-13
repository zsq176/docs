import type { Metadata } from "next"
import { DocsLayout } from "@/components/docs/docs-layout"
import { WidgetContent } from "@/components/pages/widget"

export const metadata: Metadata = {
  title: "Swap Widget - OpenOcean Documentation",
  description: "Embeddable swap component to add token swap to your app",
}

export default function WidgetPage() {
  return (
    <DocsLayout tocItems={[]}>
      <WidgetContent />
    </DocsLayout>
  )
}
