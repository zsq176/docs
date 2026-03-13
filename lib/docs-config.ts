export interface NavItem {
  title: string
  href?: string
  icon?: string
  items?: NavItem[]
  badge?: string
  external?: boolean
  description?: string
}

export interface CategoryConfig {
  title: string
  href: string
  description?: string
  icon?: string
  items: NavItem[]
}

export interface DocsConfig {
  primaryNav: CategoryConfig[]
}

// New navigation structure: More granular primary categories
export const docsConfig: DocsConfig = {
  primaryNav: [
    {
      title: "Overview",
      href: "/",
      description: "Introduction to OpenOcean",
      icon: "Home",
      items: [
        { title: "Introduction", href: "/", description: "Get started with OpenOcean" },
        { title: "Why OpenOcean", href: "/docs/why-openocean", description: "Our advantages" },
        { title: "Architecture", href: "/docs/architecture", description: "System design" },
        { title: "Use Cases", href: "/docs/use-cases", description: "Integration examples" },
      ],
    },
    {
      title: "Swap API",
      href: "/docs/swap-api",
      description: "Core swap functionality",
      icon: "ArrowRightLeft",
      items: [
        { title: "Overview", href: "/docs/swap-api", description: "Swap API introduction" },
        { title: "Quick Start", href: "/docs/swap-api/guide", description: "Get started quickly" },
        { title: "API V4", href: "/docs/swap-api/v4", badge: "Latest", description: "Recommended API" },
        { title: "API V3", href: "/docs/swap-api/v3", description: "Legacy version" },
        { title: "Permit2", href: "/docs/swap-api/permit2", description: "Gasless approvals" },
        { title: "SDK", href: "/docs/swap-api/sdk", description: "TypeScript SDK" },
        { title: "Pricing", href: "/docs/swap-api/api-pricing-and-access", description: "Rate limits" },
      ],
    },
    {
      title: "Gasless",
      href: "/docs/gasless-swap-api",
      description: "Zero gas trading",
      icon: "Zap",
      items: [
        { title: "Overview", href: "/docs/gasless-swap-api", description: "Zero gas introduction" },
        { title: "Guide", href: "/docs/gasless-swap-api/guide", description: "Integration guide" },
        { title: "API Reference", href: "/docs/gasless-swap-api/api", description: "API endpoints" },
        { title: "Demo Code", href: "/docs/gasless-swap-api/demo-code", description: "Code examples" },
      ],
    },
    {
      title: "Limit Order",
      href: "/docs/limit-order-api/guide",
      description: "Limit order trading",
      icon: "ListOrdered",
      items: [
        { title: "Guide", href: "/docs/limit-order-api/guide", description: "Getting started" },
        { title: "API Reference", href: "/docs/limit-order-api/api", description: "API endpoints" },
      ],
    },
    {
      title: "DCA",
      href: "/docs/dca-api/guide",
      description: "Dollar cost averaging",
      icon: "TrendingUp",
      items: [
        { title: "Guide", href: "/docs/dca-api/guide", description: "Getting started" },
        { title: "API Reference", href: "/docs/dca-api/api", description: "API endpoints" },
        { title: "WebSocket", href: "/docs/dca-api/websocket/guide", description: "Real-time updates" },
      ],
    },
    {
      title: "Meme API",
      href: "/docs/meme-api",
      description: "Meme token trading",
      icon: "Sparkles",
      items: [
        { title: "Overview", href: "/docs/meme-api", badge: "New", description: "Meme API introduction" },
      ],
    },
    {
      title: "Advanced",
      href: "/docs/advanced",
      description: "Advanced features",
      icon: "Settings",
      items: [
        { title: "Overview", href: "/docs/advanced", description: "Advanced intro" },
        { title: "GMX Exclusive", href: "/docs/swap-api/advanced-usage/gmx-exclusive-api", description: "GMX integration" },
        { title: "Exact Out", href: "/docs/swap-api/advanced-usage/exact-out", description: "Output specification" },
        { title: "Sweep Swap", href: "/docs/sweep-swap-api/guide", description: "Batch swaps" },
        { title: "Zap API", href: "/docs/zap-api/api", description: "LP operations" },
        { title: "Ticket API", href: "/docs/ticket-api/api", description: "Ticket system" },
      ],
    },
    {
      title: "Solana",
      href: "/docs/solana-swap-api",
      description: "Solana integration",
      icon: "Circle",
      items: [
        { title: "Swap API", href: "/docs/solana-swap-api", description: "Solana swap" },
      ],
    },
    {
      title: "Widget",
      href: "/docs/widget",
      description: "Embeddable UI",
      icon: "Puzzle",
      items: [
        { title: "Overview", href: "/docs/widget", description: "Widget intro" },
        { title: "Getting Started", href: "/docs/widget/getting-started", description: "Quick setup" },
        { title: "Theming", href: "/docs/widget/theme", description: "Customize styles" },
        { title: "Reference", href: "/docs/widget/other-reference", description: "Additional options" },
        {
          title: "Widget V2",
          items: [
            { title: "Getting Started", href: "/docs/widget/v2/getting-started", description: "V2 setup" },
            { title: "Advanced", href: "/docs/widget/v2/advanced-integration", description: "Advanced options" },
            { title: "Examples", href: "/docs/widget/v2/integration-examples", description: "Samples" },
          ],
        },
      ],
    },
    {
      title: "AI Agents",
      href: "/docs/ai-agents",
      description: "AI-powered trading",
      icon: "Bot",
      items: [
        { title: "Overview", href: "/docs/ai-agents", description: "AI capabilities" },
        { title: "Skills", href: "/docs/ai-agents/skills", description: "Agent skills" },
      ],
    },
    {
      title: "Chains",
      href: "/docs/supported-chains",
      description: "Supported networks",
      icon: "Layers",
      items: [
        { title: "Supported Chains", href: "/docs/supported-chains", description: "40+ networks" },
        { title: "Contracts", href: "/docs/contracts", description: "Contract addresses" },
      ],
    },
    {
      title: "Resources",
      href: "/docs/developer-resources/errors",
      description: "Developer tools",
      icon: "BookOpen",
      items: [
        { title: "Error Codes", href: "/docs/developer-resources/errors", description: "Error reference" },
        { title: "Glossary", href: "/docs/developer-resources/glossary", description: "Technical terms" },
        { title: "Swagger", href: "https://open-api.openocean.finance/v4/swagger-ui.html", external: true, description: "API docs" },
        { title: "GitHub", href: "https://github.com/openocean-finance", external: true, description: "Source code" },
      ],
    },
  ],
}

