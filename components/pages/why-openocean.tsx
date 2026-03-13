"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Callout } from "@/components/docs/callout"
import { CardGroup, FeatureCard, NextStepCard } from "@/components/docs/card-group"
import { ComparisonTable } from "@/components/docs/comparison-table"
import { Zap, Layers, Globe, Code2, Shield, Network, Wallet, ArrowRightLeft, Building2, LayoutGrid, Bot, Gamepad2, TrendingUp } from "lucide-react"

export function WhyOpenOceanContent() {
  return (
    <div className="space-y-12">
      <section>
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="outline">Introduction</Badge>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Why OpenOcean</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
          OpenOcean aggregates liquidity across 40+ chains and hundreds of DEXs to deliver the best swap rates, deep liquidity, and reliable execution for wallets, dApps, and professional traders.
        </p>
      </section>

      {/* Why OpenOcean - pain points (moved from homepage) */}
      <section id="pain-points" className="scroll-mt-20">
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Building cross-chain swap and aggregation in-house is costly and fragile.
          OpenOcean addresses the main pain points:
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Fragmented Liquidity",
              description: "Users and chains are scattered; integrating each DEX and bridge one by one does not scale.",
              icon: <Layers className="h-5 w-5" />,
            },
            {
              title: "Multiple DEXs per Chain",
              description: "Routing across AMMs, RFQ, and launchpads requires constant maintenance and optimization.",
              icon: <Network className="h-5 w-5" />,
            },
            {
              title: "High Integration Cost",
              description: "Building and maintaining adapters, gas handling, slippage, and failure recovery is time-consuming.",
              icon: <Code2 className="h-5 w-5" />,
            },
            {
              title: "Failed Trades & Rollback",
              description: "Without a unified layer, failed swaps and partial fills are hard to handle and expose clearly.",
              icon: <Shield className="h-5 w-5" />,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group flex gap-4 p-4 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                {item.icon}
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{item.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What you get */}
      <section id="capabilities" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-6">What you get</h2>
        <CardGroup columns={3}>
          <FeatureCard
            title="Best rates"
            description="Smart order routing across 1,000+ liquidity sources for optimal execution."
            icon={<Zap className="h-5 w-5" />}
          />
          <FeatureCard
            title="One integration"
            description="Single API for same-chain and cross-chain swaps; we handle routing and execution."
            icon={<Layers className="h-5 w-5" />}
          />
          <FeatureCard
            title="40+ chains"
            description="EVM and non-EVM (Solana, Sui) with a single integration."
            icon={<Globe className="h-5 w-5" />}
          />
        </CardGroup>
      </section>

      {/* When to Use OpenOcean (moved from homepage) */}
      <section id="when-to-use" className="scroll-mt-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">When to Use OpenOcean</h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          OpenOcean fits a wide range of products and roles:
        </p>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: <Wallet className="h-4 w-4" />, title: "Wallets", desc: "Built-in swap for any-to-any tokens" },
            { icon: <ArrowRightLeft className="h-4 w-4" />, title: "DEXs & Aggregators", desc: "Improve routing and liquidity" },
            { icon: <Globe className="h-4 w-4" />, title: "Cross-chain Bridges", desc: "Power cross-chain swap UX" },
            { icon: <Building2 className="h-4 w-4" />, title: "DeFi Protocols", desc: "Lending, staking, yield swaps" },
            { icon: <LayoutGrid className="h-4 w-4" />, title: "Dashboards", desc: "Real-time swaps for users" },
            { icon: <Gamepad2 className="h-4 w-4" />, title: "Marketplaces", desc: "Pay with any token via conversion" },
            { icon: <Network className="h-4 w-4" />, title: "Infrastructure", desc: "Expose swap as a service" },
            { icon: <Bot className="h-4 w-4" />, title: "AI Agents", desc: "Automated trading strategies" },
            { icon: <TrendingUp className="h-4 w-4" />, title: "Arbitrage", desc: "Best-rate execution for strategies" },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                {item.icon}
              </div>
              <div>
                <h4 className="font-medium text-sm text-foreground">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Without vs With OpenOcean (moved from homepage) */}
      <section id="comparison" className="scroll-mt-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Without vs With OpenOcean</h2>

        <ComparisonTable
          rows={[
            {
              feature: "Bridges / Cross-chain",
              without: "Integrate and maintain each bridge separately",
              with: "Single API for cross-chain swap and bridge",
            },
            {
              feature: "DEX Aggregation",
              without: "Connect to each DEX and build routing logic",
              with: "We aggregate 1,000+ sources and return the best route",
            },
            {
              feature: "Token Mapping",
              without: "Maintain token lists per chain",
              with: "Use our token list; we keep mappings up to date",
            },
            {
              feature: "Failure Handling",
              without: "Implement retries and user-facing errors yourself",
              with: "Clear error codes and best practices",
            },
            {
              feature: "New Chain Support",
              without: "New contracts, RPCs, and testing",
              with: "New chains added on our side; you keep the same API",
            },
            {
              feature: "Time to Launch",
              without: "Months to build and harden",
              with: "Ship in days with API, SDK, or Widget",
            },
          ]}
        />
      </section>

      <section id="next-steps" className="scroll-mt-20 pt-8 border-t border-border">
        <h2 className="text-xl font-bold mb-6">Next Steps</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <NextStepCard
            title="Introduction"
            description="Full product overview and next steps."
            href="/"
            icon={<Globe className="h-5 w-5" />}
          />
          <NextStepCard
            title="Supported Chains"
            description="Networks and chain IDs."
            href="/docs/supported-chains"
            icon={<Layers className="h-5 w-5" />}
          />
          <NextStepCard
            title="Swap API"
            description="Get started with the Swap API."
            href="/docs/swap-api"
            icon={<Zap className="h-5 w-5" />}
          />
        </div>
      </section>
    </div>
  )
}
