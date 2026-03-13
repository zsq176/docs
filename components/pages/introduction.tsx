"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Steps } from "@/components/docs/steps"
import { CardGroup, FeatureCard, NextStepCard } from "@/components/docs/card-group"
import { 
  Zap, 
  Globe, 
  Layers, 
  Code2, 
  Shield, 
  ArrowRightLeft,
  LayoutGrid,
  Network,
  Puzzle,
  TrendingUp,
  ExternalLink,
  Bot,
  FileCode,
  CheckCircle2
} from "lucide-react"

const fadeIn = { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 } }
const transition = { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }

export function IntroductionContent() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative">
          <motion.div {...fadeIn} transition={{ ...transition, delay: 0 }}>
            <Badge variant="outline" className="mb-4 font-medium">
              Multi-chain DEX Aggregator
            </Badge>
          </motion.div>
          
          <motion.h1
            {...fadeIn}
            transition={{ ...transition, delay: 0.05 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance"
          >
            <span className="text-primary">One integration.</span>
            <br />
            <span className="text-foreground">Every chain. Best rates.</span>
          </motion.h1>
          
          <motion.p
            {...fadeIn}
            transition={{ ...transition, delay: 0.1 }}
            className="mt-5 text-base md:text-lg text-muted-foreground max-w-3xl text-pretty leading-relaxed"
          >
            OpenOcean is a leading <strong className="text-foreground font-medium">multi-chain DEX aggregator</strong> built 
            for Web3 wallets, trading platforms, and professional traders. Access the best swap rates, 
            deep liquidity, and reliable execution across{" "}
            <strong className="text-foreground font-medium">40+ chains</strong> with a single API.
          </motion.p>

          <motion.div
            {...fadeIn}
            transition={{ ...transition, delay: 0.15 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button size="lg" className="gap-2 group h-11" asChild>
              <Link href="/docs/swap-api/guide">
                Quick Start
                <Zap className="h-4 w-4 transition-transform duration-200 group-hover:rotate-12" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 h-11" asChild>
              <a href="https://openocean.finance/" target="_blank" rel="noopener noreferrer">
                Launch App
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </Button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            {...fadeIn}
            transition={{ ...transition, delay: 0.2 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {[
              { label: "Chains", value: "40+" },
              { label: "Liquidity Sources", value: "1,000+" },
              { label: "DEXs Integrated", value: "500+" },
              { label: "Uptime", value: "99.9%" },
            ].map((stat) => (
              <div 
                key={stat.label} 
                className="flex flex-col items-center md:items-start p-4 rounded-lg border border-border/30 bg-card/30"
              >
                <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Overview */}
      <section id="products" className="scroll-mt-24">
        <h2 className="text-xl md:text-2xl font-semibold mb-3">Products & Features</h2>
        <p className="text-muted-foreground mb-6 max-w-3xl text-sm">
          A unified API surface for the core DeFi primitives you need:
        </p>

        <CardGroup columns={3}>
          <FeatureCard
            title="Swap API"
            description="Multi-chain DEX aggregation API with smart order routing. Find the best prices across 1,000+ liquidity sources on 40+ chains."
            icon={<ArrowRightLeft className="h-5 w-5" />}
            href="/docs/swap-api"
          />
          <FeatureCard
            title="Gasless Swap"
            description="Zero-gas trading with Permit2. Users sign one message for approval and swap combined, no native gas tokens needed."
            icon={<Shield className="h-5 w-5" />}
            href="/docs/gasless-swap-api"
          />
          <FeatureCard
            title="Limit Orders"
            description="Non-custodial limit orders that execute automatically when your target price is reached."
            icon={<TrendingUp className="h-5 w-5" />}
            href="/docs/limit-order-api/guide"
          />
          <FeatureCard
            title="DCA"
            description="Dollar cost averaging with automated recurring trades. Set your schedule and let the protocol handle execution."
            icon={<LayoutGrid className="h-5 w-5" />}
            href="/docs/dca-api/guide"
          />
          <FeatureCard
            title="Zap"
            description="Single-transaction LP deposits and withdrawals. Simplify complex DeFi operations into one action."
            icon={<Zap className="h-5 w-5" />}
            href="/docs/zap-api/api"
          />
          <FeatureCard
            title="Widget"
            description="Drop-in swap UI component. Embed OpenOcean's trading interface in your dApp with full customization."
            icon={<Puzzle className="h-5 w-5" />}
            href="/docs/widget"
          />
          <FeatureCard
            title="AI Agents"
            description="OpenOcean Skills for AI coding assistants. Natural language commands for quotes, swaps, and on-chain execution."
            icon={<Bot className="h-5 w-5" />}
            href="/docs/ai-agents"
          />
          <FeatureCard
            title="Meme API"
            description="Specialized API for meme token trading with optimized routing for high-volatility assets."
            icon={<Zap className="h-5 w-5" />}
            href="/docs/meme-api"
            badge="New"
          />
          <FeatureCard
            title="Solana API"
            description="Native Solana support with Jupiter aggregation and Raydium liquidity for fast, low-cost swaps."
            icon={<Globe className="h-5 w-5" />}
            href="/docs/solana-swap-api"
          />
        </CardGroup>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="scroll-mt-24">
        <h2 className="text-xl md:text-2xl font-semibold mb-3">How It Works</h2>
        <p className="text-muted-foreground mb-6 max-w-3xl text-sm">
          A clear pipeline from liquidity aggregation to transaction execution:
        </p>

        <Steps
          variant="horizontal"
          steps={[
            {
              title: "Aggregate",
              description: "Connect to 1,000+ liquidity sources.",
            },
            {
              title: "Route",
              description: "Compute the optimal swap path.",
            },
            {
              title: "Quote",
              description: "Return best price and calldata.",
            },
            {
              title: "Execute",
              description: "User signs and broadcasts.",
            },
          ]}
        />

        <div className="mt-8 p-5 rounded-xl border border-border/40 bg-muted/20">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Integration Flow:</strong> Call{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-primary font-medium border border-border/30">Quote</code> to get 
            the best route, then <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-primary font-medium border border-border/30">Swap</code> to 
            get the transaction body. Your app or user signs and broadcasts.
          </p>
        </div>
      </section>

      {/* Core Capabilities */}
      <section id="core-capabilities" className="scroll-mt-24">
        <h2 className="text-xl md:text-2xl font-semibold mb-3">Core Capabilities</h2>
        
        <CardGroup columns={2}>
          <FeatureCard
            title="Multi-chain Aggregation"
            description="One API for 40+ chains and 1,000+ liquidity sources. No per-DEX integrations."
            icon={<Globe className="h-5 w-5" />}
          />
          <FeatureCard
            title="Smart Order Routing"
            description="Optimal path and pricing with automatic split routes and multi-hop when beneficial."
            icon={<Network className="h-5 w-5" />}
          />
          <FeatureCard
            title="EVM & Non-EVM"
            description="Support for Ethereum, BNB Chain, Arbitrum, and non-EVM chains like Solana and Sui."
            icon={<Layers className="h-5 w-5" />}
          />
          <FeatureCard
            title="Deep Liquidity"
            description="Access to Uniswap, Balancer, PancakeSwap, Curve, RFQ, and private liquidity."
            icon={<TrendingUp className="h-5 w-5" />}
          />
          <FeatureCard
            title="Developer-friendly"
            description="REST API, SDK, and Widget with clear docs and comprehensive examples."
            icon={<Code2 className="h-5 w-5" />}
          />
          <FeatureCard
            title="Non-custodial"
            description="We never custody funds. All transactions are signed by users."
            icon={<Shield className="h-5 w-5" />}
          />
        </CardGroup>
      </section>

      {/* Next Steps */}
      <section id="next-steps" className="scroll-mt-24">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Get Started</h2>
        <p className="text-muted-foreground mb-6 max-w-3xl text-sm">
          Choose how you want to integrate:
        </p>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          <NextStepCard
            title="Quick Start"
            description="Get your first swap working in 5 minutes."
            href="/docs/swap-api/guide"
            icon={<Zap className="h-5 w-5" />}
          />
          <NextStepCard
            title="API V4"
            description="Full REST API documentation."
            href="/docs/swap-api/v4"
            icon={<FileCode className="h-5 w-5" />}
          />
          <NextStepCard
            title="SDK"
            description="Type-safe TypeScript SDK."
            href="/docs/swap-api/sdk"
            icon={<Code2 className="h-5 w-5" />}
          />
          <NextStepCard
            title="Widget"
            description="Drop-in swap UI component."
            href="/docs/widget"
            icon={<Puzzle className="h-5 w-5" />}
          />
        </div>
      </section>
    </div>
  )
}
