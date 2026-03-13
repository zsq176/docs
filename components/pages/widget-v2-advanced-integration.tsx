"use client"

import { CodeBlock } from "@/components/docs/code-block"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const projectStructureCode = `src/
├── main.tsx          # Main application file (everything in one file)
├── components/
│   └── wagmi.ts      # Wagmi configuration
└── index.css         # Global styles
`

const completeExampleCode = `import { createRoot } from 'react-dom/client'
import { OpenOceanWidget } from "@openocean.finance/widget";
import { useConnectModal, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { http, createConfig, useAccount, WagmiProvider, useDisconnect } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '@rainbow-me/rainbowkit/styles.css'

// Wagmi Configuration
export const config = createConfig({
  chains: [mainnet],
  connectors: [
    injected({
      shimDisconnect: true,
    }),
  ],
  transports: {
    [mainnet.id]: http(),
  },
})

const queryClient = new QueryClient()

function App() {
  const { openConnectModal } = useConnectModal()
  const { isConnected } = useAccount()
  const { disconnect } = useDisconnect()
  
  const handleDisconnectWallet = () => {
    try {
      console.log("Attempting to disconnect wallet")
      disconnect()
      console.log("Wallet disconnected")
    } catch (error) {
      console.error("Disconnect failed:", error)
    }
  }
  
  const widgetConfig = {
    variant: "compact" as const,
    appearance: "dark" as const,
    subvariant: "split" as const,
    theme: {
      palette: {
        primary: {
          main: "#fb534f"
        },
        secondary: {
          main: "#FFC800"
        },
        background: {
          default: "#222037",
          paper: "#29273D"
        },
        text: {
          primary: "#ffffff",
          secondary: "#8C7F8C"
        },
        grey: {
          200: "#EEEFF2",
          300: "#D5DAE1",
          700: "#555B62",
          800: "#373F48"
        }
      },
      shape: {
        borderRadius: 12,
        borderRadiusSecondary: 12,
        borderRadiusTertiary: 24
      },
      typography: {
        fontFamily: "Inter, sans-serif"
      },
      container: {
        boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.08)",
        borderRadius: "16px"
      },
      components: {
        MuiCard: {
          defaultProps: {
            variant: "filled"
          }
        },
        MuiTabs: {
          styleOverrides: {
            root: {
              backgroundColor: "#29273D",
              ".MuiTabs-indicator": {
                backgroundColor: "#17122b"
              }
            }
          }
        }
      }
    },
    walletConfig: {
      onConnect: ()=> {
        openConnectModal?.()
      }
    }
  }

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <nav style={{
        background: "#1a1a1a",
        padding: "15px 20px",
        borderBottom: "1px solid #333",
        display: "flex",
        gap: "20px",
        alignItems: "center"
      }}>
        <h2 style={{ color: "#ffffff", margin: 0 }}>OpenOcean Widget Demo</h2>
      </nav>
      
      <div style={{ padding: "20px" }}>
        <div style={{ 
          background: "#1a1a1a", 
          padding: "10px", 
          marginBottom: "20px", 
          borderRadius: "8px",
          color: "#ffffff",
          fontSize: "12px"
        }}>
          {!isConnected && <button 
            onClick={openConnectModal}
            style={{
              background: "#2196F3",
              color: "#ffffff",
              border: "none",
              padding: "8px 16px",
              borderRadius: "4px",
              cursor: "pointer",
              marginRight: "10px"
            }}
          >
            Open Connect Modal
          </button>}
          
          {isConnected && (
            <button 
              onClick={handleDisconnectWallet}
              style={{
                background: "#f44336",
                color: "#ffffff",
                border: "none",
                padding: "8px 16px",
                borderRadius: "4px",
                cursor: "pointer"
              }}
            >
              Disconnect
            </button>
          )}
        </div>
        
        <div style={{
          width: "100%",
          height: "600px",
          border: "1px solid #333",
          borderRadius: "12px",
          overflow: "hidden"
        }}>
          <OpenOceanWidget integrator="Your dApp/company name" config={widgetConfig} />
        </div>
      </div>
    </div>
  );
}

// Render the application
createRoot(document.getElementById('root')!).render(
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <RainbowKitProvider>
        <App />
      </RainbowKitProvider>
    </QueryClientProvider>
  </WagmiProvider>
)
`

