"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const stepTransition = { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }

interface Step {
  title: string
  description: string
  icon?: React.ReactNode
}

interface StepsProps {
  steps?: Step[]
  className?: string
  variant?: "horizontal" | "vertical"
  children?: React.ReactNode
}

export function Steps({ steps, className, variant = "vertical", children }: StepsProps) {
  if (children != null) {
    return (
      <div className={cn("my-8 space-y-0", className)}>
        {children}
      </div>
    )
  }

  const stepsList = steps ?? []
  if (stepsList.length === 0) return null

  if (variant === "horizontal") {
    return (
      <div className={cn("my-8", className)}>
        <div className="flex flex-col md:flex-row items-stretch md:items-start justify-between relative gap-4 md:gap-0">
          {/* Connection Line - only on desktop */}
          <div className="hidden md:block absolute top-5 left-[10%] right-[10%] h-px bg-gradient-to-r from-border via-primary/20 to-border" />
          
          {stepsList.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...stepTransition, delay: index * 0.08 }}
              className="relative flex flex-row md:flex-col items-center md:items-center text-left md:text-center flex-1 gap-4 md:gap-0"
            >
              {/* Step Number */}
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-background border border-primary/30 text-primary text-sm font-semibold shadow-sm">
                {step.icon || index + 1}
              </div>
              
              {/* Content */}
              <div className="md:mt-4 md:px-2 flex-1 md:flex-initial">
                <h4 className="font-semibold text-sm text-foreground">{step.title}</h4>
                <p className="mt-0.5 text-xs text-muted-foreground max-w-[180px]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={cn("my-8 space-y-0", className)}>
      {stepsList.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...stepTransition, delay: index * 0.06 }}
          className="relative flex gap-4 pb-6 last:pb-0"
        >
          {/* Vertical Line */}
          {index < stepsList.length - 1 && (
            <div className="absolute left-[19px] top-10 bottom-0 w-px bg-gradient-to-b from-primary/30 to-border/30" />
          )}
          
          {/* Step Number */}
          <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-background border border-primary/30 text-primary text-sm font-semibold transition-all duration-200 hover:border-primary/50 hover:shadow-sm">
            {step.icon || index + 1}
          </div>
          
          {/* Content */}
          <div className="pt-1.5 flex-1">
            <h4 className="font-semibold text-sm text-foreground">{step.title}</h4>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// Numbered list for ordered steps
interface NumberedListProps {
  items: React.ReactNode[]
  className?: string
}

export function NumberedList({ items, className }: NumberedListProps) {
  return (
    <ol className={cn("my-6 space-y-3", className)}>
      {items.map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -4 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...stepTransition, delay: index * 0.04 }}
          className="flex gap-3"
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary/8 text-primary text-xs font-semibold">
            {index + 1}
          </span>
          <div className="text-sm text-muted-foreground pt-0.5 [&>p]:mb-0">{item}</div>
        </motion.li>
      ))}
    </ol>
  )
}

// Single Step component for manual step lists
interface SingleStepProps {
  number: number
  title: string
  children?: React.ReactNode
  isActive?: boolean
  isCompleted?: boolean
}

export function Step({ number, title, children, isActive = false, isCompleted = false }: SingleStepProps) {
  return (
    <div className="relative flex gap-4 pb-5 last:pb-0">
      {/* Vertical connector line */}
      <div className="absolute left-[17px] top-9 bottom-0 w-px bg-border/40 last:hidden" />
      
      <div className={cn(
        "relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border text-sm font-semibold transition-all",
        isActive || isCompleted
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border/50 bg-background text-muted-foreground"
      )}>
        {number}
      </div>
      
      <div className="pt-1 flex-1">
        <h4 className="font-semibold text-sm text-foreground">{title}</h4>
        {children && (
          <div className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{children}</div>
        )}
      </div>
    </div>
  )
}
