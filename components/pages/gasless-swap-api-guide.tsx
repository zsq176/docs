"use client"

import * as React from "react"
import { CodeBlock } from "@/components/docs/code-block"

export function GaslessSwapApiGuideContent() {
  return (
    <div className="space-y-12">
      <section id="overview" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-muted-foreground max-w-3xl leading-relaxed">
          OpenOcean Gasless Swap lets users trade tokens without paying gas fees - OpenOcean covers the transaction costs. This function supports batch gasless transactions to minimize on-chain expenses and leverages the Permit2 authorization mechanism for enhanced security and seamless signature approvals.
        </p>
      </section>

      <section id="supported-chains" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Supported Chains</h2>
        <CodeBlock
          code={`const gaslessChain = [
  'arbitrum', 'bsc', 'sonic', 'base', 'sei', 
  'eth', 'hyperevm', 'avax', 'uni'
]`}
          language="javascript"
        />
      </section>

      <section id="api-endpoints" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">API Endpoints</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">1. Get Swap Quote</h3>
        <p className="text-muted-foreground mb-2">
          <strong className="text-foreground">Endpoint:</strong> <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">GET /v4/gasless/{`{chainId}`}/quote</code>
        </p>
        <p className="text-foreground font-medium mb-1">Parameters:</p>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground max-w-3xl mb-4">
          <li><code className="rounded bg-muted px-1 py-0.5 text-sm">inTokenAddress</code>: Input token address</li>
          <li><code className="rounded bg-muted px-1 py-0.5 text-sm">outTokenAddress</code>: Output token address</li>
          <li><code className="rounded bg-muted px-1 py-0.5 text-sm">amountDecimals</code>: Input amount (in smallest unit)</li>
          <li><code className="rounded bg-muted px-1 py-0.5 text-sm">slippage</code>: Slippage percentage (0-100)</li>
          <li><code className="rounded bg-muted px-1 py-0.5 text-sm">gasPrice</code>: Gas price</li>
          <li><code className="rounded bg-muted px-1 py-0.5 text-sm">account</code>: User wallet address</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">2. Execute Gasless Swap</h3>
        <p className="text-muted-foreground mb-2">
          <strong className="text-foreground">Endpoint:</strong> <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">POST /v4/gasless/{`{chainId}`}/swap</code>
        </p>
        <p className="text-foreground font-medium mb-1">Request Body:</p>
        <CodeBlock
          code={`{
  from: walletAccount,
  to: to,
  data: data,
  amountDecimals: amount,
  feeAmount1: fee1,
  feeAmount2: fee2,
  flag: flags,
  gasPriceDecimals: gasPrice,
  deadline: deadline,
  inToken: inTokenAddress,
  outToken: outTokenAddress,
  nonce: nonce,
  permit: permit,
  hash: hash
}`}
          language="javascript"
        />

        <h3 className="text-xl font-semibold mt-6 mb-3">3. Query Transaction Status</h3>
        <p className="text-muted-foreground mb-4">
          <strong className="text-foreground">Endpoint:</strong> <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">GET /v4/gasless/{`{chainId}`}/order?orderHash={`{orderHash}`}</code>
        </p>

        <p className="text-foreground font-medium mb-2">* Permit2 Signature Process</p>
        <h4 className="text-lg font-semibold mt-4 mb-2">1. Get Permit2 Contract Address</h4>
        <CodeBlock
          code={`const getPermit2ContractAddress = (chainCode) => {
  const contract = {
    "eth": "0x000000000022D473030F116dDEE9F6B43aC78BA3",
    "arbitrum": "0x000000000022D473030F116dDEE9F6B43aC78BA3", 
    "base": "0x000000000022D473030F116dDEE9F6B43aC78BA3",
  }[chainCode] || "0x000000000022D473030F116dDEE9F6B43aC78BA3";
  return contract;
};`}
          language="javascript"
        />
        <h4 className="text-lg font-semibold mt-4 mb-2">2. Create Permit2 Signature</h4>
        <CodeBlock
          code={`const setPermit2Signer = async (amount, token, permit2Address) => {
  const spender = '0xB1DD8E9ebbF5F150B75642D1653dF0dacd0bfF47';
  const deadline = Math.floor(Date.now() / 1000) + 60 * 30;
  const nonce = await getPermit2Nonce(spender);
  
  const permitSingle = {
    permitted: { token, amount },
    spender, nonce, deadline
  };
  
  const { domain, types, values } = SignatureTransfer.getPermitData(
    permitSingle, permit2Address, chainId
  );
  
  const signer = await provider.getSigner();
  const signature = await signer.signTypedData(domain, types, values);
  
  // Encode Permit2 data
  const permitTransferfromData = [
    [[token, amount], nonce, deadline],
    [spender, amount], walletAccount, signature
  ];
  
  const PERMIT2_INTERFACE = new Interface(Permit2Abi);
  const data = PERMIT2_INTERFACE.encodeFunctionData("0x30f28b7a", permitTransferfromData);
  
  return { permit: data, nonce, deadline, spender };
};`}
          language="javascript"
        />

        <p className="text-foreground font-medium mt-6 mb-2">* Complete Transaction Flow</p>
        <h4 className="text-lg font-semibold mt-4 mb-2">1. Pre-flight Checks</h4>
        <CodeBlock
          code={`if (!isWalletConnected) throw new Error('Please connect wallet');
if (!getIsGasLessChain(chain.chainCode)) throw new Error('Chain not supported');`}
          language="javascript"
        />
        <h4 className="text-lg font-semibold mt-4 mb-2">2. Get Quote</h4>
        <CodeBlock
          code={`const params = {
  inTokenAddress: inToken.address,
  outTokenAddress: outToken.address,
  amountDecimals: fromAmount * 10 ** inToken.decimals,
  slippage: slippage * 100,
  gasPrice: gasPrice,
  account: walletAccount
};

const res = await axios.get(\`/v4/gasless/\${chain.chainId}/quote?\${Object.entries(params).map(([k,v]) => \`\${k}=\${v}\`).join('&')}\`);
const { inAmount, data, to, fees, flags, hash } = res.data.data;`}
          language="javascript"
        />
        <h4 className="text-lg font-semibold mt-4 mb-2">3. Token Approval</h4>
        <CodeBlock
          code={`const permit2Address = await getPermit2ContractAddress(chain.chainCode);
if (!isNativeToken(inToken.address, chain.chainId)) {
  const approveAmount = BigNumber('0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF').toFixed(0);
  await checkTokenApprove(inToken.address, permit2Address, fromAmountDecimals, gasPrice, approveAmount);
}`}
          language="javascript"
        />
        <h4 className="text-lg font-semibold mt-4 mb-2">4. Execute Swap</h4>
        <CodeBlock
          code={`const permitSign = await setPermit2Signer(inAmount, inToken.address, permit2Address);
const { permit, nonce, deadline } = permitSign;

const gasLessData = {
  from: walletAccount, to, data, hash,
  amountDecimals: params.amountDecimals,
  feeAmount1: fees[0] ? (+fees[0].inFeeAmount * (10 ** fees[0].decimals)) : 0,
  feeAmount2: fees[1] ? (+fees[1].inFeeAmount * (10 ** fees[1].decimals)) : 0,
  flag: flags, gasPriceDecimals: gasPrice,
  deadline, inToken: inToken.address, outToken: outToken.address,
  nonce: Number(nonce), permit
};

const resGasless = await axios.post(\`/v4/gasless/\${chain.chainId}/swap\`, gasLessData);`}
          language="javascript"
        />
        <h4 className="text-lg font-semibold mt-4 mb-2">5. Poll Status</h4>
        <CodeBlock
          code={`const getGasHashTimeout = async (orderHash, i) => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  const res = await axios.get(\`/v4/gasless/\${chain.chainId}/order?orderHash=\${orderHash}\`);
  if (res.data.data.hash) return res.data.data.hash;
  if (i > 30) return null; // 60 second timeout
  return getGasHashTimeout(orderHash, i + 1);
};

const hash = await getGasHashTimeout(resGasless.data.orderHash, 0);`}
          language="javascript"
        />
      </section>

      <section id="error-handling" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Error Handling</h2>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground max-w-3xl">
          <li>Wallet not connected</li>
          <li>Chain not supported for gasless</li>
          <li>User rejected signature</li>
          <li>Transaction failed</li>
          <li>Timeout handling</li>
        </ul>
      </section>

      <section id="dependencies" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Dependencies</h2>
        <CodeBlock
          code={`{
  "axios": "^1.0.0",
  "ethers": "^6.0.0", 
  "bignumber.js": "^9.0.0",
  "@uniswap/permit2-sdk": "^1.0.0"
}`}
          language="json"
        />
      </section>

      <section id="important-notes" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Important Notes</h2>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground max-w-3xl">
          <li>Only supports specific chains</li>
          <li>Non-native tokens require approval</li>
          <li>Signatures valid for 30 minutes</li>
          <li>Set reasonable slippage</li>
          <li>Handle errors properly</li>
          <li>Poll transaction status</li>
        </ol>
      </section>
    </div>
  )
}
