"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { CardGroup, FeatureCard, NextStepCard } from "@/components/docs/card-group"
import { Steps } from "@/components/docs/steps"
import { Callout } from "@/components/docs/callout"
import { 
  Layers,
  Network,
  Shield,
  Zap,
  Database,
  ArrowRightLeft,
  Lock,
  Code2,
  Terminal
} from "lucide-react"

const fadeIn = { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 } }
const transition = { duration: 0.3, ease: "easeOut" }

export function ArchitectureContent() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section>
        <motion.div {...fadeIn} transition={{ ...transition, delay: 0 }}>
          <Badge variant="outline" className="mb-4">
            System Architecture
          </Badge>
        </motion.div>
        
        <motion.h1 
          {...fadeIn} 
          transition={{ ...transition, delay: 0.05 }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
        >
          Architecture Overview
        </motion.h1>
        
        <motion.p 
          {...fadeIn} 
          transition={{ ...transition, delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-3xl leading-relaxed"
        >
          OpenOcean is designed as a modular, high-performance aggregation layer that connects
          your application to the deepest liquidity across all supported chains.
        </motion.p>
      </section>

      {/* Architecture Diagram Placeholder */}
      <section id="overview" className="scroll-mt-24">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">High-Level Architecture</h2>
        
        <div className="relative rounded-xl border border-border/50 bg-card/30 p-8 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 tech-grid" />
          
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Client Layer */}
            <div className="flex flex-col items-center p-6 rounded-lg border border-border/50 bg-background/80">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm mb-1">Client Layer</h3>
              <p className="text-xs text-muted-foreground text-center">
                API / SDK / Widget
              </p>
            </div>

            {/* Routing Engine */}
            <div className="flex flex-col items-center p-6 rounded-lg border border-primary/30 bg-primary/[0.04]">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <Network className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm mb-1">Routing Engine</h3>
              <p className="text-xs text-muted-foreground text-center">
                Path Optimization & Price Discovery
              </p>
            </div>

            {/* Liquidity Sources */}
            <div className="flex flex-col items-center p-6 rounded-lg border border-border/50 bg-background/80">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm mb-1">Liquidity Layer</h3>
              <p className="text-xs text-muted-foreground text-center">
                DEXs, AMMs, RFQ, Bridges
              </p>
            </div>
          </div>

          {/* Connection Lines */}
          <div className="hidden md:flex absolute top-1/2 left-1/3 w-1/3 h-px bg-gradient-to-r from-border via-primary/30 to-border" style={{ transform: 'translateY(-50%)' }} />
          <div className="hidden md:flex absolute top-1/2 right-1/3 w-1/3 h-px bg-gradient-to-r from-border via-primary/30 to-border" style={{ transform: 'translateY(-50%)' }} />
        </div>
      </section>

      {/* Routing Engine */}
      <section id="routing-engine" className="scroll-mt-24">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Routing Engine</h2>
        <p className="text-muted-foreground mb-6 max-w-3xl">
          The routing engine is the core component that determines the optimal path for each swap request.
          It considers multiple factors to maximize output while minimizing costs.
        </p>

        <CardGroup columns={3}>
          <FeatureCard
            title="Price Discovery"
            description="Query all connected liquidity sources simultaneously to find the best available rates."
            icon={<Zap className="h-5 w-5" />}
          />
          <FeatureCard
            title="Path Optimization"
            description="Split routes across multiple DEXs when it improves the final output amount."
            icon={<ArrowRightLeft className="h-5 w-5" />}
          />
          <FeatureCard
            title="Gas Estimation"
            description="Factor in gas costs to ensure the quoted output reflects the true received amount."
            icon={<Layers className="h-5 w-5" />}
          />
        </CardGroup>

        <Callout type="info" title="Smart Order Routing">
          OpenOcean's algorithm evaluates thousands of possible paths in milliseconds, considering
          liquidity depth, slippage, and gas costs to find the most efficient route.
        </Callout>
      </section>

      {/* Liquidity Sources */}
      <section id="liquidity-sources" className="scroll-mt-24">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Liquidity Sources</h2>
        <p className="text-muted-foreground mb-6 max-w-3xl">
          OpenOcean aggregates liquidity from diverse sources to ensure deep liquidity and competitive rates.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-lg border border-border/50 bg-card/30">
            <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-chart-2/10 flex items-center justify-center">
                <span className="text-chart-2 text-xs font-bold">1</span>
              </div>
              AMM DEXs
            </h3>
            <p className="text-sm text-muted-foreground">
              Uniswap, SushiSwap, PancakeSwap, Curve, Balancer, and 500+ other automated market makers.
            </p>
          </div>

          <div className="p-5 rounded-lg border border-border/50 bg-card/30">
            <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-chart-3/10 flex items-center justify-center">
                <span className="text-chart-3 text-xs font-bold">2</span>
              </div>
              RFQ Systems
            </h3>
            <p className="text-sm text-muted-foreground">
              Request-for-quote systems from professional market makers for better large-order execution.
            </p>
          </div>

          <div className="p-5 rounded-lg border border-border/50 bg-card/30">
            <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-chart-4/10 flex items-center justify-center">
                <span className="text-chart-4 text-xs font-bold">3</span>
              </div>
              Cross-chain Bridges
            </h3>
            <p className="text-sm text-muted-foreground">
              Integration with leading bridge protocols for seamless cross-chain swaps and transfers.
            </p>
          </div>

          <div className="p-5 rounded-lg border border-border/50 bg-card/30">
            <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-primary/10 flex items-center justify-center">
                <span className="text-primary text-xs font-bold">4</span>
              </div>
              Private Liquidity
            </h3>
            <p className="text-sm text-muted-foreground">
              Access to exclusive liquidity pools and OTC desks for improved execution on large orders.
            </p>
          </div>
        </div>
      </section>

      {/* Execution Flow */}
      <section id="execution-flow" className="scroll-mt-24">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Execution Flow</h2>
        <p className="text-muted-foreground mb-6 max-w-3xl">
          Understanding how a swap request flows through the system.
        </p>

        <Steps
          variant="vertical"
          steps={[
            {
              title: "Request Received",
              description: "Client sends swap parameters (tokens, amount, slippage) to the API.",
            },
            {
              title: "Route Discovery",
              description: "Routing engine queries all liquidity sources and computes optimal paths.",
            },
            {
              title: "Quote Generated",
              description: "Best route is selected and a quote with estimated output is returned.",
            },
            {
              title: "Transaction Built",
              description: "Calldata is generated for the user to sign and execute.",
            },
            {
              title: "On-chain Execution",
              description: "User broadcasts the transaction; swap executes atomically on-chain.",
            },
          ]}
        />
      </section>

      {/* Security Model */}
      <section id="security" className="scroll-mt-24">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Security Model</h2>
        <p className="text-muted-foreground mb-6 max-w-3xl">
          OpenOcean is designed with security as a core principle. Your funds are never at risk.
        </p>

        <CardGroup columns={2}>
          <FeatureCard
            title="Non-Custodial"
            description="We never hold or control your funds. All swaps execute directly from your wallet."
            icon={<Lock className="h-5 w-5" />}
          />
          <FeatureCard
            title="Audited Contracts"
            description="Smart contracts are audited by leading security firms and battle-tested in production."
            icon={<Shield className="h-5 w-5" />}
          />
        </CardGroup>

        <Callout type="success" title="Security First">
          OpenOcean has processed billions in volume without a single security incident.
          Our contracts are fully open-source and regularly audited.
        </Callout>
      </section>

      {/* Next Steps */}
      <section className="mt-12 pt-8 border-t border-border/40">
        <h2 className="text-base font-semibold mb-4">Continue Learning</h2>
        <div className="grid gap-3 md:grid-cols-3">
          <NextStepCard
            title="Swap API Guide"
            description="Start integrating with our core swap functionality."
            href="/docs/swap-api/guide"
            icon={<Terminal className="h-5 w-5" />}
          />
          <NextStepCard
            title="Supported Chains"
            description="See all 40+ chains we support."
            href="/docs/supported-chains"
            icon={<Layers className="h-5 w-5" />}
          />
          <NextStepCard
            title="Use Cases"
            description="Real-world integration examples."
            href="/docs/use-cases"
            icon={<Code2 className="h-5 w-5" />}
          />
        </div>
      </section>
    </div>
  )
}
