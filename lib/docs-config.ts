export interface NavItem {
  title: string
  href?: string
  icon?: string
  items?: NavItem[]
  badge?: string
  external?: boolean
}

export interface DocsConfig {
  mainNav: NavItem[]
  sidebarNav: NavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    { title: "Overview", href: "/" },
    {
      title: "API Reference",
      items: [
        { title: "Swap API", href: "/docs/swap-api" },
        { title: "Trading", href: "/docs/gasless-swap-api" },
        { title: "Other APIs", href: "/docs/solana-swap-api" },
      ],
    },
    { title: "Widget", href: "/docs/widget" },
    { title: "AI Agents", href: "/docs/ai-agents" },
    { title: "Use Cases", href: "/docs/use-cases" },
  ],
  sidebarNav: [
    {
      title: "Introduction",
      items: [
        { title: "Introduction", href: "/" },
        { title: "Why OpenOcean", href: "/docs/why-openocean" },
      ],
    },
    {
      title: "Supported Chains & Assets",
      items: [
        { title: "Supported Chains", href: "/docs/supported-chains" },
        { title: "Contracts", href: "/docs/contracts" },
      ],
    },
    {
      title: "Swap API",
      items: [
        { title: "Overview", href: "/docs/swap-api" },
        { title: "Guide", href: "/docs/swap-api/guide" },
        { title: "API V4", href: "/docs/swap-api/v4", badge: "Recommended" },
        { title: "API V3", href: "/docs/swap-api/v3" },
        { title: "Permit2", href: "/docs/swap-api/permit2" },
        { title: "SDK", href: "/docs/swap-api/sdk" },
        { title: "API Pricing & Access", href: "/docs/swap-api/api-pricing-and-access" },
        {
          title: "Advanced Usage",
          items: [
            { title: "Overview", href: "/docs/swap-api/advanced-usage" },
            { title: "GMX Exclusive API", href: "/docs/swap-api/advanced-usage/gmx-exclusive-api" },
            { title: "Exact Out", href: "/docs/swap-api/advanced-usage/exact-out" },
          ],
        },
      ],
    },
    {
      title: "Trading",
      items: [
        {
          title: "Gasless Swap API",
          items: [
            { title: "Overview", href: "/docs/gasless-swap-api" },
            { title: "Guide", href: "/docs/gasless-swap-api/guide" },
            { title: "API", href: "/docs/gasless-swap-api/api" },
            { title: "Demo Code", href: "/docs/gasless-swap-api/demo-code" },
          ],
        },
        {
          title: "DCA API",
          items: [
            { title: "Guide", href: "/docs/dca-api/guide" },
            { title: "API", href: "/docs/dca-api/api" },
            {
              title: "WebSocket",
              items: [
                { title: "Guide", href: "/docs/dca-api/websocket/guide" },
              ],
            },
          ],
        },
        {
          title: "Limit Order API",
          items: [
            { title: "Guide", href: "/docs/limit-order-api/guide" },
            { title: "API", href: "/docs/limit-order-api/api" },
          ],
        },
        {
          title: "Sweep Swap API",
          items: [
            { title: "Guide", href: "/docs/sweep-swap-api/guide" },
            { title: "API", href: "/docs/sweep-swap-api/api" },
          ],
        },
        { title: "Meme API", href: "/docs/meme-api", badge: "New" },
        {
          title: "Ticket API",
          items: [
            { title: "API", href: "/docs/ticket-api/api" },
          ],
        },
      ],
    },
    {
      title: "Other APIs",
      items: [
        { title: "Solana Swap API", href: "/docs/solana-swap-api" },
        {
          title: "Zap API",
          items: [
            { title: "API", href: "/docs/zap-api/api" },
          ],
        },
        { title: "Use Cases", href: "/docs/use-cases" },
        { title: "Swagger", href: "https://open-api.openocean.finance/v4/swagger-ui.html", external: true, icon: "Bot" },
      ],
    },
    {
      title: "Widget",
      items: [
        { title: "Overview", href: "/docs/widget" },
        { title: "Getting Started", href: "/docs/widget/getting-started" },
        { title: "Customize Theme", href: "/docs/widget/theme" },
        { title: "Other Reference", href: "/docs/widget/other-reference" },
        {
          title: "Widget V2",
          items: [
            { title: "Getting Started", href: "/docs/widget/v2/getting-started" },
            { title: "Advanced Integration", href: "/docs/widget/v2/advanced-integration" },
            { title: "Integration Examples", href: "/docs/widget/v2/integration-examples" },
          ],
        },
      ],
    },
    {
      title: "Developer Resources",
      items: [
        { title: "Common Error Code", href: "/docs/developer-resources/errors" },
        { title: "Developer references & glossary", href: "/docs/developer-resources/glossary" },
      ],
    },
    {
      title: "AI Agents",
      href: "/docs/ai-agents",
    },
    {
      title: "External Resources",
      items: [
        { title: "GitHub", href: "https://github.com/openocean-finance", external: true },
      ],
    },
  ],
}

export const chainData = [
  { name: "Ethereum", code: "eth", chainId: "1", gasless: false },
  { name: "BNB Chain", code: "bsc", chainId: "56", gasless: true },
  { name: "Base", code: "base", chainId: "8453", gasless: true },
  { name: "Polygon", code: "polygon", chainId: "137", gasless: true },
  { name: "Arbitrum", code: "arbitrum", chainId: "42161", gasless: true },
  { name: "Linea", code: "linea", chainId: "59144", gasless: true },
  { name: "HyperEVM", code: "hyperevm", chainId: "999", gasless: true },
  { name: "Avalanche", code: "avax", chainId: "43114", gasless: true },
  { name: "Optimism", code: "optimism", chainId: "10", gasless: true },
  { name: "Sonic", code: "sonic", chainId: "146", gasless: true },
  { name: "UniChain", code: "uni", chainId: "130", gasless: true },
  { name: "Berachain", code: "bera", chainId: "80094", gasless: true },
  { name: "Sei", code: "sei", chainId: "1329", gasless: true },
  { name: "Solana", code: "solana", chainId: "-", gasless: false },
  { name: "Sui", code: "sui", chainId: "-", gasless: false },
]
