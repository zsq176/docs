"use client"

import * as React from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { CodeBlock } from "@/components/docs/code-block"
import { Callout } from "@/components/docs/callout"
import { NextStepCard } from "@/components/docs/card-group"
import { FileCode, ExternalLink } from "lucide-react"

const tableWrapper = "overflow-x-auto rounded-xl border border-border my-4"
const tableClass = "w-full border-collapse"
const thClass = "text-left py-3 px-4 font-medium border-b border-border bg-muted/30"
const tdClass = "py-3 px-4 border-b border-border text-sm"

export function SwapApiV3Content() {
  return (
    <div className="space-y-12">
      <section>
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="outline">REST API</Badge>
          <Badge variant="secondary">Legacy</Badge>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">API V3</h1>
        <p className="mt-4 text-muted-foreground">
          Recommend reading the below docs along with using OpenOcean API. GitHub:{" "}
          <a href="https://github.com/openocean-finance/openocean-api/tree/feature/v3" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">openocean-api (feature/v3)</a>.
        </p>
        <Callout type="warning" title="Arbitrage">
          <p>If you are using our API for arbitrage, please reach out directly to <a href="https://t.me/OpenOceanAPI" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Telegram</a> or <a href="https://discord.gg/cxK6CCYcGp" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Discord</a> for tailored services.</p>
        </Callout>
        <p className="text-sm text-muted-foreground mt-2">
          Best Practices: <a href="https://github.com/openocean-finance/OpenOcean-API-Examples/blob/main/.gitbook/assets/Best%20Practices%20of%20Using%20OpenOcean%20API.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Best Practices of Using OpenOcean API (PDF)</a>
        </p>
      </section>

      {/* Price Quote */}
      <section id="price-quote" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Price Quote</h2>
        <p className="text-muted-foreground mb-2">Quote the price of a specific trading pair.</p>
        <p className="mb-2"><strong>GET</strong> <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">https://open-api.openocean.finance/v3/:chain/quote</code></p>
        <p className="font-medium mb-2">Query Parameters:</p>
        <div className={tableWrapper}>
          <table className={tableClass}>
            <thead><tr><th className={thClass}>Name</th><th className={thClass}>Type</th><th className={thClass}>Description</th></tr></thead>
            <tbody>
              <tr><td className={tdClass}>chain*</td><td className={tdClass}>string</td><td className={tdClass}>Chain name or Chain ID (supported chains)</td></tr>
              <tr><td className={tdClass}>inTokenAddress*</td><td className={tdClass}>string</td><td className={tdClass}>Input token address</td></tr>
              <tr><td className={tdClass}>outTokenAddress*</td><td className={tdClass}>string</td><td className={tdClass}>Output token address</td></tr>
              <tr><td className={tdClass}>amount*</td><td className={tdClass}>string</td><td className={tdClass}>Token amount without decimals. e.g. 1.00 ETH → 1, 1.23 USDC → 1.23</td></tr>
              <tr><td className={tdClass}>gasPrice*</td><td className={tdClass}>string</td><td className={tdClass}>Gas price in GWEI without decimals. e.g. 14 GWEI → 14. Use 1 for Sui &amp; Solana.</td></tr>
              <tr><td className={tdClass}>slippage</td><td className={tdClass}>string</td><td className={tdClass}>0.05–50, default 1</td></tr>
              <tr><td className={tdClass}>disabledDexIds / enabledDexIds</td><td className={tdClass}>string</td><td className={tdClass}>Dex index from dexList (enabledDexIds has higher priority)</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-lg font-semibold mt-4 mb-2">Example Request</h3>
        <CodeBlock code={`https://open-api.openocean.finance/v3/bsc/quote?gasPrice=3&inTokenAddress=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&outTokenAddress=0x55d398326f99059ff775485246999027b3197955&amount=5&slippage=1&account=0x9116780aEf4B376499358fa7dEeC00cCF64fA801`} language="http" />
        <h3 className="text-lg font-semibold mt-4 mb-2">Response</h3>
        <CodeBlock code={`{ "code": 200, "data": { "inToken": { ... }, "outToken": { ... }, "inAmount": "5000000000000000000", "outAmount": "3117105805715617378120", "estimatedGas": "480938", "dexes": [ ... ], "path": { ... }, "save": 0.6038, "price_impact": "0.49%" } }`} language="json" />
      </section>

      {/* Building Transaction (swap_quote) */}
      <section id="building-transaction" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Building Transaction</h2>
        <Callout type="info" title="">
          <p>To obtain a more accurate gas limit, call est_gas from a reliable RPC before submitting. Also try eth.estimateGas() before sendTransaction and renew estimatedGas. Note: estimatedGas is only a reference.</p>
        </Callout>
        <p className="mb-2"><strong>GET</strong> <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">https://open-api.openocean.finance/v3/:chain/swap_quote</code></p>
        <p className="font-medium mb-2">Query Parameters:</p>
        <div className={tableWrapper}>
          <table className={tableClass}>
            <thead><tr><th className={thClass}>Name</th><th className={thClass}>Type</th><th className={thClass}>Description</th></tr></thead>
            <tbody>
              <tr><td className={tdClass}>chain*</td><td className={tdClass}>string</td><td className={tdClass}>Chain name or Chain ID</td></tr>
              <tr><td className={tdClass}>inTokenAddress*</td><td className={tdClass}>string</td><td className={tdClass}>Input token address</td></tr>
              <tr><td className={tdClass}>outTokenAddress*</td><td className={tdClass}>string</td><td className={tdClass}>Output token address</td></tr>
              <tr><td className={tdClass}>amount*</td><td className={tdClass}>string</td><td className={tdClass}>Token amount without decimals</td></tr>
              <tr><td className={tdClass}>gasPrice*</td><td className={tdClass}>string</td><td className={tdClass}>Gas price in GWEI without decimals (1 for Sui &amp; Solana)</td></tr>
              <tr><td className={tdClass}>slippage*</td><td className={tdClass}>number</td><td className={tdClass}>0.05–50, e.g. 1 = 1%</td></tr>
              <tr><td className={tdClass}>account*</td><td className={tdClass}>string</td><td className={tdClass}>User address (must be approved). If omitted, response has no calldata/transaction body</td></tr>
              <tr><td className={tdClass}>referrer / referrerFee</td><td className={tdClass}>string / number</td><td className={tdClass}>Partner EOA; fee 0.01–5</td></tr>
              <tr><td className={tdClass}>enabledDexIds / disabledDexIds</td><td className={tdClass}>string</td><td className={tdClass}>From dexList</td></tr>
              <tr><td className={tdClass}>sender</td><td className={tdClass}>string</td><td className={tdClass}>Caller; if set, account = receiver</td></tr>
              <tr><td className={tdClass}>minOutput</td><td className={tdClass}>number?</td><td className={tdClass}>Min target tokens without decimals. Base/BNB/ETH</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-lg font-semibold mt-4 mb-2">Example Request</h3>
        <CodeBlock code={`https://open-api.openocean.finance/v3/bsc/swap_quote?gasPrice=3&inTokenAddress=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&outTokenAddress=0x55d398326f99059ff775485246999027b3197955&amount=5&slippage=1&account=0x9116780aEf4B376499358fa7dEeC00cCF64fA801`} language="http" />
        <Callout type="warning" title="estimatedGas">
          <p>Use eth_estimateGas * 1.25–1.5 when sending. Update gasPrice to avoid failures. If estimateGas fails, do not submit the tx.</p>
        </Callout>
        <h3 className="text-lg font-semibold mt-4 mb-2">Example with minOutput</h3>
        <CodeBlock code={`https://open-api.openocean.finance/v3/1/swap_quote?amount=1&gasPrice=1.9&slippage=1&referrer=0x39041f1b366fe33f9a5a79de5120f2aee2577ebc&account=0xceCfC852f8cE51D92A5A291f6999DEE147bc2169&disableRfq=true&referrerFee=1&inTokenAddress=0xdac17f958d2ee523a2206206994597c13d831ec7&outTokenAddress=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&minOutput=0.98`} language="http" />
        <Callout type="warning" title="minOutput">
          <p>minOutput=0.98 means minimum acceptable swap result 0.98 USDC. If output is less, the trade will not execute.</p>
        </Callout>
      </section>

      {/* Get Transaction */}
      <section id="get-transaction" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Get Transaction</h2>
        <p><strong>GET</strong> <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">https://open-api.openocean.finance/v3/:chain/getTransaction</code></p>
        <p className="text-muted-foreground mt-2">Params: chain*, hash* (transaction hash)</p>
        <CodeBlock code={`https://open-api.openocean.finance/v3/avax/getTransaction?hash=0x57e752d311c347008a5d66286096b62d6a0687834a3df8b0dd06265ff16ee575`} language="http" />
      </section>

      {/* Get Tokens Lists */}
      <section id="get-tokens-lists" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Get Tokens Lists</h2>
        <p><strong>GET</strong> <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">https://open-api.openocean.finance/v3/:chain/tokenList</code></p>
        <p className="text-muted-foreground mt-2">Params: chain*</p>
        <CodeBlock code={`https://open-api.openocean.finance/v3/avax/tokenList`} language="http" />
      </section>

      {/* Get Dexes List */}
      <section id="get-dexes-list" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Get Dexes List</h2>
        <p><strong>GET</strong> <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">https://open-api.openocean.finance/v3/:chain/dexList</code></p>
        <p className="text-muted-foreground mt-2">Params: chain*</p>
        <CodeBlock code={`https://open-api.openocean.finance/v3/avax/dexList`} language="http" />
        <CodeBlock code={`{ "code": 200, "data": [ { "index": 1, "code": "SushiSwap", "name": "SushiSwap" }, ... ] }`} language="json" />
      </section>

      {/* Get Transaction Hash from wallet */}
      <section id="get-txs" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Get Transaction Hash from wallet</h2>
        <p><strong>GET</strong> <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">https://open-api.openocean.finance/v3/:chain/getTxs</code></p>
        <p className="text-muted-foreground mt-2">Params: chain*, account*, pageSize*</p>
        <CodeBlock code={`https://open-api.openocean.finance/v3/bsc/getTxs?account=0x9116780aEf4B376499358fa7dEeC00cCF64fA801&pageSize=10`} language="http" />
      </section>

      {/* Get Balance */}
      <section id="get-balance" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Get Balance from wallet</h2>
        <p><strong>GET</strong> <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">https://open-api.openocean.finance/v3/:chain/getBalance</code></p>
        <p className="text-muted-foreground mt-2">Params: chain*, account*, inTokenAddress* (comma-separated token addresses, up to 5)</p>
        <CodeBlock code={`https://open-api.openocean.finance/v1/cross/getBalance?chainId=56&account=0x9116780aEf4B376499358fa7dEeC00cCF64fA801&inTokenAddress=0x55d398326f99059ff775485246999027b3197955,0x55d398326f99059fF775485246999027B3197955`} language="http" />
      </section>

      {/* Create Wallet */}
      <section id="create-wallet" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Create Wallet</h2>
        <p><strong>GET</strong> <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">https://open-api.openocean.finance/v3/:chain/createWallet</code></p>
        <p className="text-muted-foreground mt-2">Params: chain*</p>
        <CodeBlock code={`https://open-api.openocean.finance/v3/bsc/createWallet`} language="http" />
        <CodeBlock code={`{ "code": 200, "data": { "address": "string", "privateKey": "string" } }`} language="json" />
      </section>

      {/* Get gasPrice */}
      <section id="get-gasprice" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Get gasPrice</h2>
        <p><strong>GET</strong> <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">https://open-api.openocean.finance/v3/:chain/gasPrice</code></p>
        <p className="text-muted-foreground mt-2">Params: chain*</p>
        <CodeBlock code={`https://open-api.openocean.finance/v3/bsc/gasPrice`} language="http" />
        <CodeBlock code={`{ "code": 200, "data": { "standard": 3000000000, "fast": 3000000000, "instant": 3000000000 }, "without_decimals": { "standard": "3", "fast": "3", "instant": "3" } }`} language="json" />
        <Callout type="warning" title="">
          <p>For <code className="rounded bg-muted px-1 py-0.5">/quote</code> and <code className="rounded bg-muted px-1 py-0.5">/swap_quote</code>, gasPrice should be set in GWEI without decimals (e.g. 14 GWEI → 14).</p>
        </Callout>
      </section>

      {/* Get Allowance */}
      <section id="get-allowance" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Get Allowance</h2>
        <p><strong>GET</strong> <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">https://open-api.openocean.finance/v3/:chain/allowance</code></p>
        <p className="text-muted-foreground mt-2">Params: chain*, account*, inTokenAddress*</p>
        <CodeBlock code={`https://open-api.openocean.finance/v3/polygon/allowance?account=0x9116780aEf4B376499358fa7dEeC00cCF64fA801&inTokenAddress=0x831753DD7087CaC61aB5644b308642cc1c33Dc13`} language="http" />
        <CodeBlock code={`{ "code": 200, "data": [ { "symbol": "QUICK", "allowance": "79228162514.26434", "raw": "79228162514264340000000000000" } ] }`} language="json" />
      </section>

      {/* GetTxsByReferrer */}
      <section id="get-txs-by-referrer" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">GetTxsByReferrer</h2>
        <Callout type="info" title="">
          <p>Retrieves transaction records made through a referrer. Contact us to activate permissions.</p>
        </Callout>
        <p><strong>GET</strong> <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">https://open-api.openocean.finance/v3/getTxsByReferrer</code></p>
        <p className="text-muted-foreground mt-2">Params: referrer* (string), chain (optional), startId (pagination), pageSize (default 10)</p>
        <CodeBlock code={`https://open-api.openocean.finance/v3/getTxsByReferrer?referrer={Referrer's address}&pageSize=10`} language="http" />
      </section>

      <section className="scroll-mt-20 pt-8 border-t border-border">
        <h2 className="text-xl font-bold mb-6">Next Steps</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <NextStepCard title="Swap API V4 (Recommended)" description="Use the latest API version." href="/docs/swap-api/v4" icon={<FileCode className="h-5 w-5" />} />
          <NextStepCard title="Swap API Overview" description="Introduction and Get Started." href="/docs/swap-api" icon={<FileCode className="h-5 w-5" />} />
          <a href="https://open-api.openocean.finance/v4/swagger-ui.html" target="_blank" rel="noopener noreferrer" className="block">
            <div className="group h-full rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary"><ExternalLink className="h-5 w-5" /></div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">Swagger UI <ExternalLink className="h-4 w-4 opacity-50" /></h4>
                  <p className="mt-1 text-sm text-muted-foreground">API reference.</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  )
}
