import type { Metadata } from "next"
import { DocsLayout } from "@/components/docs/docs-layout"
import { DocSubpageContent } from "@/components/docs/doc-subpage"
import { DCAApiGuideContent } from "@/components/pages/dca-api-guide"

export const metadata: Metadata = {
  title: "DCA API - Guide - OpenOcean Documentation",
  description: "Comprehensive integration guidelines for the OpenOcean DCA API: create and manage recurring buy strategies.",
}

export default function DCAApiGuidePage() {
  return (
    <DocsLayout>
      <DocSubpageContent
        title="Guide"
        description="This document provides comprehensive integration guidelines for the OpenOcean DCA (Dollar Cost Averaging) API, based on the implementation in Dca.js. The API allows users to create and manage automated recurring buy strategies for token accumulation on supported blockchain networks."
        parentHref="/docs/dca-api/guide"
        parentTitle="DCA API"
      >
        <DCAApiGuideContent />
      </DocSubpageContent>
    </DocsLayout>
  )
}
