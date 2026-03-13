"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Check, Copy, Terminal, FileCode } from "lucide-react"
import { motion } from "framer-motion"

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
  showLineNumbers?: boolean
  className?: string
}

const languageIcons: Record<string, string> = {
  javascript: "JS",
  typescript: "TS",
  jsx: "JSX",
  tsx: "TSX",
  python: "PY",
  bash: "SH",
  shell: "SH",
  json: "{}",
  html: "HTML",
  css: "CSS",
  sql: "SQL",
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
  const langIcon = languageIcons[language.toLowerCase()] || language.toUpperCase().slice(0, 3)

  return (
    <div className={cn(
      "group relative rounded-xl border border-border/60 overflow-hidden bg-card/30",
      "transition-all duration-300 hover:border-border",
      className
    )}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-muted/40 border-b border-border/40">
        <div className="flex items-center gap-3">
          {/* Traffic lights decoration */}
          <div className="hidden sm:flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-chart-3/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-chart-2/60" />
          </div>
          
          {title ? (
            <div className="flex items-center gap-2">
              <FileCode className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-xs font-medium text-muted-foreground">{title}</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Terminal className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Terminal</span>
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          {/* Language badge */}
          <span className="text-[10px] font-mono font-medium text-muted-foreground/70 px-1.5 py-0.5 rounded bg-muted/50">
            {langIcon}
          </span>
          
          {/* Copy button */}
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "h-7 px-2 text-xs gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity",
              copied && "opacity-100"
            )}
            onClick={copyToClipboard}
          >
            {copied ? (
              <>
                <Check className="h-3 w-3 text-chart-2" />
                <span className="text-chart-2">Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" />
                <span>Copy</span>
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Code Content */}
      <div className="relative">
        {/* Subtle gradient line on left */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary/5 to-transparent" />
        
        <pre className="p-5 overflow-x-auto text-sm leading-relaxed font-mono">
          <code className="text-foreground/90">
            {showLineNumbers ? (
              <table className="w-full border-collapse">
                <tbody>
                  {lines.map((line, i) => (
                    <tr key={i} className="hover:bg-muted/30 transition-colors duration-100">
                      <td className="pr-4 text-right text-muted-foreground/40 select-none w-10 align-top font-mono text-xs tabular-nums border-r border-border/30 mr-4">
                        {i + 1}
                      </td>
                      <td className="pl-4 whitespace-pre">
                        {mounted ? (
                          <span dangerouslySetInnerHTML={{ __html: highlightLine(line, language) }} />
                        ) : (
                          line || " "
                        )}
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
      </div>
    </div>
  )
}

function highlightLine(line: string, language: string): string {
  return highlightSyntax(line, language)
}

function highlightSyntax(code: string, language: string): string {
  let highlighted = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")

  // Comments first (highest priority)
  highlighted = highlighted.replace(
    /(\/\/.*$)/gm,
    '<span class="text-muted-foreground/60 italic">$1</span>'
  )
  
  // Multi-line comments
  highlighted = highlighted.replace(
    /(\/\*[\s\S]*?\*\/)/g,
    '<span class="text-muted-foreground/60 italic">$1</span>'
  )

  // Strings (various types)
  highlighted = highlighted.replace(
    /(["'`])(?:(?!\1)[^\\]|\\.)*?\1/g,
    '<span class="text-chart-2">$&</span>'
  )

  // Keywords
  const keywords = [
    "const", "let", "var", "function", "return", "if", "else", "for", "while",
    "class", "extends", "import", "export", "from", "async", "await", "try",
    "catch", "throw", "new", "this", "true", "false", "null", "undefined",
    "default", "case", "switch", "break", "continue", "typeof", "instanceof",
    "interface", "type", "enum", "implements", "private", "public", "protected",
    "static", "readonly", "abstract", "declare", "namespace", "module"
  ]

  keywords.forEach((keyword) => {
    const regex = new RegExp(`\\b(${keyword})\\b`, "g")
    highlighted = highlighted.replace(
      regex,
      '<span class="text-primary font-medium">$1</span>'
    )
  })

  // Built-in objects and methods
  const builtins = ["console", "window", "document", "fetch", "JSON", "Math", "Date", "Array", "Object", "String", "Number", "Boolean", "Promise", "Error"]
  builtins.forEach((builtin) => {
    const regex = new RegExp(`\\b(${builtin})\\b`, "g")
    highlighted = highlighted.replace(
      regex,
      '<span class="text-chart-4">$1</span>'
    )
  })

  // Numbers
  highlighted = highlighted.replace(
    /\b(\d+\.?\d*)\b/g,
    '<span class="text-chart-3">$1</span>'
  )

  // Function calls
  highlighted = highlighted.replace(
    /\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?=\()/g,
    '<span class="text-chart-1">$1</span>'
  )

  // URLs
  highlighted = highlighted.replace(
    /(https?:\/\/[^\s"'<>]+)/g,
    '<span class="text-primary underline decoration-primary/30">$1</span>'
  )

  // Property access
  highlighted = highlighted.replace(
    /\.([a-zA-Z_$][a-zA-Z0-9_$]*)/g,
    '.<span class="text-foreground/80">$1</span>'
  )

  return highlighted
}

// Inline code component with enhanced styling
export function InlineCode({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <code
      className={cn(
        "relative rounded-md bg-muted/60 px-1.5 py-0.5 font-mono text-sm text-foreground/90",
        "border border-border/40",
        className
      )}
    >
      {children}
    </code>
  )
}

// API endpoint display component
interface ApiEndpointProps {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH"
  path: string
  className?: string
}

export function ApiEndpoint({ method, path, className }: ApiEndpointProps) {
  const methodColors = {
    GET: "bg-chart-2/10 text-chart-2 border-chart-2/20",
    POST: "bg-primary/10 text-primary border-primary/20",
    PUT: "bg-chart-3/10 text-chart-3 border-chart-3/20",
    DELETE: "bg-destructive/10 text-destructive border-destructive/20",
    PATCH: "bg-chart-4/10 text-chart-4 border-chart-4/20",
  }

  return (
    <div className={cn(
      "flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-border/40 font-mono text-sm",
      className
    )}>
      <span className={cn(
        "px-2 py-0.5 rounded text-xs font-semibold border",
        methodColors[method]
      )}>
        {method}
      </span>
      <span className="text-foreground/80">{path}</span>
    </div>
  )
}
