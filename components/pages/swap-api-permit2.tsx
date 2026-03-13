"use client"

import * as React from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { CodeBlock } from "@/components/docs/code-block"
import { Callout } from "@/components/docs/callout"
import { NextStepCard } from "@/components/docs/card-group"
import { FileCode } from "lucide-react"

const tableWrapper = "overflow-x-auto rounded-xl border border-border my-4"
const tableClass = "w-full border-collapse"
const thClass = "text-left py-3 px-4 font-medium border-b border-border bg-muted/30"
const tdClass = "py-3 px-4 border-b border-border text-sm"

const permit2Chains = [
  { name: "Ethereum", chainId: "1", address: "0x000000000022D473030F116dDEE9F6B43aC78BA3" },
  { name: "BNB Chain", chainId: "56", address: "0x000000000022D473030F116dDEE9F6B43aC78BA3" },
  { name: "Polygon", chainId: "137", address: "0x000000000022D473030F116dDEE9F6B43aC78BA3" },
  { name: "Arbitrum", chainId: "42161", address: "0x000000000022D473030F116dDEE9F6B43aC78BA3" },
  { name: "Base", chainId: "8453", address: "0x000000000022D473030F116dDEE9F6B43aC78BA3" },
  { name: "Linea", chainId: "59144", address: "0x000000000022D473030F116dDEE9F6B43aC78BA3" },
  { name: "Optimism", chainId: "10", address: "0x000000000022D473030F116dDEE9F6B43aC78BA3" },
  { name: "Avalanche", chainId: "43114", address: "0x000000000022D473030F116dDEE9F6B43aC78BA3" },
  { name: "Sei", chainId: "1329", address: "0x000000000022D473030F116dDEE9F6B43aC78BA3" },
  { name: "zkSync", chainId: "324", address: "0x0000000000225e31D15943971F47aD3022F714Fa" },
  { name: "Scroll", chainId: "534352", address: "0x000000000022D473030F116dDEE9F6B43aC78BA3" },
  { name: "Celo", chainId: "42220", address: "0x000000000022D473030F116dDEE9F6B43aC78BA3" },
  { name: "Gnosis", chainId: "100", address: "0x000000000022D473030F116dDEE9F6B43aC78BA3" },
  { name: "Sonic", chainId: "146", address: "0x000000000022D473030F116dDEE9F6B43aC78BA3" },
  { name: "Berachain", chainId: "80094", address: "0x000000000022D473030F116dDEE9F6B43aC78BA3" },
  { name: "Unichain", chainId: "130", address: "0x000000000022D473030F116dDEE9F6B43aC78BA3" },
  { name: "Swell", chainId: "1923", address: "0x000000000022D473030F116dDEE9F6B43aC78BA3" },
  { name: "HyperEVM", chainId: "999", address: "0x000000000022D473030F116dDEE9F6B43aC78BA3" },
  { name: "Plume", chainId: "98866", address: "0x000000000022D473030F116dDEE9F6B43aC78BA3" },
  { name: "Tac", chainId: "239", address: "0x000000000022D473030F116dDEE9F6B43aC78BA3" },
  { name: "Plasma", chainId: "9745", address: "0x000000000022D473030F116dDEE9F6B43aC78BA3" },
]

