"use client"

import Link from "next/link"
import { CodeBlock } from "@/components/docs/code-block"
import { Callout } from "@/components/docs/callout"

const tableWrapper = "overflow-x-auto rounded-xl border border-border"
const tableClass = "w-full border-collapse"
const thClass = "text-left py-3 px-4 font-medium border-b border-border bg-muted/30"
const tdClass = "py-3 px-4 border-b border-border"

export function LimitOrderApiApiContent() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">API</h1>
        <Callout type="info" title="">
          <p>
            View Github examples for{" "}
            <a href="https://github.com/openocean-finance/OpenOcean-API-Examples/tree/main/backend/limit-order-api-demo" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Backend</a>
            {" "}and{" "}
            <a href="https://github.com/openocean-finance/OpenOcean-API-Examples/tree/main/backend/swap-api-demo" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Frontend</a>.
            {" "}Check out the current supported chains{" "}
            <Link href="/docs/supported-chains#limit-order-api-chains" className="text-primary hover:underline">here</Link>.
          </p>
        </Callout>
      </section>

      <section id="api-reference" className="scroll-mt-20">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <p className="mt-2 text-muted-foreground">Create limit order</p>
      </section>

      <section id="create-limit-order" className="scroll-mt-20">
        <h2 className="text-2xl font-semibold">Create the limit order</h2>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className="px-2 py-1 rounded text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">POST</span>
          <code className="text-sm bg-muted px-3 py-1.5 rounded font-mono break-all">https://open-api.openocean.finance/v2/:chainId/limit-order</code>
        </div>

        <h3 className="mt-8 text-lg font-semibold">Path Parameters</h3>
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
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">chainId</code> <span className="text-destructive">*</span></td>
                <td className={tdClass}>Number</td>
                <td className={tdClass}>1, 56, 146, 8453, 80094</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="mt-6 text-lg font-semibold">Request Body</h3>
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
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">takerAsset</code> <span className="text-destructive">*</span></td>
                <td className={tdClass}>String</td>
                <td className={tdClass}>token address</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">makerAsset</code> <span className="text-destructive">*</span></td>
                <td className={tdClass}>String</td>
                <td className={tdClass}>token address</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">expireTime</code> <span className="text-destructive">*</span></td>
                <td className={tdClass}>String</td>
                <td className={tdClass}>limit order expire time(ms)</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">orderMaker</code> <span className="text-destructive">*</span></td>
                <td className={tdClass}>String</td>
                <td className={tdClass}>wallet address</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">signature</code> <span className="text-destructive">*</span></td>
                <td className={tdClass}>String</td>
                <td className={tdClass}>wallet.signMessage(message)</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">takerAmount</code> <span className="text-destructive">*</span></td>
                <td className={tdClass}>String</td>
                <td className={tdClass}>amount with decimals</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">makerAmount</code> <span className="text-destructive">*</span></td>
                <td className={tdClass}>String</td>
                <td className={tdClass}>amount with decimals</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">referrer</code></td>
                <td className={tdClass}>string (Optional)</td>
                <td className={tdClass}>An EOA wallet address used to identify partners and optionally receive a fee from users. If no fee is set up, it serves purely as a tracking tool to help our dev team provide better support and insights.</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">referrerFee</code></td>
                <td className={tdClass}>number (Optional)</td>
                <td className={tdClass}>Specify the percentage of in-token you wish to receive from the transaction, within the range of 0% to 5%, with 1% represented as &apos;1&apos;, in the range of 0.01 to 5. e.g. 1.2% fee set as 1.2. By default, OpenOcean shares 20% of the fee. Please contact us if you wish to modify this rate.</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">enabledDexIds</code></td>
                <td className={tdClass}>string (Optional)</td>
                <td className={tdClass}>Enter the &apos;index&apos; number of dexs through dexList. P.S. enableDexIds has higher priority compared with disabledDexIds</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">disabledDexIds</code></td>
                <td className={tdClass}>string (Optional)</td>
                <td className={tdClass}>Enter the &apos;index&apos; number of dexs through dexList endpoint to disable single or multiple dexs separated by commas, e.g. disabledDexIds: &quot;2,6,9&quot;.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 font-medium text-sm text-muted-foreground">200 OK https://open-api.openocean.finance/v1/56/limit-order</p>
        <CodeBlock language="json" code={`{
  "code": 200,
}`} />
      </section>

      <section id="cancel-limit-order" className="scroll-mt-20">
        <h2 className="text-2xl font-semibold">Cancel limit order</h2>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className="px-2 py-1 rounded text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">POST</span>
          <code className="text-sm bg-muted px-3 py-1.5 rounded font-mono break-all">https://open-api.openocean.finance/v2/:chainId/limit-order/cancelLimitOrder</code>
        </div>

        <h3 className="mt-8 text-lg font-semibold">Path Parameters</h3>
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
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">chainId</code> <span className="text-destructive">*</span></td>
                <td className={tdClass}>Number</td>
                <td className={tdClass}>1, 56, 146, 8453, 80094</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="mt-6 text-lg font-semibold">Request Body</h3>
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
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">orderHash</code> <span className="text-destructive">*</span></td>
                <td className={tdClass}>String</td>
                <td className={tdClass}>from response</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">signature</code></td>
                <td className={tdClass}>String</td>
                <td className={tdClass}>signature orderHash</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 font-medium text-sm text-muted-foreground">200 OK https://open-api.openocean.finance/v1/56/limit-order/cancelLimitOrder</p>
        <CodeBlock language="json" code={`{
  "code": 200
}`} />
      </section>

      <section id="get-limit-order-by-address" className="scroll-mt-20">
        <h2 className="text-2xl font-semibold">Get limit order by address</h2>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className="px-2 py-1 rounded text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400">GET</span>
          <code className="text-sm bg-muted px-3 py-1.5 rounded font-mono break-all">https://open-api.openocean.finance/v2/:chainId/limit-order/address/:address</code>
        </div>

        <h3 className="mt-8 text-lg font-semibold">Path Parameters</h3>
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
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">chainId</code> <span className="text-destructive">*</span></td>
                <td className={tdClass}>number</td>
                <td className={tdClass}>1, 56, 146, 8453, 80094</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">address</code> <span className="text-destructive">*</span></td>
                <td className={tdClass}>String</td>
                <td className={tdClass}>user&apos;s wallet address</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="mt-6 text-lg font-semibold">Query Parameters</h3>
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
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">statuses</code></td>
                <td className={tdClass}>String</td>
                <td className={tdClass}>eg: [1,2,3], 1-unfill, 2-fail, 3-cancel, 4-filled, 5-pending, 6- hash not exist, 7-expire</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">limit</code></td>
                <td className={tdClass}>number</td>
                <td className={tdClass}>limit count</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 font-medium text-sm text-muted-foreground">200 OK https://open-api.openocean.finance/v1/56/limit-order/address/0x9962962567200A590686Da7eb29933dB6711f0f2?statuses=[1,2,3]&limit=1</p>
        <CodeBlock
          language="json"
          code={`{
    "code": 200,
    "data": [
        {
            "chainId": 8453,
            "makerAmount": "500000000000000000000",
            "takerAmount": "2702702702702",
            "signature": "0x000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000041661329add47ed0f9433375d8be1e1f4ec1ade1d39a77f88d92ccbed712e88c0b64f7f0bbcfd42e4eb62642351c5cb19599e0517d73e4dfb2850241e3d5e3be741c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000",
            "orderHash": "0x3340338ac83a194cd6d2e7093d4e33c52357fc63cd52405cb0c6d9e512a508a5",
            "createDateTime": "2022-10-18T14:21:35.000Z",
            "orderMaker": "0x0000000000000000000000000000000000000001",
            "remainingMakerAmount": "500000000000000000000",
            "expireTime": "2022-10-19T14:21:36.000Z",
            "statuses": 1,
            "data": {
                "makerAsset": "0xe9e7cea3dedca5984780bafc599bd69add087d56",
                "makerAssetSymbol": "BUSD",
                "makerAssetDecimals": 18,
                "makerAssetIcon": "https://ethapi.openocean.finance/logos/bsc/0xe9e7cea3dedca5984780bafc599bd69add087d56.png",
                "takerAsset": "0x156ab3346823b651294766e23e6cf87254d68962",
                "takerAssetSymbol": "LUNA",
                "takerAssetDecimals": 6,
                "takerAssetIcon": "https://ethapi.openocean.finance/logos/bsc/0x9029fdfae9a03135846381c7ce16595c3554e10a1.png",
                "getMakerAmount": "0xf4a215c300000000000000000000000000000000000000000000001b1ae4d6e2ef5000000000000000000000000000000000000000000000000000000000027545a2706e",
                "getTakerAmount": "0x296637bf00000000000000000000000000000000000000000000001b1ae4d6e2ef5000000000000000000000000000000000000000027545a2706e",
                "makerAssetData": "0x",
                "takerAssetData": "0x",
                "salt": "762950589674",
                "permit": "0x",
                "predicate": "0x961d5b1e000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000001000000000000000000000000a8a0213bb2ce671e457ec14d08eb9d40e6333e2d00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002463592c2b00000000000000000000000000000000000000000000000000000000635007eb00000000000000000000000000000000000000000000000000000000",
                "interaction": "0x",
                "makingAmount": "500000000000000000000",
                "takingAmount": "2702702702702",
                "maker": "0x0000000000000000000000000000000000000001",
                "receiver": "0x0000000000000000000000000000000000000000",
                "allowedSender": "0x0000000000000000000000000000000000000000"
            },
            "makerRate": null,
            "takerRate": null,
            "referrer": "",
            "referrerFee": "0"
        }
    ]
}`}
        />
      </section>

      <section id="get-all-chain-limit-order-by-address" className="scroll-mt-20">
        <h2 className="text-2xl font-semibold">Get all chain limit order by address</h2>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className="px-2 py-1 rounded text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400">GET</span>
          <code className="text-sm bg-muted px-3 py-1.5 rounded font-mono break-all">https://open-api.openocean.finance/v2/limit-order/address/:address</code>
        </div>

        <h3 className="mt-8 text-lg font-semibold">Path Parameters</h3>
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
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">address</code> <span className="text-destructive">*</span></td>
                <td className={tdClass}>String</td>
                <td className={tdClass}>user&apos;s wallet address</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="mt-6 text-lg font-semibold">Query Parameters</h3>
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
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">statuses</code></td>
                <td className={tdClass}>String</td>
                <td className={tdClass}>eg: [1,2,3], 1-unfill, 2-fail, 3-cancel, 4-filled, 5-pending, 6- hash not exist, 7-expire</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">limit</code></td>
                <td className={tdClass}>number</td>
                <td className={tdClass}>limit count</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 font-medium text-sm text-muted-foreground">200 OK https://open-api.openocean.finance/v1/56/limit-order/address/0x9962962567200A590686Da7eb29933dB6711f0f2?statuses=[1,2,3]&limit=1</p>
        <CodeBlock
          language="json"
          code={`{
    "code": 200,
    "data": [
        {
            "chainId": 8453,
            "makerAmount": "500000000000000000000",
            "takerAmount": "2702702702702",
            "signature": "0x000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000041661329add47ed0f9433375d8be1e1f4ec1ade1d39a77f88d92ccbed712e88c0b64f7f0bbcfd42e4eb62642351c5cb19599e0517d73e4dfb2850241e3d5e3be741c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000",
            "orderHash": "0x3340338ac83a194cd6d2e7093d4e33c52357fc63cd52405cb0c6d9e512a508a5",
            "createDateTime": "2022-10-18T14:21:35.000Z",
            "orderMaker": "0x0000000000000000000000000000000000000001",
            "remainingMakerAmount": "500000000000000000000",
            "expireTime": "2022-10-19T14:21:36.000Z",
            "statuses": 1,
            "data": {
                "makerAsset": "0xe9e7cea3dedca5984780bafc599bd69add087d56",
                "makerAssetSymbol": "BUSD",
                "makerAssetDecimals": 18,
                "makerAssetIcon": "https://ethapi.openocean.finance/logos/bsc/0xe9e7cea3dedca5984780bafc599bd69add087d56.png",
                "takerAsset": "0x156ab3346823b651294766e23e6cf87254d68962",
                "takerAssetSymbol": "LUNA",
                "takerAssetDecimals": 6,
                "takerAssetIcon": "https://ethapi.openocean.finance/logos/bsc/0x9029fdfae9a03135846381c7ce16595c3554e10a1.png",
                "getMakerAmount": "0xf4a215c300000000000000000000000000000000000000000000001b1ae4d6e2ef5000000000000000000000000000000000000000000000000000000000027545a2706e",
                "getTakerAmount": "0x296637bf00000000000000000000000000000000000000000000001b1ae4d6e2ef5000000000000000000000000000000000000000027545a2706e",
                "makerAssetData": "0x",
                "takerAssetData": "0x",
                "salt": "762950589674",
                "permit": "0x",
                "predicate": "0x961d5b1e000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000001000000000000000000000000a8a0213bb2ce671e457ec14d08eb9d40e6333e2d00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002463592c2b00000000000000000000000000000000000000000000000000000000635007eb00000000000000000000000000000000000000000000000000000000",
                "interaction": "0x",
                "makingAmount": "500000000000000000000",
                "takingAmount": "2702702702702",
                "maker": "0x0000000000000000000000000000000000000001",
                "receiver": "0x0000000000000000000000000000000000000000",
                "allowedSender": "0x0000000000000000000000000000000000000000"
            },
            "makerRate": null,
            "takerRate": null,
            "referrer": "",
            "referrerFee": "0"
        }
    ]
}`}
        />
      </section>
    </div>
  )
}
