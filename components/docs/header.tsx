"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { docsConfig } from "@/lib/docs-config"
import { 
  Search, 
  Menu, 
  X, 
  Moon, 
  Sun, 
  ExternalLink,
  Sparkles,
  ChevronDown
} from "lucide-react"
import { useTheme } from "next-themes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Sidebar } from "./sidebar"

export function Header() {
  const pathname = usePathname()
  const { setTheme, theme } = useTheme()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [searchOpen, setSearchOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

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

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "glass border-b border-border/50 shadow-sm"
          : "bg-background/80 backdrop-blur-sm"
      )}
    >
      <div className="flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-4">
          {mounted ? (
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="shrink-0">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 p-0">
                <div className="p-6">
                  <Sidebar />
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            <Button variant="ghost" size="icon" className="shrink-0 lg:hidden" aria-hidden>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          )}

          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg overflow-hidden transition-transform group-hover:scale-105">
              <Image
                src="/logo.avif"
                alt="OpenOcean"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              <div className="absolute inset-0 rounded-lg bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-semibold text-lg hidden sm:inline-block">
              OpenOcean
            </span>
          </Link>

          {mounted ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
                  Docs
                  <ChevronDown className="h-3.5 w-3.5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link href="/">API Documentation</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="https://openocean.finance" target="_blank">
                    OpenOcean App
                    <ExternalLink className="ml-auto h-3.5 w-3.5" />
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground" aria-hidden>
              Docs
              <ChevronDown className="h-3.5 w-3.5" />
            </Button>
          )}
        </div>

        {/* Main Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {docsConfig.mainNav.map((item) => {
            const hasDropdown = item.items && item.items.length > 0
            const isActive = hasDropdown
              ? item.items?.some(
                  (sub) =>
                    sub.href &&
                    (pathname === sub.href || pathname?.startsWith(sub.href + "/"))
                )
              : pathname === item.href || pathname?.startsWith((item.href ?? "") + "/")

            if (hasDropdown) {
              return (
                <DropdownMenu key={item.title}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={cn(
                        "px-3 py-2 h-auto text-sm font-medium rounded-md transition-colors relative",
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                      )}
                    >
                      {item.title}
                      <ChevronDown className="ml-0.5 h-3.5 w-3.5" />
                      {isActive && (
                        <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full" />
                      )}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {item.items?.map((sub) => (
                      <DropdownMenuItem key={sub.href ?? sub.title} asChild>
                        <Link
                          href={sub.href || "#"}
                          target={sub.external ? "_blank" : undefined}
                          rel={sub.external ? "noopener noreferrer" : undefined}
                        >
                          {sub.title}
                          {sub.external && (
                            <ExternalLink className="ml-auto h-3.5 w-3.5" />
                          )}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            }
            return (
              <Link
                key={item.href}
                href={item.href || "#"}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors relative",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                )}
              >
                {item.title}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          {/* Search */}
          <div className="relative hidden md:flex items-center">
            <div
              className={cn(
                "flex items-center transition-all duration-300",
                searchOpen ? "w-64" : "w-auto"
              )}
            >
              {searchOpen ? (
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search documentation..."
                    className="pl-9 pr-8 h-9 w-full"
                    autoFocus
                    onBlur={() => setSearchOpen(false)}
                  />
                  <kbd className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                    <span className="text-xs">Esc</span>
                  </kbd>
                </div>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 text-muted-foreground"
                  onClick={() => setSearchOpen(true)}
                >
                  <Search className="h-4 w-4" />
                  <span className="hidden lg:inline">Search...</span>
                  <kbd className="pointer-events-none hidden lg:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium">
                    <span className="text-xs">Ctrl</span>K
                  </kbd>
                </Button>
              )}
            </div>
          </div>

          {/* AI Assistant Button */}
          <Button
            variant="outline"
            size="sm"
            className="gap-2 hidden md:flex"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span>Ask AI</span>
          </Button>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Get Started Button */}
          <Button size="sm" className="hidden sm:flex gap-1 group" asChild>
            <a
              href="https://openocean.finance/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1"
            >
              Get Started
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
