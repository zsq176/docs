"use client"

import { CodeBlock } from "@/components/docs/code-block"
import { Callout } from "@/components/docs/callout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const basicExampleCode = `import { OpenOceanWidget } from '@openocean.finance/widget';
const widgetConfig = {
    fromChain: 8453,  // Source chain ID
    toChain: 8453,    // Destination chain ID (same as source in this case)
    fromToken: '0x0000000000000000000000000000000000000000', // Address of the token you are sending (e.g., native token like ETH)
    toToken: '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913',   // Address of the token you want to receive
    fromAmount: '1',   // Amount to be swapped
    subvariant: "bridge", // Set this only if you're enabling cross-chain functionality
    theme: {
      container: {
        border: '1px solid rgb(234, 234, 234)',
        borderRadius: '16px',
      },
    },
  languages: {
    allow: ['en'], // bn, de, en, es, fr, id, it, ja, ko, pt, th, tr, uk, vi, zh
    // deny: ['uk'],
  },
  };
  export const WidgetPage = () => {
    return (
      <OpenOceanWidget integrator="Your dApp/company name" config={widgetConfig} />
    );
};
`

export function WidgetV2GettingStartedContent() {
  return (
    <>
      {/* Content from developer/widget/widget-v2/README.md */}
      <h2 className="text-2xl font-bold mt-10 mb-4">Widget V2</h2>
      <p className="text-muted-foreground max-w-3xl mb-4">
        The <strong>OpenOcean Widget V2</strong> is the upgraded version of our plug-and-play swap & bridge component, now supporting <strong>both same-chain and cross-chain</strong> transactions in one unified interface.
      </p>
      <p className="text-muted-foreground max-w-3xl mb-4">
        This powerful widget is built for seamless integration, allowing any app or platform to easily offer <strong>secure, multi-chain token swaps and bridging</strong> directly to users - without redirecting them elsewhere.
      </p>
      <p className="text-muted-foreground max-w-3xl mb-6">
        With full customization options, the widget can be styled to match your app's UI, helping you <strong>enhance your multi-chain strategy and retain users</strong> across EVM ecosystems.
      </p>

      <h3 className="text-xl font-semibold mb-3">Key Features</h3>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground max-w-3xl mb-6">
        <li>Unified cross-chain & same-chain swaps</li>
        <li>Supports 35+ chains and 1,000+ tokens</li>
        <li>Customizable UI to match your branding</li>
        <li>Built-in OpenOcean swap routing for best price execution</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Example Use Cases</h3>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground max-w-3xl mb-10">
        <li><strong>dApps:</strong> Allow users to swap on chain and bring assets cross-chain to your protocol</li>
        <li><strong>DeFAI:</strong> Boost your AI agent's execution capabilities with optimized routing</li>
        <li><strong>DeFi tools:</strong> Add a seamless token entry point with best-rate execution</li>
        <li><strong>GameFi/Meme/Launchpad:</strong> Enable users fund wallets across chains without leaving your site</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">Install the widget</h2>
      <p className="text-muted-foreground max-w-3xl mb-4">
        To get started, install the latest version of OpenOcean Widget and required packages.
      </p>

      <Tabs defaultValue="npm" className="w-full max-w-3xl mb-6">
        <TabsList>
          <TabsTrigger value="npm">npm</TabsTrigger>
          <TabsTrigger value="yarn">yarn</TabsTrigger>
          <TabsTrigger value="pnpm">pnpm</TabsTrigger>
        </TabsList>
        <TabsContent value="npm">
          <CodeBlock
            code="npm install @openocean.finance/widget wagmi @bigmi/react @solana/wallet-adapter-react @tanstack/react-query"
            language="bash"
          />
        </TabsContent>
        <TabsContent value="yarn">
          <CodeBlock
            code="yarn add @openocean.finance/widget wagmi @bigmi/react @solana/wallet-adapter-react @tanstack/react-query"
            language="bash"
          />
        </TabsContent>
        <TabsContent value="pnpm">
          <CodeBlock
            code="pnpm add @openocean.finance/widget wagmi @bigmi/react @solana/wallet-adapter-react @tanstack/react-query"
            language="bash"
          />
        </TabsContent>
      </Tabs>

      <ul className="list-disc list-inside space-y-2 text-muted-foreground max-w-3xl mb-10">
        <li><a href="https://wagmi.sh/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Wagmi</a> is type safe, extensible, and modular library for building Ethereum apps.</li>
        <li><a href="https://github.com/openocean/bigmi" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Bigmi</a> is modular TypeScript library that provides reactive primitives for building Bitcoin applications.</li>
        <li><a href="https://github.com/anza-xyz/wallet-adapter" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@solana/wallet-adapter-react</a> is modular TypeScript wallet adapters and components for Solana applications.</li>
        <li><a href="https://tanstack.com/query/v5" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">TanStack Query</a> is an async state manager that handles requests, caching, and more. It is recommended to use version <strong>^5.72.0</strong> or above.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">Basic example</h2>
      <p className="text-muted-foreground max-w-3xl mb-4">
        Below is a basic example using OpenOcean Widget with container customization.
      </p>
      <CodeBlock code={basicExampleCode} language="javascript" className="mb-6" />

      <Callout type="warning" title="Example of loading the widget under a nested (second-level) route:">
        <p>In the route configuration, change <code className="rounded bg-muted px-1.5 py-0.5 text-sm">/trade</code> to <code className="rounded bg-muted px-1.5 py-0.5 text-sm">/trade/*</code>:</p>
        <p className="mt-2"><code className="rounded bg-muted px-1.5 py-0.5 text-sm">{`<Route path="/trade/*" element={} />`}</code></p>
      </Callout>
    </>
  )
}
