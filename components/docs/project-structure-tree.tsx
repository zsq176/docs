"use client"

import * as React from "react"
import { Folder, FileText, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProjectStructureTreeProps {
  /** Tree string: lines with ├── └── │ and optional # comments */
  content: string
  className?: string
}

function parseLine(line: string): { tree: string; name: string; comment: string } {
  const commentMatch = line.match(/#\s*(.*)$/)
  const comment = commentMatch ? commentMatch[1].trim() : ""
  const beforeComment = commentMatch ? line.slice(0, commentMatch.index!).trimEnd() : line.trimEnd()
  const branchIdx = beforeComment.indexOf("── ")
  let tree: string
  let name: string
  if (branchIdx >= 0) {
    tree = beforeComment.slice(0, branchIdx) + "── "
    name = beforeComment.slice(branchIdx + 3).trim()
  } else {
    tree = ""
    name = beforeComment.trim()
  }
  return { tree, name, comment }
}

export function ProjectStructureTree({ content, className }: ProjectStructureTreeProps) {
  const [copied, setCopied] = React.useState(false)
  const lines = content.trim().split("\n").filter(Boolean)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className={cn(
        "group relative rounded-xl border border-border overflow-hidden",
        "bg-[var(--code-bg)] border-l-2 border-l-primary/20",
        className
      )}
    >
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-muted/40">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Project Structure
        </span>
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          onClick={copyToClipboard}
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-chart-2" />
          ) : (
            <Copy className="h-3.5 w-3.5 text-muted-foreground" />
          )}
          <span className="sr-only">Copy</span>
        </Button>
      </div>
      <div className="p-4 font-mono text-sm leading-7">
        {lines.map((line, i) => {
          const { tree, name, comment } = parseLine(line)
          const isDir = name.endsWith("/")
          const isFile = name.length > 0 && !isDir
          return (
            <div key={i} className="flex items-baseline gap-0 min-w-0">
              <span className="text-muted-foreground/70 select-none shrink-0">
                {tree}
              </span>
              {isDir ? (
                <span className="inline-flex items-center gap-1.5 text-foreground shrink-0">
                  <Folder className="h-3.5 w-3.5 text-primary/70" aria-hidden />
                  <span>{name}</span>
                </span>
              ) : isFile ? (
                <span className="inline-flex items-center gap-1.5 text-foreground shrink-0">
                  <FileText className="h-3.5 w-3.5 text-muted-foreground" aria-hidden />
                  <span>{name}</span>
                </span>
              ) : (
                <span className="text-foreground">{name || " "}</span>
              )}
              {comment && (
                <span className="ml-2 text-muted-foreground italic text-xs truncate">
                  # {comment}
                </span>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
