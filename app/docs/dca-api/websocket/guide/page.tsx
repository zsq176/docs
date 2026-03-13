import type { Metadata } from "next"
import { DocsLayout } from "@/components/docs/docs-layout"
import { DocSubpageContent } from "@/components/docs/doc-subpage"
import { DCAApiWebsocketGuideContent } from "@/components/pages/dca-api-websocket-guide"

export const metadata: Metadata = {
  title: "DCA API - WebSocket Guide - OpenOcean Documentation",
  description: "OpenOcean Socket Data Push via Socket.IO: connect, subscribe, and handle real-time DCA/limit order events.",
}

export default function DCAApiWebsocketGuidePage() {
  return (
    <DocsLayout>
      <DocSubpageContent
        title="Guide"
        description="The OpenOcean Socket Data Push service provides real-time event streaming via Socket.IO over WebSocket transport. Subscribe with a wallet address to receive live updates. This document explains how to connect, subscribe, handle events, and implement best practices."
        parentHref="/docs/dca-api/guide"
        parentTitle="DCA API"
      >
        <DCAApiWebsocketGuideContent />
      </DocSubpageContent>
    </DocsLayout>
  )
}
