"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Callout } from "@/components/docs/callout"
import { NextStepCard } from "@/components/docs/card-group"
import { Sparkles, Package, Palette } from "lucide-react"

export function WidgetV2Content() {
  return (
    <div className="space-y-12">
      <section>
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="outline">Widget</Badge>
          <Badge className="bg-primary/20 text-primary">New</Badge>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Widget V2</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
          Widget V2 offers improved UX, more customization, and additional integration options.
        </p>
      </section>

      <section id="features" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">What's new</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Improved layout and mobile experience</li>
          <li>More theme options and CSS variables</li>
          <li>Better wallet connection flow and chain switching</li>
          <li>Cross-chain swap support in a single widget</li>
          <li>Configurable tokens and default amounts</li>
        </ul>
      </section>

      <Callout type="info" title="Demo">
        <p>Check the OpenOcean frontend examples repository for a Widget V2 demo and copy-paste integration.</p>
      </Callout>

      <section className="scroll-mt-20 pt-8 border-t border-border">
        <h2 className="text-xl font-bold mb-6">Next Steps</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <NextStepCard
            title="Widget Overview"
            description="Features and integration."
            href="/docs/widget"
            icon={<Package className="h-5 w-5" />}
          />
          <NextStepCard
            title="Getting Started"
            description="Install and first render."
            href="/docs/widget/getting-started"
            icon={<Sparkles className="h-5 w-5" />}
          />
          <NextStepCard
            title="Customize Theme"
            description="Colors and styling."
            href="/docs/widget/theme"
            icon={<Palette className="h-5 w-5" />}
          />
        </div>
      </section>
    </div>
  )
}
