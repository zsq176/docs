"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Check, X, Minus } from "lucide-react"

interface ComparisonRow {
  feature: string
  without: string | boolean
  with: string | boolean
}

interface ComparisonTableProps {
  rows: ComparisonRow[]
  leftTitle?: string
  rightTitle?: string
  className?: string
}

export function ComparisonTable({
  rows,
  leftTitle = "Without OpenOcean",
  rightTitle = "With OpenOcean",
  className,
}: ComparisonTableProps) {
  const renderValue = (value: string | boolean, isPositive: boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className={cn("h-5 w-5", isPositive ? "text-green-500" : "text-red-500")} />
      ) : (
        <X className={cn("h-5 w-5", isPositive ? "text-red-500" : "text-green-500")} />
      )
    }
    return <span className="text-sm">{value}</span>
  }

  return (
    <div className={cn("my-8 overflow-hidden rounded-xl border border-border", className)}>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="px-6 py-4 text-left font-semibold text-foreground bg-muted/30">
                Dimension
              </th>
              <th className="px-6 py-4 text-left font-semibold bg-red-50/50 dark:bg-red-950/20 text-red-700 dark:text-red-400">
                {leftTitle}
              </th>
              <th className="px-6 py-4 text-left font-semibold bg-green-50/50 dark:bg-green-950/20 text-green-700 dark:text-green-400">
                {rightTitle}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((row, index) => (
              <tr
                key={index}
                className="transition-colors hover:bg-accent/30"
              >
                <td className="px-6 py-4 font-medium text-foreground bg-muted/20">
                  {row.feature}
                </td>
                <td className="px-6 py-4 text-muted-foreground bg-red-50/30 dark:bg-red-950/10">
                  {renderValue(row.without, false)}
                </td>
                <td className="px-6 py-4 text-foreground bg-green-50/30 dark:bg-green-950/10">
                  {renderValue(row.with, true)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// Simple feature comparison list
interface FeatureCompareProps {
  features: {
    name: string
    supported: boolean | "partial"
  }[]
  title?: string
  className?: string
}

export function FeatureCompare({ features, title, className }: FeatureCompareProps) {
  return (
    <div className={cn("my-6", className)}>
      {title && <h4 className="font-semibold mb-3">{title}</h4>}
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            {feature.supported === true ? (
              <Check className="h-5 w-5 text-green-500" />
            ) : feature.supported === "partial" ? (
              <Minus className="h-5 w-5 text-amber-500" />
            ) : (
              <X className="h-5 w-5 text-red-500" />
            )}
            <span className="text-sm text-muted-foreground">{feature.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
