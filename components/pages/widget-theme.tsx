"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { NextStepCard } from "@/components/docs/card-group"
import { Palette, Package, Sparkles } from "lucide-react"

export function WidgetThemeContent() {
  return (
    <div className="space-y-12">
      <section>
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="outline">Widget</Badge>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Customize Theme</h1>
      </section>

      <section className="scroll-mt-20">
        <p className="text-muted-foreground max-w-3xl mb-6">
          Customize the widget in your favorite theme here -{" "}
          <a href="https://widget.openocean.finance/theme" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            https://widget.openocean.finance/theme
          </a>
        </p>
        <p className="text-muted-foreground mb-4">Examples of Dark mode & light mode:</p>

        <figure className="space-y-2 mb-6">
          <div className="relative rounded-lg border bg-muted/30 overflow-hidden max-w-2xl">
            <img
              src="/dark-mode.png"
              alt="Dark Mode Version"
              className="w-full h-auto object-contain"
            />
          </div>
          <figcaption className="text-sm text-muted-foreground">Dark Mode Version</figcaption>
        </figure>

        <figure className="space-y-2">
          <div className="relative rounded-lg border bg-muted/30 overflow-hidden max-w-2xl">
            <img
              src="/light-mode.png"
              alt="Light Mode Version"
              className="w-full h-auto object-contain"
            />
          </div>
          <figcaption className="text-sm text-muted-foreground">Light Mode Version</figcaption>
        </figure>
      </section>

      <section className="scroll-mt-20 pt-8 border-t border-border">
        <h2 className="text-xl font-bold mb-6">Next Steps</h2>
        <div className="grid gap-4 md:grid-cols-2">
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
        </div>
      </section>
    </div>
  )
}
