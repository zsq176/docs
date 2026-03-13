"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { docsConfig, getCurrentCategory } from "@/lib/docs-config"
import { 
  Search, 
  Menu, 
  X, 
  Moon, 
  Sun, 
  ExternalLink,
  Sparkles,
  Home,
  ArrowRightLeft,
  TrendingUp,
  Layers,
  Puzzle,
  Bot,
  FileCode,
  Command
} from "lucide-react"
import { useTheme } from "next-themes"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Sidebar } from "./sidebar"
import { motion } from "framer-motion"

const iconMap: Record<string, React.ElementType> = {
  Home,
  ArrowRightLeft,
  TrendingUp,
  Layers,
  Puzzle,
  Bot,
  FileCode,
}

export function Header() {
  const pathname = usePathname()
  const { setTheme, theme } = useTheme()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [searchOpen, setSearchOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const currentCategory = getCurrentCategory(pathname)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Keyboard shortcut for search
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setSearchOpen(true)
      }
      if (e.key === "Escape") {
        setSearchOpen(false)
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/40 shadow-sm"
          : "bg-background/60 backdrop-blur-sm"
      )}
    >
      {/* Top Bar */}
      <div className="flex h-14 items-center justify-between px-4 md:px-6 lg:px-8 border-b border-border/30">
        {/* Logo and Mobile Menu */}
        <div className="flex items-center gap-3">
          {mounted ? (
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="shrink-0 h-9 w-9">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 p-0">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="h-full overflow-y-auto">
                  <div className="p-4 border-b border-border">
                    <Link href="/" className="flex items-center gap-2">
                      <Image
                        src="/logo.avif"
                        alt="OpenOcean"
                        width={28}
                        height={28}
                        className="h-7 w-7 object-contain"
                      />
                      <span className="font-semibold">OpenOcean</span>
                    </Link>
                  </div>
                  <Sidebar />
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            <Button variant="ghost" size="icon" className="shrink-0 h-9 w-9 lg:hidden" aria-hidden>
              <Menu className="h-5 w-5" />
            </Button>
          )}

          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg overflow-hidden transition-transform group-hover:scale-105">
              <Image
                src="/logo.avif"
                alt="OpenOcean"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm leading-tight hidden sm:block">
                OpenOcean
              </span>
              <span className="text-[10px] text-muted-foreground leading-tight hidden sm:block">
                Documentation
              </span>
            </div>
          </Link>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          {/* Search */}
          <div className="relative hidden md:flex items-center">
            <Button
              variant="outline"
              size="sm"
              className={cn(
                "gap-2 text-muted-foreground h-9 px-3 bg-muted/30 border-border/50 hover:bg-muted/50",
                searchOpen && "ring-2 ring-primary/20"
              )}
              onClick={() => setSearchOpen(true)}
            >
              <Search className="h-4 w-4" />
              <span className="hidden lg:inline text-sm">Search docs...</span>
              <kbd className="pointer-events-none hidden lg:inline-flex h-5 select-none items-center gap-0.5 rounded border border-border/50 bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                <Command className="h-3 w-3" />K
              </kbd>
            </Button>
          </div>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* GitHub */}
          <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
            <a
              href="https://github.com/openocean-finance"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="sr-only">GitHub</span>
            </a>
          </Button>

          {/* Get Started Button */}
          <Button size="sm" className="hidden sm:flex gap-1.5 h-9 group" asChild>
            <a
              href="https://openocean.finance/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Launch App
              <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
        </div>
      </div>

      {/* Primary Navigation - Category Tabs */}
      <nav className="hidden lg:flex items-center gap-1 px-4 md:px-6 lg:px-8 h-11 overflow-x-auto">
        {docsConfig.primaryNav.map((category) => {
          const Icon = iconMap[category.icon || "Home"]
          const isActive = currentCategory.title === category.title
          
          return (
            <Link
              key={category.title}
              href={category.href}
              className={cn(
                "relative flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-all whitespace-nowrap",
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              {Icon && <Icon className="h-4 w-4" />}
              <span>{category.title}</span>
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