export function WidgetV2AdvancedIntegrationContent() {
  return (
    <div className="space-y-12">
      <h2 className="text-2xl font-bold mt-10 mb-4">Getting Started</h2>
      <h3 className="text-xl font-semibold mb-3">Install Dependencies</h3>
      <p className="text-muted-foreground max-w-3xl mb-4">
        Install the required packages for this demo:
      </p>
      <Tabs defaultValue="npm" className="w-full max-w-3xl mb-6">
        <TabsList>
          <TabsTrigger value="npm">npm</TabsTrigger>
          <TabsTrigger value="yarn">yarn</TabsTrigger>
          <TabsTrigger value="pnpm">pnpm</TabsTrigger>
        </TabsList>
        <TabsContent value="npm">
          <CodeBlock
            code="npm install @openocean.finance/widget wagmi @tanstack/react-query @rainbow-me/rainbowkit react react-dom"
            language="bash"
          />
        </TabsContent>
        <TabsContent value="yarn">
          <CodeBlock
            code="yarn add @openocean.finance/widget wagmi @tanstack/react-query @rainbow-me/rainbowkit react react-dom"
            language="bash"
          />
        </TabsContent>
        <TabsContent value="pnpm">
          <CodeBlock
            code="pnpm add @openocean.finance/widget wagmi @tanstack/react-query @rainbow-me/rainbowkit react react-dom"
            language="bash"
          />
        </TabsContent>
      </Tabs>

      <h3 className="text-xl font-semibold mb-3">Key Dependencies</h3>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground max-w-3xl mb-10">
        <li><a href="https://docs.openocean.finance/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">OpenOcean Widget</a> - The main widget component for token swapping</li>
        <li><a href="https://wagmi.sh/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Wagmi</a> - Type-safe, extensible, and modular library for building Ethereum apps</li>
        <li><a href="https://www.rainbowkit.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">RainbowKit</a> - React library for wallet connection UI</li>
        <li><a href="https://tanstack.com/query/v5" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">TanStack Query</a> - Async state manager for requests and caching</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">Project Structure</h2>
      <p className="text-muted-foreground max-w-3xl mb-4">
        This demo consists of a single file implementation:
      </p>
      <CodeBlock code={projectStructureCode} language="text" className="mb-10" />

      <h2 className="text-2xl font-bold mt-10 mb-4">Complete Example</h2>
      <p className="text-muted-foreground max-w-3xl mb-4">
        The entire application is implemented in a single <code className="rounded bg-muted px-1.5 py-0.5 text-sm">main.tsx</code> file:
      </p>
      <CodeBlock code={completeExampleCode} language="javascript" className="mb-10" />

      <h2 className="text-2xl font-bold mt-10 mb-4">Features</h2>
      <p className="text-muted-foreground max-w-3xl mb-4">This demo includes:</p>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground max-w-3xl mb-10">
        <li><strong>Wallet Integration</strong>: Seamless wallet connection using RainbowKit</li>
        <li><strong>OpenOcean Widget</strong>: Full-featured token swapping widget</li>
        <li><strong>Custom Theme</strong>: Dark theme with custom styling</li>
        <li><strong>Responsive Design</strong>: Mobile-friendly interface</li>
        <li><strong>Single File Architecture</strong>: Everything in one <code className="rounded bg-muted px-1.5 py-0.5 text-sm">main.tsx</code> file for easy deployment</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">Running the Demo</h2>
      <ol className="list-decimal list-inside space-y-4 text-muted-foreground max-w-3xl mb-10">
        <li>
          Install dependencies:
          <CodeBlock code="npm install" language="bash" className="mt-2" />
        </li>
        <li>
          Start the development server:
          <CodeBlock code="npm run dev" language="bash" className="mt-2" />
        </li>
        <li>Open your browser and navigate to the local development URL</li>
      </ol>

      <h2 className="text-2xl font-bold mt-10 mb-4">Configuration</h2>
      <p className="text-muted-foreground max-w-3xl mb-4">The widget is configured with:</p>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground max-w-3xl mb-10">
        <li><strong>Variant</strong>: Compact layout</li>
        <li><strong>Appearance</strong>: Dark theme</li>
        <li><strong>Subvariant</strong>: Split view</li>
        <li><strong>Chains</strong>: Ethereum mainnet</li>
        <li><strong>Wallet Integration</strong>: RainbowKit modal</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">Customization</h2>
      <p className="text-muted-foreground max-w-3xl mb-4">
        You can customize the widget by modifying the <code className="rounded bg-muted px-1.5 py-0.5 text-sm">widgetConfig</code> object in the <code className="rounded bg-muted px-1.5 py-0.5 text-sm">main.tsx</code> file. Key customization options include:
      </p>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground max-w-3xl">
        <li>Theme colors and styling</li>
        <li>Supported chains</li>
        <li>Default tokens</li>
        <li>Widget appearance and layout</li>
      </ul>
    </div>
  )
}
