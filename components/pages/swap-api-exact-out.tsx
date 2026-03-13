"use client"

import * as React from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { CodeBlock } from "@/components/docs/code-block"
import { Callout } from "@/components/docs/callout"
import { NextStepCard } from "@/components/docs/card-group"
import { FileCode } from "lucide-react"

const tableWrapper = "overflow-x-auto rounded-xl border border-border my-4"
const tableClass = "w-full border-collapse"
const thClass = "text-left py-3 px-4 font-medium border-b border-border bg-muted/30"
const tdClass = "py-3 px-4 border-b border-border text-sm"

export function SwapApiExactOutContent() {
  return (
    <div className="space-y-12">
      <section>
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="outline">Advanced Usage</Badge>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Exact Out</h1>
        <p className="mt-4 text-muted-foreground max-w-3xl">
          The goal of using &quot;Exact Out&quot; is to use <code className="rounded bg-muted px-1 py-0.5">outAmount</code> to get the desired <code className="rounded bg-muted px-1 py-0.5">inAmount</code> on the frontend and receive the exact outAmount needed. This guide uses OpenOcean&apos;s <Link href="/docs/swap-api/v4#reverse-quote" className="text-primary hover:underline">reverseQuote API</Link> to calculate the required inAmount based on a target outAmount, then constructs a swap transaction to complete the on-chain swap.
        </p>
      </section>

      <section id="obtain-reverse-quote" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">1. Obtain reverseQuote</h2>
        <p className="text-muted-foreground mb-4">
          Call the <code className="rounded bg-muted px-1 py-0.5">reverseQuote</code> API to return the actual input token amount required based on the desired output token and amount. See the <Link href="/docs/swap-api/v4#reverse-quote" className="text-primary hover:underline">reverseQuote docs</Link> for more info.
        </p>
        <p className="font-medium mb-2">Endpoint</p>
        <CodeBlock code={`GET https://open-api.openocean.finance/v4/eth/reverseQuote`} language="http" />
        <p className="font-medium mt-4 mb-2">Parameters</p>
        <div className={tableWrapper}>
          <table className={tableClass}>
            <thead><tr><th className={thClass}>Params</th><th className={thClass}>Description</th></tr></thead>
            <tbody>
              <tr><td className={tdClass}>inTokenAddress</td><td className={tdClass}>Address of the input token (token to be swapped into on the frontend, same as outTokenAddress in /swap)</td></tr>
              <tr><td className={tdClass}>outTokenAddress</td><td className={tdClass}>Address of the output token (token the user wants to receive, same as inTokenAddress in /swap)</td></tr>
              <tr><td className={tdClass}>amountDecimals</td><td className={tdClass}>Amount of output token with decimals (e.g. 10 USDT → 10000000)</td></tr>
              <tr><td className={tdClass}>gasPriceDecimals</td><td className={tdClass}>Gas price with decimals (obtain via /gasPrice)</td></tr>
              <tr><td className={tdClass}>slippage</td><td className={tdClass}>0.05–50. e.g. &quot;1&quot; = 1%. Default 1</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-lg font-semibold mt-6 mb-2">Example</h3>
        <CodeBlock code={`GET https://open-api.openocean.finance/v4/eth/reverseQuote?inTokenAddress=0xdac17f958d2ee523a2206206994597c13d831ec7&outTokenAddress=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&amountDecimals=10000000&gasPriceDecimals=5000000000&slippage=3`} language="http" />
        <h3 className="text-lg font-semibold mt-4 mb-2">Response snippet</h3>
        <CodeBlock
          code={`{
  "code": 200,
  "data": {
    "inAmount": "10000000",
    "outAmount": "3869897038672758",
    "reverseAmount": 4075971843471952,
    ...
  }
}`}
          language="json"
          showLineNumbers
        />
        <p className="font-medium mt-4 mb-2">Response params</p>
        <div className={tableWrapper}>
          <table className={tableClass}>
            <thead><tr><th className={thClass}>Params</th><th className={thClass}>Description</th></tr></thead>
            <tbody>
              <tr><td className={tdClass}>inAmount</td><td className={tdClass}>Desired output token amount (equal to input amountDecimals)</td></tr>
              <tr><td className={tdClass}>outAmount</td><td className={tdClass}>Estimated output amount (for reference only)</td></tr>
              <tr><td className={tdClass}>reverseAmount</td><td className={tdClass}>Actual amount of input tokens required (use as amountDecimals in /swap)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="call-swap" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">2. Call /swap endpoint to complete swaps</h2>
        <p className="text-muted-foreground mb-4">
          Use the response from <code className="rounded bg-muted px-1 py-0.5">reverseQuote</code> to call the <code className="rounded bg-muted px-1 py-0.5">/swap</code> endpoint, generate the transaction data, and complete the on-chain trade.
        </p>
        <p className="font-medium mb-2">Endpoint</p>
        <CodeBlock code={`GET https://open-api.openocean.finance/v4/1/swap`} language="http" />
        <p className="font-medium mt-4 mb-2">Parameters</p>
        <div className={tableWrapper}>
          <table className={tableClass}>
            <thead><tr><th className={thClass}>Params</th><th className={thClass}>Description</th></tr></thead>
            <tbody>
              <tr><td className={tdClass}>inTokenAddress</td><td className={tdClass}>The outTokenAddress from reverseQuote</td></tr>
              <tr><td className={tdClass}>outTokenAddress</td><td className={tdClass}>The inTokenAddress from reverseQuote</td></tr>
              <tr><td className={tdClass}>account</td><td className={tdClass}>Receiving address (can be a third-party address)</td></tr>
              <tr><td className={tdClass}>sender</td><td className={tdClass}>Address that initiates the transaction (user address)</td></tr>
              <tr><td className={tdClass}>amountDecimals</td><td className={tdClass}>Input amount — the reverseAmount from reverseQuote</td></tr>
              <tr><td className={tdClass}>gasPriceDecimals</td><td className={tdClass}>From /gasPrice</td></tr>
              <tr><td className={tdClass}>slippage</td><td className={tdClass}>0.05–50, default 1</td></tr>
              <tr><td className={tdClass}>outAmountDecimals</td><td className={tdClass}>Target exact-out output amount — the inAmount from reverseQuote</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-lg font-semibold mt-6 mb-2">Example</h3>
        <CodeBlock code={`GET https://open-api.openocean.finance/v4/1/swap?inTokenAddress=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&outTokenAddress=0xdac17f958d2ee523a2206206994597c13d831ec7&account=0x7899a562e9B0116bA8242ab8ae8bF01e3A00E43D&sender=0x7899a562e9B0116bA8242ab8ae8bF01e3A00E43D&amountDecimals=4075971843471952&gasPriceDecimals=5000000000&slippage=3&outAmountDecimals=10000000`} language="http" />
        <h3 className="text-lg font-semibold mt-4 mb-2">Response snippet</h3>
        <CodeBlock
          code={`{
  "code": 200,
  "data": {
    "inAmount": "4075971843471952",
    "outAmount": "10000000",
    "value": "4075971843471952",
    "data": "...",
    ...
  }
}`}
          language="json"
          showLineNumbers
        />
      </section>

      <section id="flow-overview" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Whole Flow Overview</h2>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li>Call <code className="rounded bg-muted px-1 py-0.5">reverseQuote</code> with the target outAmount to calculate the required inAmount.</li>
          <li>Use <code className="rounded bg-muted px-1 py-0.5">reverseAmount</code> and <code className="rounded bg-muted px-1 py-0.5">inAmount</code> to construct the swap endpoint request.</li>
          <li>Call <code className="rounded bg-muted px-1 py-0.5">swap</code>, retrieve the transaction data, and execute the on-chain trade.</li>
        </ol>
      </section>

      <section id="tips" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Tips</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Get latest <code className="rounded bg-muted px-1 py-0.5">gasPriceDecimals</code> from <code className="rounded bg-muted px-1 py-0.5">GET https://open-api.openocean.finance/v4/:chain/gasPrice</code>.</li>
          <li>Use the <code className="rounded bg-muted px-1 py-0.5">price_impact</code> from the reverseQuote response to evaluate the quote; set a threshold to avoid large losses.</li>
          <li>All amount fields must use the token&apos;s decimals (e.g. USDT 6, ETH 18).</li>
        </ul>
        <p className="text-muted-foreground mt-4">
          Reach out in the <a href="https://t.me/OpenOceanAPI" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">API support group</a> if you&apos;d like help wrapping this into a script (Python, JS, etc.) or building a front-end widget.
        </p>
      </section>

      <section className="scroll-mt-20 pt-8 border-t border-border">
        <div className="grid gap-4 md:grid-cols-2">
          <NextStepCard title="ReverseQuote (API V4)" description="Full reverseQuote reference." href="/docs/swap-api/v4#reverse-quote" icon={<FileCode className="h-5 w-5" />} />
          <NextStepCard title="Swap API Overview" description="Introduction and Get Started." href="/docs/swap-api" icon={<FileCode className="h-5 w-5" />} />
        </div>
      </section>
    </div>
  )
}
