"use client"

import * as React from "react"
import { FileCode, BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

interface GenericDocContentProps {
  title: string
  description: string
  badge?: string
  links?: { title: string; href: string; external?: boolean }[]
}

export function GenericDocContent({
  title,
  description,
  badge = "Documentation",
  links = [],
}: GenericDocContentProps) {
  return (
    <div className="space-y-12">
      <section>
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <FileCode className="h-4 w-4" />
            {badge}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">{description}</p>
      </section>

      <section className="rounded-lg border bg-card p-6 text-muted-foreground">
        <p>
          This section is being updated. Use the sidebar to explore related pages, or visit the
          API Reference and Swagger for full endpoint details.
        </p>
      </section>

      {links.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Related</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 rounded-lg border p-4 hover:bg-hover transition-colors"
              >
                <BookOpen className="h-5 w-5 shrink-0 text-primary" />
                <span className="font-medium">{link.title}</span>
                {link.external && <ExternalLink className="h-4 w-4 ml-auto opacity-50" />}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
