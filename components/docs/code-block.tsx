"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Check, Copy, Terminal } from "lucide-react"

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
  showLineNumbers?: boolean
  className?: string
}

export function CodeBlock({
  code,
  language = "javascript",
  title,
  showLineNumbers = false,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const lines = code.trim().split("\n")

  return (
    <div className={cn("group relative rounded-xl border border-border overflow-hidden", className)}>
      {/* Header */}
      {title && (
        <div className="flex items-center justify-between px-4 py-2.5 bg-muted/60 border-b border-border">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">{title}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground uppercase tracking-wider">{language}</span>
          </div>
        </div>
      )}

      {/* Code */}
      <div className="relative border-l border-border bg-[var(--code-bg)]">
        <pre className={cn("p-5 overflow-x-auto text-sm leading-relaxed", !title && "rounded-t-xl")}>
          <code className="font-mono text-[var(--code-foreground)]">
            {showLineNumbers ? (
              <table className="w-full border-collapse">
                <tbody>
                  {lines.map((line, i) => (
                    <tr key={i} className="hover:bg-accent/20 transition-colors duration-150">
                      <td className="pr-4 text-right text-muted-foreground/60 select-none w-10 align-top font-mono text-xs tabular-nums">
                        {i + 1}
                      </td>
                      <td className="text-foreground whitespace-pre pl-0">
                        {line || " "}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : mounted ? (
              <span dangerouslySetInnerHTML={{ __html: highlightSyntax(code, language) }} />
            ) : (
              <span className="whitespace-pre">{code}</span>
            )}
          </code>
        </pre>

        {/* Copy Button */}
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "absolute top-2 right-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200",
            !title && "top-2"
          )}
          onClick={copyToClipboard}
        >
          {copied ? (
            <Check className="h-4 w-4 text-chart-2" />
          ) : (
            <Copy className="h-4 w-4 text-muted-foreground" />
          )}
          <span className="sr-only">Copy code</span>
        </Button>
      </div>
    </div>
  )
}

// Simple syntax highlighting — run string replacement before inserting spans so our class="..." isn't matched
function highlightSyntax(code: string, language: string): string {
  let highlighted = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")

  // Strings (theme-aware, low saturation)
  highlighted = highlighted.replace(
    /(["'`])(?:(?!\1)[^\\]|\\.)*?\1/g,
    '<span class="text-chart-2">$&</span>'
  )

  // Keywords
  const keywords = [
    "const", "let", "var", "function", "return", "if", "else", "for", "while",
    "class", "extends", "import", "export", "from", "async", "await", "try",
    "catch", "throw", "new", "this", "true", "false", "null", "undefined",
    "default", "case", "switch", "break", "continue", "typeof", "instanceof"
  ]

  keywords.forEach((keyword) => {
    const regex = new RegExp(`\\b(${keyword})\\b`, "g")
    highlighted = highlighted.replace(
      regex,
      '<span class="text-primary">$1</span>'
    )
  })

  // Numbers
  highlighted = highlighted.replace(
    /\b(\d+\.?\d*)\b/g,
    '<span class="text-muted-foreground">$1</span>'
  )

  // Comments
  highlighted = highlighted.replace(
    /(\/\/.*$)/gm,
    '<span class="text-muted-foreground italic">$1</span>'
  )

  // URLs
  highlighted = highlighted.replace(
    /(https?:\/\/[^\s"'<>]+)/g,
    '<span class="text-primary underline decoration-primary/30">$1</span>'
  )

  return highlighted
}

// Inline code component
export function InlineCode({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm text-foreground",
        className
      )}
    >
      {children}
    </code>
  )
}
