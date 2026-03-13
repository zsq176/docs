"use client"

import * as React from "react"
import { CodeBlock } from "@/components/docs/code-block"
import { gaslessDemoCode } from "@/lib/gasless-demo-code"
import { ExternalLink } from "lucide-react"

export function GaslessSwapApiDemoCodeContent() {
  return (
    <>
      <section id="demo-code" className="scroll-mt-20">
        <p className="text-muted-foreground max-w-3xl mb-4">
          Front-end code example. Full repository:
        </p>
        <a
          href="https://github.com/openocean-finance/OpenOcean-API-Examples/tree/main/frontend"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:underline font-medium mb-6"
        >
          OpenOcean-API-Examples / frontend
          <ExternalLink className="h-4 w-4" />
        </a>
        <CodeBlock
          code={gaslessDemoCode}
          language="javascript"
          showLineNumbers
        />
      </section>
    </>
  )
}
