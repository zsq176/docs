"use client"

import * as React from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { NextStepCard } from "@/components/docs/card-group"
import { FileCode, Zap } from "lucide-react"

export function SwapApiAdvancedUsageContent() {
  return (
    <div className="space-y-12">
      <section>
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="outline">Advanced Usage</Badge>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Advanced Usage</h1>
        <p className="mt-4 text-muted-foreground max-w-3xl">
          Unlock the potential of OpenOcean Swap API with advanced features and integration options. This section covers enhanced routing controls, custom parameters, and API extensions for power users and developers building sophisticated DeFi applications.
        </p>
      </section>

      <section id="advanced-pages" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-6">Topics</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <NextStepCard
            title="GMX Exclusive API"
            description="Leverage GMX V1 and V2 pools on Arbitrum for best rates."
            href="/docs/swap-api/advanced-usage/gmx-exclusive-api"
            icon={<Zap className="h-5 w-5" />}
          />
          <NextStepCard
            title="Exact Out"
            description="Use reverseQuote and swap for exact output amount."
            href="/docs/swap-api/advanced-usage/exact-out"
            icon={<FileCode className="h-5 w-5" />}
          />
        </div>
      </section>

      <section className="scroll-mt-20 pt-8 border-t border-border">
        <NextStepCard title="Swap API Overview" description="Introduction and Get Started." href="/docs/swap-api" icon={<FileCode className="h-5 w-5" />} />
      </section>
    </div>
  )
}
