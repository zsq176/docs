"use client"

import Link from "next/link"
import { CodeBlock } from "@/components/docs/code-block"

const tableWrapper = "overflow-x-auto rounded-xl border border-border"
const tableClass = "w-full border-collapse"
const thClass = "text-left py-3 px-4 font-medium border-b border-border bg-muted/30"
const tdClass = "py-3 px-4 border-b border-border"

export function SweepSwapApiApiContent() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">API</h1>
      </section>

      <section id="multi-swap-quote" className="scroll-mt-20">
        <h2 className="text-2xl font-semibold">Multi_swap_quote</h2>
        <ul className="mt-2 list-inside space-y-1 text-muted-foreground">
          <li>url: https://open-api.openocean.finance/v3/:chain/multi_swap_quote</li>
          <li>method: post</li>
        </ul>
        <h3 className="mt-6 text-lg font-semibold">params:</h3>
        <div className={tableWrapper}>
          <table className={tableClass}>
            <thead>
              <tr>
                <th className={thClass}>Parameter</th>
                <th className={thClass}>Type</th>
                <th className={thClass}>Example</th>
                <th className={thClass}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">chain</code></td>
                <td className={tdClass}>string</td>
                <td className={tdClass}>arbitrum</td>
                <td className={tdClass}>arbitrum</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">inToken</code></td>
                <td className={tdClass}>array</td>
                <td className={tdClass}></td>
                <td className={tdClass}>inTokens</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">inToken.inTokenSymbol</code></td>
                <td className={tdClass}>string</td>
                <td className={tdClass}>ARB</td>
                <td className={tdClass}>token symbol</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">inToken.inTokenAddress</code></td>
                <td className={tdClass}>string</td>
                <td className={tdClass}>0x912CE59144191C1204E64559FE8253a0e49E6548</td>
                <td className={tdClass}>token address</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">inToken.amount</code></td>
                <td className={tdClass}>string</td>
                <td className={tdClass}>2000000000000000000</td>
                <td className={tdClass}>token amount</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">inToken.slippage</code></td>
                <td className={tdClass}>number</td>
                <td className={tdClass}>100</td>
                <td className={tdClass}>100 equals 1%</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">outToken</code></td>
                <td className={tdClass}>object</td>
                <td className={tdClass}></td>
                <td className={tdClass}>outToken</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">outToken.outTokenSymbol</code></td>
                <td className={tdClass}>string</td>
                <td className={tdClass}>USDT</td>
                <td className={tdClass}>token symbol</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">outToken.outTokenAddress</code></td>
                <td className={tdClass}>string</td>
                <td className={tdClass}>0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9</td>
                <td className={tdClass}>token address</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">gasPrice</code></td>
                <td className={tdClass}>number</td>
                <td className={tdClass}>10000000</td>
                <td className={tdClass}>gas price</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">referrer</code></td>
                <td className={tdClass}>string?</td>
                <td className={tdClass}>0x0000000000000000000000000000000000000000</td>
                <td className={tdClass}>Please contact us for a unique referrer parameter</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">disabledDexIds</code></td>
                <td className={tdClass}>string?</td>
                <td className={tdClass}></td>
                <td className={tdClass}>Enter the &apos;index&apos; number of dexs through <Link href="/docs/swap-api/v4#get-dexes-list" className="text-primary hover:underline">dexList</Link> endpoint to disable single or multiple dexs separated by commas, e.g. <code className="text-sm bg-muted px-1 rounded">disabledDexIds</code>: &quot;2,6,9&quot;.</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">account</code></td>
                <td className={tdClass}>string</td>
                <td className={tdClass}>0xBd5c13e01060D17a159D5acF3BDa97bf7E6F59AC</td>
                <td className={tdClass}>user&apos;s address</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-6 font-medium">example:</p>
        <p className="mt-2 text-sm text-muted-foreground">body:</p>
        <CodeBlock
          language="javascript"
          code={`{
   "inToken": [
       {
           "inTokenSymbol": "ETH",
           "inTokenAddress": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
           "amount": "1000000000000000000",
           "slippage": 1000
       },
       {
           "inTokenSymbol": "ARB",
           "inTokenAddress": "0x912CE59144191C1204E64559FE8253a0e49E6548",
           "amount": "2000000000000000000",
           "slippage": 1000
       }
   ],
   "outToken": {
       "outTokenSymbol": "USDT",
       "outTokenAddress": "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9"
   },
   "gasPrice": 10000000,
   "referrer": "0x3487ef9f9b36547e43268b8f0e2349a226c70b53",
   "disabledDexIds": "",
   "account": "0xBd5c13e01060D17a159D5acF3BDa97bf7E6F59AC"
}`}
        />
        <p className="mt-4 text-sm text-muted-foreground">response:</p>
        <CodeBlock
          language="javascript"
          code={`{
   "inToken": [
       {
           "address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
           "decimals": 18,
           "symbol": "ETH",
           "name": "Ether"
       },
       {
           "address": "0x912CE59144191C1204E64559FE8253a0e49E6548",
           "decimals": 18,
           "symbol": "ARB",
           "name": "Arbitrum"
       }
   ],
   "outToken": {
       "address": "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
       "decimals": 6,
       "symbol": "USDT",
       "name": "Tether USD"
   },
   "from": "0xBd5c13e01060D17a159D5acF3BDa97bf7E6F59AC",
   "to": "0xd1b54Dd4fca2b680d00beF0C5D66806a643D0e41",
   "swap": [
       {
           "inAmount": "1000000000000000000",
           "outAmount": "2638324915",
           "minOutAmount": "2374492423"
       },
       {
           "inAmount": "2000000000000000000",
           "outAmount": "1130078",
           "minOutAmount": "1017070"
       }
   ],
   "gasPrice": "10000000",
   "chainId": 42161,
   "value": "1002999232984360618",
   "data": "0x............."
}`}
        />
      </section>
    </div>
  )
}
