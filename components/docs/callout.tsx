"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { AlertCircle, Info, AlertTriangle, CheckCircle, Lightbulb, Zap } from "lucide-react"
import { motion } from "framer-motion"

type CalloutType = "info" | "warning" | "danger" | "success" | "tip" | "note"

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
    containerClass: string
    iconClass: string
    titleClass: string
    borderClass: string
  }
> = {
  info: {
    icon: <Info className="h-4 w-4" />,
    containerClass: "bg-primary/[0.04] dark:bg-primary/[0.08]",
    iconClass: "text-primary bg-primary/10",
    titleClass: "text-primary",
    borderClass: "border-l-primary/40",
  },
  warning: {
    icon: <AlertTriangle className="h-4 w-4" />,
    containerClass: "bg-chart-3/[0.04] dark:bg-chart-3/[0.08]",
    iconClass: "text-chart-3 bg-chart-3/10",
    titleClass: "text-chart-3",
    borderClass: "border-l-chart-3/40",
  },
  danger: {
    icon: <AlertCircle className="h-4 w-4" />,
    containerClass: "bg-destructive/[0.04] dark:bg-destructive/[0.08]",
    iconClass: "text-destructive bg-destructive/10",
    titleClass: "text-destructive",
    borderClass: "border-l-destructive/40",
  },
  success: {
    icon: <CheckCircle className="h-4 w-4" />,
    containerClass: "bg-chart-2/[0.04] dark:bg-chart-2/[0.08]",
    iconClass: "text-chart-2 bg-chart-2/10",
    titleClass: "text-chart-2",
    borderClass: "border-l-chart-2/40",
  },
  tip: {
    icon: <Lightbulb className="h-4 w-4" />,
    containerClass: "bg-chart-4/[0.04] dark:bg-chart-4/[0.08]",
    iconClass: "text-chart-4 bg-chart-4/10",
    titleClass: "text-chart-4",
    borderClass: "border-l-chart-4/40",
  },
  note: {
    icon: <Zap className="h-4 w-4" />,
    containerClass: "bg-muted/40",
    iconClass: "text-muted-foreground bg-muted",
    titleClass: "text-foreground",
    borderClass: "border-l-border",
  },
}

export function Callout({ type = "info", title, children, className }: CalloutProps) {
  const config = calloutConfig[type]

  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "my-6 flex gap-3 rounded-lg border border-border/40 border-l-4 p-4",
        config.containerClass,
        config.borderClass,
        className
      )}
    >
      <div className={cn(
        "shrink-0 flex items-center justify-center h-6 w-6 rounded-md",
        config.iconClass
      )}>
        {config.icon}
      </div>
      <div className="min-w-0 flex-1 pt-0.5">
        {title && (
          <p className={cn("font-semibold text-sm mb-1.5", config.titleClass)}>{title}</p>
        )}
        <div className="text-sm text-muted-foreground leading-relaxed [&>p]:mb-2 [&>p:last-child]:mb-0 [&>code]:text-xs">
          {children}
        </div>
      </div>
    </motion.div>
  )
}

// Minimal inline callout for less prominent notes
interface InlineCalloutProps {
  children: React.ReactNode
  className?: string
}

export function InlineCallout({ children, className }: InlineCalloutProps) {
  return (
    <span className={cn(
      "inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-muted/50 text-sm text-muted-foreground",
      className
    )}>
      <Info className="h-3 w-3" />
      {children}
    </span>
  )
}
