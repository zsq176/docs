"use client"

import { CodeBlock } from "@/components/docs/code-block"

function SectionDivider() {
  return <hr className="my-10 border-border" />
}

export function WidgetV2IntegrationExamplesContent() {
  return (
    <div className="space-y-12">
      <h2 className="text-2xl font-bold mt-10 mb-4">OpenOcean Widget Integration Guide</h2>

      <h3 className="text-xl font-semibold mb-3">Table of Contents</h3>
      <ul className="list-disc list-inside space-y-1 text-muted-foreground max-w-3xl mb-8">
        <li><a href="#vite-react" className="text-primary hover:underline">Vite + React</a></li>
        <li><a href="#nextjs-app-router" className="text-primary hover:underline">Next.js (App Router)</a></li>
        <li><a href="#nextjs-pages-router" className="text-primary hover:underline">Next.js (Pages Router)</a></li>
        <li><a href="#vue-3" className="text-primary hover:underline">Vue 3</a></li>
        <li><a href="#nuxt-3" className="text-primary hover:underline">Nuxt 3</a></li>
        <li><a href="#svelte" className="text-primary hover:underline">Svelte</a></li>
        <li><a href="#remix" className="text-primary hover:underline">Remix</a></li>
        <li><a href="#rainbowkit" className="text-primary hover:underline">RainbowKit</a></li>
        <li><a href="#connectkit" className="text-primary hover:underline">ConnectKit</a></li>
        <li><a href="#privy" className="text-primary hover:underline">Privy</a></li>
        <li><a href="#privy-ethers" className="text-primary hover:underline">Privy + Ethers</a></li>
        <li><a href="#reown" className="text-primary hover:underline">Reown (WalletConnect)</a></li>
        <li><a href="#dynamic" className="text-primary hover:underline">Dynamic</a></li>
        <li><a href="#zustand" className="text-primary hover:underline">Zustand Widget Config</a></li>
        <li><a href="#deposit-flow" className="text-primary hover:underline">Deposit Flow</a></li>
      </ul>

      <SectionDivider />

      <h2 id="vite-react" className="text-2xl font-bold mt-10 mb-4 scroll-mt-24">Vite + React</h2>
      <h3 className="text-xl font-semibold mb-3">Installation</h3>
      <CodeBlock
        code={`npm install @openocean.finance/widget @openocean.finance/wallet-management
npm install @tanstack/react-query wagmi viem
npm install --save-dev vite-plugin-node-polyfills`}
        language="bash"
        className="mb-4"
      />
      <h3 className="text-xl font-semibold mb-3">Configuration</h3>
      <p className="text-muted-foreground mb-2"><strong>vite.config.ts</strong></p>
      <CodeBlock
        code={`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      include: ['buffer', 'process'],
    }),
  ],
})`}
        language="typescript"
        className="mb-4"
      />
      <h3 className="text-xl font-semibold mb-3">Usage</h3>
      <p className="text-muted-foreground mb-2"><strong>src/App.tsx</strong></p>
      <CodeBlock
        code={`import { OpenOceanWidget } from '@openocean.finance/widget'

export function App() {
  return (
    <OpenOceanWidget
      integrator="vite-example"
      config={{
        buildUrl: false,
        subvariant: 'split',
        theme: {
          container: {
            border: '1px solid rgb(234, 234, 234)',
            borderRadius: '16px',
          },
        },
      }}
    />
  )
}`}
        language="tsx"
        className="mb-4"
      />
      <h3 className="text-xl font-semibold mb-3">Key Points</h3>
      <ul className="list-disc list-inside space-y-1 text-muted-foreground max-w-3xl mb-8">
        <li>Requires <code className="rounded bg-muted px-1.5 py-0.5 text-sm">vite-plugin-node-polyfills</code> for Node.js polyfills</li>
        <li>Basic React integration without wallet management</li>
        <li>Can be extended with wallet providers</li>
      </ul>

      <SectionDivider />

      <h2 id="nextjs-app-router" className="text-2xl font-bold mt-10 mb-4 scroll-mt-24">Next.js (App Router)</h2>
      <h3 className="text-xl font-semibold mb-3">Installation</h3>
      <CodeBlock
        code={`npm install @openocean.finance/widget @openocean.finance/widget-sdk
npm install @mui/material-nextjs`}
        language="bash"
        className="mb-4"
      />
      <h3 className="text-xl font-semibold mb-3">Configuration</h3>
      <p className="text-muted-foreground mb-2"><strong>next.config.js</strong></p>
      <CodeBlock
        code={`/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@openocean.finance/widget'],
}

module.exports = nextConfig`}
        language="javascript"
        className="mb-4"
      />
      <h3 className="text-xl font-semibold mb-3">Usage</h3>
      <p className="text-muted-foreground mb-2"><strong>app/page.tsx</strong></p>
      <CodeBlock
        code={`import { Widget } from '@/components/Widget'

export default function Home() {
  return (
    <main>
      <Widget />
    </main>
  )
}`}
        language="tsx"
        className="mb-4"
      />
      <p className="text-muted-foreground mb-2"><strong>components/Widget.tsx</strong></p>
      <CodeBlock
        code={`'use client'

import type { WidgetConfig } from '@openocean.finance/widget'
import { OpenOceanWidget, WidgetSkeleton } from '@openocean.finance/widget'
import { ClientOnly } from './ClientOnly'

export function Widget() {
  const config = {
    appearance: 'light',
    theme: {
      container: {
        border: '1px solid rgb(234, 234, 234)',
        borderRadius: '16px',
      },
    },
  } as Partial<WidgetConfig>

  return (
    <ClientOnly fallback={<WidgetSkeleton config={config} />}>
      <OpenOceanWidget config={config} integrator="nextjs-example" />
    </ClientOnly>
  )
}`}
        language="tsx"
        className="mb-4"
      />
      <p className="text-muted-foreground mb-2"><strong>components/ClientOnly.tsx</strong></p>
      <CodeBlock
        code={`'use client'

import { useEffect, useState } from 'react'

export function ClientOnly({ children, fallback = null }) {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return fallback
  }

  return children
}`}
        language="tsx"
        className="mb-4"
      />
      <h3 className="text-xl font-semibold mb-3">Key Points</h3>
      <ul className="list-disc list-inside space-y-1 text-muted-foreground max-w-3xl mb-8">
        <li>Use <code className="rounded bg-muted px-1.5 py-0.5 text-sm">&apos;use client&apos;</code> directive for client components</li>
        <li>Implement <code className="rounded bg-muted px-1.5 py-0.5 text-sm">ClientOnly</code> wrapper to prevent SSR issues</li>
        <li>Use <code className="rounded bg-muted px-1.5 py-0.5 text-sm">WidgetSkeleton</code> as fallback during SSR</li>
        <li>Configure <code className="rounded bg-muted px-1.5 py-0.5 text-sm">transpilePackages</code> in next.config.js</li>
      </ul>

      <SectionDivider />

      <h2 id="nextjs-pages-router" className="text-2xl font-bold mt-10 mb-4 scroll-mt-24">Next.js (Pages Router)</h2>
      <h3 className="text-xl font-semibold mb-3">Installation</h3>
      <p className="text-muted-foreground mb-4">Same as Next.js App Router.</p>
      <h3 className="text-xl font-semibold mb-3">Usage</h3>
      <p className="text-muted-foreground mb-2"><strong>pages/index.tsx</strong></p>
      <CodeBlock
        code={`import { Widget } from '@/components/Widget'

export default function Home() {
  return (
    <main>
      <Widget />
    </main>
  )
}`}
        language="tsx"
        className="mb-4"
      />
      <p className="text-muted-foreground mb-2"><strong>components/Widget.tsx</strong></p>
      <p className="text-muted-foreground mb-4">Same implementation as App Router, but without <code className="rounded bg-muted px-1.5 py-0.5 text-sm">&apos;use client&apos;</code> directive (not needed in Pages Router).</p>
      <h3 className="text-xl font-semibold mb-3">Key Points</h3>
      <ul className="list-disc list-inside space-y-1 text-muted-foreground max-w-3xl mb-8">
        <li>Similar to App Router but uses <code className="rounded bg-muted px-1.5 py-0.5 text-sm">pages/</code> directory</li>
        <li>No need for <code className="rounded bg-muted px-1.5 py-0.5 text-sm">&apos;use client&apos;</code> directive</li>
        <li>Still requires <code className="rounded bg-muted px-1.5 py-0.5 text-sm">ClientOnly</code> wrapper for SSR safety</li>
      </ul>

      <SectionDivider />

      <h2 id="vue-3" className="text-2xl font-bold mt-10 mb-4 scroll-mt-24">Vue 3</h2>
      <h3 className="text-xl font-semibold mb-3">Installation</h3>
      <CodeBlock code="npm install @openocean.finance/widget veaury\nnpm install --save-dev @vitejs/plugin-react @vitejs/plugin-vue" language="bash" className="mb-4" />
      <h3 className="text-xl font-semibold mb-3">Configuration</h3>
      <p className="text-muted-foreground mb-2"><strong>vite.config.ts</strong></p>
      <CodeBlock
        code={`import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  plugins: [
    vue(),
    react(),
    nodePolyfills(),
  ],
})`}
        language="typescript"
        className="mb-4"
      />
      <h3 className="text-xl font-semibold mb-3">Usage</h3>
      <p className="text-muted-foreground mb-2"><strong>src/components/Widget.vue</strong></p>
      <CodeBlock
        code={`<template>
  <Widget :config="config" />
</template>

<script lang="ts">
import { OpenOceanWidget } from '@openocean.finance/widget'
import { applyPureReactInVue } from 'veaury'

export default {
  components: {
    Widget: applyPureReactInVue(OpenOceanWidget),
  },
  setup() {
    return {
      config: {
        theme: {
          container: {
            border: '1px solid rgb(234, 234, 234)',
            borderRadius: '16px',
          },
        },
        integrator: 'vue-example',
      },
    }
  },
}
</script>`}
        language="vue"
        className="mb-4"
      />
      <h3 className="text-xl font-semibold mb-3">Key Points</h3>
      <ul className="list-disc list-inside space-y-1 text-muted-foreground max-w-3xl mb-8">
        <li>Uses <code className="rounded bg-muted px-1.5 py-0.5 text-sm">veaury</code> to bridge React and Vue components</li>
        <li>Requires both Vue and React plugins in Vite</li>
        <li>Use <code className="rounded bg-muted px-1.5 py-0.5 text-sm">applyPureReactInVue</code> or <code className="rounded bg-muted px-1.5 py-0.5 text-sm">applyReactInVue</code> HOC</li>
      </ul>

      <SectionDivider />

      <h2 id="nuxt-3" className="text-2xl font-bold mt-10 mb-4 scroll-mt-24">Nuxt 3</h2>
      <h3 className="text-xl font-semibold mb-3">Installation</h3>
      <CodeBlock code="npm install @openocean.finance/widget veaury" language="bash" className="mb-4" />
      <h3 className="text-xl font-semibold mb-3">Configuration</h3>
      <p className="text-muted-foreground mb-2"><strong>nuxt.config.ts</strong></p>
      <CodeBlock
        code={`export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: false, // Widget requires client-side rendering
})`}
        language="typescript"
        className="mb-4"
      />
      <h3 className="text-xl font-semibold mb-3">Usage</h3>
      <p className="text-muted-foreground mb-2"><strong>components/WidgetContainer.vue</strong></p>
      <CodeBlock
        code={`<template>
  <Widget :config="config" />
</template>

<script lang="ts">
import { OpenOceanWidget } from '@openocean.finance/widget'
import { applyPureReactInVue } from 'veaury'

export default {
  components: {
    Widget: applyPureReactInVue(OpenOceanWidget),
  },
  setup() {
    return {
      config: {
        theme: {
          container: {
            border: '1px solid rgb(234, 234, 234)',
            borderRadius: '16px',
          },
        },
        integrator: 'nuxt-example',
      },
    }
  },
}
</script>`}
        language="vue"
        className="mb-4"
      />
      <p className="text-muted-foreground mb-2"><strong>app.vue</strong></p>
      <CodeBlock
        code={`<template>
  <ClientOnly>
    <WidgetContainer />
  </ClientOnly>
</template>`}
        language="vue"
        className="mb-4"
      />
      <h3 className="text-xl font-semibold mb-3">Key Points</h3>
      <ul className="list-disc list-inside space-y-1 text-muted-foreground max-w-3xl mb-8">
        <li>Use <code className="rounded bg-muted px-1.5 py-0.5 text-sm">ClientOnly</code> component for SSR safety</li>
        <li>Disable SSR or use client-only rendering</li>
        <li>Same Vue-React bridge approach as Vue 3</li>
      </ul>

      <SectionDivider />

      <h2 id="svelte" className="text-2xl font-bold mt-10 mb-4 scroll-mt-24">Svelte</h2>
      <h3 className="text-xl font-semibold mb-3">Installation</h3>
      <CodeBlock code="npm install @openocean.finance/widget\nnpm install --save-dev @vitejs/plugin-react @vitejs/plugin-svelte" language="bash" className="mb-4" />
      <h3 className="text-xl font-semibold mb-3">Configuration</h3>
      <p className="text-muted-foreground mb-2"><strong>vite.config.ts</strong></p>
      <CodeBlock
        code={`import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [svelte(), react()],
})`}
        language="typescript"
        className="mb-4"
      />
      <h3 className="text-xl font-semibold mb-3">Usage</h3>
      <p className="text-muted-foreground mb-2"><strong>src/lib/OpenOceanWidget.svelte</strong></p>
      <CodeBlock
        code={`<script>
import { OpenOceanWidget } from '@openocean.finance/widget'
import ReactAdapter from './ReactAdapter.svelte'
</script>

<ReactAdapter
  element={OpenOceanWidget}
  config={{
    theme: {
      container: {
        boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.08)',
        borderRadius: '16px',
      },
    },
  }}
  integrator="svelte-example"
/>`}
        language="svelte"
        className="mb-4"
      />
      <p className="text-muted-foreground mb-2"><strong>src/lib/ReactAdapter.svelte</strong></p>
      <p className="text-muted-foreground mb-4">You&apos;ll need a React adapter component. Check the example for the full implementation.</p>
      <h3 className="text-xl font-semibold mb-3">Key Points</h3>
      <ul className="list-disc list-inside space-y-1 text-muted-foreground max-w-3xl mb-8">
        <li>Requires a React adapter to use React components in Svelte</li>
        <li>Both Svelte and React plugins needed</li>
        <li>Custom adapter implementation required</li>
      </ul>

      <SectionDivider />

      <h2 id="remix" className="text-2xl font-bold mt-10 mb-4 scroll-mt-24">Remix</h2>
      <h3 className="text-xl font-semibold mb-3">Installation</h3>
      <CodeBlock code="npm install @openocean.finance/widget @tanstack/react-query" language="bash" className="mb-4" />
      <h3 className="text-xl font-semibold mb-3">Configuration</h3>
      <p className="text-muted-foreground mb-2"><strong>remix.config.js</strong></p>
      <CodeBlock
        code={`/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverModuleFormat: 'esm',
  future: {
    v2_errorBoundary: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
}`}
        language="javascript"
        className="mb-4"
      />
      <h3 className="text-xl font-semibold mb-3">Usage</h3>
      <p className="text-muted-foreground mb-2"><strong>app/routes/_index.tsx</strong></p>
      <CodeBlock
        code={`import { ClientOnly } from 'remix-utils/client-only'
import { Fallback } from '../components/Fallback'
import { OpenOceanWidget } from '../components/OpenOceanWidget'

export default function Index() {
  return (
    <ClientOnly fallback={<Fallback />}>
      {() => <OpenOceanWidget />}
    </ClientOnly>
  )
}`}
        language="tsx"
        className="mb-4"
      />
      <p className="text-muted-foreground mb-2"><strong>app/components/OpenOceanWidget.tsx</strong></p>
      <CodeBlock
        code={`import { OpenOceanWidget } from '@openocean.finance/widget'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../lib/queryClient'

export function OpenOceanWidget() {
  return (
    <QueryClientProvider client={queryClient}>
      <OpenOceanWidget
        integrator="remix-example"
        config={{
          theme: {
            container: {
              border: '1px solid rgb(234, 234, 234)',
              borderRadius: '16px',
            },
          },
        }}
      />
    </QueryClientProvider>
  )
}`}
        language="tsx"
        className="mb-4"
      />
      <h3 className="text-xl font-semibold mb-3">Key Points</h3>
      <ul className="list-disc list-inside space-y-1 text-muted-foreground max-w-3xl mb-8">
        <li>Requires React Query provider</li>
        <li>Server-side rendering support</li>
        <li>Configure Remix for ES modules</li>
      </ul>

      <SectionDivider />

      <h2 id="rainbowkit" className="text-2xl font-bold mt-10 mb-4 scroll-mt-24">RainbowKit</h2>
      <h3 className="text-xl font-semibold mb-3">Installation</h3>
      <CodeBlock code="npm install @openocean.finance/widget @rainbow-me/rainbowkit wagmi viem\nnpm install @tanstack/react-query" language="bash" className="mb-4" />
      <h3 className="text-xl font-semibold mb-3">Configuration</h3>
      <p className="text-muted-foreground mb-2"><strong>src/config/wagmi.ts</strong></p>
      <CodeBlock
        code={`import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains'

export const config = getDefaultConfig({
  appName: 'OpenOcean Widget Example',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true,
})`}
        language="typescript"
        className="mb-4"
      />
      <h3 className="text-xl font-semibold mb-3">Usage</h3>
      <p className="text-muted-foreground mb-2"><strong>src/App.tsx</strong></p>
      <CodeBlock
        code={`import { OpenOceanWidget } from '@openocean.finance/widget'
import { ConnectButton, useConnectModal } from '@rainbow-me/rainbowkit'
import { WagmiProvider } from 'wagmi'
import { QueryClientProvider } from '@tanstack/react-query'
import { config } from './config/wagmi'
import { queryClient } from './config/queryClient'

export default function App() {
  const { openConnectModal } = useConnectModal()
  
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <ConnectButton chainStatus="none" />
          <OpenOceanWidget
            config={{
              walletConfig: {
                onConnect() {
                  openConnectModal?.()
                },
              },
              theme: {
                container: {
                  boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.08)',
                  borderRadius: '16px',
                },
              },
            }}
            integrator="rainbowkit-example"
          />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}`}
        language="tsx"
        className="mb-4"
      />
      <h3 className="text-xl font-semibold mb-3">Key Points</h3>
      <ul className="list-disc list-inside space-y-1 text-muted-foreground max-w-3xl mb-8">
        <li>Integrates with RainbowKit wallet connection</li>
        <li>Uses <code className="rounded bg-muted px-1.5 py-0.5 text-sm">walletConfig.onConnect</code> to trigger RainbowKit modal</li>
        <li>Requires Wagmi and React Query setup</li>
      </ul>

      <SectionDivider />

      <h2 id="connectkit" className="text-2xl font-bold mt-10 mb-4 scroll-mt-24">ConnectKit</h2>
      <h3 className="text-xl font-semibold mb-3">Installation</h3>
      <CodeBlock code="npm install @openocean.finance/widget @openocean.finance/wallet-management\nnpm install connectkit wagmi viem @tanstack/react-query" language="bash" className="mb-4" />
      <h3 className="text-xl font-semibold mb-3">Configuration</h3>
      <p className="text-muted-foreground mb-2"><strong>src/config/queryClient.ts</strong></p>
      <CodeBlock
        code={`import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient()`}
        language="typescript"
        className="mb-4"
      />
      <p className="text-muted-foreground mb-2"><strong>src/providers/WalletProvider.tsx</strong></p>
      <p className="text-muted-foreground mb-4">Set up ConnectKit wallet provider. See example for full implementation.</p>
      <h3 className="text-xl font-semibold mb-3">Usage</h3>
      <p className="text-muted-foreground mb-2"><strong>src/App.tsx</strong></p>
      <CodeBlock
        code={`import { OpenOceanWidget } from '@openocean.finance/widget'
import { QueryClientProvider } from '@tanstack/react-query'
import { WalletProvider } from './providers/WalletProvider'
import { queryClient } from './config/queryClient'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WalletProvider>
        <OpenOceanWidget
          integrator="widget-connectkit-example"
          config={{
            theme: {
              container: {
                border: '1px solid rgb(234, 234, 234)',
                borderRadius: '16px',
              },
            },
          }}
        />
      </WalletProvider>
    </QueryClientProvider>
  )
}`}
        language="tsx"
        className="mb-4"
      />
      <h3 className="text-xl font-semibold mb-3">Key Points</h3>
      <ul className="list-disc list-inside space-y-1 text-muted-foreground max-w-3xl mb-8">
        <li>Uses OpenOcean&apos;s wallet-management package</li>
        <li>Integrates with ConnectKit</li>
        <li>Requires QueryClient setup</li>
      </ul>

      <SectionDivider />

      <h2 id="privy" className="text-2xl font-bold mt-10 mb-4 scroll-mt-24">Privy</h2>
      <h3 className="text-xl font-semibold mb-3">Installation</h3>
      <CodeBlock code="npm install @openocean.finance/widget @privy-io/react-auth\nnpm install @tanstack/react-query" language="bash" className="mb-4" />
      <h3 className="text-xl font-semibold mb-3">Configuration</h3>
      <p className="text-muted-foreground mb-2"><strong>src/config/queryClient.ts</strong></p>
      <CodeBlock
        code={`import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient()`}
        language="typescript"
        className="mb-4"
      />
      <h3 className="text-xl font-semibold mb-3">Usage</h3>
      <p className="text-muted-foreground mb-2"><strong>src/App.tsx</strong></p>
      <CodeBlock
        code={`import { OpenOceanWidget } from '@openocean.finance/widget'
import { PrivyProvider } from '@privy-io/react-auth'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './config/queryClient'

function App() {
  return (
    <PrivyProvider
      appId="YOUR_PRIVY_APP_ID"
      config={{
        loginMethods: ['wallet', 'email', 'sms'],
      }}
    >
      <QueryClientProvider client={queryClient}>
        <OpenOceanWidget
          integrator="privy-example"
          config={{
            theme: {
              container: {
                border: '1px solid rgb(234, 234, 234)',
                borderRadius: '16px',
              },
            },
          }}
        />
      </QueryClientProvider>
    </PrivyProvider>
  )
}`}
        language="tsx"
        className="mb-4"
      />
      <h3 className="text-xl font-semibold mb-3">Key Points</h3>
      <ul className="list-disc list-inside space-y-1 text-muted-foreground max-w-3xl mb-8">
        <li>Integrates with Privy authentication</li>
        <li>Supports multiple login methods</li>
        <li>Requires Privy app ID</li>
      </ul>

      <SectionDivider />

      <h2 id="privy-ethers" className="text-2xl font-bold mt-10 mb-4 scroll-mt-24">Privy + Ethers</h2>
      <h3 className="text-xl font-semibold mb-3">Installation</h3>
      <CodeBlock code="npm install @openocean.finance/widget @privy-io/react-auth ethers\nnpm install @tanstack/react-query" language="bash" className="mb-4" />
      <h3 className="text-xl font-semibold mb-3">Usage</h3>
      <p className="text-muted-foreground mb-4">Similar to Privy example but with Ethers.js integration for wallet operations.</p>
      <h3 className="text-xl font-semibold mb-3">Key Points</h3>
      <ul className="list-disc list-inside space-y-1 text-muted-foreground max-w-3xl mb-8">
        <li>Extends Privy with Ethers.js</li>
        <li>Provides more wallet control</li>
        <li>See example for wallet provider implementation</li>
      </ul>

      <SectionDivider />

      <h2 id="reown" className="text-2xl font-bold mt-10 mb-4 scroll-mt-24">Reown (WalletConnect)</h2>
      <h3 className="text-xl font-semibold mb-3">Installation</h3>
      <CodeBlock code="npm install @openocean.finance/widget @reown/appkit @reown/appkit-adapter-wagmi\nnpm install wagmi viem @tanstack/react-query" language="bash" className="mb-4" />
      <h3 className="text-xl font-semibold mb-3">Configuration</h3>
      <p className="text-muted-foreground mb-2"><strong>src/config/wagmi.ts</strong></p>
      <CodeBlock
        code={`import { createConfig, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { createAppKit } from '@reown/appkit/react'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

const metadata = {
  name: 'OpenOcean Widget',
  description: 'OpenOcean Widget Example',
  url: 'https://openocean.finance',
  icons: ['/logo.avif'],
}

const wagmiAdapter = new WagmiAdapter({
  ssr: true,
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})

export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})

createAppKit({
  adapters: [wagmiAdapter],
  chains: [mainnet, sepolia],
  projectId: 'YOUR_PROJECT_ID',
  metadata,
})`}
        language="typescript"
        className="mb-4"
      />
      <h3 className="text-xl font-semibold mb-3">Usage</h3>
      <p className="text-muted-foreground mb-2"><strong>src/App.tsx</strong></p>
      <CodeBlock
        code={`import { OpenOceanWidget } from '@openocean.finance/widget'
import { WagmiProvider } from 'wagmi'
import { QueryClientProvider } from '@tanstack/react-query'
import { config } from './config/wagmi'
import { queryClient } from './config/queryClient'

export default function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <OpenOceanWidget
          integrator="reown-example"
          config={{
            theme: {
              container: {
                border: '1px solid rgb(234, 234, 234)',
                borderRadius: '16px',
              },
            },
          }}
        />
      </QueryClientProvider>
    </WagmiProvider>
  )
}`}
        language="tsx"
        className="mb-4"
      />
      <h3 className="text-xl font-semibold mb-3">Key Points</h3>
      <ul className="list-disc list-inside space-y-1 text-muted-foreground max-w-3xl mb-8">
        <li>Uses Reown (WalletConnect v4)</li>
        <li>Requires project ID from WalletConnect Cloud</li>
        <li>Full Wagmi integration</li>
      </ul>

      <SectionDivider />

      <h2 id="dynamic" className="text-2xl font-bold mt-10 mb-4 scroll-mt-24">Dynamic</h2>
      <h3 className="text-xl font-semibold mb-3">Installation</h3>
      <CodeBlock code="npm install @openocean.finance/widget @dynamic-labs/sdk-react-core\nnpm install @tanstack/react-query" language="bash" className="mb-4" />
      <h3 className="text-xl font-semibold mb-3">Configuration</h3>
      <p className="text-muted-foreground mb-2"><strong>src/config/dynamic.ts</strong></p>
      <CodeBlock
        code={`import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core'

export const dynamicConfig = {
  environmentId: 'YOUR_ENVIRONMENT_ID',
}`}
        language="typescript"
        className="mb-4"
      />
      <h3 className="text-xl font-semibold mb-3">Usage</h3>
      <p className="text-muted-foreground mb-2"><strong>src/App.tsx</strong></p>
      <CodeBlock
        code={`import { OpenOceanWidget } from '@openocean.finance/widget'
import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './config/queryClient'
import { dynamicConfig } from './config/dynamic'

function App() {
  return (
    <DynamicContextProvider settings={dynamicConfig}>
      <QueryClientProvider client={queryClient}>
        <OpenOceanWidget
          integrator="dynamic-example"
          config={{
            theme: {
              container: {
                border: '1px solid rgb(234, 234, 234)',
                borderRadius: '16px',
              },
            },
          }}
        />
      </QueryClientProvider>
    </DynamicContextProvider>
  )
}`}
        language="tsx"
        className="mb-4"
      />
      <h3 className="text-xl font-semibold mb-3">Key Points</h3>
      <ul className="list-disc list-inside space-y-1 text-muted-foreground max-w-3xl mb-8">
        <li>Integrates with Dynamic Labs wallet SDK</li>
        <li>Requires environment ID</li>
        <li>Supports multiple wallet types</li>
      </ul>

      <SectionDivider />

      <h2 id="zustand" className="text-2xl font-bold mt-10 mb-4 scroll-mt-24">Zustand Widget Config</h2>
      <h3 className="text-xl font-semibold mb-3">Installation</h3>
      <CodeBlock code="npm install @openocean.finance/widget zustand\nnpm install @mui/material" language="bash" className="mb-4" />
      <h3 className="text-xl font-semibold mb-3">Usage</h3>
      <p className="text-muted-foreground mb-4">This example demonstrates using Zustand for widget configuration state management with form controls.</p>
      <p className="text-muted-foreground mb-2"><strong>src/store/createWidgetConfigStore.ts</strong></p>
      <CodeBlock
        code={`import { create } from 'zustand'
import type { WidgetConfig } from '@openocean.finance/widget'

interface WidgetConfigState {
  config: Partial<WidgetConfig>
  setConfig: (config: Partial<WidgetConfig>) => void
  setFormValues: (formValues: Partial<WidgetConfig>) => void
}

export const useWidgetConfigStore = create<WidgetConfigState>((set, get) => ({
  config: {
    buildUrl: true,
    theme: {
      container: {
        border: '1px solid rgb(234, 234, 234)',
        borderRadius: '16px',
      },
    },
  },
  setConfig: (config) => set({ config }),
  setFormValues: (formValues) => {
    const currentConfig = get().config ?? {}
    const { fromAmount, fromChain, fromToken, toAddress, toChain, toToken, ...rest } = currentConfig
    set({
      config: {
        ...rest,
        ...formValues,
      },
    })
  },
}))`}
        language="typescript"
        className="mb-4"
      />
      <p className="text-muted-foreground mb-2"><strong>src/App.tsx</strong></p>
      <CodeBlock
        code={`import { Box } from '@mui/material'
import { FormControls } from './components/FormControls'
import { WidgetView } from './components/WidgetView'

function App() {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <FormControls />
      <WidgetView />
    </Box>
  )
}`}
        language="tsx"
        className="mb-4"
      />
      <p className="text-muted-foreground mb-2"><strong>src/components/WidgetView.tsx</strong></p>
      <CodeBlock
        code={`import { OpenOceanWidget } from '@openocean.finance/widget'
import { useWidgetConfigStore } from '../store/createWidgetConfigStore'

export function WidgetView() {
  const config = useWidgetConfigStore((state) => state.config)

  return (
    <OpenOceanWidget
      integrator="zustand-example"
      config={config}
    />
  )
}`}
        language="tsx"
        className="mb-4"
      />
      <h3 className="text-xl font-semibold mb-3">Key Points</h3>
      <ul className="list-disc list-inside space-y-1 text-muted-foreground max-w-3xl mb-8">
        <li>Uses Zustand for state management</li>
        <li>Separates form controls from widget view</li>
        <li>Allows dynamic widget configuration updates</li>
        <li>Good for complex state management scenarios</li>
        <li>Supports form value updates without affecting other config</li>
      </ul>

      <SectionDivider />

      <h2 id="deposit-flow" className="text-2xl font-bold mt-10 mb-4 scroll-mt-24">Deposit Flow</h2>
      <h3 className="text-xl font-semibold mb-3">Installation</h3>
      <CodeBlock code="npm install @openocean.finance/widget" language="bash" className="mb-4" />
      <h3 className="text-xl font-semibold mb-3">Usage</h3>
      <p className="text-muted-foreground mb-4">This example demonstrates a deposit flow integration with custom contract calls and deposit card.</p>
      <p className="text-muted-foreground mb-2"><strong>src/App.tsx</strong></p>
      <CodeBlock
        code={`import type { ContractCall, WidgetConfig } from '@openocean.finance/widget'
import {
  ChainType,
  CoinKey,
  DisabledUI,
  HiddenUI,
  OpenOceanWidget,
} from '@openocean.finance/widget'
import { useMemo } from 'react'
import { DepositCard } from './components/DepositCard'
import { contractTool } from './config'

const depositAddress = '0x4bF3E32de155359D1D75e8B474b66848221142fc'
const contractCalls: ContractCall[] = []

export function App() {
  const widgetConfig: WidgetConfig = useMemo(() => {
    return {
      toAddress: {
        ...contractTool,
        address: depositAddress,
        chainType: ChainType.EVM,
      },
      subvariant: 'custom',
      subvariantOptions: { custom: 'deposit' },
      integrator: 'ProtocolName',
      disabledUI: [DisabledUI.ToAddress],
      hiddenUI: [HiddenUI.Appearance, HiddenUI.Language],
      useRecommendedRoute: true,
      theme: {
        container: {
          border: '1px solid rgb(234, 234, 234)',
          borderRadius: '16px',
        },
      },
    }
  }, [])

  return (
    <OpenOceanWidget
      contractComponent={
        <DepositCard
          token={{
            chainId: 10,
            address: '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85',
            symbol: 'USDC',
            name: 'USD Coin',
            decimals: 6,
            priceUSD: '1',
            coinKey: CoinKey.USDC,
            logoURI: '...',
          }}
          contractCalls={contractCalls}
        />
      }
      contractTool={contractTool}
      config={widgetConfig}
      integrator={widgetConfig.integrator}
    />
  )
}`}
        language="tsx"
        className="mb-4"
      />
      <h3 className="text-xl font-semibold mb-3">Key Points</h3>
      <ul className="list-disc list-inside space-y-1 text-muted-foreground max-w-3xl mb-8">
        <li>Custom deposit flow with contract calls</li>
        <li>Uses <code className="rounded bg-muted px-1.5 py-0.5 text-sm">subvariant: &apos;custom&apos;</code> with <code className="rounded bg-muted px-1.5 py-0.5 text-sm">custom: &apos;deposit&apos;</code></li>
        <li>Custom <code className="rounded bg-muted px-1.5 py-0.5 text-sm">contractComponent</code> for deposit UI</li>
        <li>Disables and hides specific UI elements</li>
        <li>Requires <code className="rounded bg-muted px-1.5 py-0.5 text-sm">contractTool</code> configuration</li>
      </ul>

      <SectionDivider />

      <h2 className="text-2xl font-bold mt-10 mb-4">Common Configuration Options</h2>
      <p className="text-muted-foreground max-w-3xl mb-4">All examples support these common configuration options:</p>
      <CodeBlock
        code={`{
  integrator: string, // Required: Your integrator identifier
  variant?: 'wide' | 'compact' | 'drawer',
  subvariant?: 'split' | 'bridge' | 'swap',
  appearance?: 'light' | 'dark' | 'auto',
  theme?: {
    container?: {
      border?: string,
      borderRadius?: string,
      boxShadow?: string,
    },
    // ... more theme options
  },
  chains?: {
    allow?: number[],
    deny?: number[],
  },
  buildUrl?: boolean,
  // ... more config options
}`}
        language="typescript"
        className="mb-10"
      />

      <h2 className="text-2xl font-bold mt-10 mb-4">Troubleshooting</h2>
      <h3 className="text-xl font-semibold mb-3">SSR Issues</h3>
      <ul className="list-disc list-inside space-y-1 text-muted-foreground max-w-3xl mb-4">
        <li>Use <code className="rounded bg-muted px-1.5 py-0.5 text-sm">ClientOnly</code> wrapper in Next.js/Nuxt</li>
        <li>Disable SSR if not needed</li>
        <li>Use <code className="rounded bg-muted px-1.5 py-0.5 text-sm">WidgetSkeleton</code> as fallback</li>
      </ul>
      <h3 className="text-xl font-semibold mb-3">Wallet Connection Issues</h3>
      <ul className="list-disc list-inside space-y-1 text-muted-foreground max-w-3xl mb-4">
        <li>Ensure wallet providers are properly configured</li>
        <li>Check network/chain configurations</li>
        <li>Verify API keys and project IDs</li>
      </ul>
      <h3 className="text-xl font-semibold mb-3">Build Issues</h3>
      <ul className="list-disc list-inside space-y-1 text-muted-foreground max-w-3xl mb-10">
        <li>Install required polyfills (buffer, process)</li>
        <li>Configure Vite/Rollup for React components</li>
        <li>Check transpilePackages in Next.js config</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">Support</h2>
      <p className="text-muted-foreground max-w-3xl mb-4">For more information, visit:</p>
      <ul className="list-disc list-inside space-y-1 text-muted-foreground max-w-3xl">
        <li><a href="https://apis.openocean.finance/developer/widget" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">OpenOcean Documentation</a></li>
        <li><a href="https://github.com/openocean-finance/OpenOcean-Frontend-Examples/tree/main/Widget_V2-examples" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub Repository</a></li>
      </ul>
    </div>
  )
}
