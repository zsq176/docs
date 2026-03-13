"use client"

import Link from "next/link"
import { CodeBlock } from "@/components/docs/code-block"

const tableWrapper = "overflow-x-auto rounded-xl border border-border"
const tableClass = "w-full border-collapse"
const thClass = "text-left py-3 px-4 font-medium border-b border-border bg-muted/30"
const tdClass = "py-3 px-4 border-b border-border"

export function TicketApiApiContent() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">API</h1>
        <p className="mt-4 text-muted-foreground max-w-3xl">
          This support Ticket API is designed for users who encounter errors or issues while using the OpenOcean quote or swap API. By utilizing this API, our system will assist you in identifying and analyzing the problem, enabling a timely resolution. To ensure effective support, you will be required to provide accurate and relevant parameters and information.
        </p>
      </section>

      <section id="submit-ticket" className="scroll-mt-20">
        <h2 className="text-2xl font-semibold">1. Submit a Ticket</h2>
        <ul className="mt-2 list-inside space-y-1 text-muted-foreground">
          <li>Path：/v4/&#123;referrer&#125;/ticket</li>
          <li>Method: POST</li>
        </ul>
        <h3 className="mt-6 text-lg font-semibold">Request param:</h3>
        <div className={tableWrapper}>
          <table className={tableClass}>
            <thead>
              <tr>
                <th className={thClass}>Parameter</th>
                <th className={thClass}>isRequired</th>
                <th className={thClass}>Type</th>
                <th className={thClass}>Example</th>
                <th className={thClass}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">referrer</code></td>
                <td className={tdClass}>true</td>
                <td className={tdClass}>string</td>
                <td className={tdClass}>0x06d96e...</td>
                <td className={tdClass}>referrer address, If you don&apos;t have one, please <a href="https://t.me/OpenOceanAPI" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">contact us</a></td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 className="mt-6 text-lg font-semibold">Request body:</h3>
        <div className={tableWrapper}>
          <table className={tableClass}>
            <thead>
              <tr>
                <th className={thClass}>Parameter</th>
                <th className={thClass}>isRequired</th>
                <th className={thClass}>Type</th>
                <th className={thClass}>Example</th>
                <th className={thClass}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">hash</code></td>
                <td className={tdClass}>false</td>
                <td className={tdClass}>string</td>
                <td className={tdClass}>0x06d96e...</td>
                <td className={tdClass}>transaction hash</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">question</code></td>
                <td className={tdClass}>false</td>
                <td className={tdClass}>string</td>
                <td className={tdClass}>question</td>
                <td className={tdClass}>question</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">account</code></td>
                <td className={tdClass}>true</td>
                <td className={tdClass}>string</td>
                <td className={tdClass}>0xddc0...</td>
                <td className={tdClass}>user&apos;s wallet address</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">quote</code></td>
                <td className={tdClass}>false</td>
                <td className={tdClass}>object</td>
                <td className={tdClass}>{}</td>
                <td className={tdClass}>quote info</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">transaction</code></td>
                <td className={tdClass}>false</td>
                <td className={tdClass}>object</td>
                <td className={tdClass}>{}</td>
                <td className={tdClass}>transaction info</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">error</code></td>
                <td className={tdClass}>false</td>
                <td className={tdClass}>object</td>
                <td className={tdClass}>{}</td>
                <td className={tdClass}>error info</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">chain</code></td>
                <td className={tdClass}>false</td>
                <td className={tdClass}>number</td>
                <td className={tdClass}>56</td>
                <td className={tdClass}>chain code</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">version</code></td>
                <td className={tdClass}>false</td>
                <td className={tdClass}>string</td>
                <td className={tdClass}>v2</td>
                <td className={tdClass}>quote v2/v4</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 font-medium">Request body example：</p>
        <CodeBlock
          language="javascript"
          code={`{
    "hash": "0x0b5a4b1ab8ca47a2a2dbf4e6a998b39f6d40caed14f0ac3f3faaef27c8959593",
    "chain": 56,
    "version": "v2",
    "question": "question",
    "account": "0x2FF855378Cd29f120CDF9d675E959cb5422ec5f2",
    "quote": {
      "quoteType": "swap",
      "inTokenSymbol": "BNB",
      "inTokenAddress": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      "outTokenSymbol": "USDT",
      "outTokenAddress": "0x55d398326f99059ff775485246999027b3197955",
      "amountAll": 1,
      "amount": 1000000000000000000,
      "gasPrice": 1100000000,
      "slippage": 100,
      "referrer": "0x3487ef9f9b36547e43268b8f0e2349a226c70b53",
      "disabledDexIds": ""
    },
    "transaction": {
        "from": "",
        "to": "",
        "value": "",
        "data": "",
        "gasPrice": "",
        "gasLimit": ""
    },
    "error": {
        "code": 400,
        "error": "no router"
    },
}`}
        />
        <p className="mt-4 font-medium">Response：</p>
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
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">ticket</code></td>
                <td className={tdClass}>string</td>
                <td className={tdClass}>5298615415</td>
                <td className={tdClass}>ticket code</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 font-medium">Response example：</p>
        <CodeBlock
          language="javascript"
          code={`{
    "code": 0,
    "msg": "ok",
    "data": {
        "ticket": "5298615415"
    }
}`}
        />
      </section>

      <section id="get-ticket-list" className="scroll-mt-20">
        <h2 className="text-2xl font-semibold">2. Get the ticket list through referrer address</h2>
        <ul className="mt-2 list-inside space-y-1 text-muted-foreground">
          <li>Path：/v4/&#123;referrer&#125;/ticket</li>
          <li>Method: GET</li>
        </ul>
        <h3 className="mt-6 text-lg font-semibold">Request param:</h3>
        <div className={tableWrapper}>
          <table className={tableClass}>
            <thead>
              <tr>
                <th className={thClass}>Parameter</th>
                <th className={thClass}>isRequired</th>
                <th className={thClass}>Type</th>
                <th className={thClass}>Example</th>
                <th className={thClass}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">referrer</code></td>
                <td className={tdClass}>true</td>
                <td className={tdClass}>string</td>
                <td className={tdClass}>0x06d96e...</td>
                <td className={tdClass}>referrer address, if you dont have one, can check <Link href="/docs/swap-api/v4" className="text-primary hover:underline">here</Link> to add one.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 font-medium">Response：</p>
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
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">hash</code></td>
                <td className={tdClass}>string</td>
                <td className={tdClass}>0x123c8...ce27</td>
                <td className={tdClass}>transaction hash</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">question</code></td>
                <td className={tdClass}>string</td>
                <td className={tdClass}>question</td>
                <td className={tdClass}>question</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">process</code></td>
                <td className={tdClass}>string</td>
                <td className={tdClass}>01</td>
                <td className={tdClass}>process</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">remark</code></td>
                <td className={tdClass}>string</td>
                <td className={tdClass}>ok</td>
                <td className={tdClass}>remark</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">answer</code></td>
                <td className={tdClass}>string</td>
                <td className={tdClass}>answer</td>
                <td className={tdClass}>answer</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">account</code></td>
                <td className={tdClass}>string</td>
                <td className={tdClass}>0xddc0...</td>
                <td className={tdClass}>user&apos;s wallet address</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">params</code></td>
                <td className={tdClass}>object</td>
                <td className={tdClass}>{}</td>
                <td className={tdClass}>params info</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">createAt</code></td>
                <td className={tdClass}>Date</td>
                <td className={tdClass}><code className="text-xs">2025-04-07T08:04:46.000Z</code></td>
                <td className={tdClass}>create time</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 font-medium">Response example：</p>
        <CodeBlock
          language="javascript"
          code={`{
    "code": 200,
    "data": [
            {
                "hash": "0xcaf525986a879ca5017ca9b934a402aa55232c5e983b245937d39a3583c2c49a",
                "remark": null,
                "process": "01",
                "question": "question",
                "answer": null,
                "params": {
                    "quote": {
                        "chain": "bsc",
                        "inTokenAddress": "0x55d398326f99059ff775485246999027b3197955",
                        "outTokenAddress": "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
                        "amount": 5,
                        "gasPrice": 1,
                        "slippage": 1,
                        "account": "0x2FF855378Cd29f120CDF9d675E959cb5422ec5f2",
                        "referrer": "0xD4eb4cbB1ECbf96a1F0C67D958Ff6fBbB7B037BB",
                        "referrerFee": "",
                        "enabledDexIds": "",
                        "disabledDexIds": "",
                        "sender": ""
                    }
                },
                "account": "0x72f16Cae8F50Ad615AB5A8e231A496b2ace52532",
                "createAt": "2025-04-07T08:04:46.000Z"
            }
        ]
}`}
        />
      </section>
    </div>
  )
}
