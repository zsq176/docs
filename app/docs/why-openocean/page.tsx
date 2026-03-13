import type { Metadata } from "next"
import { DocsLayout } from "@/components/docs/docs-layout"
import { WhyOpenOceanContent } from "@/components/pages/why-openocean"

export const metadata: Metadata = {
  title: "Why OpenOcean - OpenOcean Documentation",
  description: "Why choose OpenOcean for multi-chain DEX aggregation and best-rate swaps.",
}

const tocItems = [
  { id: "pain-points", title: "Why OpenOcean", level: 2 },
  { id: "capabilities", title: "What you get", level: 2 },
  { id: "when-to-use", title: "When to Use OpenOcean", level: 2 },
  { id: "comparison", title: "Without vs With OpenOcean", level: 2 },
  { id: "next-steps", title: "Next Steps", level: 2 },
]

export default function WhyOpenOceanPage() {
  return (
    <DocsLayout showToc={true} tocItems={tocItems}>
      <WhyOpenOceanContent />
    </DocsLayout>
  )
}
