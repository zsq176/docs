"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { CodeBlock } from "@/components/docs/code-block"
import { Callout } from "@/components/docs/callout"
import { NextStepCard } from "@/components/docs/card-group"
import { FileCode } from "lucide-react"

const tableWrapper = "overflow-x-auto rounded-xl border border-border my-4"
const tableClass = "w-full border-collapse"
const thClass = "text-left py-3 px-4 font-medium border-b border-border bg-muted/30"
const tdClass = "py-3 px-4 border-b border-border text-sm"

export function SwapApiGmxContent() {
  return (
    <div className="space-y-12">
      <section>
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="outline">REST API</Badge>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">GMX Exclusive API</h1>
        <p className="mt-4 text-muted-foreground max-w-3xl">
          This API is exclusively to leverage GMX V1 and V2 pools on Arbitrum. To ensure users get the best trading rates, v1 and v2 pools are compared and the API swaps with the most favorable option.
        </p>
      </section>

      {/* Price Quote */}
      <section id="price-quote" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Price Quote</h2>
        <ul className="list-none space-y-1 text-muted-foreground mb-4">
          <li>URL: <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">https://open-api.openocean.finance/v3/arbitrum/gmx_quote</code></li>
          <li>Method: GET</li>
        </ul>
        <p className="font-medium mb-2">Params:</p>
        <div className={tableWrapper}>
          <table className={tableClass}>
            <thead><tr><th className={thClass}>parameter</th><th className={thClass}>type</th><th className={thClass}>example</th><th className={thClass}>description</th></tr></thead>
            <tbody>
              <tr><td className={tdClass}>inTokenAddress</td><td className={tdClass}>string</td><td className={tdClass}>0xaf88d065e77c8cC2239327C5EDb3A432268e5831</td><td className={tdClass}>Input token address</td></tr>
              <tr><td className={tdClass}>outTokenAddress</td><td className={tdClass}>string</td><td className={tdClass}>0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9</td><td className={tdClass}>Output token address</td></tr>
              <tr><td className={tdClass}>amount</td><td className={tdClass}>string</td><td className={tdClass}>100</td><td className={tdClass}>Token amount without decimals. e.g. 1.00 ETH → 1</td></tr>
              <tr><td className={tdClass}>gasPrice</td><td className={tdClass}>string</td><td className={tdClass}>0.1</td><td className={tdClass}>Gas price in GWEI without decimals. e.g. 14 GWEI → 14</td></tr>
              <tr><td className={tdClass}>multi_dex</td><td className={tdClass}>boolean (Optional)</td><td className={tdClass}>false (default)</td><td className={tdClass}>If true, compare price from integrated DEXs with GMX V2</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-lg font-semibold mt-4 mb-2">Example request</h3>
        <CodeBlock code={`https://open-api.openocean.finance/v3/arbitrum/gmx_quote?inTokenAddress=0xaf88d065e77c8cC2239327C5EDb3A432268e5831&outTokenAddress=0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9&amount=100&slippage=1&gasPrice=0.0111875`} language="http" />
        <h3 className="text-lg font-semibold mt-4 mb-2">Response</h3>
        <CodeBlock
          code={`{
  "code": 200,
  "data": {
    "inToken": { "address": "...", "decimals": 6, "symbol": "USDC", "name": "USD Coin", "usd": "1.001", "volume": 100.1 },
    "outToken": { "address": "...", "decimals": 6, "symbol": "USDT", "name": "Tether USD", "usd": "1.001", "volume": 100.07 },
    "inAmount": "100000000",
    "outAmount": "99970420",
    "estimatedGas": "859474",
    "dexes": [ { "dexIndex": 54, "dexCode": "GMXV2", "swapAmount": "99970420" } ],
    "path": { "from": "...", "to": "...", "parts": 10, "routes": [ {} ] },
    "save": 0,
    "price_impact": "-0.03%"
  }
}`}
          language="json"
          showLineNumbers
        />
      </section>

      {/* Swap Quote */}
      <section id="swap-quote" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Swap Quote</h2>
        <ul className="list-none space-y-1 text-muted-foreground mb-4">
          <li>URL: <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">https://open-api.openocean.finance/v3/arbitrum/gmx_swap_quote</code></li>
          <li>Method: GET</li>
        </ul>
        <p className="font-medium mb-2">Params:</p>
        <div className={tableWrapper}>
          <table className={tableClass}>
            <thead><tr><th className={thClass}>parameter</th><th className={thClass}>type</th><th className={thClass}>description</th></tr></thead>
            <tbody>
              <tr><td className={tdClass}>inTokenAddress</td><td className={tdClass}>string</td><td className={tdClass}>Input token address</td></tr>
              <tr><td className={tdClass}>outTokenAddress</td><td className={tdClass}>string</td><td className={tdClass}>Output token address</td></tr>
              <tr><td className={tdClass}>amount</td><td className={tdClass}>string</td><td className={tdClass}>Token amount without decimals</td></tr>
              <tr><td className={tdClass}>gasPrice</td><td className={tdClass}>string</td><td className={tdClass}>Gas price in GWEI without decimals</td></tr>
              <tr><td className={tdClass}>slippage</td><td className={tdClass}>number</td><td className={tdClass}>0.05–50, default 1</td></tr>
              <tr><td className={tdClass}>account</td><td className={tdClass}>string</td><td className={tdClass}>User&apos;s address</td></tr>
              <tr><td className={tdClass}>referrer</td><td className={tdClass}>string (Optional)</td><td className={tdClass}>Contact us for a unique referrer parameter</td></tr>
              <tr><td className={tdClass}>multi_dex</td><td className={tdClass}>boolean (Optional)</td><td className={tdClass}>Compare integrated DEXs with GMX V2</td></tr>
              <tr><td className={tdClass}>sender</td><td className={tdClass}>string (Optional)</td><td className={tdClass}>Sending address; account is receiving address if sender is set</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-lg font-semibold mt-4 mb-2">Example request</h3>
        <CodeBlock code={`https://open-api.openocean.finance/v3/arbitrum/gmx_swap_quote?inTokenAddress=0xaf88d065e77c8cC2239327C5EDb3A432268e5831&outTokenAddress=0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9&amount=100&slippage=1&gasPrice=0.0111875&account=0x929B44e589AC4dD99c0282614e9a844Ea9483C69`} language="http" />
        <h3 className="text-lg font-semibold mt-4 mb-2">Response</h3>
        <CodeBlock
          code={`{
  "code": 200,
  "data": {
    "inToken": { ... }, "outToken": { ... },
    "inAmount": "100000000", "outAmount": "99966706",
    "estimatedGas": 3442140, "minOutAmount": "0",
    "from": "0x7AeEF1035Ba6794C0478718a2330671Ec8802aF1",
    "to": "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64",
    "value": "0", "gasPrice": "11187500", "data": "0x30eef8bd...",
    "chainId": 42161, "rfqDeadline": 0, "gmxFee": 64005007625000,
    "price_impact": "-0.04%"
  }
}`}
          language="json"
          showLineNumbers
        />
        <Callout type="warning" title="">
          <p>If &quot;gmxFee&quot; from the response is gmxFee &gt; 0 (swaps go through GMX V2 pools), you must use the following <strong>Get Transaction</strong> method to fetch the swap hash. Otherwise, refer to the docs for getting hashes.</p>
        </Callout>
      </section>

      {/* Get Transaction */}
      <section id="get-transaction" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Get Transaction</h2>
        <ul className="list-none space-y-1 text-muted-foreground mb-4">
          <li>URL: <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">https://open-api.openocean.finance/v3/arbitrum/gmx_transaction</code></li>
          <li>Method: GET. Params: hash (string, transaction hash)</li>
        </ul>
        <h3 className="text-lg font-semibold mt-4 mb-2">Example request</h3>
        <CodeBlock code={`https://open-api.openocean.finance/v3/arbitrum/gmx_transaction?hash=0xd5f0bb09e95abf7a73fd02e465d1c4aa9a1a45a5bc8dee422cbdef706b00bd50`} language="http" />
        <h3 className="text-lg font-semibold mt-4 mb-2">Response</h3>
        <CodeBlock code={`{ "code": 200, "data": { "srcHash": "", "dstHash": "", "status": "success" || "fail" } }`} language="json" />
      </section>

      <section className="scroll-mt-20 pt-8 border-t border-border">
        <h2 className="text-xl font-bold mb-6">Next Steps</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <NextStepCard title="Swap API Overview" description="Introduction and Get Started." href="/docs/swap-api" icon={<FileCode className="h-5 w-5" />} />
          <NextStepCard title="API V4" description="Main Swap API (recommended)." href="/docs/swap-api/v4" icon={<FileCode className="h-5 w-5" />} />
        </div>
      </section>
    </div>
  )
}
