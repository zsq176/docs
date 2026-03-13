import type { Metadata } from "next"
import { DocsLayout } from "@/components/docs/docs-layout"
import { AIAgentsContent } from "@/components/pages/ai-agents"

export const metadata: Metadata = {
  title: "AI Agents - OpenOcean Documentation",
  description: "OpenOcean Skills for AI coding assistants (Cursor, Claude Code, OpenClaw).",
}

const tocItems = [
  { id: "introduction", title: "Introduction", level: 2 },
  { id: "overview", title: "Overview", level: 2 },
  { id: "project-structure", title: "Project Structure", level: 2 },
  { id: "installation", title: "Installation", level: 2 },
  { id: "prerequisites", title: "Prerequisites & Availability", level: 2 },
  { id: "skills-overview", title: "Skills Overview", level: 2 },
]

export default function AIAgentsPage() {
  return (
    <DocsLayout tocItems={tocItems}>
      <AIAgentsContent />
    </DocsLayout>
  )
}
