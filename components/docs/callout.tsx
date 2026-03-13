"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { AlertCircle, Info, AlertTriangle, CheckCircle, Lightbulb } from "lucide-react"

type CalloutType = "info" | "warning" | "danger" | "success" | "tip"

interface CalloutProps {
  type?: CalloutType
  title?: string
  children: React.ReactNode
  className?: string
}

const calloutConfig: Record<
  CalloutType,
  {
    icon: React.ReactNode
    className: string
    titleClass: string
  }
> = {
  info: {
    icon: <Info className="h-5 w-5" />,
    className: "border-blue-200 bg-blue-50/50 dark:border-blue-900 dark:bg-blue-950/30",
    titleClass: "text-blue-700 dark:text-blue-400",
  },
  warning: {
    icon: <AlertTriangle className="h-5 w-5" />,
    className: "border-amber-200 bg-amber-50/50 dark:border-amber-900 dark:bg-amber-950/30",
    titleClass: "text-amber-700 dark:text-amber-400",
  },
  danger: {
    icon: <AlertCircle className="h-5 w-5" />,
    className: "border-red-200 bg-red-50/50 dark:border-red-900 dark:bg-red-950/30",
    titleClass: "text-red-700 dark:text-red-400",
  },
  success: {
    icon: <CheckCircle className="h-5 w-5" />,
    className: "border-green-200 bg-green-50/50 dark:border-green-900 dark:bg-green-950/30",
    titleClass: "text-green-700 dark:text-green-400",
  },
  tip: {
    icon: <Lightbulb className="h-5 w-5" />,
    className: "border-purple-200 bg-purple-50/50 dark:border-purple-900 dark:bg-purple-950/30",
    titleClass: "text-purple-700 dark:text-purple-400",
  },
}

export function Callout({ type = "info", title, children, className }: CalloutProps) {
  const config = calloutConfig[type]

  return (
    <div
      className={cn(
        "my-6 flex gap-3 rounded-lg border p-4",
        config.className,
        className
      )}
    >
      <div className={cn("shrink-0 mt-0.5", config.titleClass)}>{config.icon}</div>
      <div className="min-w-0 flex-1">
        {title && (
          <p className={cn("font-semibold mb-1", config.titleClass)}>{title}</p>
        )}
        <div className="text-sm text-muted-foreground [&>p]:mb-2 [&>p:last-child]:mb-0">
          {children}
        </div>
      </div>
    </div>
  )
}
