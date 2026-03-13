"use client"

import * as React from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { CodeBlock } from "@/components/docs/code-block"
import { Callout } from "@/components/docs/callout"
import { NextStepCard } from "@/components/docs/card-group"
import { 
  FileCode, 
  Zap, 
  ArrowRightLeft, 
  Shield, 
  TrendingUp, 
  LayoutGrid, 
  Layers,
  ExternalLink,
  Key,
  Globe
} from "lucide-react"

export function ApiReferenceContent() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="outline">Reference</Badge>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">API Reference</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
          Complete API documentation for OpenOcean. Find endpoints, parameters, and examples for all our APIs.
        </p>
      </section>

      {/* Overview */}
      <section id="overview" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-muted-foreground mb-6 max-w-3xl">
          OpenOcean provides a comprehensive suite of APIs for DeFi trading, including token swaps, gasless transactions, 
          limit orders, DCA, and more. All APIs follow RESTful conventions and return JSON responses.
        </p>
        
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <NextStepCard
            title="Swap API"
            description="Core DEX aggregation API for best-rate token swaps across 40+ chains."
            href="/docs/swap-api/v4"
            icon={<ArrowRightLeft className="h-5 w-5" />}
          />
          <NextStepCard
            title="Gasless API"
            description="Zero-gas trading with Permit2 signatures."
            href="/docs/gasless-swap-api/api"
            icon={<Shield className="h-5 w-5" />}
          />
          <NextStepCard
            title="DCA API"
            description="Dollar cost averaging with automated recurring trades."
            href="/docs/dca-api/api"
            icon={<LayoutGrid className="h-5 w-5" />}
          />
          <NextStepCard
            title="Limit Order API"
            description="Non-custodial limit orders that execute at your price."
            href="/docs/limit-order-api/api"
            icon={<TrendingUp className="h-5 w-5" />}
          />
          <NextStepCard
            title="Zap API"
            description="Single-transaction LP deposits and withdrawals."
            href="/docs/zap-api/api"
            icon={<Zap className="h-5 w-5" />}
          />
          <NextStepCard
            title="Solana API"
            description="Solana-specific swap and token endpoints."
            href="/docs/solana-swap-api"
            icon={<Layers className="h-5 w-5" />}
          />
        </div>
      </section>

      {/* Authentication */}
      <section id="authentication" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Authentication</h2>
        <p className="text-muted-foreground mb-4 max-w-3xl">
          The public API is available without authentication for basic usage. For higher rate limits and enterprise features, 
          contact our team for API key access.
        </p>
        
        <Callout type="info" title="API Key">
          <p>For enterprise access with higher rate limits, reach out to our BD team in the{" "}
            <a href="https://t.me/OpenOceanAPI" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              API group
            </a>.
          </p>
        </Callout>
      </section>

      {/* Base URLs */}
      <section id="base-urls" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Base URLs</h2>
        <p className="text-muted-foreground mb-4 max-w-3xl">
          All API requests should be made to the following base URLs:
        </p>
        
        <CodeBlock
          code={`# EVM Chains (Ethereum, BNB Chain, Arbitrum, etc.)
https://open-api.openocean.finance/v4/{chain}

# Solana
https://open-api.openocean.finance/v4/solana

# Sui
https://open-api.openocean.finance/v4/sui`}
          language="bash"
          filename="Base URLs"
        />
        
        <p className="text-muted-foreground mt-4 max-w-3xl">
          Replace <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-primary">{"{chain}"}</code> with the chain code 
          (e.g., <code className="rounded bg-muted px-1.5 py-0.5 text-sm">eth</code>, <code className="rounded bg-muted px-1.5 py-0.5 text-sm">bsc</code>, 
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm">arbitrum</code>).
        </p>
      </section>

      {/* API Endpoints */}
      <section id="api-endpoints" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">API Endpoints</h2>
        
        <div className="space-y-6">
          <div className="border border-border rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">GET</Badge>
              <code className="text-sm font-mono">/quote</code>
            </div>
            <p className="text-muted-foreground text-sm mb-3">
              Get the best swap route and price for a token pair.
            </p>
            <Link href="/docs/swap-api/v4" className="text-primary text-sm hover:underline inline-flex items-center gap-1">
              View documentation <ExternalLink className="h-3 w-3" />
            </Link>
          </div>
          
          <div className="border border-border rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">GET</Badge>
              <code className="text-sm font-mono">/swap_quote</code>
            </div>
            <p className="text-muted-foreground text-sm mb-3">
              Get quote with transaction calldata for on-chain execution.
            </p>
            <Link href="/docs/swap-api/v4" className="text-primary text-sm hover:underline inline-flex items-center gap-1">
              View documentation <ExternalLink className="h-3 w-3" />
            </Link>
          </div>
          
          <div className="border border-border rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20">POST</Badge>
              <code className="text-sm font-mono">/gasless/quote</code>
            </div>
            <p className="text-muted-foreground text-sm mb-3">
              Get gasless swap quote with Permit2 signature data.
            </p>
            <Link href="/docs/gasless-swap-api/api" className="text-primary text-sm hover:underline inline-flex items-center gap-1">
              View documentation <ExternalLink className="h-3 w-3" />
            </Link>
          </div>
          
          <div className="border border-border rounded-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">GET</Badge>
              <code className="text-sm font-mono">/tokenList</code>
            </div>
            <p className="text-muted-foreground text-sm mb-3">
              Get list of supported tokens for a specific chain.
            </p>
            <Link href="/docs/swap-api/v4" className="text-primary text-sm hover:underline inline-flex items-center gap-1">
              View documentation <ExternalLink className="h-3 w-3" />
            </Link>
          </div>
        </div>
        
        <div className="mt-6">
          <Callout type="info" title="Interactive API Docs">
            <p>Explore all endpoints interactively in our{" "}
              <a 
                href="https://open-api.openocean.finance/v4/swagger-ui.html" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:underline"
              >
                Swagger UI
              </a>.
            </p>
          </Callout>
        </div>
      </section>

      {/* Rate Limits */}
      <section id="rate-limits" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Rate Limits</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-medium">Plan</th>
                <th className="text-left py-3 px-4 font-medium">Rate Limit</th>
                <th className="text-left py-3 px-4 font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Public</td>
                <td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">2 RPS</code></td>
                <td className="py-3 px-4 text-muted-foreground">20 requests per 10 seconds</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Trial</td>
                <td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">5 RPS</code></td>
                <td className="py-3 px-4 text-muted-foreground">2-week free trial</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Enterprise</td>
                <td className="py-3 px-4"><code className="text-xs bg-muted px-1.5 py-0.5 rounded">Custom</code></td>
                <td className="py-3 px-4 text-muted-foreground">Contact BD for custom limits</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <Callout type="warning" title="Rate Limiting" className="mt-6">
          <p>Exceeding the rate limit may result in temporary blocking. For higher limits, contact our team.</p>
        </Callout>
      </section>
    </div>
  )
}
