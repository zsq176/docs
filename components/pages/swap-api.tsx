"use client"

import * as React from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { CodeBlock } from "@/components/docs/code-block"
import { Callout } from "@/components/docs/callout"
import { NextStepCard } from "@/components/docs/card-group"
import { FileCode, Zap, BookOpen, Code2 } from "lucide-react"

export function SwapApiContent() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="outline">Swap API</Badge>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Swap API</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
          Explore these docs and let our API empower your swap and/or arbitrage trading across EVM and non-EVM chains, including Solana!
        </p>
      </section>

      {/* Introduction */}
      <section id="introduction" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Introduction</h2>
        <p className="text-muted-foreground mb-4">
          <a href="https://apis.openocean.finance/developer/apis/swap-api/api-v4" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">OpenOcean Swap API</a> is a <strong>multi-chain DEX aggregation and smart order routing API</strong> that gives developers access to the <strong>best token swap prices</strong> and seamless on-chain execution. With a single integration, you can add crypto trading directly into your application — ideal for <strong>wallets, DeFi dApps, trading bots, or institutional platforms, etc</strong>.
        </p>
        <p className="text-muted-foreground mb-2">It helps you:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
          <li><strong className="text-foreground">Find the best swap prices</strong> across 1,000+ liquidity sources, including AMMs (e.g. Uniswap V4, Balancer V3, PancakeSwap Infinity, Curve), RFQ and DeFi launchpads (e.g., Virtuals, PumpFun).</li>
          <li><strong className="text-foreground">Execute trades on-chain</strong> with just a few lines of code.</li>
          <li><strong className="text-foreground">Support the most chains — 40+ chains</strong>, covering both EVM and non-EVM networks such as Solana and Sui.</li>
        </ul>
        <p className="text-muted-foreground">
          With OpenOcean, you get <strong>deep liquidity, high reliability, and developer-friendly integration</strong> to power trading at scale.
        </p>
      </section>

      {/* API Plans & Pricing */}
      <section id="api-plans-pricing" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">API Plans & Pricing</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
          <li><strong className="text-foreground">Public Plan:</strong> 2 RPS (20 requests / 10 seconds).</li>
          <li>Exceeding the limit may result in rate limiting or temporary blocking.</li>
          <li><strong className="text-foreground">Swap Fees:</strong> It is flexible and may vary depending on use case and integration. <strong>On Solana, the Swap API starts from FREE.</strong></li>
          <li><strong className="text-foreground">Trial Period:</strong> 2-week free testing available for builders — contact our BD team in the <a href="https://t.me/OpenOceanAPI" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">API group</a>.</li>
          <li><strong className="text-foreground">Enterprise Plan:</strong> For higher RPS and business collaboration, submit a request <a href="https://openocean.larksuite.com/share/base/form/shrusY4ukLSoP6htyoprXgZiiQc" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">form</a>.</li>
        </ul>
        <Callout type="danger" title="">
          <p>If you are using our API for arbitrage strategies and Non-EVM chains such as Solana, please reach out directly to <a href="https://t.me/OpenOceanAPI" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Telegram</a> or <a href="https://discord.gg/cxK6CCYcGp" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Discord</a> for tailored services and whitelist.</p>
        </Callout>
      </section>

      {/* API Referral Program */}
      <section id="api-referral" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">API Referral Program</h2>
        <p className="text-muted-foreground mb-4">
          Earn rewards by referring your frens or projects to integrate OpenOcean&apos;s powerful API — the fastest and most precise DEX aggregation solution. Whether you&apos;re a builder, partner, or community member, share us and get rewarded on every successful integration.
        </p>
        <p className="text-muted-foreground">
          Start growing with OpenOcean — let&apos;s build the future of DeFi together! To learn more about the rewards, reach out to our BD in the <a href="https://t.me/OpenOceanAPI" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">API group</a>.
        </p>
      </section>

      {/* Get Started */}
      <section id="get-started" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-6">Get Started</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <NextStepCard
            title="API V4"
            description="Latest API with amountDecimals, gasPriceDecimals, and full chain support."
            href="/docs/swap-api/v4"
            icon={<FileCode className="h-5 w-5" />}
          />
          <NextStepCard
            title="API V3"
            description="Legacy API for quote, swap_quote, tokenList, dexList, and more."
            href="/docs/swap-api/v3"
            icon={<Zap className="h-5 w-5" />}
          />
          <NextStepCard
            title="GMX Exclusive API"
            description="Leverage GMX V1 and V2 pools on Arbitrum for best rates."
            href="/docs/swap-api/advanced-usage/gmx-exclusive-api"
            icon={<BookOpen className="h-5 w-5" />}
          />
          <NextStepCard
            title="SDK"
            description="Install and use the OpenOcean Aggregator SDK in your project."
            href="/docs/swap-api/sdk"
            icon={<Code2 className="h-5 w-5" />}
          />
        </div>
      </section>
    </div>
  )
}
