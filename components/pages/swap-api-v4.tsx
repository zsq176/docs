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

export function SwapApiV4Content() {
  return (
    <div className="space-y-12">
      <section>
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="outline">REST API</Badge>
          <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Recommended</Badge>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">API V4</h1>
        <Callout type="info" title="">
          <p>View Github examples for <a href="https://github.com/openocean-finance/OpenOcean-API-Examples/tree/main/backend/swap-api-demo" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Backend</a> and <a href="https://github.com/openocean-finance/OpenOcean-API-Examples/tree/main/backend/swap-api-demo" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Frontend</a>. Check out the current supported chains <Link href="/docs/supported-chains" className="text-primary hover:underline">here</Link> and relevant <a href="https://apis.openocean.finance/developer/apis/swap-api/contracts-of-chains" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">contract addresses</a>.</p>
        </Callout>
      </section>

      {/* Quote */}
      <section id="quote" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Quote</h2>
        <ul className="list-none space-y-1 text-muted-foreground mb-4">
          <li>URL: <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-blue-600 dark:text-blue-400">https://open-api.openocean.finance/v4/:chain/quote</code></li>
          <li>Method: GET</li>
        </ul>
        <p className="font-medium mb-2">Params:</p>
        <div className={tableWrapper}>
          <table className={tableClass}>
            <thead><tr><th className={thClass}>Name</th><th className={thClass}>Type</th><th className={thClass}>Description</th></tr></thead>
            <tbody>
              <tr><td className={tdClass}>chain*</td><td className={tdClass}>string</td><td className={tdClass}>Chain name or Chain ID (supported chains)</td></tr>
              <tr><td className={tdClass}>inTokenAddress*</td><td className={tdClass}>string</td><td className={tdClass}>Input token address</td></tr>
              <tr><td className={tdClass}>outTokenAddress*</td><td className={tdClass}>string</td><td className={tdClass}>Output token address</td></tr>
              <tr><td className={tdClass}>amountDecimals*</td><td className={tdClass}>string</td><td className={tdClass}>Token amount with decimals. e.g. 1 USDT → 1000000 (1 * 10^6)</td></tr>
              <tr><td className={tdClass}>gasPriceDecimals*</td><td className={tdClass}>string</td><td className={tdClass}>GasPrice with decimals</td></tr>
              <tr><td className={tdClass}>slippage</td><td className={tdClass}>string</td><td className={tdClass}>Slippage percentage 0.05–50. e.g. 1% = 1. Default 1</td></tr>
              <tr><td className={tdClass}>disabledDexIds</td><td className={tdClass}>string</td><td className={tdClass}>Dex index from dexList to disable, comma-separated e.g. &quot;2,6,9&quot;</td></tr>
              <tr><td className={tdClass}>enabledDexIds</td><td className={tdClass}>string</td><td className={tdClass}>Dex index from dexList to enable. Has higher priority than disabledDexIds</td></tr>
            </tbody>
          </table>
        </div>
        <Callout type="warning" title="Note">
          <p>We are deprecating <code className="rounded bg-muted px-1 py-0.5">amount</code> and <code className="rounded bg-muted px-1 py-0.5">gasPrice</code>. Use <code className="rounded bg-muted px-1 py-0.5">amountDecimals</code> and <code className="rounded bg-muted px-1 py-0.5">gasPriceDecimals</code> respectively. All values must be passed with full decimals.</p>
        </Callout>
        <h3 className="text-lg font-semibold mt-6 mb-2">Example request (with decimals)</h3>
        <CodeBlock code={`https://open-api.openocean.finance/v4/bsc/quote?inTokenAddress=0x55d398326f99059ff775485246999027b3197955&outTokenAddress=0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d&amountDecimals=5000000000000000000&gasPriceDecimals=1000000000`} language="http" />
        <h3 className="text-lg font-semibold mt-4 mb-2">Example request (without decimals, deprecated)</h3>
        <CodeBlock code={`https://open-api.openocean.finance/v4/bsc/quote?inTokenAddress=0x55d398326f99059ff775485246999027b3197955&outTokenAddress=0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d&amount=5&gasPrice=1`} language="http" />
        <h3 className="text-lg font-semibold mt-4 mb-2">Response</h3>
        <CodeBlock
          code={`{
  "code": 200,
  "data": {
    "inToken": { "address": "...", "decimals": 18, "symbol": "USDT", "name": "Tether USD", "usd": "0.998546", "volume": 4.99273 },
    "outToken": { "address": "...", "decimals": 18, "symbol": "USDC", "name": "USD Coin", "usd": "0.999955", "volume": 4.99 },
    "inAmount": "5000000000000000000",
    "outAmount": "4993921938787056372",
    "estimatedGas": "129211",
    "dexes": [ { "dexIndex": 0, "dexCode": "Pancake", "swapAmount": "..." }, ... ],
    "path": { "from": "...", "to": "...", "parts": 10, "routes": [ ... ] },
    "save": -0.0018,
    "price_impact": "0.01%",
    "exchange": "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64"
  }
}`}
          language="json"
          showLineNumbers
        />
        <Callout type="warning" title="price_impact">
          <p>The <code className="rounded bg-muted px-1 py-0.5">price_impact</code> field indicates estimated price deviation. OpenOcean does not enforce execution blocks by price impact. It is the integrator&apos;s responsibility to evaluate it and implement checks. We recommend setting a price impact threshold and aborting if exceeded.</p>
        </Callout>
        <h3 className="text-lg font-semibold mt-6 mb-2">JavaScript Demo</h3>
        <CodeBlock
          code={`const axios = require('axios');
const chain = 'bsc';
const url = \`https://open-api.openocean.finance/v4/\${chain}/quote\`;
const params = {
  inTokenAddress: '0x55d398326f99059ff775485246999027b3197955',
  outTokenAddress: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  amount: 1,
  gasPrice: 3
};
async function main() {
  try {
    const { data } = await axios.get(url, { params });
    if (data?.code === 200) console.log('quote success');
  } catch (error) {
    console.log(data);
  }
}
main();`}
          language="javascript"
          showLineNumbers
        />
        <h3 className="text-lg font-semibold mt-6 mb-2">Python Demo</h3>
        <CodeBlock
          code={`import requests
chain = 'bsc'
url = f'https://open-api.openocean.finance/v4/{chain}/quote'
params = {
  'inTokenAddress': '0x55d398326f99059ff775485246999027b3197955',
  'outTokenAddress': '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  'amount': 1,
  'gasPrice': 3
}
def main():
  response = requests.get(url, params=params)
  if response.status_code == 200:
    data = response.json()
    print(data)
  else:
    print("Error occurred:", response.text)
if __name__ == "__main__":
  main()`}
          language="python"
          showLineNumbers
        />
        <h3 className="text-lg font-semibold mt-6 mb-2">Go Demo</h3>
        <CodeBlock
          code={`package main
import ("fmt"; "net/http"; "encoding/json")
func main() {
  chain := "bsc"
  url := fmt.Sprintf("https://open-api.openocean.finance/v4/%s/quote", chain)
  params := map[string]string{
    "inTokenAddress": "0x55d398326f99059ff775485246999027b3197955",
    "outTokenAddress": "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
    "amount": "1", "gasPrice": "3",
  }
  resp, _ := http.Get(url)
  defer resp.Body.Close()
  var data map[string]interface{}
  json.NewDecoder(resp.Body).Decode(&data)
  if code, ok := data["code"].(float64); ok && code == 200 {
    fmt.Println("quote success")
  }
}`}
          language="go"
          showLineNumbers
        />
        <h3 className="text-lg font-semibold mt-6 mb-2">Java Demo</h3>
        <CodeBlock
          code={`String chain = "bsc";
String url = "https://open-api.openocean.finance/v4/" + chain + "/quote";
Map<String, Object> params = new HashMap<>();
params.put("inTokenAddress", "0x55d398326f99059ff775485246999027b3197955");
params.put("outTokenAddress", "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d");
params.put("amount", 1);
params.put("gasPrice", 3);
// Use URL + query string or HttpURLConnection to GET; then check data.get("code") == 200`}
          language="java"
          showLineNumbers
        />
      </section>

      {/* ReverseQuote */}
      <section id="reverse-quote" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">ReverseQuote (Optional)</h2>
        <Callout type="warning" title="">
          <p>For <code className="rounded bg-muted px-1 py-0.5">/reverseQuote</code> it is a buy flow: you specify how much inToken you want to receive, and we calculate how much outToken you need to sell. In the request URL, inToken and outToken are reversed compared to the frontend. We use real-time quote price to perform reverse quote and determine the required inToken amount. Read above before using this endpoint.</p>
        </Callout>
        <ul className="list-none space-y-1 text-muted-foreground mb-4">
          <li>URL: <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-blue-600 dark:text-blue-400">https://open-api.openocean.finance/v4/:chain/reverseQuote</code></li>
          <li>Method: GET</li>
        </ul>
        <p className="text-muted-foreground mb-2">Example: user wants to receive 1 BNB. On frontend: inToken=USDC, outToken=BNB. In the request: inToken=BNB, outToken=USDC, amount=1 (target BNB to receive).</p>
        <CodeBlock code={`https://open-api.openocean.finance/v4/bsc/reverseQuote?inTokenAddress=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&outTokenAddress=0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d&amount=1&gasPrice=1`} language="http" />
        <p className="text-sm text-muted-foreground mt-2">Response structure is similar to Quote, with an additional <code className="rounded bg-muted px-1 py-0.5">reverseAmount</code> field.</p>
      </section>

      {/* SwapQuote */}
      <section id="swap-quote" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">SwapQuote</h2>
        <ul className="list-none space-y-1 text-muted-foreground mb-4">
          <li>URL: <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-blue-600 dark:text-blue-400">https://open-api.openocean.finance/v4/:chain/swap</code></li>
          <li>Method: GET</li>
        </ul>
        <p className="font-medium mb-2">Params:</p>
        <div className={tableWrapper}>
          <table className={tableClass}>
            <thead><tr><th className={thClass}>parameter</th><th className={thClass}>type</th><th className={thClass}>description</th></tr></thead>
            <tbody>
              <tr><td className={tdClass}>chain*</td><td className={tdClass}>string</td><td className={tdClass}>Chain name or Chain ID</td></tr>
              <tr><td className={tdClass}>inTokenAddress*</td><td className={tdClass}>string</td><td className={tdClass}>Input token address</td></tr>
              <tr><td className={tdClass}>outTokenAddress*</td><td className={tdClass}>string</td><td className={tdClass}>Output token address</td></tr>
              <tr><td className={tdClass}>amountDecimals*</td><td className={tdClass}>string</td><td className={tdClass}>Token amount with decimals</td></tr>
              <tr><td className={tdClass}>gasPriceDecimals*</td><td className={tdClass}>string</td><td className={tdClass}>GasPrice with decimals</td></tr>
              <tr><td className={tdClass}>slippage</td><td className={tdClass}>string</td><td className={tdClass}>0.05–50, default 1</td></tr>
              <tr><td className={tdClass}>account*</td><td className={tdClass}>string</td><td className={tdClass}>User wallet address. If omitted, response returns only quotes without calldata/transaction body</td></tr>
              <tr><td className={tdClass}>referrer</td><td className={tdClass}>string</td><td className={tdClass}>EOA for partner tracking / fee</td></tr>
              <tr><td className={tdClass}>referrerFee</td><td className={tdClass}>number</td><td className={tdClass}>0.01–5 (e.g. 1 = 1%). OpenOcean shares 20% by default</td></tr>
              <tr><td className={tdClass}>enabledDexIds / disabledDexIds</td><td className={tdClass}>string</td><td className={tdClass}>Dex index from dexList</td></tr>
              <tr><td className={tdClass}>sender</td><td className={tdClass}>string</td><td className={tdClass}>Caller address. If set, sender=caller and account=receiver; else account is both</td></tr>
              <tr><td className={tdClass}>minOutput</td><td className={tdClass}>number</td><td className={tdClass}>Min target tokens (with decimals). Supported: Base/BNB/ETH</td></tr>
            </tbody>
          </table>
        </div>
        <Callout type="warning" title="Deprecation">
          <p>Use <code className="rounded bg-muted px-1 py-0.5">amountDecimals</code> and <code className="rounded bg-muted px-1 py-0.5">gasPriceDecimals</code> instead of amount and gasPrice.</p>
        </Callout>
        <h3 className="text-lg font-semibold mt-4 mb-2">Example request (with decimals)</h3>
        <CodeBlock code={`https://open-api.openocean.finance/v4/bsc/swap?inTokenAddress=0x55d398326f99059ff775485246999027b3197955&outTokenAddress=0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d&amountDecimals=5000000000000000000&gasPriceDecimals=1000000000&slippage=1&account=0x9116780aEf4B376499358fa7dEeC00cCF64fA801&referrer=0xD4eb4cbB1ECbf96a1F0C67D958Ff6fBbB7B037BB`} language="http" />
        <h3 className="text-lg font-semibold mt-4 mb-2">Response</h3>
        <CodeBlock
          code={`{
  "code": 200,
  "data": {
    "inToken": { ... }, "outToken": { ... },
    "inAmount": "5000000000000000000",
    "outAmount": "4993921938787056372",
    "estimatedGas": 516812,
    "minOutAmount": "4943982719399185808",
    "from": "0x9116780aEf4B376499358fa7dEeC00cCF64fA801",
    "to": "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64",
    "value": "0", "gasPrice": "1000000000",
    "data": "0x90411a32...",
    "chainId": 56, "rfqDeadline": 0, "gmxFee": 0,
    "price_impact": "0.01%"
  }
}`}
          language="json"
          showLineNumbers
        />
        <Callout type="warning" title="estimatedGas">
          <p>estimatedGas in the response is only a reference. We recommend calculating gas on your end (e.g. eth_estimateGas * 1.25–2.5). Update gasPrice to avoid failures due to on-chain gas fluctuations.</p>
        </Callout>
        <h3 className="text-lg font-semibold mt-4 mb-2">Example with minOutput (Base/BNB/ETH)</h3>
        <CodeBlock code={`https://open-api.openocean.finance/v4/1/swap?amountDecimals=10000000&gasPriceDecimals=1900000000&slippage=1&referrer=0x39041f1b366fe33f9a5a79de5120f2aee2577ebc&account=0xceCfC852f8cE51D92A5A291f6999DEE147bc2169&disableRfq=true&referrerFee=1&inTokenAddress=0xdac17f958d2ee523a2206206994597c13d831ec7&outTokenAddress=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&minOutput=9900000`} language="http" />
        <Callout type="warning" title="minOutput">
          <p>minOutput is with decimals. e.g. 9.9 USDC (6 decimals) → minOutput=9900000. If actual output is less than minOutput, the transaction will fail (protection).</p>
        </Callout>
      </section>

      {/* Get TokenList */}
      <section id="get-token-list" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Get TokenList</h2>
        <ul className="list-none space-y-1 text-muted-foreground mb-4">
          <li>URL: <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-blue-600 dark:text-blue-400">https://open-api.openocean.finance/v4/:chain/tokenList</code></li>
          <li>Method: GET. Params: chain* (string)</li>
        </ul>
        <CodeBlock code={`https://open-api.openocean.finance/v4/bsc/tokenList`} language="http" />
        <p className="text-sm text-muted-foreground mt-2">Response: code 200, data array of tokens (id, code, name, address, decimals, symbol, icon, chain, etc.).</p>
      </section>

      {/* Get Dexes List */}
      <section id="get-dexes-list" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Get Dexes List</h2>
        <ul className="list-none space-y-1 text-muted-foreground mb-4">
          <li>URL: <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-blue-600 dark:text-blue-400">https://open-api.openocean.finance/v4/:chain/dexList</code></li>
          <li>Method: GET. Params: chain* (string)</li>
        </ul>
        <CodeBlock code={`https://open-api.openocean.finance/v4/avax/dexList`} language="http" />
        <CodeBlock code={`{ "code": 200, "data": [ { "index": 1, "code": "SushiSwap", "name": "SushiSwap" }, { "index": 2, "code": "Pangolin", "name": "Pangolin" }, ... ] }`} language="json" />
      </section>

      {/* Get GasPrice */}
      <section id="get-gasprice" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Get GasPrice</h2>
        <ul className="list-none space-y-1 text-muted-foreground mb-4">
          <li>URL: <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-blue-600 dark:text-blue-400">https://open-api.openocean.finance/v4/:chain/gasPrice</code></li>
          <li>Method: GET. Params: chain* (string)</li>
        </ul>
        <CodeBlock code={`https://open-api.openocean.finance/v4/bsc/gasPrice`} language="http" />
        <p className="text-sm text-muted-foreground mt-2">Response (EVM): data.base, data.standard/fast/instant/low with legacyGasPrice, maxPriorityFeePerGas, maxFeePerGas, waitTimeEstimate; and without_decimals. For other EVM chains: data.standard, data.fast, data.instant (with and without_decimals).</p>
        <Callout type="info" title="">
          <p>When using <code className="rounded bg-muted px-1 py-0.5">/quote</code> and <code className="rounded bg-muted px-1 py-0.5">/swap</code>, gasPrice should be set in GWEI with decimals (e.g. 14 GWEI → use value from this API with decimals).</p>
        </Callout>
      </section>

      {/* Get Transaction */}
      <section id="get-transaction" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Get Transaction</h2>
        <ul className="list-none space-y-1 text-muted-foreground mb-4">
          <li>URL: <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-blue-600 dark:text-blue-400">https://open-api.openocean.finance/v4/:chain/getTransaction</code></li>
          <li>Method: GET. Params: chain*, hash* (OpenOcean contract tx hash)</li>
        </ul>
        <CodeBlock code={`https://open-api.openocean.finance/v4/bsc/getTransaction?hash=0x756b98a89714be5c640ea9922aba12e0c94bc30e5a17e111d1aa40373cc24782`} language="http" />
        <p className="text-sm text-muted-foreground mt-2">Response: code 200, data with id, block_number, tx_hash, sender, receiver, in_token_address, out_token_address, in_amount, out_amount, referrer, tx_fee, status, etc.</p>
      </section>

      {/* DecodeInputData By Get */}
      <section id="decode-input-data-get" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">DecodeInputData By Get</h2>
        <ul className="list-none space-y-1 text-muted-foreground mb-4">
          <li>URL: <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-blue-600 dark:text-blue-400">https://open-api.openocean.finance/v4/:chain/decodeInputData</code></li>
          <li>Method: GET. Params: chain*, data* (inputData), method* (e.g. swap)</li>
        </ul>
        <CodeBlock code={`https://open-api.openocean.finance/v4/bsc/decodeInputData?data=000000xxxxxx&method=swap`} language="http" />
        <p className="text-sm text-muted-foreground mt-2">Response: caller, desc (srcToken, dstToken, srcReceiver, dstReceiver, amount, minReturnAmount, guaranteedAmount, flags, referrer, permit), calls array.</p>
      </section>

      {/* DecodeInputData By Post */}
      <section id="decode-input-data-post" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">DecodeInputData By Post</h2>
        <ul className="list-none space-y-1 text-muted-foreground mb-4">
          <li>URL: <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-blue-600 dark:text-blue-400">https://open-api.openocean.finance/v4/:chain/decodeInputData</code></li>
          <li>Method: POST. URL params: chain*. Body: data* (inputData), method* (e.g. swap)</li>
        </ul>
        <CodeBlock code={`POST https://open-api.openocean.finance/v4/bsc/decodeInputData\nBody: { "data": "000000xxxxxx", "method": "swap" }`} language="http" />
        <p className="text-sm text-muted-foreground mt-2">Response: same as DecodeInputData By Get.</p>
      </section>

      <section className="scroll-mt-20 pt-8 border-t border-border">
        <h2 className="text-xl font-bold mb-6">Next Steps</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <NextStepCard title="Swap API Overview" description="Introduction and Get Started." href="/docs/swap-api" icon={<FileCode className="h-5 w-5" />} />
          <a href="https://open-api.openocean.finance/v4/swagger-ui.html" target="_blank" rel="noopener noreferrer" className="block">
            <div className="group h-full rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary"><ExternalLink className="h-5 w-5" /></div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">Swagger UI <ExternalLink className="h-4 w-4 opacity-50" /></h4>
                  <p className="mt-1 text-sm text-muted-foreground">Try v4 endpoints interactively.</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  )
}
