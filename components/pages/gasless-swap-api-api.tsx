"use client"

import * as React from "react"
import { CodeBlock } from "@/components/docs/code-block"

const tableWrapper = "overflow-x-auto rounded-xl border border-border my-4"
const tableClass = "w-full border-collapse"
const thClass = "text-left py-3 px-4 font-medium border-b border-border bg-muted/30"
const tdClass = "py-3 px-4 border-b border-border text-sm"

export function GaslessSwapApiApiContent() {
  return (
    <>
      <section id="get-quote" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">1. Get a quote</h2>
        <ul className="list-none space-y-1 text-muted-foreground mb-2">
          <li>Path: <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">/v4/gasless/{`{chain}`}/quote</code></li>
          <li>Method: GET</li>
        </ul>
        <p className="font-medium mb-2">Request param:</p>
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
              <tr><td className={tdClass}>chain</td><td className={tdClass}>true</td><td className={tdClass}>string</td><td className={tdClass}>42161</td><td className={tdClass}>chain id</td></tr>
              <tr><td className={tdClass}>inTokenAddress</td><td className={tdClass}>true</td><td className={tdClass}>string</td><td className={tdClass}>0xddc0...</td><td className={tdClass}>in token address</td></tr>
              <tr><td className={tdClass}>outTokenAddress</td><td className={tdClass}>true</td><td className={tdClass}>string</td><td className={tdClass}>0xddc0...</td><td className={tdClass}>out token address</td></tr>
              <tr><td className={tdClass}>amountDecimals</td><td className={tdClass}>true</td><td className={tdClass}>string</td><td className={tdClass}>1000000</td><td className={tdClass}>Token amount with decimals. For example, if 1 USDT is input, use 1000000 (1 USDT * 10^6).</td></tr>
              <tr><td className={tdClass}>gasPriceDecimals</td><td className={tdClass}>true</td><td className={tdClass}>string</td><td className={tdClass}>1000000000</td><td className={tdClass}>GasPrice with decimals</td></tr>
              <tr><td className={tdClass}>slippage</td><td className={tdClass}>false</td><td className={tdClass}>number</td><td className={tdClass}>1</td><td className={tdClass}>slippage 1%</td></tr>
              <tr><td className={tdClass}>referrer</td><td className={tdClass}>false</td><td className={tdClass}>string</td><td className={tdClass}>0xddc0...</td><td className={tdClass}>referrer address</td></tr>
              <tr><td className={tdClass}>disabledDexIds</td><td className={tdClass}>false</td><td className={tdClass}>string</td><td className={tdClass}>3,5</td><td className={tdClass}>disabled dex id, use &quot;,&quot; to separate</td></tr>
            </tbody>
          </table>
        </div>
        <p className="font-medium mb-2 mt-4">Request example:</p>
        <CodeBlock
          code="https://open-api.openocean.finance/v4/gasless/42161/quote?inTokenSymbol=RDPX&inTokenAddress=0x32eb7902d4134bf98a28b963d26de779af92a212&outTokenSymbol=USDC&outTokenAddress=0xaf88d065e77c8cC2239327C5EDb3A432268e5831&amountDecimals=1000000000000000000&gasPriceDecimals=1000000000&slippage=0.02"
          language="javascript"
        />
        <p className="font-medium mb-2 mt-4">Response example:</p>
        <CodeBlock
          code={`{
    "code": 200,
    "data": {
        "inToken": {
            "address": "0x32eb7902d4134bf98a28b963d26de779af92a212",
            "decimals": 18,
            "symbol": "RDPX",
            "name": "Dopex Rebate Token",
            "usd": "1.61",
            "volume": "0.03220000"
        },
        "outToken": {
            "address": "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
            "decimals": 6,
            "symbol": "USDC",
            "name": "USD Coin",
            "usd": "0.999902",
            "volume": "0.69644574"
        },
        "native": {
            "address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
            "decimals": 18,
            "symbol": "ETH",
            "name": "ETH",
            "usd": "2466.73",
            "volume": "0.01652104"
        },
        "fees": [
            {
                "address": "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
                "decimals": 6,
                "symbol": "USDC",
                "name": "USD Coin",
                "usd": "0.999902",
                "in_fee_amount": 0.017914,
                "volume": "0.01791224"
            },
            {
                "address": "0x32eb7902d4134bf98a28b963d26de779af92a212",
                "decimals": 18,
                "symbol": "RDPX",
                "name": "Dopex Rebate Token",
                "usd": "1.61",
                "volume": "0.016521",
                "in_fee_amount": 0.0102615
            }
        ],
        "flags": 2,
        "inAmount": "20000000000000000",
        "outAmount": "696514",
        "estimatedGas": 500622,
        "path": {
            "from": "0x32Eb7902D4134bf98A28b963D26de779AF92A212",
            "to": "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
            "parts": 10,
            "routes": [
                {
                    "parts": 10,
                    "percentage": 100,
                    "subRoutes": [
                        {
                            "from": "0x32Eb7902D4134bf98A28b963D26de779AF92A212",
                            "to": "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
                            "parts": 25,
                            "dexes": [
                                {
                                    "dex": "UniswapV3",
                                    "id": "0xbA1F4C88d563DF1f66F726839B0e7E81183CE929",
                                    "parts": 25,
                                    "percentage": 100,
                                    "fee": 0.003
                                }
                            ]
                        },
                        {
                            "from": "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
                            "to": "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
                            "parts": 25,
                            "dexes": [
                                {
                                    "dex": "SolidlyV3",
                                    "id": "0x6C9aB1C1dC392b53f9FB2EA6D9dAcE5f99efdC48",
                                    "parts": 25,
                                    "percentage": 100,
                                    "fee": 0.001687
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "aggregator": "OpenOcean",
        "from": "0xB1DD8E9ebbF5F150B75642D1653dF0dacd0bfF47",
        "to": "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64",
        "minOutAmount": 671634,
        "value": "0",
        "data": "0x90411a32000000000000000000000000f851d3d46237ec552a4c6e383a973115e781b1a5000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000001c000000000000000000000000032eb7902d4134bf98a28b963d26de779af92a212000000000000000000000000af88d065e77c8cc2239327c5edb3a432268e5831000000000000000000000000f851d3d46237ec552a4c6e383a973115e781b1a5000000000000000000000000b1dd8e9ebbf5f150b75642d1653df0dacd0bff4700000000000000000000000000000000000000000000000000470de4df82000000000000000000000000000000000000000000000000000000000000000a858c00000000000000000000000000000000000000000000000000000000000aa0c200000000000000000000000000000000000000000000000000000000000000020000000000000000000000003fe9c9165d3cb5086ce49c9b4a67c01d4e869bfd0000000000000000000000000000000000000000000000000000000000000140000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000104e5b07cdb000000000000000000000000ba1f4c88d563df1f66f726839b0e7e81183ce929000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000470de4df820000000000000000000000000000f851d3d46237ec552a4c6e383a973115e781b1a500000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000002e32eb7902d4134bf98a28b963d26de779af92a212000bb882af49447d8a07e3bd95bd0d56f35241523fbab100000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000003a451a7431600000000000000000000000082af49447d8a07e3bd95bd0d56f35241523fbab100000000000000000000000000000001000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000034000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000016000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000064eb5625d900000000000000000000000082af49447d8a07e3bd95bd0d56f35241523fbab10000000000000000000000006c9ab1c1dc392b53f9fb2ea6d9dace5f99efdc480000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000006c9ab1c1dc392b53f9fb2ea6d9dace5f99efdc480000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000084c31b8d7a000000000000000000000000b1dd8e9ebbf5f150b75642d1653df0dacd0bff470000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000001000276a40000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000044000000000000000000000000000000000000000000000000000000000000004400000000000000000000000000000000000000000000000000000000",
        "useTime": 0.659,
        "hash": "0x567b95b6d865a82ce92f27e6c9759ce6925fb898903ef00f78b1b500992af0aa"
    }
}`}
          language="javascript"
        />
      </section>

      <section id="submit-swap" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">2. Submit gasless swap</h2>
        <ul className="list-none space-y-1 text-muted-foreground mb-2">
          <li>Path: <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">/v4/gasless/{`{chain}`}/swap</code></li>
          <li>Method: POST</li>
        </ul>
        <p className="font-medium mb-2">Request param:</p>
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
              <tr><td className={tdClass}>chain</td><td className={tdClass}>true</td><td className={tdClass}>string</td><td className={tdClass}>42161</td><td className={tdClass}>chain id</td></tr>
            </tbody>
          </table>
        </div>
        <p className="font-medium mb-2 mt-4">Request body:</p>
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
              <tr><td className={tdClass}>from</td><td className={tdClass}>true</td><td className={tdClass}>string</td><td className={tdClass}>0x72f1...</td><td className={tdClass}>user wallet address</td></tr>
              <tr><td className={tdClass}>to</td><td className={tdClass}>true</td><td className={tdClass}>string</td><td className={tdClass}>0x6352...</td><td className={tdClass}>quote response</td></tr>
              <tr><td className={tdClass}>data</td><td className={tdClass}>true</td><td className={tdClass}>string</td><td className={tdClass}>0x9041....</td><td className={tdClass}>quote response</td></tr>
              <tr><td className={tdClass}>amountDecimals</td><td className={tdClass}>true</td><td className={tdClass}>number</td><td className={tdClass}>200000000000000</td><td className={tdClass}>Token amount with decimals. For example, if 1 USDT is input, use 1000000 (1 USDT * 10^6).</td></tr>
              <tr><td className={tdClass}>feeAmount1</td><td className={tdClass}>true</td><td className={tdClass}>number</td><td className={tdClass}>23660</td><td className={tdClass}>quote response</td></tr>
              <tr><td className={tdClass}>feeAmount2</td><td className={tdClass}>true</td><td className={tdClass}>number</td><td className={tdClass}>139163400000</td><td className={tdClass}>quote response</td></tr>
              <tr><td className={tdClass}>flag</td><td className={tdClass}>true</td><td className={tdClass}>number</td><td className={tdClass}>2</td><td className={tdClass}>quote response</td></tr>
              <tr><td className={tdClass}>gasPriceDecimals</td><td className={tdClass}>true</td><td className={tdClass}>number</td><td className={tdClass}>100000000</td><td className={tdClass}>gasPrice</td></tr>
              <tr><td className={tdClass}>deadline</td><td className={tdClass}>true</td><td className={tdClass}>number</td><td className={tdClass}>1747127367</td><td className={tdClass}>permit deadline</td></tr>
              <tr><td className={tdClass}>inToken</td><td className={tdClass}>true</td><td className={tdClass}>string</td><td className={tdClass}>0x32eb...</td><td className={tdClass}>in token address</td></tr>
              <tr><td className={tdClass}>outToken</td><td className={tdClass}>true</td><td className={tdClass}>string</td><td className={tdClass}>0xaf88...</td><td className={tdClass}>out token address</td></tr>
              <tr><td className={tdClass}>nonce</td><td className={tdClass}>true</td><td className={tdClass}>number</td><td className={tdClass}>0</td><td className={tdClass}>permit nonce</td></tr>
              <tr><td className={tdClass}>permit</td><td className={tdClass}>true</td><td className={tdClass}>string</td><td className={tdClass}>0x30f28...</td><td className={tdClass}>permit data</td></tr>
              <tr><td className={tdClass}>usdValuation</td><td className={tdClass}>true</td><td className={tdClass}>number</td><td className={tdClass}>0.032</td><td className={tdClass}>trade volume($)</td></tr>
              <tr><td className={tdClass}>ceilingFee</td><td className={tdClass}>false</td><td className={tdClass}>number</td><td className={tdClass}>0</td><td className={tdClass}>only eth, quote response</td></tr>
              <tr><td className={tdClass}>minOutAmount</td><td className={tdClass}>true</td><td className={tdClass}>number</td><td className={tdClass}>671634</td><td className={tdClass}>quote response</td></tr>
              <tr><td className={tdClass}>hash</td><td className={tdClass}>true</td><td className={tdClass}>string</td><td className={tdClass}>0x30f28...</td><td className={tdClass}>quote response</td></tr>
            </tbody>
          </table>
        </div>
        <p className="font-medium mb-2 mt-4">Request example:</p>
        <CodeBlock code="https://open-api.openocean.finance/v4/gasless/42161/swap" language="http" />
        <p className="font-medium mb-2 mt-4">Request body example:</p>
        <CodeBlock
          code={`{
    "from": "0x72f16Cae8F50Ad615AB5A8e231A496b2ace52532",
    "to": "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64",
    "data": "0x90411a32000000000000000000000000f851d3d46237ec552a4c6e383a973115e781b1a5000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000001c000000000000000000000000032eb7902d4134bf98a28b963d26de779af92a212000000000000000000000000af88d065e77c8cc2239327c5edb3a432268e5831000000000000000000000000f851d3d46237ec552a4c6e383a973115e781b1a5000000000000000000000000b1dd8e9ebbf5f150b75642d1653df0dacd0bff4700000000000000000000000000000000000000000000000000470de4df82000000000000000000000000000000000000000000000000000000000000000a885300000000000000000000000000000000000000000000000000000000000aa39000000000000000000000000000000000000000000000000000000000000000020000000000000000000000003fe9c9165d3cb5086ce49c9b4a67c01d4e869bfd0000000000000000000000000000000000000000000000000000000000000140000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000104e5b07cdb000000000000000000000000ba1f4c88d563df1f66f726839b0e7e81183ce929000000000000000000000000000000000000000000000000000470de4df820000000000000000000000000000f851d3d46237ec552a4c6e383a973115e781b1a500000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000002e32eb7902d4134bf98a28b963d26de779af92a212000bb882af49447d8a07e3bd95bd0d56f35241523fbab100000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000002449f86542200000000000000000000000082af49447d8a07e3bd95bd0d56f35241523fbab100000000000000000000000000000001000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000004400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000104e5b07cdb0000000000000000000000006f38e884725a116c9c7fbf208e79fe8828a2595f00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001000000000000000000000000b1dd8e9ebbf5f150b75642d1653df0dacd0bff4700000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000002e82af49447d8a07e3bd95bd0d56f35241523fbab1000064af88d065e77c8cc2239327c5edb3a432268e58310000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "amountDecimals": "20000000000000000",
    "feeAmount1": "23660",
    "feeAmount2": "13916340000000000",
    "flag": 2,
    "gasPriceDecimals": "10000000",
    "deadline": 1747127367,
    "inToken": "0x32eb7902d4134bf98a28b963d26de779af92a212",
    "outToken": "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    "nonce": "0",
    "permit": "0x30f28b7a00000000000000000000000032eb7902d4134bf98a28b963d26de779af92a21200000000000000000000000000000000000000000000000000470de4df82000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068230c47000000000000000000000000b1dd8e9ebbf5f150b75642d1653df0dacd0bff4700000000000000000000000000000000000000000000000000470de4df82000000000000000000000000000072f16cae8f50ad615ab5a8e231a496b2ace5253200000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000041480ece65964a49824a41690c6052bf0f26e5ea75554dd72be9b83a8b5a42f1e2075aaac15193296c973ff6e6957beeb395f8dc9f97ee5f9ec585e2fe3bbab0971c00000000000000000000000000000000000000000000000000000000000000",
    "usdValuation": 0.032,
    "ceilingFee": 0,
    "minOutAmount": 671634,
    "hash": "0x567b95b6d865a82ce92f27e6c9759ce6925fb898903ef00f78b1b500992af0aa"
}`}
          language="javascript"
        />
        <p className="font-medium mb-2 mt-4">Response example:</p>
        <CodeBlock
          code={`{
    "code": 0,
    "msg": "ok",
    "orderHash": "0xcd287de3af73d2502755df502e422a5c44e5e4231de54e5243607a29ac2455e4"
}`}
          language="javascript"
        />
      </section>

      <section id="get-order-status" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">3. Get order status</h2>
        <ul className="list-none space-y-1 text-muted-foreground mb-2">
          <li>Path: <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">/v4/gasless/{`{chain}`}/order</code></li>
          <li>Method: GET</li>
        </ul>
        <p className="font-medium mb-2">Request param:</p>
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
              <tr><td className={tdClass}>chain</td><td className={tdClass}>true</td><td className={tdClass}>string</td><td className={tdClass}>42161</td><td className={tdClass}>chain id</td></tr>
              <tr><td className={tdClass}>orderHash</td><td className={tdClass}>true</td><td className={tdClass}>string</td><td className={tdClass}>0xddc0...</td><td className={tdClass}>swap response</td></tr>
            </tbody>
          </table>
        </div>
        <p className="font-medium mb-2 mt-4">Request example:</p>
        <CodeBlock
          code="https://open-api.openocean.finance/v4/gasless/42161/order?orderHash=0xcd287de3af73d2502755df502e422a5c44e5e4231de54e5243607a29ac2455e4"
          language="javascript"
        />
        <p className="font-medium mb-2 mt-4">Response example:</p>
        <CodeBlock
          code={`{
    "code": 0,
    "msg": "ok",
    "data": {
        "hash": "0x1c60a8fa4fe725031005128aaf5e688e9790053b2c47880a488ab526ce177c89",
        "err": ""
    }
}`}
          language="javascript"
        />
      </section>
    </>
  )
}
