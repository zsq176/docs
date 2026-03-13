"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Code } from "lucide-react"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export function WidgetContent() {
  return (
    <div className="space-y-12">
      {/* Copy exactly from developer/widget/README.md */}
      <motion.div {...fadeIn} className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
          <Code className="w-4 h-4" />
          Widget
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-balance">
          Widget
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          Step-by-step guide for embedding the{" "}
          <a href="https://app.openocean.finance/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            OpenOcean
          </a>{" "}
          Swap widget in your web3 decentralized application (dApp).
        </p>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          With OpenOcean swap widget, your users can swap any token at the best rates through OpenOcean protocol without leaving your dApp!
        </p>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          The widget will only take you less than 5 minutes for integration. See following examples of user case:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground max-w-3xl">
          <li><strong>Making swaps a revenue source</strong> by adding your own platform fee to the transaction.</li>
          <li><strong>Converting to the required currency</strong> for an NFT purchase or any other in-app usage (e.g. WETH). Building a custom frontend for the Uniswap Protocol.</li>
          <li>Swapping assets in a DeFi application for <strong>providing liquidity, farming & staking</strong></li>
          <li>Acquiring a token to participate in your web3 community (DAO or any other activities)</li>
        </ul>

        <nav className="pt-6 border-t border-border space-y-2">
          <p className="text-sm font-medium text-foreground">See also</p>
          <ul className="space-y-1 text-muted-foreground">
            <li><Link href="/docs/widget/getting-started" className="text-primary hover:underline">Getting Started</Link></li>
            <li><Link href="/docs/widget/theme" className="text-primary hover:underline">Customize Theme</Link></li>
            <li><Link href="/docs/widget/other-reference" className="text-primary hover:underline">Other Reference</Link></li>
          </ul>
        </nav>
      </motion.div>
    </div>
  )
}