// Helper function to get sidebar items for a given path
export function getSidebarItemsForPath(pathname: string): NavItem[] {
  // Special handling for root path
  if (pathname === "/" || pathname === "") {
    return docsConfig.primaryNav[0].items
  }
  
  for (const category of docsConfig.primaryNav) {
    // Check if current path exactly matches category href
    if (pathname === category.href) {
      return category.items
    }
    
    // Check if current path starts with category href (for sub-pages)
    if (category.href !== "/" && pathname.startsWith(category.href + "/")) {
      return category.items
    }
    
    // Check nested items
    for (const item of category.items) {
      if (item.href && (pathname === item.href || pathname.startsWith(item.href + "/"))) {
        return category.items
      }
      if (item.items) {
        for (const subItem of item.items) {
          if (subItem.href && (pathname === subItem.href || pathname.startsWith(subItem.href + "/"))) {
            return category.items
          }
        }
      }
    }
  }
  // Default to Overview
  return docsConfig.primaryNav[0].items
}

// Helper to get current category
export function getCurrentCategory(pathname: string): CategoryConfig {
  // Special handling for root path
  if (pathname === "/" || pathname === "") {
    return docsConfig.primaryNav[0]
  }
  
  for (const category of docsConfig.primaryNav) {
    if (pathname === category.href) {
      return category
    }
    
    if (category.href !== "/" && pathname.startsWith(category.href + "/")) {
      return category
    }
    
    for (const item of category.items) {
      if (item.href && (pathname === item.href || pathname.startsWith(item.href + "/"))) {
        return category
      }
      if (item.items) {
        for (const subItem of item.items) {
          if (subItem.href && (pathname === subItem.href || pathname.startsWith(subItem.href + "/"))) {
            return category
          }
        }
      }
    }
  }
  return docsConfig.primaryNav[0]
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
