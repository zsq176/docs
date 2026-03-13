"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { CardGroup, FeatureCard, NextStepCard } from "@/components/docs/card-group"
import { Callout } from "@/components/docs/callout"
import { 
  Settings,
  TrendingUp,
  Layers,
  Zap,
  ArrowRightLeft,
  FileCode,
  Ticket
} from "lucide-react"

const fadeIn = { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 } }
const transition = { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }

export function AdvancedContent() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section id="overview">
        <motion.div {...fadeIn} transition={{ ...transition, delay: 0 }}>
          <Badge variant="outline" className="mb-4 font-medium">
            Advanced Features
          </Badge>
        </motion.div>
        
        <motion.h1
          {...fadeIn}
          transition={{ ...transition, delay: 0.05 }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
        >
          Advanced Trading Features
        </motion.h1>
        
        <motion.p
          {...fadeIn}
          transition={{ ...transition, delay: 0.1 }}
          className="text-muted-foreground max-w-3xl leading-relaxed"
        >
          Unlock powerful trading capabilities with OpenOcean's advanced APIs. These features are designed 
          for sophisticated integrations requiring precise control over swap execution, batch operations, 
          and specialized trading strategies.
        </motion.p>
      </section>

      {/* Features Grid */}
      <section id="features" className="scroll-mt-24">
        <h2 className="text-xl md:text-2xl font-semibold mb-3">Advanced Features</h2>
        <p className="text-muted-foreground mb-6 max-w-3xl text-sm">
          Specialized APIs for complex trading scenarios:
        </p>

        <CardGroup columns={2}>
          <FeatureCard
            title="GMX Exclusive API"
            description="Direct integration with GMX protocol for perpetual trading. Access GMX liquidity with optimized routing and reduced slippage."
            icon={<TrendingUp className="h-5 w-5" />}
            href="/docs/swap-api/advanced-usage/gmx-exclusive-api"
          />
          <FeatureCard
            title="Exact Output Swap"
            description="Specify the exact amount of tokens you want to receive. The API calculates the required input amount automatically."
            icon={<ArrowRightLeft className="h-5 w-5" />}
            href="/docs/swap-api/advanced-usage/exact-out"
          />
          <FeatureCard
            title="Sweep Swap"
            description="Batch multiple tokens into a single swap transaction. Perfect for portfolio rebalancing and dust collection."
            icon={<Layers className="h-5 w-5" />}
            href="/docs/sweep-swap-api/guide"
          />
          <FeatureCard
            title="Zap API"
            description="Single-transaction liquidity operations. Add or remove LP positions with automatic token conversion."
            icon={<Zap className="h-5 w-5" />}
            href="/docs/zap-api/api"
          />
          <FeatureCard
            title="Ticket API"
            description="Generate signed tickets for deferred or scheduled swap execution. Useful for intent-based trading flows."
            icon={<Ticket className="h-5 w-5" />}
            href="/docs/ticket-api/api"
          />
        </CardGroup>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="scroll-mt-24">
        <h2 className="text-xl md:text-2xl font-semibold mb-3">Use Cases</h2>
        
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-5 rounded-xl border border-border/40 bg-card/30">
            <h3 className="font-semibold mb-2">Portfolio Rebalancing</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Use Sweep Swap to convert multiple tokens to a target asset in a single transaction, 
              reducing gas costs and simplifying the user experience.
            </p>
            <Badge variant="secondary" className="text-xs">Sweep Swap</Badge>
          </div>
          
          <div className="p-5 rounded-xl border border-border/40 bg-card/30">
            <h3 className="font-semibold mb-2">Perpetual Trading</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Leverage the GMX Exclusive API for direct access to GMX perpetual markets with 
              optimized execution and better price discovery.
            </p>
            <Badge variant="secondary" className="text-xs">GMX Exclusive</Badge>
          </div>
          
          <div className="p-5 rounded-xl border border-border/40 bg-card/30">
            <h3 className="font-semibold mb-2">Payment Integration</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Use Exact Output to ensure users receive exactly the amount needed for payments, 
              regardless of input token price fluctuations.
            </p>
            <Badge variant="secondary" className="text-xs">Exact Out</Badge>
          </div>
          
          <div className="p-5 rounded-xl border border-border/40 bg-card/30">
            <h3 className="font-semibold mb-2">LP Management</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Simplify liquidity provision with Zap API. Users can add LP with any token, 
              and the API handles the conversion and deposit in one transaction.
            </p>
            <Badge variant="secondary" className="text-xs">Zap API</Badge>
          </div>
        </div>

        <Callout type="tip" title="Pro Tip" className="mt-6">
          Combine multiple advanced features for sophisticated trading strategies. For example, 
          use Exact Output with Sweep Swap to convert portfolio dust into a precise amount of a target token.
        </Callout>
      </section>

      {/* Quick Links */}
      <section className="scroll-mt-24">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Quick Links</h2>
        
        <div className="grid gap-3 md:grid-cols-3">
          <NextStepCard
            title="GMX Exclusive"
            description="Perpetual trading integration"
            href="/docs/swap-api/advanced-usage/gmx-exclusive-api"
            icon={<TrendingUp className="h-5 w-5" />}
          />
          <NextStepCard
            title="Exact Output"
            description="Specify output amount"
            href="/docs/swap-api/advanced-usage/exact-out"
            icon={<ArrowRightLeft className="h-5 w-5" />}
          />
          <NextStepCard
            title="Sweep Swap"
            description="Batch token conversion"
            href="/docs/sweep-swap-api/guide"
            icon={<Layers className="h-5 w-5" />}
          />
        </div>
      </section>
    </div>
  )
}
