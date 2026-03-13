"use client"

import * as React from "react"
import { CodeBlock } from "@/components/docs/code-block"
import { Callout } from "@/components/docs/callout"
import Link from "next/link"

const tableWrapper = "overflow-x-auto rounded-xl border border-border my-4"
const tableClass = "w-full border-collapse"
const thClass = "text-left py-3 px-4 font-medium border-b border-border bg-muted/30"
const tdClass = "py-3 px-4 border-b border-border text-sm"

export function DCAApiApiContent() {
  return (
    <>
      <Callout type="info" title="">
        <p>
          View Github examples for{" "}
          <a href="https://github.com/openocean-finance/OpenOcean-API-Examples/tree/main/backend/dca-api-demo" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Backend</a>
          {" "}and{" "}
          <a href="https://github.com/openocean-finance/OpenOcean-API-Examples/tree/main/backend/swap-api-demo" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Frontend</a>.
          Check out the current supported chains{" "}
          <Link href="/docs/supported-chains#dca-api-chains" className="text-primary hover:underline">here</Link>.
        </p>
      </Callout>

      <section id="create-dca-order" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">1.Create DCA order</h2>
        <p className="text-muted-foreground mb-2">
          <span className="px-2 py-0.5 rounded bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-mono">POST</span>{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">https://open-api.openocean.finance/v2/:chainId/dca/swap</code>
        </p>
        <h3 className="text-lg font-semibold mt-4 mb-2">Path Parameters</h3>
        <div className={tableWrapper}>
          <table className={tableClass}>
            <thead>
              <tr>
                <th className={thClass}>Name</th>
                <th className={thClass}>Type</th>
                <th className={thClass}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={tdClass}>chainId *</td>
                <td className={tdClass}>number</td>
                <td className={tdClass}>8453, 146, 80094, 1, 999 — Chain name or Chain ID (<Link href="/docs/supported-chains#dca-api-chains" className="text-primary hover:underline">supported chains</Link>)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="font-medium mb-1 mt-4">Example</p>
        <p className="text-muted-foreground text-sm mb-1">url: <code className="rounded bg-muted px-1 py-0.5">https://open-api.openocean.finance/v2/8453/dca/swap</code></p>
        <p className="text-muted-foreground text-sm mb-2">body:</p>
        <CodeBlock
          code={`{
  "makerAmount": "20000000", // total amount with decimals, there's min. amt requirements for each swap set.
  "signature": "0x37e6...", // user sign message, wallet.signMessage(message)
  "orderMaker": "0xB3cb...", // wallet address
  "makerAsset": "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913", // token address
  "takerAsset": "0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA", // token address
  "time": 300, // interval time, s
  "times": 2, // frequency
  "minPrice": "0.9", // optional, price range
  "maxPrice": "1.1", // optional, price range
  "referrer": "0xxxxxxxxxxxxxxxxxxx", // optional. EOA address to set up fees and track data from your end.
  "referrerFee": "1", // optional. "1"=1%. Platform fee on your end. Range 0-5%
  "enabledDexIds": "", // optional. 'index' from dexList. enabledDexIds has higher priority than disabledDexIds
  "disabledDexIds": "12,49,51,52" // optional. 'index' from dexList to disable, comma-separated e.g. "2,6,9"
}`}
          language="javascript"
        />
        <Callout type="info" title="Platform fee" className="mt-4">
          <p>To set a platform fee, include <code className="rounded bg-muted px-1 py-0.5">referrer</code> and <code className="rounded bg-muted px-1 py-0.5">referrerFee</code>. <code className="rounded bg-muted px-1 py-0.5">referrer</code> is an EOA address to collect the fee and track data. <code className="rounded bg-muted px-1 py-0.5">referrerFee</code> is the percentage, e.g. &quot;1&quot; = 1%. OpenOcean takes 20% of the platform fee by default. Set 0 or omit to not charge.</p>
        </Callout>
        <Callout type="info" title="Min amount and interval" className="mt-4">
          <p><strong>Min. required amount per transaction:</strong></p>
          <ul className="list-disc list-inside mt-1 space-y-0.5">
            <li>Ethereum: at least $30</li>
            <li>Other EVM Chains: at least $5</li>
          </ul>
          <p className="mt-2">E.g. If <code className="rounded bg-muted px-1 py-0.5">times</code> is 2, <code className="rounded bg-muted px-1 py-0.5">makerAmount</code> must be at least $10 so each swap is over $5. Time interval must be at least 60s.</p>
        </Callout>
        <p className="font-medium mb-1 mt-4">response</p>
        <CodeBlock code={`{\n  code: 200\n}`} language="javascript" />
      </section>

      <section id="cancel-dca-order" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">2.Cancel DCA order</h2>
        <p className="text-muted-foreground mb-2">
          <span className="px-2 py-0.5 rounded bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-mono">POST</span>{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">https://open-api.openocean.finance/v2/:chainId/dca/cancel</code>
        </p>
        <h3 className="text-lg font-semibold mt-4 mb-2">Path Parameters</h3>
        <div className={tableWrapper}>
          <table className={tableClass}>
            <thead>
              <tr>
                <th className={thClass}>Name</th>
                <th className={thClass}>Type</th>
                <th className={thClass}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className={tdClass}>chainId *</td><td className={tdClass}>number</td><td className={tdClass}>8453, 146, 80094, 1, 999</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-lg font-semibold mt-4 mb-2">Request Body</h3>
        <div className={tableWrapper}>
          <table className={tableClass}>
            <thead>
              <tr>
                <th className={thClass}>Name</th>
                <th className={thClass}>Type</th>
                <th className={thClass}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className={tdClass}>orderHash *</td><td className={tdClass}>string</td><td className={tdClass}>orderHash from response</td></tr>
              <tr><td className={tdClass}>signature *</td><td className={tdClass}>string</td><td className={tdClass}>signature orderHash</td></tr>
            </tbody>
          </table>
        </div>
        <p className="font-medium mb-1 mt-4">Example</p>
        <p className="text-muted-foreground text-sm mb-1">url: <code className="rounded bg-muted px-1 py-0.5">https://open-api.openocean.finance/v2/8453/dca/cancel</code></p>
        <p className="text-muted-foreground text-sm mb-2">body:</p>
        <CodeBlock code={`{\n  "orderHash": "0x1e48...",\n  "signature": "0xy23d43..."\n}`} language="javascript" />
        <p className="font-medium mb-1 mt-4">response</p>
        <CodeBlock code={`{\n  code: 200,\n}`} language="javascript" />
      </section>

      <section id="get-dca-order-by-address" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">3.Get DCA order by address</h2>
        <p className="text-muted-foreground mb-2">
          <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-mono">GET</span>{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">https://open-api.openocean.finance/v2/:chainId/dca/address/:address</code>
        </p>
        <h3 className="text-lg font-semibold mt-4 mb-2">Path Parameters</h3>
        <div className={tableWrapper}>
          <table className={tableClass}>
            <thead>
              <tr>
                <th className={thClass}>Name</th>
                <th className={thClass}>Type</th>
                <th className={thClass}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className={tdClass}>chainId *</td><td className={tdClass}>number</td><td className={tdClass}>8453, 146, 80094, 1, 999</td></tr>
              <tr><td className={tdClass}>address *</td><td className={tdClass}>string</td><td className={tdClass}>wallet address</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-lg font-semibold mt-4 mb-2">Query Parameters</h3>
        <div className={tableWrapper}>
          <table className={tableClass}>
            <thead>
              <tr>
                <th className={thClass}>Name</th>
                <th className={thClass}>Type</th>
                <th className={thClass}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className={tdClass}>statuses</td><td className={tdClass}>array</td><td className={tdClass}>status code: 1-unfill, 3-cancel, 4-filled, 5-pending, 6-hash not exist, 7-expire, default [1,3,4]</td></tr>
              <tr><td className={tdClass}>limit</td><td className={tdClass}>number</td><td className={tdClass}>limit count</td></tr>
            </tbody>
          </table>
        </div>
        <p className="font-medium mb-1 mt-4">200 OK</p>
        <CodeBlock
          code={`{
  "code": 200,
  "data": [
    {
      "chainId": 8453,
      "makerAmount": "100000000",
      "takerAmount": "200000000000000000000",
      "orderHash": "0x......",
      "createDateTime": "2025-04-09T00:19:52.000Z",
      "orderMaker": "0x......",
      "expireTime": "2025-04-17T00:19:53.000Z",
      "statuses": 1,
      "time": 86400,
      "times": 8,
      "haveFilled": null,
      "minPrice": null,
      "maxPrice": null,
      "data": {
        "makerAsset": "0x.....",
        "makerAssetSymbol": "USDC",
        "makerAssetDecimals": 6,
        "makerAssetIcon": "https://s3.openocean.finance/token_logos/logos/1697507306331_35406629884386076.png",
        "takerAsset": "0x.....",
        "takerAssetSymbol": "ALB",
        "takerAssetDecimals": 18,
        "takerAssetIcon": "https://s3.openocean.finance/token_logos/logos/1693363980475_12272411021892027.png"
      }
    }
  ]
}`}
          language="javascript"
        />
      </section>

      <section id="get-all-chain-dca-order" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">4.Get all chain DCA order by address</h2>
        <p className="text-muted-foreground mb-2">
          <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-mono">GET</span>{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">https://open-api.openocean.finance/v2/dca/address/:address</code>
        </p>
        <h3 className="text-lg font-semibold mt-4 mb-2">Path Parameters</h3>
        <div className={tableWrapper}>
          <table className={tableClass}>
            <thead>
              <tr>
                <th className={thClass}>Name</th>
                <th className={thClass}>Type</th>
                <th className={thClass}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className={tdClass}>address *</td><td className={tdClass}>string</td><td className={tdClass}>wallet address</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-lg font-semibold mt-4 mb-2">Query Parameters</h3>
        <div className={tableWrapper}>
          <table className={tableClass}>
            <thead>
              <tr>
                <th className={thClass}>Name</th>
                <th className={thClass}>Type</th>
                <th className={thClass}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className={tdClass}>statuses</td><td className={tdClass}>array</td><td className={tdClass}>status code: 1-unfill, 3-cancel, 4-filled, 5-pending, 6-hash not exist, 7-expire, default [1,3,4]</td></tr>
              <tr><td className={tdClass}>limit</td><td className={tdClass}>number</td><td className={tdClass}>limit count</td></tr>
            </tbody>
          </table>
        </div>
        <p className="font-medium mb-1 mt-4">200 OK</p>
        <CodeBlock
          code={`{
  "code": 200,
  "data": [
    {
      "chainId": 8453,
      "makerAmount": "100000000",
      "takerAmount": "200000000000000000000",
      "orderHash": "0x......",
      "createDateTime": "2025-04-09T00:19:52.000Z",
      "orderMaker": "0x......",
      "expireTime": "2025-04-17T00:19:53.000Z",
      "statuses": 1,
      "time": 86400,
      "times": 8,
      "haveFilled": null,
      "minPrice": null,
      "maxPrice": null,
      "data": {
        "makerAsset": "0x.....",
        "makerAssetSymbol": "USDC",
        "makerAssetDecimals": 6,
        "makerAssetIcon": "https://s3.openocean.finance/token_logos/logos/1697507306331_35406629884386076.png",
        "takerAsset": "0x.....",
        "takerAssetSymbol": "ALB",
        "takerAssetDecimals": 18,
        "takerAssetIcon": "https://s3.openocean.finance/token_logos/logos/1693363980475_12272411021892027.png"
      }
    }
  ]
}`}
          language="javascript"
        />
      </section>

      <section id="get-dca-order-execution-details" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">5.Get DCA order execution details</h2>
        <p className="text-muted-foreground mb-2">
          <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-mono">GET</span>{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">https://open-api.openocean.finance/v2/:chainId/dca/fill/:orderHash</code>
        </p>
        <h3 className="text-lg font-semibold mt-4 mb-2">Path Parameters</h3>
        <div className={tableWrapper}>
          <table className={tableClass}>
            <thead>
              <tr>
                <th className={thClass}>Name</th>
                <th className={thClass}>Type</th>
                <th className={thClass}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className={tdClass}>chainId</td><td className={tdClass}>number</td><td className={tdClass}>8453, 146, 80094, 1, 999</td></tr>
              <tr><td className={tdClass}>orderHash</td><td className={tdClass}>string</td><td className={tdClass}>order hash</td></tr>
            </tbody>
          </table>
        </div>
        <p className="font-medium mb-1 mt-4">200 OK</p>
        <CodeBlock
          code={`{
  "code": 200,
  "data": [
    {
      "orderHash": "0x....",
      "txHash": "0x....",
      "filledOrderTime": "2025-08-06T15:13:00.000Z",
      "payment": "0",
      "paymentValue": "0",
      "status": "success",
      "reason": ""
    },
    {
      "orderHash": "0x....",
      "txHash": "0x....",
      "filledOrderTime": "2025-08-05T14:15:24.000Z",
      "payment": "0",
      "paymentValue": "0",
      "status": "success",
      "reason": ""
    }
  ]
}`}
          language="javascript"
        />
      </section>
    </>
  )
}
