"use client"

import { ThemeProvider } from "@/components/theme-provider"
import { DocsLayout } from "@/components/docs/docs-layout"
import { SwapApiContent } from "@/components/pages/swap-api"

const tocItems = [
  { id: "introduction", title: "Introduction", level: 2 },
  { id: "api-plans-pricing", title: "API Plans & Pricing", level: 2 },
  { id: "api-referral", title: "API Referral Program", level: 2 },
  { id: "get-started", title: "Get Started", level: 2 },
]

export default function SwapApiPage() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <DocsLayout showToc={true} tocItems={tocItems}>
        <SwapApiContent />
      </DocsLayout>
    </ThemeProvider>
  )
}
