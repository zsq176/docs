"use client"

import * as React from "react"
import { CodeBlock } from "@/components/docs/code-block"
import { ExternalLink } from "lucide-react"

const tableWrapper = "overflow-x-auto rounded-xl border border-border my-4"
const tableClass = "w-full border-collapse"
const thClass = "text-left py-3 px-4 font-medium border-b border-border bg-muted/30"
const tdClass = "py-3 px-4 border-b border-border text-sm"

export function DCAApiGuideContent() {
  return (
    <div className="space-y-12">
      <section id="dca-integration-doc" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">DCA (Dollar Cost Averaging) API Integration Documentation</h2>
        <h3 className="text-xl font-semibold mt-6 mb-3">Overview</h3>
        <p className="text-muted-foreground max-w-3xl leading-relaxed mb-4">
          This document provides comprehensive integration guidelines for the OpenOcean DCA (Dollar Cost Averaging) API, based on the implementation in <code className="rounded bg-muted px-1 py-0.5">Dca.js</code>. The API allows users to create and manage automated recurring buy strategies for token accumulation on supported blockchain networks.
        </p>
        <a
          href="https://github.com/openocean-finance/OpenOcean-API-Examples/blob/main/frontend/src/pages/Dca.js"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
        >
          Dca.js (GitHub)
          <ExternalLink className="h-4 w-4" />
        </a>
      </section>

      <section id="api-base" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">API Base Information</h2>
        <h3 className="text-lg font-semibold mt-4 mb-2">Base URL</h3>
        <CodeBlock code="https://open-api.openocean.finance" language="text" />
      </section>

      <section id="supported-networks" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Supported Networks</h2>
        <p className="text-muted-foreground max-w-3xl mb-4">
          The DCA API supports the following blockchain networks:
        </p>
        <CodeBlock
          code={`// Some code
const dcaChains = ["eth", "bsc", "base", "sonic", "bera", "arbitrum", "hyperevm", "avax"];`}
          language="javascript"
        />
      </section>

      <section id="auth-wallet" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Authentication & Wallet Integration</h2>
        <h3 className="text-lg font-semibold mt-4 mb-2">Prerequisites</h3>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground max-w-3xl">
          <li>MetaMask or compatible Web3 wallet</li>
          <li>User must be connected to a supported network</li>
          <li>User must have sufficient token balance and gas fees</li>
          <li>Total allocation must be less than $5</li>
        </ul>
      </section>

      <section id="token-config" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Token Configuration</h2>
        <h3 className="text-lg font-semibold mt-4 mb-2">Token Approval</h3>
        <p className="text-muted-foreground max-w-3xl mb-4">
          Before creating a DCA strategy, users must approve the contract to spend their tokens:
        </p>
        <CodeBlock
          code={`// Check current allowance
const currentAllowance = await tokenContract.allowance(account, contractAddress);

// Approve if needed
if (currentAllowance < requiredAmount) {
  const maxAmount = ethers.MaxUint256;
  const tx = await tokenContract.approve(contractAddress, maxAmount);
  await tx.wait();
}`}
          language="javascript"
        />
      </section>

      <section id="api-endpoints" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">API Endpoints</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">1. Create DCA Strategy</h3>
        <p className="text-muted-foreground mb-2">
          <strong className="text-foreground">Endpoint:</strong> <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">POST /v2/{`{chainId}`}/dca/swap</code>
        </p>
        <p className="text-foreground font-medium mb-1">URL Parameters:</p>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground max-w-3xl mb-4">
          <li><code className="rounded bg-muted px-1 py-0.5 text-sm">chainId</code>: The blockchain network ID (e.g., 8453 for Base)</li>
        </ul>
        <p className="text-foreground font-medium mb-1">Request Body:</p>
        <CodeBlock
          code={`{
  "makerAsset": "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
  "takerAsset": "0xfde4c96c8593536e31f229ea8f37b2ada2699bb2",
  "makerAmount": "20000000",
  "signature": "0x...",
  "orderMaker": "0x...",
  "minPrice": 0,
  "maxPrice": 0,
  "time": 3600,
  "times": 2
}`}
          language="json"
        />
        <p className="text-foreground font-medium mb-1 mt-4">Field Descriptions:</p>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground max-w-3xl mb-4">
          <li><code className="rounded bg-muted px-1 py-0.5 text-sm">makerAsset</code>: Address of the token being sold (e.g., USDC)</li>
          <li><code className="rounded bg-muted px-1 py-0.5 text-sm">takerAsset</code>: Address of the token being bought (e.g., USDT)</li>
          <li><code className="rounded bg-muted px-1 py-0.5 text-sm">makerAmount</code>: Total allocation amount in smallest units</li>
          <li><code className="rounded bg-muted px-1 py-0.5 text-sm">signature</code>: signMessage</li>
          <li><code className="rounded bg-muted px-1 py-0.5 text-sm">orderMaker</code>: User&apos;s wallet address</li>
          <li><code className="rounded bg-muted px-1 py-0.5 text-sm">minPrice</code>: Minimum price limit in USD (optional, 0 for no limit)</li>
          <li><code className="rounded bg-muted px-1 py-0.5 text-sm">maxPrice</code>: Maximum price limit in USD (optional, 0 for no limit)</li>
          <li><code className="rounded bg-muted px-1 py-0.5 text-sm">time</code>: Time interval between trades in seconds</li>
          <li><code className="rounded bg-muted px-1 py-0.5 text-sm">times</code>: Number of trades to execute</li>
        </ul>
        <p className="text-foreground font-medium mb-1">Response:</p>
        <CodeBlock
          code={`{
  "success": true,
  "data": {
    "orderHash": "0x...",
    "status": "pending"
  }
}`}
          language="json"
        />

        <h3 className="text-xl font-semibold mt-6 mb-3">2. Cancel DCA Strategy</h3>
        <p className="text-muted-foreground mb-2">
          <strong className="text-foreground">Endpoint:</strong> <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">POST /v2/{`{chainId}`}/dca/cancel</code>
        </p>
        <p className="text-foreground font-medium mb-1">Request Body:</p>
        <CodeBlock
          code={`{
  "orderHash": "0x...",
  "signature": "0x..."
}`}
          language="json"
        />
        <p className="text-foreground font-medium mb-1 mt-4">Field Descriptions:</p>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground max-w-3xl mb-4">
          <li><code className="rounded bg-muted px-1 py-0.5 text-sm">orderHash</code>: Hash of the DCA strategy to cancel</li>
          <li><code className="rounded bg-muted px-1 py-0.5 text-sm">signature</code>: signMessage</li>
        </ul>
        <p className="text-foreground font-medium mb-1">Response:</p>
        <CodeBlock
          code={`{
  "code": 200,
  "success": true,
  "data": {
    "status": "cancelled"
  }
}`}
          language="json"
        />

        <h3 className="text-xl font-semibold mt-6 mb-3">3. Get User DCA Orders</h3>
        <p className="text-muted-foreground mb-2">
          <strong className="text-foreground">Endpoint:</strong> <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">GET /v2/{`{chainId}`}/dca/address/{`{address}`}</code>
        </p>
        <p className="text-foreground font-medium mb-1">URL Parameters:</p>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground max-w-3xl mb-2">
          <li><code className="rounded bg-muted px-1 py-0.5 text-sm">chainId</code>: The blockchain network ID</li>
          <li><code className="rounded bg-muted px-1 py-0.5 text-sm">address</code>: User&apos;s wallet address</li>
        </ul>
        <p className="text-foreground font-medium mb-1">Query Parameters:</p>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground max-w-3xl mb-4">
          <li><code className="rounded bg-muted px-1 py-0.5 text-sm">page</code>: Page number (default: 1)</li>
          <li><code className="rounded bg-muted px-1 py-0.5 text-sm">limit</code>: Number of orders per page (default: 100)</li>
          <li><code className="rounded bg-muted px-1 py-0.5 text-sm">statuses</code>: Array of order statuses to filter [1,2,5]</li>
          <li><code className="rounded bg-muted px-1 py-0.5 text-sm">sortBy</code>: Sort field (default: createDateTime)</li>
          <li><code className="rounded bg-muted px-1 py-0.5 text-sm">exclude</code>: Exclude certain orders (default: 0)</li>
        </ul>
        <p className="text-foreground font-medium mb-1">Example URL:</p>
        <CodeBlock
          code="/v2/8453/dca/address/0x1234...?page=1&limit=100&statuses=[1,2,5]&sortBy=createDateTime&exclude=0"
          language="text"
        />
        <p className="text-foreground font-medium mb-1 mt-4">Response:</p>
        <CodeBlock
          code={`{
  "success": true,
  "data": [
    {
      "id": "123",
      "orderHash": "0x...",
      "makerAsset": "0x...",
      "takerAsset": "0x...",
      "makerAmount": "20000000",
      "createDateTime": "2024-01-01T00:00:00Z",
      "statuses": 2,
      "time": 3600,
      "times": 2,
      "minPrice": 0,
      "maxPrice": 0
    }
  ]
}`}
          language="json"
        />
      </section>

      <section id="request-response" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Request/Response Formats</h2>
        <h3 className="text-lg font-semibold mt-4 mb-2">Order Status Codes</h3>
        <div className={tableWrapper}>
          <table className={tableClass}>
            <thead>
              <tr>
                <th className={thClass}>Code</th>
                <th className={thClass}>Status</th>
                <th className={thClass}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className={tdClass}>1</td><td className={tdClass}>Pending</td><td className={tdClass}>DCA strategy is pending execution</td></tr>
              <tr><td className={tdClass}>2</td><td className={tdClass}>Active</td><td className={tdClass}>DCA strategy is active and executing trades</td></tr>
              <tr><td className={tdClass}>3</td><td className={tdClass}>Filled</td><td className={tdClass}>DCA strategy has completed all trades</td></tr>
              <tr><td className={tdClass}>4</td><td className={tdClass}>Cancelled</td><td className={tdClass}>DCA strategy has been cancelled</td></tr>
              <tr><td className={tdClass}>5</td><td className={tdClass}>Expired</td><td className={tdClass}>DCA strategy has expired</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-2">Message Signing Format</h3>
        <p className="text-foreground font-medium mb-1">For DCA Strategy Creation:</p>
        <CodeBlock
          code={`makerAsset:
{makerAssetAddress}
takerAsset:
{takerAssetAddress}
makerAmount:
{makerAmount}`}
          language="text"
        />
        <p className="text-foreground font-medium mb-1 mt-4">For DCA Strategy Cancellation:</p>
        <CodeBlock
          code={`orderHash:
{orderHash}`}
          language="text"
        />

        <h3 className="text-lg font-semibold mt-6 mb-2">Signature Generation</h3>
        <CodeBlock
          code={`const message = \`makerAsset:\\n\${makerAsset}\\ntakerAsset:\\n\${takerAsset}\\nmakerAmount:\\n\${makerAmount}\`;
const signature = await signer.signMessage(message);`}
          language="javascript"
        />
      </section>

      <section id="integration-examples" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Integration Examples</h2>
        <h3 className="text-lg font-semibold mt-4 mb-2">Complete DCA Strategy Creation Flow</h3>
        <CodeBlock
          code={`async function createDcaStrategy(makerAmount, time, frequency, minPrice, maxPrice) {
  try {
    // 1. Validate inputs
    if (!makerAmount || makerAmount <= 0) {
      throw new Error('Invalid amount');
    }

    if (makerAmount >= 5) {
      throw new Error('Amount must be less than $5');
    }

    // 2. Check wallet connection
    if (!isWalletConnected) {
      throw new Error('Wallet not connected');
    }

    // 3. Get contract address
    const contractAddress = '0x6cBB2598881940D08d5Ea3fA8F557E02996e1031';

    // 4. Check and approve token if needed
    if (!isNativeToken(inToken.address)) {
      const approvalAmount = makerAmount * (10 ** inToken.decimals);
      await checkTokenApproval(inToken.address, contractAddress, approvalAmount, walletAccount, provider);
    }

    // 5. Prepare DCA parameters
    const messageParams = {
      makerAsset: inToken.address,
      takerAsset: outToken.address,
      makerAmount: (makerAmount * (10 ** inToken.decimals)).toString(),
    };

    // 6. Create and sign message
    const message = \`makerAsset:\\n\${messageParams.makerAsset}\\ntakerAsset:\\n\${messageParams.takerAsset}\\nmakerAmount:\\n\${messageParams.makerAmount}\`;
    const signer = await provider.getSigner();
    const signature = await signer.signMessage(message);

    // 7. Submit DCA strategy
    const order = {
      ...messageParams,
      signature,
      orderMaker: walletAccount,
      minPrice: minPrice || 0,
      maxPrice: maxPrice || 0,
      time: everyUnit * time,
      times: frequency,
    };

    const response = await axios.post(
      \`https://open-api.openocean.finance/v2/\${chainId}/dca/swap\`,
      order,
      { headers: { 'Content-Type': 'application/json' } }
    );

    if (response.data.code === 400) {
      throw new Error(response.data.error);
    }

    return response.data;
  } catch (error) {
    console.error('Error creating DCA strategy:', error);
    throw error;
  }
}`}
          language="javascript"
        />

        <h3 className="text-lg font-semibold mt-6 mb-2">DCA Strategy Management</h3>
        <CodeBlock
          code={`const { orderHash } = order;

// Create message for signing
const message = 'orderHash:\\n' + orderHash;
const signer = await provider.getSigner();
const signature = await signer.signMessage(message);

// Cancel order through API
const { data } = await axios.post(
  \`https://open-api.openocean.finance/v2/\${chain.chainId}/dca/cancel\`,
  {
    orderHash,
    signature
  }
);`}
          language="javascript"
        />
      </section>

      <section id="support" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Support</h2>
        <p className="text-muted-foreground max-w-3xl mb-2">
          For technical support or questions about the API:
        </p>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground max-w-3xl">
          <li>Check the <a href="https://docs.openocean.finance" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">OpenOcean Documentation</a></li>
          <li>Contact the development team</li>
          <li>Review error logs and API responses</li>
        </ul>
      </section>
    </div>
  )
}
