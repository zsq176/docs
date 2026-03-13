import { DocsLayout } from "@/components/docs/docs-layout"
import { ArchitectureContent } from "@/components/pages/architecture"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Architecture - OpenOcean API Documentation",
  description: "Learn about OpenOcean's system architecture, routing engine, and liquidity aggregation mechanism.",
}

const tocItems = [
  { id: "overview", title: "Architecture Overview", level: 2 },
  { id: "routing-engine", title: "Routing Engine", level: 2 },
  { id: "liquidity-sources", title: "Liquidity Sources", level: 2 },
  { id: "execution-flow", title: "Execution Flow", level: 2 },
  { id: "security", title: "Security Model", level: 2 },
]

export default function ArchitecturePage() {
  return (
    <DocsLayout showToc={true} tocItems={tocItems}>
      <ArchitectureContent />
    </DocsLayout>
  )
}
