"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Callout } from "@/components/docs/callout"
import { NextStepCard } from "@/components/docs/card-group"
import { FileCode, Globe, ExternalLink } from "lucide-react"
import Link from "next/link"

export function SolanaSwapApiContent() {
  return (
    <div className="space-y-12">
      <section>
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="outline">REST API</Badge>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Solana Swap API</h1>
      </section>

      <section id="overview" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">1. Overview</h2>
        <p className="text-muted-foreground max-w-3xl leading-relaxed">
          OpenOcean provides a high-performance <strong>Solana Meta-Aggregator Swap API</strong>, designed to deliver the best execution for Solana token swaps. By integrating liquidity from the two major Solana Dex aggregators - Jupiter and Titan - OpenOcean acts as a meta aggregator on Solana that unifies both Solana's public AMMs and Proprietary AMMs (Prop AMMs), giving traders and developers access the widest liquidity and the optimal routing, minimal slippage, and reliable execution for any Solana token swap. From blue-chip assets like SOL, USDC and USDT, to meme tokens like BONK, TRUMP, and PENGU, every Solana swap uses the best route available.
        </p>
        <p className="mt-4 text-muted-foreground max-w-3xl leading-relaxed">
          By default, OpenOcean charges zero API fees for Solana swaps. Integrators have the option to monetize their own platform fees.
        </p>
      </section>

      <section id="supported-exchanges" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">2. Supported Exchanges</h2>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li>Jupiter</li>
          <li>Titan</li>
        </ul>
      </section>

      <section id="get-started" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">3. Get Started</h2>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground max-w-3xl">
          <li>
            <strong className="text-foreground">Request API Key:</strong> Reach out to our DevRel / BD team in the OpenOcean{" "}
            <a href="https://t.me/OpenOceanAPI" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">API Telegram group</a>.
          </li>
          <li>
            <strong className="text-foreground">Start Integration</strong> with API docs{" "}
            <Link href="/docs/swap-api/v4" className="text-primary hover:underline">here</Link>.
          </li>
        </ol>
      </section>

      <section id="widget" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">4. Cross-Chain & On-Chain Solana Swap Widget</h2>
        <p className="text-muted-foreground max-w-3xl leading-relaxed mb-4">
          OpenOcean's Solana Swap API also powers our unified Cross-Chain / On-Chain{" "}
          <Link href="/docs/widget/v2" className="text-primary hover:underline">Widget</Link>, enabling:
        </p>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground max-w-3xl mb-4">
          <li>Native Solana token swaps</li>
          <li>Solana ↔ EVM cross-chain swaps</li>
          <li>Fully customizable UI themes</li>
          <li>Fast embedding into any Web3 product</li>
        </ul>
        <p className="text-muted-foreground max-w-3xl leading-relaxed">
          This <Link href="/docs/widget/v2" className="text-primary hover:underline">widget</Link> accelerates go-to-market for any product adopting same-chain or multi-chain swap functionality, bringing seamless execution to both Solana and EVM chains.
        </p>
      </section>

      <section id="use-cases" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">5. Use Cases</h2>
        <p className="text-muted-foreground max-w-3xl leading-relaxed mb-4">
          OpenOcean's Solana <Link href="/docs/swap-api/v4" className="text-primary hover:underline">Meta-Aggregator API</Link> and Cross-Chain <Link href="/docs/widget/v2" className="text-primary hover:underline">Widget</Link> can be deployed across across a wide range of Web3 products:
        </p>
        <ul className="space-y-3 text-muted-foreground max-w-3xl">
          <li>
            <strong className="text-foreground">SVM Wallets</strong> - Enable secure, in-wallet Solana token swaps with instant routing and best rate quotes.
          </li>
          <li>
            <strong className="text-foreground">DEXs, Aggregators & Launchpads</strong> - Improve liquidity efficiency and execution quality through advanced smart routing — ideal for meme trading and high-volume swaps.
          </li>
          <li>
            <strong className="text-foreground">Cross-Chain Swaps and Bridges</strong> - Automate pre-bridge and post-bridge swaps between Solana and EVM chains, while bridges handle cross-chain transfers.
          </li>
          <li>
            <strong className="text-foreground">Arbitrage Bots & Trading Systems</strong> - Leverage precise swap data for latency-sensitive arbitrage opportunities, smart trading optimizations, and market-making strategies.
          </li>
        </ul>
      </section>

      <section id="faq" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">6. FAQ</h2>
        <dl className="space-y-6 max-w-3xl">
          <div>
            <dt className="font-semibold text-foreground mb-1">Why use Solana Meta-Aggregator Swap API?</dt>
            <dd className="text-muted-foreground pl-0">
              OpenOcean's Solana meta-aggregator swap API looks for the best route for your trade among the integrated Dex Aggregators - Jupiter and Titan, to deliver the best Solana token price.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground mb-1">Does this API support any Solana token?</dt>
            <dd className="text-muted-foreground pl-0">
              Yes, the Solana Swap API supports any-to-any token swaps, covering the majority of tokens in the Solana ecosystem - including blue-chip assets and meme tokens.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground mb-1">Is there rate limiting on the Solana Swap API?</dt>
            <dd className="text-muted-foreground pl-0">
              It's 2RPS by default. For higher rate limits, contact our BD team in{" "}
              <a href="https://t.me/OpenOceanAPI" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">API Telegram group</a> or open a support ticket on{" "}
              <a href="https://discord.gg/cxK6CCYcGp" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Discord</a>.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground mb-1">Is the Solana Meta-Aggregator Swap API free to use?</dt>
            <dd className="text-muted-foreground pl-0">
              Yes, OpenOcean does not charge an API fee for the Solana Swap API used. Integrators can add custom platform fees, and OpenOcean will share 20% of the fees by default.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground mb-1">Is cross-chain swapping between Solana and EVM chains supported?</dt>
            <dd className="text-muted-foreground pl-0">
              Yes. Cross-chain swaps between Solana and EVM networks are supported via the OpenOcean Cross-Chain Widget.
            </dd>
          </div>
        </dl>
      </section>

      <section className="scroll-mt-20 pt-8 border-t border-border">
        <h2 className="text-xl font-bold mb-6">Next Steps</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <NextStepCard
            title="Swap API V4"
            description="Quote, Swap, and token list."
            href="/docs/swap-api/v4"
            icon={<FileCode className="h-5 w-5" />}
          />
          <NextStepCard
            title="Supported Chains"
            description="Solana and other networks."
            href="/docs/supported-chains"
            icon={<Globe className="h-5 w-5" />}
          />
          <a
            href="https://open-api.openocean.finance/v4/swagger-ui.html"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="group h-full rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <ExternalLink className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    Swagger UI
                    <ExternalLink className="h-4 w-4 opacity-50" />
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">Try Solana endpoints.</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  )
}
