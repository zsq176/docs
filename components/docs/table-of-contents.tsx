"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

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
      { rootMargin: "-80px 0px -80% 0px" }
    )

    items.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [items])

  if (items.length === 0) return null

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium text-foreground">On this page</p>
      <nav className="space-y-1">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              "block text-sm transition-colors",
              item.level === 2 ? "pl-0" : "pl-3",
              activeId === item.id
                ? "text-primary font-medium"
                : "text-muted-foreground hover:text-foreground"
            )}
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById(item.id)
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
                setActiveId(item.id)
              }
            }}
          >
            {item.title}
          </a>
        ))}
      </nav>
    </div>
  )
}
