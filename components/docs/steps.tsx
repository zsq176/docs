"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const stepTransition = { duration: 0.3, ease: "easeOut" as const }

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
  // When using <Step> children, render them in the container
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
        <div className="flex items-start justify-between relative">
          {/* Connection Line */}
          <div className="absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary/50" />
          
          {stepsList.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...stepTransition, delay: index * 0.08 }}
              className="relative flex flex-col items-center text-center flex-1"
            >
              {/* Step Number */}
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-background border-2 border-primary text-primary font-bold shadow-sm">
                {step.icon || index + 1}
              </div>
              
              {/* Content */}
              <div className="mt-4 px-2">
                <h4 className="font-semibold text-foreground">{step.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground max-w-[200px]">
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
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...stepTransition, delay: index * 0.08 }}
          className="relative flex gap-4 pb-8 last:pb-0"
        >
          {/* Vertical Line */}
          {index < stepsList.length - 1 && (
            <div className="absolute left-[23px] top-12 bottom-0 w-0.5 bg-gradient-to-b from-primary to-border" />
          )}
          
          {/* Step Number */}
          <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-background border-2 border-primary text-primary font-bold transition-all duration-200 hover:scale-105 hover:shadow-sm">
            {step.icon || index + 1}
          </div>
          
          {/* Content */}
          <div className="pt-2">
            <h4 className="font-semibold text-foreground">{step.title}</h4>
            <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
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
    <ol className={cn("my-6 space-y-4", className)}>
      {items.map((item, index) => (
        <li key={index} className="flex gap-3">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold">
            {index + 1}
          </span>
          <div className="text-muted-foreground [&>p]:mb-0">{item}</div>
        </li>
      ))}
    </ol>
  )
}

// Single Step component for manual step lists (used in other pages)
interface SingleStepProps {
  number: number
  title: string
  children?: React.ReactNode
  isActive?: boolean
  isCompleted?: boolean
}

export function Step({ number, title, children, isActive = false, isCompleted = false }: SingleStepProps) {
  return (
    <div className="relative flex gap-4 pb-6 last:pb-0">
      {/* Vertical connector line */}
      <div className="absolute left-[19px] top-10 bottom-0 w-0.5 bg-border last:hidden" />
      
      <div className={cn(
        "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 font-semibold transition-all",
        isActive || isCompleted
          ? "border-primary bg-primary text-primary-foreground"
          : "border-muted-foreground/30 bg-background text-muted-foreground"
      )}>
        {number}
      </div>
      
      <div className="pt-1.5 flex-1">
        <h4 className="font-semibold text-foreground">{title}</h4>
        {children && (
          <p className="mt-1 text-sm text-muted-foreground">{children}</p>
        )}
      </div>
    </div>
  )
}
