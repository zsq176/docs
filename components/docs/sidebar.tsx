"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { getSidebarItemsForPath, getCurrentCategory, type NavItem } from "@/lib/docs-config"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronRight, ExternalLink } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Sidebar() {
  const pathname = usePathname()
  const sidebarItems = getSidebarItemsForPath(pathname)
  const currentCategory = getCurrentCategory(pathname)
  const [openSections, setOpenSections] = React.useState<string[]>([])

  // Auto-expand sections containing current path
  React.useEffect(() => {
    const sectionsToOpen: string[] = []
    
    const findPath = (items: NavItem[], parentKey?: string) => {
      for (const item of items) {
        const key = parentKey ? `${parentKey}-${item.title}` : item.title
        if (item.href === pathname || (item.href && pathname.startsWith(item.href + "/"))) {
          if (parentKey) sectionsToOpen.push(parentKey)
          if (item.items?.length) sectionsToOpen.push(key)
          return true
        }
        if (item.items?.length) {
          if (findPath(item.items, key)) {
            sectionsToOpen.push(key)
            return true
          }
        }
      }
      return false
    }
    
    findPath(sidebarItems)
    setOpenSections((prev) => {
      const combined = [...new Set([...prev, ...sectionsToOpen])]
      return combined
    })
  }, [pathname, sidebarItems])

  const toggleSection = (key: string) => {
    setOpenSections((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    )
  }

  const renderItem = (item: NavItem, parentKey?: string, depth = 0) => {
    const key = parentKey ? `${parentKey}-${item.title}` : item.title
    const hasChildren = item.items && item.items.length > 0
    const isOpen = openSections.includes(key)
    const isActive = pathname === item.href
    const isParentActive = item.href && pathname.startsWith(item.href + "/")

    if (hasChildren) {
      return (
        <div key={key} className="space-y-0.5">
          <button
            onClick={() => toggleSection(key)}
            className={cn(
              "group flex w-full items-center gap-2 px-3 py-2 text-sm rounded-lg transition-all",
              depth === 0 ? "font-medium" : "font-normal",
              (isActive || isParentActive)
                ? "text-foreground bg-muted/50"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
            )}
          >
            <ChevronRight
              className={cn(
                "h-3.5 w-3.5 text-muted-foreground/70 transition-transform duration-200 shrink-0",
                isOpen && "rotate-90"
              )}
            />
            <span className="flex-1 text-left truncate">{item.title}</span>
            {item.badge && (
              <Badge
                variant={item.badge === "New" ? "default" : "secondary"}
                className="h-5 text-[10px] px-1.5 shrink-0"
              >
                {item.badge}
              </Badge>
            )}
          </button>
          
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="ml-3 pl-3 border-l border-border/50 space-y-0.5 py-1">
                  {item.items!.map((subItem) => renderItem(subItem, key, depth + 1))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )
    }

    return (
      <Link
        key={item.href || key}
        href={item.href || "#"}
        target={item.external ? "_blank" : undefined}
        rel={item.external ? "noopener noreferrer" : undefined}
        className={cn(
          "group flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-all relative",
          depth === 0 && "font-medium",
          isActive
            ? "text-primary bg-primary/8 font-medium"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
        )}
      >
        {depth > 0 && (
          <span className={cn(
            "absolute -left-3 w-3 h-px",
            isActive ? "bg-primary" : "bg-border/50"
          )} />
        )}
        <span className="flex-1 truncate">{item.title}</span>
        {item.badge && (
          <Badge
            variant={item.badge === "New" ? "default" : "secondary"}
            className="h-5 text-[10px] px-1.5 shrink-0"
          >
            {item.badge}
          </Badge>
        )}
        {item.external && (
          <ExternalLink className="h-3 w-3 text-muted-foreground opacity-50 group-hover:opacity-100 shrink-0" />
        )}
        {item.description && (
          <span className="sr-only">{item.description}</span>
        )}
      </Link>
    )
  }

  return (
    <ScrollArea className="h-full">
      <div className="px-3 py-4">
        {/* Category Header */}
        <div className="mb-4 px-3">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              {currentCategory.title}
            </span>
          </div>
          {currentCategory.description && (
            <p className="text-xs text-muted-foreground/70">
              {currentCategory.description}
            </p>
          )}
        </div>

        {/* Navigation Items */}
        <nav className="space-y-1">
          {sidebarItems.map((item) => renderItem(item))}
        </nav>
      </div>
    </ScrollArea>
  )
}
