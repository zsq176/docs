"use client"

import * as React from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { CodeBlock } from "@/components/docs/code-block"
import { Callout } from "@/components/docs/callout"
import { NextStepCard } from "@/components/docs/card-group"
import { FileCode, Github } from "lucide-react"

export function SwapApiGuideContent() {
  return (
    <div className="space-y-12">
      <section>
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="outline">Guide</Badge>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Guide</h1>
        <p className="mt-4 text-muted-foreground">
          An overview guide on how to integrate OpenOcean Swap API.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <a href="https://github.com/openocean-finance/OpenOcean-API-Examples/tree/main/backend/swap-api-demo" target="_blank" rel="noopener noreferrer" className="block">
            <div className="group h-full rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5 text-primary" />
                <span className="font-medium">backend</span>
              </div>
            </div>
          </a>
          <a href="https://github.com/openocean-finance/OpenOcean-API-Examples/tree/main/frontend" target="_blank" rel="noopener noreferrer" className="block">
            <div className="group h-full rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5 text-primary" />
                <span className="font-medium">frontend</span>
              </div>
            </div>
          </a>
        </div>
      </section>

      <section id="integration-guide" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">OpenOcean Swap API Integration Guide</h2>
        <p className="text-muted-foreground mb-6">
          In the following guide, it will introduce how to use this OpenOcean&apos;s swap API in the most efficient way.
        </p>

        <h3 id="swap-overview" className="text-xl font-semibold mb-3">Swap Overview</h3>
        <p className="text-muted-foreground mb-4">
          The swap function enables users to seamlessly exchange one asset/token for another directly at the best swap rate. The swap API supports 30+ EVM and Non-EVM chains; refer to the <Link href="/docs/supported-chains" className="text-primary hover:underline">supported chains</Link> docs for details.
        </p>
        <Callout type="info" title="">
          <p>The current API supports both V3 and V4, with the following example using V4. For detailed parameter settings, please refer to the <Link href="/docs/swap-api/v4" className="text-primary hover:underline">Swap API documentation</Link> before getting started.</p>
        </Callout>

        <h3 id="swap-tokens-in-7-steps" className="text-xl font-semibold mt-8 mb-3">Swap Tokens in 7 Steps</h3>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-8">
          <li>(Optional) Get token info</li>
          <li>Get gasPrice</li>
          <li>(Optional) Set a token allowance</li>
          <li>Set token approvals and signature</li>
          <li>Price quote</li>
          <li>Get transaction body</li>
          <li>Send transaction and signature</li>
        </ol>

        <h3 id="get-token-info" className="text-xl font-semibold mt-10 mb-3">1. Get Token Info</h3>
        <p className="text-muted-foreground mb-4">
          Use the <Link href="/docs/swap-api/v4#get-token-list" className="text-primary hover:underline">get Token List API</Link> to retrieve all available tokens on the selected blockchain. Select the input token and save the token information for further use.
        </p>
        <h4 className="font-semibold mb-2">Example request</h4>
        <CodeBlock
          code={`import axios from 'axios';
async function tokenList() {
  const { data } = await axios({
    url: \`https://open-api.openocean.finance/v4/bsc/tokenList\`,
    method: 'GET',
  });
  const tokenList = data?.data;
  return tokenList;
}`}
          language="javascript"
          showLineNumbers
        />
        <h4 className="font-semibold mt-6 mb-2">Example response</h4>
        <CodeBlock
          code={`{ "code": 200, "data": [ { "id": 2908, "code": "trustswap", "name": "Trust Swap", "address": "0x94eaf...", "decimals": 18, "symbol": "SWAP", "icon": "...", "chain": "bsc", ... } ] }`}
          language="json"
          showLineNumbers
        />

        <h3 id="get-gasprice" className="text-xl font-semibold mt-10 mb-3">2. Get gasPrice</h3>
        <h4 className="font-semibold mb-2">Example request</h4>
        <CodeBlock
          code={`async function gasPrice() {
  const { data } = await axios({
    url: \`https://open-api.openocean.finance/v4/bsc/gasPrice\`,
    method: 'GET',
  });
  const gasPrice = data?.without_decimals?.standard;
  console.log(\`bsc gasPrice is \${gasPrice} Gwei\`);
  return gasPrice;
}`}
          language="javascript"
          showLineNumbers
        />
        <h4 className="font-semibold mt-6 mb-2">Example response</h4>
        <CodeBlock
          code={`{ "code": 200, "data": { "standard": 1000000000, "fast": 1000000000, "instant": 1000000000 }, "without_decimals": { "standard": 1, "fast": 1, "instant": 1 } }`}
          language="json"
          showLineNumbers
        />

        <h3 id="set-token-allowance" className="text-xl font-semibold mt-10 mb-3">3. (Optional) Set a Token Allowance</h3>
        <p className="text-muted-foreground mb-4">
          Before swapping, set a token allowance to grant the swap contract access to your ERC20 tokens.
        </p>
        <CodeBlock
          code={`async function allowance() {
  const { data } = await axios({
    url: \`https://open-api.openocean.finance/v4/bsc/allowance\`,
    method: 'GET',
    params: { account: '0xB3cbe...', inTokenAddress: '0x55d398326f99059ff775485246999027b3197955' }
  });
  const allowance = data?.data[0]?.allowance;
  return allowance;
}`}
          language="javascript"
          showLineNumbers
        />

        <h3 id="token-approve" className="text-xl font-semibold mt-10 mb-3">4. Token Approve</h3>
        <p className="text-muted-foreground mb-4">
          Approving assets is necessary for DeFi users to grant the contract to use their tokens to swap. Use the wallet or SDK; you can use the getAllowance API to query allowance from our server.
        </p>
        <CodeBlock
          code={`import { ethers, Contract } from 'ethers';
async function approve() {
  const rpcUrl = 'https://binance.llamarpc.com';
  let provider = new ethers.JsonRpcProvider(rpcUrl);
  const privateKey = ''; const inTokenAddress = '0x55d398326f99059ff775485246999027b3197955';
  const contractAddress = ''; const wallet = new ethers.Wallet(privateKey, provider);
  const contract = await new Contract(inTokenAddress, abi, wallet);
  try {
    await contract.approve(contractAddress, new BigNumber('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff').toFixed(0, 1));
  } catch (error) { return error; }
  return true;
}`}
          language="javascript"
          showLineNumbers
        />

        <h3 id="price-quote" className="text-xl font-semibold mt-10 mb-3">5. Price Quote</h3>
        <p className="text-muted-foreground mb-4">
          Fetch the price quote for selected token pairs (e.g. OOE/BNB on BNB chain).
        </p>
        <CodeBlock
          code={`const res = await axios.get("https://open-api.openocean.finance/v4/bsc/quote", {
  chain: 'bsc',
  inTokenAddress: '0x8ea5219a16c2dbF1d6335A6aa0c6bd45c50347C5',
  outTokenAddress: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
  amount: 10, gasPrice: 1, slippage: 1,
}).then((res) => res.data).catch((err) => { throw new Error(err) });`}
          language="javascript"
          showLineNumbers
        />
        <p className="text-sm text-muted-foreground mt-2">Response includes inToken, outToken, inAmount, outAmount, estimatedGas, path, price_impact, etc.</p>

        <h3 id="get-transaction-body" className="text-xl font-semibold mt-10 mb-3">6. Get Transaction Body</h3>
        <p className="text-muted-foreground mb-4">
          Use the swap quote API to get transaction calldata, then submit on-chain using your wallet.
        </p>
        <CodeBlock
          code={`async function swap() {
  const params = {
    chain: 'bsc',
    inTokenAddress: '0x55d398326f99059ff775485246999027b3197955',
    outTokenAddress: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    slippage: 1, amount: 1, gasPrice: 1, account: '0xB3cbe...'
  };
  const { data } = await axios({ url: \`https://open-api.openocean.finance/v4/bsc/swap\`, method: 'GET', params });
  return data;
}`}
          language="javascript"
          showLineNumbers
        />

        <h3 id="send-transaction" className="text-xl font-semibold mt-10 mb-3">7. Send transaction</h3>
        <p className="text-muted-foreground mb-4">
          Once the wallet confirms <code className="rounded bg-muted px-1 py-0.5">sendTransaction</code> with all parameters, the swap is processed on chain and a transaction hash is generated.
        </p>
        <CodeBlock
          code={`async function send_transaction() {
  const rpcUrl = 'https://binance.llamarpc.com';
  const privateKey = ''; const provider = new ethers.JsonRpcProvider(rpcUrl);
  const params = { from: '', to: '', gasPrice: '', data: '', value: '', gasLimit: '' }; // get from swap
  const gasLimit = await provider.estimateGas(params);
  params.gasLimit = gasLimit;
  const wallet = new ethers.Wallet(privateKey, provider);
  const { hash } = await wallet.sendTransaction(params);
  return hash;
}`}
          language="javascript"
          showLineNumbers
        />
      </section>

      <section className="scroll-mt-20 pt-8 border-t border-border">
        <h2 className="text-xl font-bold mb-6">Next Steps</h2>
        <NextStepCard title="Swap API V4" description="Full endpoint reference." href="/docs/swap-api/v4" icon={<FileCode className="h-5 w-5" />} />
      </section>
    </div>
  )
}
