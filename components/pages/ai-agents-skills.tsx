"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Callout } from "@/components/docs/callout"
import { NextStepCard } from "@/components/docs/card-group"
import { Bot, FileCode, Gauge, Zap } from "lucide-react"

export function AiAgentsSkillsContent() {
  return (
    <div className="space-y-12">
      <section>
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="outline">AI Agents</Badge>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">AI Agents — Skills</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
          Recommended endpoints, rate limits, and state handling for AI agents integrating with OpenOcean.
        </p>
      </section>

      <section id="endpoints" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Recommended endpoints</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li><strong className="text-foreground">Quote</strong> — GET quote for a given in/out token and amount; use to show users expected output before executing.</li>
          <li><strong className="text-foreground">Swap</strong> — POST to get transaction calldata; agent or user signs and broadcasts. Always quote first, then swap with the same params plus account.</li>
          <li><strong className="text-foreground">Token list</strong> — GET supported tokens for a chain to resolve symbols to addresses and decimals.</li>
        </ul>
      </section>

      <section id="rate-limits" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Rate limits and retries</h2>
        <p className="text-muted-foreground mb-4">
          Public tier: 2 RPS (20 requests per 10 seconds). Implement exponential backoff on 429 and 5xx. For agents that need higher throughput, request an API key or Enterprise plan.
        </p>
        <Callout type="warning" title="State and errors">
          <p>Handle errors explicitly: 400 (bad params), 404 (unsupported token/chain), 429 (rate limit), 5xx (retry with backoff). Always confirm transaction status on-chain after sending; do not assume success from API response alone.</p>
        </Callout>
      </section>

      <section className="scroll-mt-20 pt-8 border-t border-border">
        <h2 className="text-xl font-bold mb-6">Next Steps</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <NextStepCard
            title="AI Agents Overview"
            description="Full AI integration guide."
            href="/docs/ai-agents"
            icon={<Bot className="h-5 w-5" />}
          />
          <NextStepCard
            title="Swap API"
            description="Quote and Swap endpoints."
            href="/docs/swap-api"
            icon={<FileCode className="h-5 w-5" />}
          />
          <NextStepCard
            title="Swagger UI"
            description="Try endpoints interactively."
            href="https://open-api.openocean.finance/v4/swagger-ui.html"
            icon={<Zap className="h-5 w-5" />}
          />
        </div>
      </section>
    </div>
  )
}
