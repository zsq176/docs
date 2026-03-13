import { DocsLayout } from "@/components/docs/docs-layout"
import { AdvancedContent } from "@/components/pages/advanced"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Advanced Features - OpenOcean API Documentation",
  description: "Advanced trading features including GMX Exclusive API, Exact Output swaps, Sweep Swap, and more.",
}

const tocItems = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "features", title: "Advanced Features", level: 2 },
  { id: "use-cases", title: "Use Cases", level: 2 },
]

export default function AdvancedPage() {
  return (
    <DocsLayout showToc={true} tocItems={tocItems}>
      <AdvancedContent />
    </DocsLayout>
  )
}
