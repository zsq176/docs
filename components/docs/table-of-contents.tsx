"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface TocItem {
  id: string
  title: string
  level: number
}

interface TableOfContentsProps {
  items: TocItem[]
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = React.useState<string>("")

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-100px 0px -80% 0px", threshold: 0 }
    )

    items.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [items])

  if (items.length === 0) return null

  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
        On this page
      </p>
      <nav className="relative">
        {/* Active indicator line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border/40" />
        
        <ul className="space-y-1">
          {items.map((item) => {
            const isActive = activeId === item.id
            return (
              <li key={item.id} className="relative">
                {isActive && (
                  <motion.div
                    layoutId="tocIndicator"
                    className="absolute left-0 top-0 bottom-0 w-px bg-primary"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                  />
                )}
                <a
                  href={`#${item.id}`}
                  className={cn(
                    "block text-sm py-1.5 pl-3 transition-colors duration-150",
                    item.level === 2 ? "pr-0" : "pl-6",
                    isActive
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById(item.id)
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                      setActiveId(item.id)
                      // Update URL without triggering scroll
                      window.history.replaceState(null, "", `#${item.id}`)
                    }
                  }}
                >
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
