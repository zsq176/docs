"use client"

import { CodeBlock } from "@/components/docs/code-block"

const tableWrapper = "overflow-x-auto rounded-xl border border-border"
const tableClass = "w-full border-collapse"
const thClass = "text-left py-3 px-4 font-medium border-b border-border bg-muted/30"
const tdClass = "py-3 px-4 border-b border-border"

export function ZapApiApiContent() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">API</h1>
      </section>

      <section id="get-route" className="scroll-mt-20">
        <h2 className="text-2xl font-semibold">1. Get Route</h2>
        <ul className="mt-2 list-inside space-y-1 text-muted-foreground">
          <li>Path：/zap/&#123;chain&#125;/in/route</li>
          <li>Method: POST</li>
        </ul>
        <h3 className="mt-6 text-lg font-semibold">Path Parameters:</h3>
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
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">chain</code></td>
                <td className={tdClass}>true</td>
                <td className={tdClass}>string</td>
                <td className={tdClass}>8453</td>
                <td className={tdClass}>chainId</td>
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
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">dex</code></td>
                <td className={tdClass}>true</td>
                <td className={tdClass}>string</td>
                <td className={tdClass}>UNISWAP_V2</td>
                <td className={tdClass}>pool type, supports UNISWAP_V2, UNISWAP_V3</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">pool</code></td>
                <td className={tdClass}>true</td>
                <td className={tdClass}>string</td>
                <td className={tdClass}>0xc18f50...</td>
                <td className={tdClass}>address of the pool to zap into</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">positionTickUpper</code></td>
                <td className={tdClass}>false</td>
                <td className={tdClass}>number</td>
                <td className={tdClass}>-276350</td>
                <td className={tdClass}>max tick of the position, required if zap into a uniswapV3 pool.</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">positionTickLower</code></td>
                <td className={tdClass}>false</td>
                <td className={tdClass}>number</td>
                <td className={tdClass}>-276450</td>
                <td className={tdClass}>min tick of the position, required if zap into a uniswapV3 pool.</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">tokens</code></td>
                <td className={tdClass}>true</td>
                <td className={tdClass}>array</td>
                <td className={tdClass}></td>
                <td className={tdClass}>the tokens to use as zap source</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">tokens[n].token</code></td>
                <td className={tdClass}>true</td>
                <td className={tdClass}>string</td>
                <td className={tdClass}>0x833589...</td>
                <td className={tdClass}>token address</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">tokens[n].amount</code></td>
                <td className={tdClass}>true</td>
                <td className={tdClass}>string</td>
                <td className={tdClass}>1000000</td>
                <td className={tdClass}>token amount</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">slippage</code></td>
                <td className={tdClass}>true</td>
                <td className={tdClass}>string</td>
                <td className={tdClass}>100</td>
                <td className={tdClass}>maximum slippage tolerance in basis points (0.01%), used for aggregator (exceeding which the transaction will revert) and pool swap during zap (for additional zapping and for refund). From 0 to 5,000 inclusively. Example: 1 for 0.01%.</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">referrer</code></td>
                <td className={tdClass}>false</td>
                <td className={tdClass}>string</td>
                <td className={tdClass}>0x.....</td>
                <td className={tdClass}>referrer address</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">referrerFee</code></td>
                <td className={tdClass}>false</td>
                <td className={tdClass}>number</td>
                <td className={tdClass}>100</td>
                <td className={tdClass}>Specify the percentage of in-token you wish to receive from the transaction, within the range of 0% to 50%, with 1% represented as 100, in the range of 0.01 to 50. e.g. 1.2% fee set as 120. Ignored if referrer is empty. By default, OpenOcean shares 30% of the fee. Please contact us if you wish to modify this rate.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 font-medium">example：</p>
        <CodeBlock
          language="javascript"
          code={`{
    "dex": "UNISWAP_V3",
    "pool": "0xc18f50d6a832f12f6dcaaeee8d0c87a65b96787e",
    "positionTickUpper": -276305,
    "positionTickLower": -276405,
    "tokens": [
        {
            "token": "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
            "amount": 100000000
        }
    ],
    "slippage": 100,
    "referrer": "0xD01ef7C0A5d8c432fc2d1a85c66cF2327362E5C6"
}`}
        />

        <p className="mt-4 font-medium">Response：</p>
        <CodeBlock
          language="javascript"
          code={`{
    "code": 200,
    "data": {
        "chainId": 8453,
        "poolDetail": {
            "poolId": "0xC18F50d6A832f12F6DcAaeEe8D0c87A65B96787E",
            "dex": "UNISWAP_V3",
            "token0": {
                "symbol": "DAI",
                "name": "Dai",
                "address": "0x50c5725949a6f0c72e6c4a641f24049a917db0cb",
                "decimals": 18,
                "price": 0.999871
            },
            "token1": {
                "symbol": "USDC",
                "name": "USDC",
                "address": "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
                "decimals": 6,
                "price": 0.99988
            }
        },
        "zapDetails": {
            "initialAmountUsd": 99.938006,
            "actions": [
                {
                    "type": "ACTION_TYPE_PROTOCOL_FEE",
                    "data": {
                        "address": "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
                        "amount": "50000",
                        "amountUsd": 0.049994000000000004,
                        "zapFeeRate": 0.0005
                    }
                },
                {
                    "type": "ACTION_TYPE_AGGREGATOR_SWAP",
                    "data": {
                        "tokenIn": {
                            "address": "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
                            "amount": "36601537",
                            "amountUsd": 36.59714481556
                        },
                        "tokenOut": {
                            "address": "0x50c5725949a6f0c72e6c4a641f24049a917db0cb",
                            "amount": "36662253061107726432",
                            "amountUsd": 36.65752363046284
                        },
                        "swapImpact": 0.0016498230997837053
                    }
                },
                {
                    "type": "ACTION_TYPE_ADD_LIQUIDITY",
                    "data": {
                        "token0": {
                            "address": "0x50c5725949a6f0c72e6c4a641f24049a917db0cb",
                            "amount": "36662253061107726432",
                            "amountUsd": 36.65752363046284
                        },
                        "token1": {
                            "address": "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
                            "amount": "63348463",
                            "amountUsd": 63.34086118444
                        },
                        "liquidity": "20034656042451628"
                    }
                }
            ],
            "addedLiquidityUsd": 99.99838481490283,
            "zapImpact": 0.0006041626936486331
        },
        "route": "MzYwNjAzODY5MmMzZDMyNzQyOGExNjgwODgyNzdm..........w==",
        "routerAddress": "0xbD2c0b5d820AFa4C2cF9A82da310E6248d2f2323"
    }
}`}
        />
      </section>

      <section id="build-route" className="scroll-mt-20">
        <h2 className="text-2xl font-semibold">2. Build Route</h2>
        <ul className="mt-2 list-inside space-y-1 text-muted-foreground">
          <li>Path：/zap/&#123;chain&#125;/in/route/build</li>
          <li>Method: POST</li>
        </ul>
        <h3 className="mt-6 text-lg font-semibold">Path Parameters:</h3>
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
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">chain</code></td>
                <td className={tdClass}>true</td>
                <td className={tdClass}>string</td>
                <td className={tdClass}>8453</td>
                <td className={tdClass}>chainId</td>
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
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">route</code></td>
                <td className={tdClass}>true</td>
                <td className={tdClass}>string</td>
                <td className={tdClass}>MzYwNjAz.....</td>
                <td className={tdClass}>get from /in/route</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">deadline</code></td>
                <td className={tdClass}>false</td>
                <td className={tdClass}>number</td>
                <td className={tdClass}>1749718309</td>
                <td className={tdClass}>Expiration time in seconds</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">account</code></td>
                <td className={tdClass}>true</td>
                <td className={tdClass}>string</td>
                <td className={tdClass}>0x5fb7a....</td>
                <td className={tdClass}>the wallet that receiving the new position.</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">permits</code></td>
                <td className={tdClass}>false</td>
                <td className={tdClass}>array</td>
                <td className={tdClass}></td>
                <td className={tdClass}>the tokens to use permit2</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">permits[n].token</code></td>
                <td className={tdClass}>true</td>
                <td className={tdClass}>string</td>
                <td className={tdClass}>0x833589...</td>
                <td className={tdClass}>token address</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className={tdClass}><code className="text-sm bg-muted px-1.5 py-0.5 rounded">permits[n].permit</code></td>
                <td className={tdClass}>true</td>
                <td className={tdClass}>string</td>
                <td className={tdClass}>0x30f28...</td>
                <td className={tdClass}>permit2 data</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 font-medium">example：</p>
        <CodeBlock
          language="javascript"
          code={`{
    "route": "MzYwNjAzODY5MmMzZDMyNz......5NjJlNDUwM2UzNg==",
    "deadline": 1749718309,
    "account": "0x5fb7a1B487BDdFF4d6Dc83dc14054b2Be967eEa1",
    "permits": [
        {
            "token": "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
            "permit": "0x30f28b7a00...........00000000000000000000000"
        }
    ]
}`}
        />

        <p className="mt-4 font-medium">Response：</p>
        <CodeBlock
          language="json"
          code={`{
    "code": 200,
    "data": {
        "zapDetails": {
            "initialAmountUsd": 99.938006,
            "actions": [
                {
                    "type": "ACTION_TYPE_PROTOCOL_FEE",
                    "data": {
                        "address": "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
                        "amount": "50000",
                        "amountUsd": 0.049994000000000004,
                        "zapFeeRate": 0.0005
                    }
                },
                {
                    "type": "ACTION_TYPE_AGGREGATOR_SWAP",
                    "data": {
                        "tokenIn": {
                            "address": "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
                            "amount": "36605350",
                            "amountUsd": 36.600957358
                        },
                        "tokenOut": {
                            "address": "0x50c5725949a6f0c72e6c4a641f24049a917db0cb",
                            "amount": "36666086677057471419",
                            "amountUsd": 36.66135675187613
                        },
                        "swapImpact": 0.0016502134981155952
                    }
                },
                {
                    "type": "ACTION_TYPE_ADD_LIQUIDITY",
                    "data": {
                        "token0": {
                            "address": "0x50c5725949a6f0c72e6c4a641f24049a917db0cb",
                            "amount": "36666086677057471419",
                            "amountUsd": 36.66135675187613
                        },
                        "token1": {
                            "address": "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
                            "amount": "63344650",
                            "amountUsd": 63.337048642
                        },
                        "liquidity": "20034658756254530"
                    }
                }
            ],
            "addedLiquidityUsd": 99.99840539387613,
            "zapImpact": 0.0006043686110379761
        },
        "to": "0xbD2c0b5d820AFa4C2cF9A82da310E6248d2f2323",
        "value": "0",
        "data": "0x22f894c800000000000.........000000000000000000"
    }
}`}
        />
      </section>
    </div>
  )
}
