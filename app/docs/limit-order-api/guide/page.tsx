import type { Metadata } from "next"
import { DocsLayout } from "@/components/docs/docs-layout"
import { LimitOrderApiGuideContent } from "@/components/pages/limit-order-api-guide"

export const metadata: Metadata = {
  title: "Limit Order API - Guide - OpenOcean Documentation",
  description: "Integration guide for Limit Order API.",
}

export default function LimitOrderApiGuidePage() {
  return (
    <DocsLayout>
      <LimitOrderApiGuideContent />
    </DocsLayout>
  )
}
