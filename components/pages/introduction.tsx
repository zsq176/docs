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
  Terminal,
  Puzzle,
  TrendingUp
} from "lucide-react"

const heroItem = { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 } }
const heroTransition = { duration: 0.3, ease: "easeOut" as const }

export function IntroductionContent() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative">
        {/* Background decoration - low opacity, no glow */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -top-10 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="relative">
          <motion.div initial={heroItem.initial} animate={heroItem.animate} transition={{ ...heroTransition, delay: 0 }}>
            <Badge variant="outline" className="mb-4">
              Multi-chain DEX Aggregator
            </Badge>
          </motion.div>
          
          <motion.h1
            initial={heroItem.initial}
            animate={heroItem.animate}
            transition={{ ...heroTransition, delay: 0.06 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance"
          >
            <span className="gradient-text">One integration.</span>
            <br />
            <span className="text-foreground">Every chain. Every asset.</span>
          </motion.h1>
          
          <motion.p
            initial={heroItem.initial}
            animate={heroItem.animate}
            transition={{ ...heroTransition, delay: 0.12 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl text-pretty leading-relaxed"
          >
            OpenOcean is a leading <strong className="text-foreground">multi-chain DEX aggregator</strong> built 
            for Web3 wallets, trading platforms, and professional traders. With a single integration, 
            get access to the best swap rates, deep liquidity, and reliable execution across{" "}
            <strong className="text-foreground">40+ chains</strong> — including EVM and non-EVM networks 
            such as Solana and Sui.
          </motion.p>

          <motion.div
            initial={heroItem.initial}
            animate={heroItem.animate}
            transition={{ ...heroTransition, delay: 0.18 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button size="lg" className="gap-2 group" asChild>
              <a href="https://openocean.finance/" target="_blank" rel="noopener noreferrer">
                Get Started
                <Zap className="h-4 w-4 transition-transform duration-200 group-hover:rotate-12" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <Link href="/docs/swap-api">
                <Terminal className="h-4 w-4" />
                View API Reference
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={heroItem.initial}
            animate={heroItem.animate}
            transition={{ ...heroTransition, delay: 0.24 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {[
              { label: "Supported Chains", value: "40+" },
              { label: "Liquidity Sources", value: "1,000+" },
              { label: "DEXs Integrated", value: "500+" },
              { label: "API Uptime", value: "99.9%" },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What OpenOcean Provides */}
      <section id="what-openocean-provides" className="scroll-mt-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">What OpenOcean Provides</h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          OpenOcean gives you a unified API surface for the main DeFi primitives you need:
        </p>

        <CardGroup columns={3}>
          <FeatureCard
            title="Same-chain Swap"
            description="Best-rate token swaps on 40+ chains via aggregated DEX liquidity (AMMs, RFQ, launchpads)."
            icon={<ArrowRightLeft className="h-5 w-5" />}
            href="/docs/swap-api"
          />
          <FeatureCard
            title="Cross-chain Swap"
            description="Cross-chain swaps and bridge flows with optimal routing and execution."
            icon={<Globe className="h-5 w-5" />}
            href="/docs/swap-api"
          />
          <FeatureCard
            title="Limit Order"
            description="Gasless, non-custodial limit orders that execute when market conditions match."
            icon={<TrendingUp className="h-5 w-5" />}
            href="/docs/limit-order-api"
          />
          <FeatureCard
            title="DCA"
            description="Dollar Cost Averaging with recurring buys at preset intervals with gasless execution."
            icon={<LayoutGrid className="h-5 w-5" />}
            href="/docs/dca-api/guide"
          />
          <FeatureCard
            title="Zap"
            description="Single- or dual-token zap-in/out for LPs and staking vaults."
            icon={<Zap className="h-5 w-5" />}
            href="/docs/zap-api/api"
          />
          <FeatureCard
            title="Gasless Swap"
            description="Batch sweeps and gasless swap options for specific chains and use cases."
            icon={<Shield className="h-5 w-5" />}
            href="/docs/gasless-swap-api"
          />
        </CardGroup>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="scroll-mt-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">How It Works</h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          OpenOcean follows a clear pipeline from liquidity to execution:
        </p>

        <Steps
          variant="horizontal"
          steps={[
            {
              title: "Aggregate Liquidity",
              description: "Connect to 1,000+ liquidity sources across supported chains.",
            },
            {
              title: "Normalize Paths",
              description: "Standardize routes and token representations.",
            },
            {
              title: "Compute Best Route",
              description: "Smart order routing finds the best price and path.",
            },
            {
              title: "Return Transaction",
              description: "Ready-to-sign calldata; we do not custody funds.",
            },
          ]}
        />

        <div className="mt-8 p-6 rounded-xl border border-border bg-muted/30">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Integration Flow:</strong> Call{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-primary">Quote</code> to get 
            the best route, then <code className="rounded bg-muted px-1.5 py-0.5 text-primary">Swap</code> to 
            get the transaction body. Your app or user signs and broadcasts the transaction.
          </p>
        </div>
      </section>

      {/* Core Capabilities */}
      <section id="core-capabilities" className="scroll-mt-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Core Capabilities</h2>
        
        <CardGroup columns={2}>
          <FeatureCard
            title="Multi-chain DEX Aggregation"
            description="One API for 40+ chains and 1,000+ liquidity sources; no need to integrate each DEX separately."
            icon={<Globe className="h-5 w-5" />}
          />
          <FeatureCard
            title="Smart Order Routing"
            description="Optimal path and pricing for each request; we handle split routes and multi-hop when they improve the outcome."
            icon={<Network className="h-5 w-5" />}
          />
          <FeatureCard
            title="Wide Chain Coverage"
            description="EVM (Ethereum, BNB Chain, Arbitrum, Base) and non-EVM (Solana, Sui) with a single integration."
            icon={<Layers className="h-5 w-5" />}
          />
          <FeatureCard
            title="Deep Liquidity"
            description="Access to major AMMs (Uniswap, Balancer, PancakeSwap, Curve), RFQ, and DeFi launchpads."
            icon={<TrendingUp className="h-5 w-5" />}
          />
          <FeatureCard
            title="Developer-friendly"
            description="REST API, SDK, and Widget; clear docs, examples, and error handling so you can integrate quickly."
            icon={<Code2 className="h-5 w-5" />}
          />
          <FeatureCard
            title="Non-custodial"
            description="We never custody your funds. All transactions are signed and broadcast by the user."
            icon={<Shield className="h-5 w-5" />}
          />
        </CardGroup>
      </section>

      {/* Next Steps */}
      <section id="next-steps" className="scroll-mt-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Next Steps</h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Choose how you want to integrate and get started:
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <NextStepCard
            title="API Reference"
            description="Use REST API for quote, swap, token list, gas, and more."
            href="/docs/swap-api"
            icon={<Terminal className="h-5 w-5" />}
          />
          <NextStepCard
            title="SDK Integration"
            description="Type-safe, high-level integration for your app."
            href="/docs/swap-api/sdk"
            icon={<Code2 className="h-5 w-5" />}
          />
          <NextStepCard
            title="Widget"
            description="Ready-made swap UI with minimal code; customize theme and flows."
            href="/docs/widget"
            icon={<Puzzle className="h-5 w-5" />}
          />
        </div>
      </section>
    </div>
  )
}
