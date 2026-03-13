import type { Metadata } from "next"
import { DocsLayout } from "@/components/docs/docs-layout"
import { ErrorCodesContent } from "@/components/pages/error-codes"

export const metadata: Metadata = {
  title: "Common Error Code - OpenOcean Documentation",
  description: "Common API error codes and handling.",
}

export default function ErrorCodesPage() {
  return (
    <DocsLayout>
      <ErrorCodesContent />
    </DocsLayout>
  )
}
