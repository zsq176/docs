"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Callout } from "@/components/docs/callout"
import { NextStepCard } from "@/components/docs/card-group"
import { FileCode } from "lucide-react"

export function SwapApiPricingContent() {
  return (
    <div className="space-y-12">
      <section>
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="outline">Pricing & Access</Badge>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">API Pricing & Access</h1>
        <p className="mt-4 text-muted-foreground max-w-3xl">
          OpenOcean offers flexible API access designed for both individual developers and professional partners. Whether you&apos;re building a DeFi app, wallet, or trading bot, our API provides reliable connectivity, competitive swap rates, and adaptable fee options.
        </p>
      </section>

      <section id="free-trial" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Free Trial</h2>
        <p className="text-muted-foreground mb-4">
          A 2-week free trial (under 10 RPS) is available for all builders. Please contact our BD team in the <a href="https://t.me/OpenOceanAPI" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">API group</a> or submit a <a href="https://openocean.sg.larksuite.com/share/base/form/shrusY4ukLSoP6htyoprXgZiiQc" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">form</a>.
        </p>
      </section>

      <section id="public-swap-api" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Public Swap API</h2>
        <p className="text-muted-foreground mb-4">
          The public Swap API is available for all DeFi builders. It includes a default rate limit of 2 RPS and applies a standard dynamic <a href="https://docs.openocean.finance/protocol/introduction/fees-overview" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">fee model</a>. Developers or projects can also monetize their own fees by using the <code className="rounded bg-muted px-1 py-0.5">referrerFee</code> parameter to share in swap revenue.
        </p>
      </section>

      <section id="pro-swap-api" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Pro Swap API</h2>
        <p className="text-muted-foreground mb-4">
          For protocol developers, arbitrage traders, and market makers who require higher rate limits or customized fee arrangements, please contact our team via the <a href="https://t.me/OpenOceanAPI" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">API group</a> or submit an <a href="https://openocean.sg.larksuite.com/share/base/form/shrusY4ukLSoP6htyoprXgZiiQc" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">enquiry form</a>.
        </p>
      </section>

      <section className="scroll-mt-20 pt-8 border-t border-border">
        <NextStepCard title="Swap API Overview" description="Introduction and Get Started." href="/docs/swap-api" icon={<FileCode className="h-5 w-5" />} />
      </section>
    </div>
  )
}
