"use client"

import * as React from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { CodeBlock } from "@/components/docs/code-block"
import { Callout } from "@/components/docs/callout"
import { NextStepCard } from "@/components/docs/card-group"
import { Palette, Package, Sparkles } from "lucide-react"

export function WidgetGettingStartedContent() {
  return (
    <div className="space-y-12">
      <section>
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="outline">Widget</Badge>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Getting Started</h1>
      </section>

      <section className="scroll-mt-20">
        <p className="text-muted-foreground mb-6">
          Demo repository:{" "}
          <a
            href="https://github.com/openocean-finance/OpenOcean-Frontend-Examples/tree/main/Widget_V2-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            OpenOcean-Frontend-Examples / Widget_V2-demo
          </a>
        </p>
      </section>

      <section id="quick-install" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-6">Quick Install</h2>
        <p className="text-muted-foreground mb-6">
          There are three ways you can embed OpenOcean swap widget into your protocols/Apps.
        </p>

        <div id="iframe" className="scroll-mt-20 space-y-4 mb-10">
          <h3 className="text-xl font-semibold">Method #1 - Use &lt;iframe&gt; to inject the OpenOcean widget into your program.</h3>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Input &lt;iframe&gt; to your front-end code.</li>
            <li>Change the iframe src to &quot;<a href="https://widget.openocean.finance" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://widget.openocean.finance</a>&quot;</li>
            <li>Refresh the page and check whether the component is installed.</li>
          </ul>
          <CodeBlock
            code={`<iframe src="https://widget.openocean.finance"></iframe>`}
            language="html"
          />
          <Callout type="info" title="Recommendation">
            <p>We highly recommend using the custom mode to integrate wallets to make sure it works properly. <Link href="/docs/widget/other-reference" className="text-primary hover:underline">More Details</Link></p>
          </Callout>
        </div>

        <div id="sdk" className="scroll-mt-20 space-y-4 mb-10">
          <h3 className="text-xl font-semibold">Method #2 - Install the widget by using the OpenOcean SDK module.</h3>
          <p className="text-muted-foreground">
            You can check the detail in the SDK section.
          </p>
        </div>

        <div id="api" className="scroll-mt-20 space-y-4">
          <h3 className="text-xl font-semibold">Method #3 - Install the widget by using the OpenOcean API.</h3>
          <p className="text-muted-foreground">
            You can check the detail in the <Link href="/docs/swap-api" className="text-primary hover:underline">API section</Link>.
          </p>
        </div>
      </section>

      <section id="referral-fee" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-6">Referral Fee</h2>

        <div className="space-y-4 mb-6">
          <h3 className="text-xl font-semibold">Method #1</h3>
          <p className="text-muted-foreground">
            Add &quot;referral&quot; which is fee charger address as query param in &lt;iframe&gt; request link.
          </p>
          <p className="text-muted-foreground">For example:</p>
          <CodeBlock
            code={`https://widget.openocean.finance?referral=0x3487ef9f9b36547e43268b8f0e2349a226c70b53#/BSC/BNB/BUSD`}
            language="text"
          />
          <p className="text-muted-foreground">
            The default referrer fee is 0%. You could set up the referrer fee via the link{" "}
            <a href="https://widget.openocean.finance/theme" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">here</a>.
            The default fee share for OpenOcean is 20% from the set referrer fee. You may{" "}
            <a href="https://t.me/OpenOceanAPI" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">contact us</a>{" "}
            for any adjustments for the fee share %.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Method #2 - contact us</h3>
          <p className="text-muted-foreground">
            Feel free to reach out to our team on{" "}
            <a href="https://t.me/OpenOceanAPI" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Telegram</a>{" "}
            or{" "}
            <a href="https://discord.gg/openocean" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Discord</a>{" "}
            regarding the fee rate that you want to customize. In this method, the address from the above referral link will not be included.
          </p>
        </div>
      </section>

      <section className="scroll-mt-20 pt-8 border-t border-border">
        <h2 className="text-xl font-bold mb-6">Next Steps</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <NextStepCard
            title="Widget Overview"
            description="Features and integration options."
            href="/docs/widget"
            icon={<Package className="h-5 w-5" />}
          />
          <NextStepCard
            title="Customize Theme"
            description="Colors and styling."
            href="/docs/widget/theme"
            icon={<Palette className="h-5 w-5" />}
          />
          <NextStepCard
            title="Widget V2"
            description="Enhanced widget with more options."
            href="/docs/widget/v2"
            icon={<Sparkles className="h-5 w-5" />}
          />
        </div>
      </section>
    </div>
  )
}
