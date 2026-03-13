import type { Metadata } from "next"
import { DocsLayout } from "@/components/docs/docs-layout"
import { MemeApiContent } from "@/components/pages/meme-api"

export const metadata: Metadata = {
  title: "Meme API - OpenOcean Documentation",
  description: "Meme token swap and discovery API.",
}

export default function MemeApiPage() {
  return (
    <DocsLayout>
      <MemeApiContent />
    </DocsLayout>
  )
}
