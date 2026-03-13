"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Callout } from "@/components/docs/callout"
import { NextStepCard } from "@/components/docs/card-group"
import { FileCode, Globe, Zap, ExternalLink } from "lucide-react"
import Link from "next/link"

export function GaslessSwapApiContent() {
  return (
    <div className="space-y-12">
      <section>
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="outline">REST API</Badge>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Gasless Swap API</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl leading-relaxed">
          The OpenOcean Gasless Swap API empowers developers to build the most seamless and intuitive trading experience in Web3 by abstracting away the complexity of approvals, gas fees, and swap execution.
        </p>
        <p className="mt-4 text-muted-foreground max-w-3xl leading-relaxed">
          With just one API integration, your users can sign a single message and perform a complete token swap in faster settlement.
        </p>
        <p className="mt-4 text-muted-foreground max-w-3xl leading-relaxed">
          Whether you're building a wallet, DeFi app, or onboarding portal, the Gasless API helps you eliminate friction and increase confirmation speed.
        </p>
      </section>

      <section id="key-benefits" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Key Benefits</h2>

        <div className="space-y-6 max-w-3xl">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">🔋 Swap without native tokens or gas</h3>
            <p className="text-muted-foreground leading-relaxed">
              Let users trade without holding the chain's native gas token (like ETH, BNB). Gas fees are abstracted and handled by OpenOcean - so users can swap with only the token they want to.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">🔁 Seamless swaps</h3>
            <p className="text-muted-foreground leading-relaxed">
              Secured by Uniswap's Permit2 standards, the entire flow enables secure token approvals without extra on-chain transactions.  User just sign and swap to reduces transaction failure risk.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">⚡ Best execution with OpenOcean aggregation</h3>
            <p className="text-muted-foreground leading-relaxed">
              Behind the scenes, every gasless swap leverages OpenOcean's powerful aggregation mechanism, routing trades across multiple liquidity sources for optimal price and fill.
            </p>
          </div>
        </div>
      </section>

      <section id="try-it-out" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Try It Out</h2>
        <p className="text-muted-foreground max-w-3xl leading-relaxed mb-4">
          Want to experience it first? Test <strong className="text-foreground">Ultra Mode</strong> gasless swaps on our frontend: 👉{" "}
          <a
            href="https://app.openocean.finance/swap/base"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            app.openocean.finance/swap/base
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </p>
        <Callout type="info" title="Get started">
          <p>Check the integration guide to get started ⬇</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <Link href="/docs/gasless-swap-api/guide" className="text-primary hover:underline font-medium">Guide</Link>
            <Link href="/docs/gasless-swap-api/api" className="text-primary hover:underline font-medium">API</Link>
          </div>
        </Callout>
      </section>

      <section className="scroll-mt-20 pt-8 border-t border-border">
        <h2 className="text-xl font-bold mb-6">Next Steps</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <NextStepCard
            title="Guide"
            description="Integration guide to get started."
            href="/docs/gasless-swap-api/guide"
            icon={<FileCode className="h-5 w-5" />}
          />
          <NextStepCard
            title="Supported Chains"
            description="Chains with Gasless support."
            href="/docs/supported-chains"
            icon={<Globe className="h-5 w-5" />}
          />
          <NextStepCard
            title="Swagger UI"
            description="Try Gasless endpoints."
            href="https://open-api.openocean.finance/v4/swagger-ui.html"
            icon={<Zap className="h-5 w-5" />}
          />
        </div>
      </section>
    </div>
  )
}
