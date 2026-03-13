import type { Metadata } from "next"
import { DocsLayout } from "@/components/docs/docs-layout"
import { AiAgentsSkillsContent } from "@/components/pages/ai-agents-skills"

export const metadata: Metadata = {
  title: "AI Agents Skills - OpenOcean Documentation",
  description: "Skills and recommended endpoints for AI agent integration.",
}

export default function AiAgentsSkillsPage() {
  return (
    <DocsLayout>
      <AiAgentsSkillsContent />
    </DocsLayout>
  )
}
