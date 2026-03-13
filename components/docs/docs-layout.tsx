"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Header } from "./header"
import { Sidebar } from "./sidebar"
import { TableOfContents } from "./table-of-contents"
import { cn } from "@/lib/utils"

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
}
const pageTransition = { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }

interface DocsLayoutProps {
  children: React.ReactNode
  showToc?: boolean
  tocItems?: { id: string; title: string; level: number }[]
}

export function DocsLayout({ children, showToc = true, tocItems = [] }: DocsLayoutProps) {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Subtle background pattern */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.02]" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/[0.02] blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/[0.02] blur-3xl rounded-full" />
      </div>

      <Header />
      
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-[6.25rem] h-[calc(100vh-6.25rem)] border-r border-border/40">
            <Sidebar />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="mx-auto max-w-4xl min-h-[calc(100vh-6.25rem)] px-6 py-10 md:px-10 lg:px-14">
            <motion.article
              variants={pageVariants}
              initial="initial"
              animate="animate"
              transition={pageTransition}
              className="prose prose-neutral dark:prose-invert max-w-none"
            >
              {children}
            </motion.article>
          </div>
        </main>

        {/* Table of Contents */}
        {showToc && tocItems.length > 0 && (
          <aside className="hidden xl:block w-56 shrink-0">
            <div className="sticky top-[6.25rem] h-[calc(100vh-6.25rem)] py-10 pr-6">
              <TableOfContents items={tocItems} />
            </div>
          </aside>
        )}
      </div>
    </div>
  )
}
