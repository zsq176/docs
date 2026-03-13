"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, MessageCircle } from "lucide-react"

export function MemeApiContent() {
  return (
    <div className="space-y-12">
      <section>
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="outline">Meme API</Badge>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Meme API</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
          Unlock the power of the fastest API for Moonshot, Pump.fun, and dexs of Raydium and Meteora. Seamlessly buy, sell, and access real-time price data for any token using the Solana Gateway. Designed for developers, it&apos;s the ultimate API for building personalized or public tools in the memecoin space.
        </p>
        <p className="mt-2 text-muted-foreground max-w-3xl">
          Comprehensive API Solutions Our API integrates with Pump.fun and Moonshot to deliver precise and reliable price data. With the Solana Gateway, developers can easily create innovative tools, enabling limitless possibilities for trading and analysis.
        </p>
        <p className="mt-2 text-muted-foreground max-w-3xl">
          Want to see how the API works? Check out the Demo product - <a href="https://bullme.one/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">BullMe</a> powered by our API.
        </p>
      </section>

      <section id="demo" className="scroll-mt-20">
        <h2 className="text-2xl font-semibold">Demo</h2>
        <a
          href="https://bullme.one/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 transition-colors hover:border-primary/50 hover:bg-muted/30"
        >
          <ExternalLink className="h-4 w-4 text-primary" />
          <span className="font-medium">BullMe</span>
          <span className="text-sm text-muted-foreground">bullme.one</span>
        </a>
      </section>

      <section id="meme-api" className="scroll-mt-20">
        <h2 className="text-2xl font-semibold">Meme API</h2>
        <p className="mt-2 text-muted-foreground">
          <Link href="/docs/swap-api/v4" className="text-primary hover:underline">Swap API V4 reference</Link>
        </p>
      </section>

      <section id="contact" className="scroll-mt-20 pt-8 border-t border-border">
        <h2 className="text-2xl font-semibold">Contact our BD to whitelist using Meme API</h2>
        <div className="mt-4 flex flex-wrap gap-4">
          <a
            href="https://t.me/alexM_OO"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 transition-colors hover:border-primary/50 hover:bg-muted/30"
          >
            <MessageCircle className="h-4 w-4 text-primary" />
            <span className="font-medium">Telegram</span>
            <span className="text-sm text-muted-foreground">@alexM_OO</span>
          </a>
          <a
            href="https://t.me/GuyPolio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 transition-colors hover:border-primary/50 hover:bg-muted/30"
          >
            <MessageCircle className="h-4 w-4 text-primary" />
            <span className="font-medium">Telegram</span>
            <span className="text-sm text-muted-foreground">@GuyPolio</span>
          </a>
        </div>
      </section>
    </div>
  )
}
