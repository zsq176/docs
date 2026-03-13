import { DocsLayout } from "@/components/docs/docs-layout"
import { IntroductionContent } from "@/components/pages/introduction"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Introduction - OpenOcean API Documentation",
  description: "OpenOcean is a leading multi-chain DEX aggregator built for Web3 wallets, trading platforms, and professional traders.",
}

const tocItems = [
  { id: "what-openocean-provides", title: "What OpenOcean Provides", level: 2 },
  { id: "how-it-works", title: "How It Works", level: 2 },
  { id: "core-capabilities", title: "Core Capabilities", level: 2 },
  { id: "next-steps", title: "Next Steps", level: 2 },
]

export default function Home() {
  return (
    <DocsLayout showToc={true} tocItems={tocItems}>
      <IntroductionContent />
    </DocsLayout>
  )
}
