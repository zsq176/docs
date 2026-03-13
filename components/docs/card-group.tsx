"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ExternalLink, ArrowRight } from "lucide-react"

const cardStagger = { duration: 0.3, ease: "easeOut" as const }

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
        "group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300",
        "hover:border-border hover:shadow-lg hover:shadow-primary/5",
        "hover:-translate-y-0.5",
        href && "cursor-pointer",
        className
      )}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative">
        {/* Icon */}
        {iconElement && (
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
            {iconElement}
          </div>
        )}
        
        {/* Title */}
        <h3 className="font-semibold text-foreground flex items-center gap-2">
          {title}
          {href && (
            <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          )}
        </h3>
        
        {/* Description */}
        <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>
        
        {/* External link indicator */}
        {external && (
          <ExternalLink className="absolute top-4 right-4 h-4 w-4 text-muted-foreground opacity-50 group-hover:opacity-100" />
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
    <div className={cn("my-8 grid gap-4", gridCols[columns], className)}>
      {React.Children.map(children, (child, index) => (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...cardStagger, delay: index * 0.05 }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  )
}

// Next Steps Card - for the bottom of pages
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
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={cardStagger}
      className="h-full"
    >
      <Link href={href} className="block h-full">
        <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-gradient-to-br from-card to-muted/30 p-6 transition-all duration-300 hover:border-border hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
        <div className="flex flex-1 items-start gap-4">
          {iconElement && (
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110 group-hover:rotate-3">
              {iconElement}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h4>
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          </div>
          <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </Link>
    </motion.div>
  )
}

export function NextStepsSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-12 pt-8 border-t border-border">
      <h3 className="text-lg font-semibold mb-4">Next Steps</h3>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </div>
  )
}
