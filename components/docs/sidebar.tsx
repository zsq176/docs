"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { docsConfig, type NavItem } from "@/lib/docs-config"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  ChevronRight, 
  ExternalLink,
  BookOpen,
  Layers,
  Zap,
  Code2,
  Settings,
  Puzzle,
  Bot,
  Link2,
  FileCode,
  TrendingUp
} from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  "Introduction": <BookOpen className="h-4 w-4" />,
  "Supported Chains & Assets": <Layers className="h-4 w-4" />,
  "Swap API": <Zap className="h-4 w-4" />,
  "Trading": <TrendingUp className="h-4 w-4" />,
  "Other APIs": <Code2 className="h-4 w-4" />,
  "Widget": <Puzzle className="h-4 w-4" />,
  "Developer Resources": <FileCode className="h-4 w-4" />,
  "Use Cases": <Settings className="h-4 w-4" />,
  "AI Agents": <Bot className="h-4 w-4" />,
  "External Resources": <Link2 className="h-4 w-4" />,
}

const itemIconMap: Record<string, React.ReactNode> = {
  "Bot": <Bot className="h-4 w-4 text-muted-foreground shrink-0" />,
}

export function Sidebar() {
  const pathname = usePathname()
  const [openSections, setOpenSections] = React.useState<string[]>([])
  const [openNested, setOpenNested] = React.useState<string[]>([])

  // Auto-open section and all nested groups containing current page
  const collectKeysForPath = React.useCallback((path: string | undefined) => {
    if (!path) return { section: null, keys: [] as string[] }
    for (const section of docsConfig.sidebarNav) {
      if (!section.items) continue
      const keys: string[] = []
      const walk = (items: NavItem[], parentKey: string): boolean => {
        for (const item of items) {
          const currentKey = parentKey ? `${parentKey}-${item.title}` : `${section.title}-${item.title}`
          if (item.href === path || (item.href && path.startsWith(item.href + "/"))) {
            if (parentKey) keys.push(parentKey)
            if (item.items?.length) keys.push(currentKey)
            return true
          }
          if (item.items?.length) {
            if (walk(item.items, currentKey)) {
              keys.push(currentKey)
              if (parentKey) keys.push(parentKey)
              return true
            }
          }
        }
        return false
      }
      if (walk(section.items, "")) {
        return { section: section.title, keys: [...new Set(keys)] }
      }
    }
    return { section: null, keys: [] as string[] }
  }, [])

  React.useEffect(() => {
    const { section, keys } = collectKeysForPath(pathname)
    if (section) {
      setOpenSections([section])
      setOpenNested((prev) => {
        const next = [...prev]
        for (const k of keys) {
          if (!next.includes(k)) next.push(k)
        }
        return next
      })
    }
  }, [pathname, collectKeysForPath])

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title) ? [] : [title]
    )
  }

  const toggleNested = (key: string) => {
    setOpenNested((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    )
  }

  const renderItem = (item: NavItem, sectionTitle: string, parentKey?: string) => {
    if (item.items?.length) {
      const nestedKey = parentKey ?? `${sectionTitle}-${item.title}`
      const isNestedOpen = openNested.includes(nestedKey)
      return (
        <div key={nestedKey} className="space-y-0.5">
          <button
            onClick={() => toggleNested(nestedKey)}
            className={cn(
              "group flex w-full items-center gap-2 px-3 py-1.5 text-sm rounded-md transition-all text-left",
              "text-muted-foreground hover:text-foreground hover:bg-hover"
            )}
          >
            <span className="flex-1">{item.title}</span>
            <ChevronRight
              className={cn(
                "h-3.5 w-3.5 text-muted-foreground transition-transform shrink-0",
                isNestedOpen && "rotate-90"
              )}
            />
          </button>
          {isNestedOpen && (
            <div className="space-y-0.5">
              {item.items.map((sub) => renderItem(sub, sectionTitle, nestedKey + "-" + sub.title))}
            </div>
          )}
        </div>
      )
    }
    const isActive = pathname === item.href
    return (
      <Link
        key={item.href ?? item.title}
        href={item.href || "#"}
        target={item.external ? "_blank" : undefined}
        rel={item.external ? "noopener noreferrer" : undefined}
        className={cn(
          "group flex items-center gap-2 px-3 py-1.5 text-sm rounded-md transition-all",
          isActive
            ? "bg-primary/10 text-primary font-medium"
            : "text-muted-foreground hover:text-foreground hover:bg-hover"
        )}
      >
        {item.icon && itemIconMap[item.icon] && (
          <span className="shrink-0">{itemIconMap[item.icon]}</span>
        )}
        <span className="flex-1">{item.title}</span>
        {item.badge && (
          <Badge
            variant={item.badge === "New" ? "default" : "secondary"}
            className="h-5 text-[10px] px-1.5"
          >
            {item.badge}
          </Badge>
        )}
        {item.external && (
          <ExternalLink className="h-3 w-3 opacity-50 group-hover:opacity-100" />
        )}
      </Link>
    )
  }

  return (
    <ScrollArea className="h-[calc(100vh-4rem)] pb-10">
      <div className="space-y-1 py-4">
        {docsConfig.sidebarNav.map((section, index) => {
          const isSingleLink = section.href && (!section.items || section.items.length === 0)
          if (isSingleLink) {
            const isActive = pathname === section.href
            return (
              <div key={section.title} className="pb-2">
                <Link
                  href={section.href!}
                  className={cn(
                    "flex w-full items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    isActive ? "bg-primary/10 text-primary" : "hover:bg-hover text-foreground"
                  )}
                >
                  <span className="text-muted-foreground shrink-0">
                    {iconMap[section.title] || <ChevronRight className="h-4 w-4" />}
                  </span>
                  <span className="flex-1 text-left">{section.title}</span>
                </Link>
              </div>
            )
          }
          return (
            <div key={section.title} className="pb-2">
              <button
                onClick={() => toggleSection(section.title)}
                className={cn(
                  "flex w-full items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  "hover:bg-hover text-foreground"
                )}
              >
                <span className="text-muted-foreground">
                  {iconMap[section.title] || <ChevronRight className="h-4 w-4" />}
                </span>
                <span className="flex-1 text-left">{section.title}</span>
                <ChevronRight
                  className={cn(
                    "h-4 w-4 text-muted-foreground transition-transform",
                    openSections.includes(section.title) && "rotate-90"
                  )}
                />
              </button>

              {openSections.includes(section.title) && section.items && (
                <div className="mt-1 ml-3 space-y-1 border-l border-border pl-3">
                  {section.items.map((item) => renderItem(item, section.title))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </ScrollArea>
  )
}
