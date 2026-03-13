"use client"

import Link from "next/link"
import { CodeBlock } from "@/components/docs/code-block"
import { FileCode } from "lucide-react"

const tableWrapper = "overflow-x-auto rounded-xl border border-border"
const tableClass = "w-full border-collapse"
const thClass = "text-left py-3 px-4 font-medium border-b border-border bg-muted/30"
const tdClass = "py-3 px-4 border-b border-border"

const statusCodes = [
  { code: "1", status: "Pending", description: "Order is pending execution" },
  { code: "2", status: "Active", description: "Order is active and can be filled" },
  { code: "3", status: "Filled", description: "Order has been completely filled" },
  { code: "4", status: "Cancelled", description: "Order has been cancelled" },
  { code: "5", status: "Expired", description: "Order has expired" },
]

export function LimitOrderApiGuideContent() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Guide</h1>
        <h2 className="mt-6 text-2xl font-semibold">Limit Order API Integration Documentation</h2>

        <h3 className="mt-8 text-xl font-semibold">Overview</h3>
        <p className="mt-2 text-muted-foreground max-w-3xl">
          This document provides comprehensive integration guidelines for the OpenOcean Limit Order API, based on the implementation in <code className="text-sm bg-muted px-1.5 py-0.5 rounded">LimitOrder.js</code>. The API allows users to create, manage, and cancel limit orders for token trading on supported blockchain networks.
        </p>
        <a
          href="https://github.com/openocean-finance/OpenOcean-API-Examples/blob/main/frontend/src/pages/LimitOrder.js"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50 hover:bg-muted/30"
        >
          <FileCode className="h-5 w-5 text-primary" />
          <span className="font-medium">LimitOrder.js</span>
          <span className="text-sm text-muted-foreground">(GitHub)</span>
        </a>
      </section>

      <section id="api-base-information" className="scroll-mt-20">
        <h2 className="text-2xl font-semibold">API Base Information</h2>
        <h3 className="mt-6 text-xl font-semibold">Base URL</h3>
        <CodeBlock code="https://open-api.openocean.finance" language="text" />
        <p className="mt-4 text-muted-foreground">
          View the current supported chains{" "}
          <Link href="/docs/supported-chains#limit-order-api-chains" className="text-primary hover:underline">
            here
          </Link>
          .
        </p>
      </section>

      <section id="token-configuration" className="scroll-mt-20">
        <h2 className="text-2xl font-semibold">Token Configuration</h2>
        <h3 className="mt-6 text-xl font-semibold">Token Approval</h3>
        <p className="mt-2 text-muted-foreground max-w-3xl">
          Before creating a limit order, users must approve the contract to spend their tokens:
        </p>
        <CodeBlock
          language="javascript"
          code={`// Check current allowance
const currentAllowance = await tokenContract.allowance(account, contractAddress);

// Approve if needed
if (currentAllowance < requiredAmount) {
  const tx = await tokenContract.approve(contractAddress, ethers.MaxUint256);
  await tx.wait();
}`}
        />
      </section>

      <section id="api-endpoints" className="scroll-mt-20">
        <h2 className="text-2xl font-semibold">API Endpoints</h2>

        <h3 className="mt-8 text-xl font-semibold">1. Create Limit Order</h3>
        <p className="mt-2">
          <strong>Endpoint:</strong> <code className="text-sm bg-muted px-1.5 py-0.5 rounded">POST /v2/&#123;chainId&#125;/limit-order</code>
        </p>
        <p className="mt-2 text-muted-foreground">
          <strong>URL Parameters:</strong>
        </p>
        <ul className="list-disc list-inside mt-1 text-muted-foreground">
          <li><code className="text-sm bg-muted px-1 rounded">chainId</code>: The blockchain network ID (e.g., 8453 for Base)</li>
        </ul>
        <p className="mt-4 font-medium">Request Body:</p>
        <CodeBlock
          language="json"
          code={`{
  "makerAsset": "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
  "takerAsset": "0xfde4c96c8593536e31f229ea8f37b2ada2699bb2",
  "makerAmount": "1000000",
  "takerAmount": "2000000",
  "expireTime": 1704067200000,
  "signature": "0x...",
  "orderMaker": "0x..."
}`}
        />
        <p className="mt-4 font-medium">Field Descriptions:</p>
        <ul className="list-disc list-inside text-muted-foreground space-y-1">
          <li><code className="text-sm bg-muted px-1 rounded">makerAsset</code>: Address of the token being sold</li>
          <li><code className="text-sm bg-muted px-1 rounded">takerAsset</code>: Address of the token being bought</li>
          <li><code className="text-sm bg-muted px-1 rounded">makerAmount</code>: Amount of maker token (in smallest units)</li>
          <li><code className="text-sm bg-muted px-1 rounded">takerAmount</code>: Amount of taker token (in smallest units)</li>
          <li><code className="text-sm bg-muted px-1 rounded">expireTime</code>: Order expiration timestamp (milliseconds)</li>
          <li><code className="text-sm bg-muted px-1 rounded">signature</code>: signMessage</li>
          <li><code className="text-sm bg-muted px-1 rounded">orderMaker</code>: User&apos;s wallet address</li>
        </ul>
        <p className="mt-4 font-medium">Response:</p>
        <CodeBlock
          language="json"
          code={`{
  "success": true,
  "data": {
    "orderHash": "0x...",
    "status": "pending"
  }
}`}
        />

        <h3 className="mt-10 text-xl font-semibold">2. Cancel Limit Order</h3>
        <p className="mt-2">
          <strong>Endpoint:</strong> <code className="text-sm bg-muted px-1.5 py-0.5 rounded">POST /v2/&#123;chainId&#125;/limit-order/cancelLimitOrder</code>
        </p>
        <p className="mt-4 font-medium">Request Body:</p>
        <CodeBlock
          language="json"
          code={`{
  "orderHash": "0x...",
  "signature": "0x..."
}`}
        />
        <p className="mt-4 font-medium">Field Descriptions:</p>
        <ul className="list-disc list-inside text-muted-foreground space-y-1">
          <li><code className="text-sm bg-muted px-1 rounded">orderHash</code>: Hash of the order to cancel</li>
          <li><code className="text-sm bg-muted px-1 rounded">signature</code>: signMessage</li>
        </ul>
        <p className="mt-4 font-medium">Response:</p>
        <CodeBlock
          language="json"
          code={`{
  "success": true,
  "data": {
    "status": "cancelled"
  }
}`}
        />

        <h3 className="mt-10 text-xl font-semibold">3. Get User Orders</h3>
        <p className="mt-2">
          <strong>Endpoint:</strong> <code className="text-sm bg-muted px-1.5 py-0.5 rounded">GET /v2/&#123;chainId&#125;/limit-order/address/&#123;address&#125;</code>
        </p>
        <p className="mt-2 text-muted-foreground">
          <strong>URL Parameters:</strong>
        </p>
        <ul className="list-disc list-inside text-muted-foreground">
          <li><code className="text-sm bg-muted px-1 rounded">chainId</code>: The blockchain network ID</li>
          <li><code className="text-sm bg-muted px-1 rounded">address</code>: User&apos;s wallet address</li>
        </ul>
        <p className="mt-4 font-medium">Query Parameters:</p>
        <ul className="list-disc list-inside text-muted-foreground space-y-1">
          <li><code className="text-sm bg-muted px-1 rounded">page</code>: Page number (default: 1)</li>
          <li><code className="text-sm bg-muted px-1 rounded">limit</code>: Number of orders per page (default: 100)</li>
          <li><code className="text-sm bg-muted px-1 rounded">statuses</code>: Array of order statuses to filter [1,2,5]</li>
          <li><code className="text-sm bg-muted px-1 rounded">sortBy</code>: Sort field (default: createDateTime)</li>
          <li><code className="text-sm bg-muted px-1 rounded">exclude</code>: Exclude certain orders (default: 0)</li>
        </ul>
        <p className="mt-4 font-medium">Example URL:</p>
        <CodeBlock
          language="text"
          code="/v2/8453/limit-order/address/0x1234...?page=1&limit=100&statuses=[1,2,5]&sortBy=createDateTime&exclude=0"
        />
        <p className="mt-4 font-medium">Response:</p>
        <CodeBlock
          language="json"
          code={`{
  "success": true,
  "data": [
    {
      "id": "123",
      "orderHash": "0x...",
      "makerAsset": "0x...",
      "takerAsset": "0x...",
      "makerAmount": "1000000",
      "takerAmount": "2000000",
      "createDateTime": "2024-01-01T00:00:00Z",
      "statuses": 2,
      "expireTime": 1704067200000
    }
  ]
}`}
        />
      </section>

      <section id="request-response-formats" className="scroll-mt-20">
        <h2 className="text-2xl font-semibold">Request/Response Formats</h2>

        <h3 className="mt-8 text-xl font-semibold">Order Status Codes</h3>
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
              {statusCodes.map((row) => (
                <tr key={row.code} className="hover:bg-muted/30 transition-colors">
                  <td className={tdClass}><code className="text-sm bg-muted px-2 py-0.5 rounded">{row.code}</code></td>
                  <td className={tdClass}>{row.status}</td>
                  <td className={tdClass}>{row.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="mt-8 text-xl font-semibold">Message Signing Format</h3>
        <p className="mt-2 font-medium">For Order Creation:</p>
        <CodeBlock
          language="text"
          code={`makerAsset:
{makerAssetAddress}
takerAsset:
{takerAssetAddress}
makerAmount:
{makerAmount}
takerAmount:
{takerAmount}
expireTime:
{expireTime}`}
        />
        <p className="mt-6 font-medium">For Order Cancellation:</p>
        <CodeBlock
          language="text"
          code={`orderHash:
{orderHash}`}
        />

        <h3 className="mt-8 text-xl font-semibold">Signature Generation</h3>
        <CodeBlock
          language="javascript"
          code={`const message = \`makerAsset:\\n\${makerAsset}\\ntakerAsset:\\n\${takerAsset}\\nmakerAmount:\\n\${makerAmount}\\ntakerAmount:\\n\${takerAmount}\\nexpireTime:\\n\${expireTime}\`;
const signature = await signer.signMessage(message);`}
        />
      </section>

      <section id="integration-examples" className="scroll-mt-20">
        <h2 className="text-2xl font-semibold">Integration Examples</h2>

        <h3 className="mt-8 text-xl font-semibold">Complete Order Creation Flow</h3>
        <CodeBlock
          language="javascript"
          code={`async function createLimitOrder(makerAmount, takerAmount, expireTime) {
  try {
    // 1. Validate inputs
    if (!makerAmount || !takerAmount || makerAmount <= 0 || takerAmount <= 0) {
      throw new Error('Invalid parameters');
    }

    // 2. Check wallet connection
    if (!isWalletConnected) {
      throw new Error('Wallet not connected');
    }

    // 3. Get contract address
    const contractAddress = getLimitContractAddress(chainName);

    // 4. Check and approve token if needed
    if (!isNativeToken(inToken.address)) {
      const approvalAmount = makerAmount * (10 ** inToken.decimals);
      await checkTokenApproval(inToken.address, contractAddress, approvalAmount, walletAccount, provider);
    }

    // 5. Prepare order parameters
    const messageParams = {
      makerAsset: inToken.address,
      takerAsset: outToken.address,
      makerAmount: (makerAmount * (10 ** inToken.decimals)).toString(),
      takerAmount: (takerAmount * (10 ** outToken.decimals)).toString(),
      expireTime: expireTime,
    };

    // 6. Create and sign message
    const message = \`makerAsset:\\n\${messageParams.makerAsset}\\ntakerAsset:\\n\${messageParams.takerAsset}\\nmakerAmount:\\n\${messageParams.makerAmount}\\ntakerAmount:\\n\${messageParams.takerAmount}\\nexpireTime:\\n\${messageParams.expireTime}\`;
    const signer = await provider.getSigner();
    const signature = await signer.signMessage(message);

    // 7. Submit order
    const order = {
      ...messageParams,
      signature,
      orderMaker: walletAccount,
    };

    const response = await axios.post(
      'https://open-api.openocean.finance/v2/8453/limit-order',
      order,
      { headers: { 'Content-Type': 'application/json' } }
    );

    return response.data;
  } catch (error) {
    console.error('Error creating limit order:', error);
    throw error;
  }
}`}
        />

        <h3 className="mt-8 text-xl font-semibold">Order Management</h3>
        <CodeBlock
          language="javascript"
          code={`// Get user orders
const orders = await getLimitOrders(walletAddress);
const { orderHash } = orders[0];
const message = 'orderHash:\\n' + orderHash;
const signer = await state.provider.getSigner();
const signature = await signer.signMessage(message);

await axios.post(
  'https://open-api.openocean.finance/v2/8453/limit-order/cancelLimitOrder',
  { orderHash, signature }
);`}
        />
      </section>

      <section id="support" className="scroll-mt-20 pt-8 border-t border-border">
        <h2 className="text-2xl font-semibold">Support</h2>
        <p className="mt-2 text-muted-foreground">For technical support or questions about the API:</p>
        <ul className="mt-4 list-disc list-inside text-muted-foreground space-y-2">
          <li>Check the <a href="https://docs.openocean.finance" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">OpenOcean Documentation</a></li>
          <li>Contact the development team</li>
          <li>Review error logs and API responses</li>
        </ul>
      </section>
    </div>
  )
}
