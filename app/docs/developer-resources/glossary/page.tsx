import type { Metadata } from "next"
import { DocsLayout } from "@/components/docs/docs-layout"
import { GlossaryContent } from "@/components/pages/glossary"

export const metadata: Metadata = {
  title: "Developer references & glossary - OpenOcean Documentation",
  description: "Terms and definitions for OpenOcean API documentation.",
}

export default function GlossaryPage() {
  return (
    <DocsLayout>
      <GlossaryContent />
    </DocsLayout>
  )
}
