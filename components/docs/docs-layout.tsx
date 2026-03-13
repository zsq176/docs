"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Header } from "./header"
import { Sidebar } from "./sidebar"
import { TableOfContents } from "./table-of-contents"
import { cn } from "@/lib/utils"

const pageVariants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
}
const pageTransition = { duration: 0.25, ease: "easeOut" as const }

interface DocsLayoutProps {
  children: React.ReactNode
  showToc?: boolean
  tocItems?: { id: string; title: string; level: number }[]
}

export function DocsLayout({ children, showToc = true, tocItems = [] }: DocsLayoutProps) {
  return (
    <div className="relative min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 shrink-0 border-r border-border">
          <div className="sticky top-16 h-[calc(100vh-4rem)]">
            <Sidebar />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="mx-auto max-w-4xl min-h-[calc(100vh-4rem)] px-4 py-8 md:px-8 lg:px-12">
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              transition={pageTransition}
            >
              {children}
            </motion.div>
          </div>
        </main>

        {/* Table of Contents */}
        {showToc && tocItems.length > 0 && (
          <aside className="hidden xl:block w-56 shrink-0">
            <div className="sticky top-16 h-[calc(100vh-4rem)] py-8 pr-4">
              <TableOfContents items={tocItems} />
            </div>
          </aside>
        )}
      </div>
    </div>
  )
}
