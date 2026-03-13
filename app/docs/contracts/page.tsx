import type { Metadata } from "next"
import { DocsLayout } from "@/components/docs/docs-layout"
import { ContractsContent } from "@/components/pages/contracts"

export const metadata: Metadata = {
  title: "Contracts of Chains - OpenOcean Documentation",
  description: "OpenOcean's current contract addresses across supported chains.",
}

export default function ContractsPage() {
  return (
    <DocsLayout>
      <ContractsContent />
    </DocsLayout>
  )
}
