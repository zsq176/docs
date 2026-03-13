"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ExternalLink, ArrowRight, ChevronRight } from "lucide-react"

const cardStagger = { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }

interface FeatureCardProps {
  title: string
  description: string
  icon?: React.ReactNode | React.ComponentType<{ className?: string }>
  href?: string
  external?: boolean
  className?: string
}

export function FeatureCard({
  title,
  description,
  icon,
  href,
  external,
  className,
}: FeatureCardProps) {
  const iconElement = icon != null
    ? (React.isValidElement(icon)
        ? icon
        : React.createElement(icon as React.ComponentType<{ className?: string }>, { className: "h-5 w-5" }))
    : null
    
  const content = (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border/50 bg-card/50 p-5 transition-all duration-300",
        "hover:border-border hover:bg-card hover:shadow-lg hover:shadow-primary/[0.03]",
        "hover:-translate-y-0.5",
        href && "cursor-pointer",
        className
      )}
    >
      {/* Subtle corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/[0.03] to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative">
        {/* Icon */}
        {iconElement && (
          <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/8 text-primary transition-all duration-300 group-hover:bg-primary/12 group-hover:scale-105">
            {iconElement}
          </div>
        )}
        
        {/* Title */}
        <h3 className="font-semibold text-foreground flex items-center gap-2 text-sm">
          {title}
          {href && (
            <ChevronRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0 transition-all" />
          )}
        </h3>
        
        {/* Description */}
        <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {description}
        </p>
        
        {/* External link indicator */}
        {external && (
          <ExternalLink className="absolute top-4 right-4 h-3.5 w-3.5 text-muted-foreground opacity-40 group-hover:opacity-70 transition-opacity" />
        )}
      </div>
    </div>
  )

  if (href) {
    return (
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="block"
      >
        {content}
      </Link>
    )
  }

  return content
}

interface CardGroupProps {
  children: React.ReactNode
  columns?: 2 | 3 | 4
  className?: string
}

export function CardGroup({ children, columns = 2, className }: CardGroupProps) {
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <div className={cn("my-8 grid gap-3", gridCols[columns], className)}>
      {React.Children.map(children, (child, index) => (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...cardStagger, delay: index * 0.04 }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  )
}

// Next Steps Card - for the bottom of pages with enhanced design
interface NextStepCardProps {
  title: string
  description: string
  href: string
  icon?: React.ReactNode | React.ComponentType<{ className?: string }>
}

export function NextStepCard({ title, description, href, icon }: NextStepCardProps) {
  const iconElement = icon != null
    ? (React.isValidElement(icon)
        ? icon
        : React.createElement(icon as React.ComponentType<{ className?: string }>, { className: "h-5 w-5" }))
    : null
    
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={cardStagger}
      className="h-full"
    >
      <Link href={href} className="block h-full">
        <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border/50 bg-card/50 p-5 transition-all duration-300 hover:border-border hover:bg-card hover:shadow-lg hover:shadow-primary/[0.03] hover:-translate-y-0.5">
          {/* Top gradient line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="flex flex-1 items-start gap-4">
            {iconElement && (
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/8 text-primary transition-all duration-300 group-hover:bg-primary/12 group-hover:scale-105">
                {iconElement}
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                {title}
              </h4>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
            <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-0.5 transition-all mt-0.5" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export function NextStepsSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-12 pt-8 border-t border-border/40">
      <h3 className="text-base font-semibold mb-4 text-foreground">Next Steps</h3>
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </div>
  )
}

// Stat card for displaying metrics
interface StatCardProps {
  value: string
  label: string
  className?: string
}

export function StatCard({ value, label, className }: StatCardProps) {
  return (
    <div className={cn(
      "flex flex-col items-center justify-center p-4 rounded-lg bg-muted/30 border border-border/30",
      className
    )}>
      <span className="text-2xl font-bold text-foreground">{value}</span>
      <span className="text-xs text-muted-foreground mt-1">{label}</span>
    </div>
  )
}