export function SwapApiPermit2Content() {
  return (
    <div className="space-y-12">
      <section>
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="outline">Permit2</Badge>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Permit2</h1>
      </section>

      <section id="about-permit2" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">About Permit2</h2>
        <p className="text-muted-foreground mb-4">
          OpenOcean Swap API supports <a href="https://docs.uniswap.org/contracts/permit2/reference/signature-transfer" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Uniswap&apos;s Permit2</a> <code className="rounded bg-muted px-1 py-0.5">SignatureTransfer</code> contract, which standardizes token approvals across applications and improves both UX and security.
        </p>
        <p className="text-muted-foreground mb-4">
          Permit2 is a universal token approval contract from Uniswap. Instead of requiring users to first send an approve transaction and then a swap, Permit2 allows approvals to be handled through a single EIP-712 signature. This removes the &quot;double transaction&quot; flow and gives developers more control over allowance scope (amounts, deadlines, nonces).
        </p>
        <p className="text-muted-foreground">
          For simpler integration, you may also consider using the <code className="rounded bg-muted px-1 py-0.5">AllowanceHolder</code> contract, which requires a one-time approval without additional signatures.
        </p>
      </section>

      <section id="using-permit2" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Using Permit2 with OpenOcean Swap API</h2>
        <p className="text-muted-foreground mb-6">To integrate Permit2 (SignatureTransfer) into your swap flow:</p>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-8">
          <li>Check the current allowance</li>
          <li>(Optional) Approve Permit2 if needed</li>
          <li>Generate the Permit2 signature and data</li>
          <li>Build the transaction body</li>
          <li>Send the transaction with the Permit2 signature</li>
        </ol>

        <h3 className="text-lg font-semibold mb-3">1. Check the current allowance for Permit2</h3>
        <p className="text-muted-foreground mb-2">Verify whether the target token has granted Permit2 sufficient spending allowance.</p>
        <CodeBlock
          code={`import { ethers } from 'ethers';
async function allowance() {
  const rpcUrl = 'https://base.llamarpc.com';
  const token = "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913";
  const account = "";
  const permit2Address = "0x000000000022D473030F116dDEE9F6B43aC78BA3";
  const provider = new ethers.JsonRpcProvider(rpcUrl);
  const contract = new ethers.Contract(token, ERC20_ABI, provider);
  const allowance = await contract.allowance(account, permit2Address);
  console.log(\`allowance: \${allowance.toString()}\`);
}`}
          language="javascript"
          showLineNumbers
        />

        <h3 className="text-lg font-semibold mt-8 mb-3">2. Approve Permit2 if needed (Optional)</h3>
        <p className="text-muted-foreground mb-2">If the allowance is insufficient, call the token&apos;s approve() method once to authorize Permit2.</p>
        <CodeBlock
          code={`import { ethers, Contract } from 'ethers';
async function approve() {
  const rpcUrl = 'https://base.llamarpc.com';
  const inTokenAddress = '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913';
  const privateKey = '';
  const permit2Address = '0x000000000022D473030F116dDEE9F6B43aC78BA3';
  let provider = new ethers.JsonRpcProvider(rpcUrl);
  const wallet = new ethers.Wallet(privateKey, provider);
  const contract = await new Contract(inTokenAddress, ERC20_ABI, wallet);
  try {
    await contract.approve(permit2Address, new BigNumber('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff').toFixed(0, 1));
  } catch (error) { return error; }
  return true;
}`}
          language="javascript"
          showLineNumbers
        />

        <h3 className="text-lg font-semibold mt-8 mb-3">3. Generate the Permit2 signature and data</h3>
        <CodeBlock
          code={`import { PERMIT2_ADDRESS, PermitTransferFrom, SignatureTransfer } from '@uniswap/permit2-sdk';
import { ethers } from 'ethers';
async function signAndBuildData() {
  const privateKey = "";
  const token = "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913";
  const amount = "1000000000";
  const spender = "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64"; // openocean contract
  const nonce = 0; const chainId = 8453; const deadline = 1761877730;
  const wallet = new ethers.Wallet(privateKey);
  const permit = { permitted: { token, amount }, spender, nonce, deadline };
  const { domain, types, values } = SignatureTransfer.getPermitData(permit, PERMIT2_ADDRESS, chainId, undefined);
  const signature = await wallet._signTypedData(domain, types, values);
  const iface = new ethers.utils.Interface(PERMIT2_ABI);
  const permitTransferFromData = [[[token, amount], nonce, deadline], [spender, amount], wallet.address, signature];
  const data = iface.encodeFunctionData('permitTransferFrom', permitTransferFromData);
  return { signature, data };
}`}
          language="javascript"
          showLineNumbers
        />

        <h3 className="text-lg font-semibold mt-8 mb-3">4. Build the transaction body</h3>
        <p className="text-muted-foreground mb-2">Use the OpenOcean Swap API response to construct the final on-chain transaction. Pass the permit data from step 3 as the <code className="rounded bg-muted px-1 py-0.5">permit</code> parameter.</p>
        <CodeBlock
          code={`async function swap() {
  const params = {
    inTokenAddress: '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913',
    outTokenAddress: '0x4200000000000000000000000000000000000006',
    slippage: 1, amount: 1000, gasPrice: 1, account: '0xB3cbe...',
    permit: '0x30f28b7a000...' // build from step 3 data
  };
  const { data } = await axios({
    url: \`https://open-api.openocean.finance/v4/8453/swap\`,
    method: 'GET', params
  });
  return data;
}`}
          language="javascript"
          showLineNumbers
        />

        <h3 className="text-lg font-semibold mt-8 mb-3">5. Send the transaction with the Permit2 signature</h3>
        <CodeBlock
          code={`async function send_transaction() {
  const rpcUrl = 'https://base.llamarpc.com';
  const privateKey = '';
  const provider = new ethers.JsonRpcProvider(rpcUrl);
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

      <section id="supported-chains" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Supported Chains</h2>
        <div className={tableWrapper}>
          <table className={tableClass}>
            <thead>
              <tr><th className={thClass}>Chain Name</th><th className={thClass}>ChainId</th><th className={thClass}>Permit2 Address</th></tr>
            </thead>
            <tbody>
              {permit2Chains.map((row) => (
                <tr key={row.chainId}><td className={tdClass}>{row.name}</td><td className={tdClass}>{row.chainId}</td><td className={tdClass}><code className="text-xs">{row.address}</code></td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="scroll-mt-20 pt-8 border-t border-border">
        <NextStepCard title="Swap API V4" description="Full swap endpoint reference." href="/docs/swap-api/v4" icon={<FileCode className="h-5 w-5" />} />
      </section>
    </div>
  )
}
