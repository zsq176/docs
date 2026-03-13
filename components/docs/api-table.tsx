"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

export interface ApiParameter {
  name: string
  type: string
  required?: boolean
  description: string
  default?: string
}

interface ApiTableProps {
  parameters: ApiParameter[]
  title?: string
  className?: string
}

export function ApiTable({ parameters, title, className }: ApiTableProps) {
  return (
    <div className={cn("my-6 overflow-hidden rounded-lg border border-border", className)}>
      {title && (
        <div className="border-b border-border bg-muted/50 px-4 py-2">
          <span className="text-sm font-semibold text-foreground">{title}</span>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-4 py-3 text-left font-semibold text-foreground">Parameter</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Type</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Required</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {parameters.map((param, index) => (
              <tr
                key={param.name}
                className={cn(
                  "transition-colors hover:bg-hover",
                  index % 2 === 0 ? "bg-background" : "bg-muted/20"
                )}
              >
                <td className="px-4 py-3">
                  <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-primary">
                    {param.name}
                  </code>
                </td>
                <td className="px-4 py-3">
                  <span className="text-muted-foreground font-mono text-xs">
                    {param.type}
                  </span>
                </td>
                <td className="px-4 py-3">
                  {param.required ? (
                    <Badge variant="destructive" className="text-xs">
                      Required
                    </Badge>
                  ) : (
                    <Badge variant="secondary" className="text-xs">
                      Optional
                    </Badge>
                  )}
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  {param.description}
                  {param.default && (
                    <span className="block mt-1 text-xs">
                      Default: <code className="text-primary">{param.default}</code>
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// HTTP Method Badge
interface MethodBadgeProps {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH"
}

const methodColors: Record<string, string> = {
  GET: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  POST: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  PUT: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  DELETE: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  PATCH: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
}

export function MethodBadge({ method }: MethodBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded px-2 py-0.5 text-xs font-bold",
        methodColors[method]
      )}
    >
      {method}
    </span>
  )
}

// Endpoint Display
interface EndpointProps {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH"
  path: string
  baseUrl?: string
}

export function Endpoint({ method, path, baseUrl = "https://open-api.openocean.finance/v4" }: EndpointProps) {
  return (
    <div className="my-4 flex items-center gap-3 rounded-lg border border-border bg-muted/30 p-3">
      <MethodBadge method={method} />
      <code className="flex-1 font-mono text-sm text-foreground overflow-x-auto">
        <span className="text-muted-foreground">{baseUrl}</span>
        <span className="text-primary">{path}</span>
      </code>
    </div>
  )
}
