"use client"

import * as React from "react"
import Link from "next/link"
import { NextStepCard } from "@/components/docs/card-group"
import { ArrowLeft, FileCode, Zap } from "lucide-react"

interface DocSubpageContentProps {
  title: string
  description: string
  parentHref: string
  parentTitle: string
  children?: React.ReactNode
  swaggerHref?: string
}

export function DocSubpageContent({
  title,
  description,
  parentHref,
  parentTitle,
  children,
  swaggerHref = "https://open-api.openocean.finance/v4/swagger-ui.html",
}: DocSubpageContentProps) {
  return (
    <div className="space-y-12">
      <section>
        <Link
          href={parentHref}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to {parentTitle}
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">{description}</p>
      </section>

      {children && <section className="scroll-mt-20">{children}</section>}

      <section className="scroll-mt-20 pt-8 border-t border-border">
        <h2 className="text-xl font-bold mb-6">Next Steps</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <NextStepCard
            title={parentTitle}
            description={`Back to ${parentTitle} overview.`}
            href={parentHref}
            icon={<FileCode className="h-5 w-5" />}
          />
          <a href={swaggerHref} target="_blank" rel="noopener noreferrer" className="block h-full">
            <div className="group h-full rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg flex items-start gap-4">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Swagger UI</h4>
                <p className="mt-1 text-sm text-muted-foreground">Try API endpoints.</p>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  )
}
