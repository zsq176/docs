"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { CodeBlock, InlineCode } from "@/components/docs/code-block"
import { Callout } from "@/components/docs/callout"
import { NextStepCard } from "@/components/docs/card-group"
import { FileCode, BookOpen, AlertCircle, Code2, ExternalLink } from "lucide-react"
import Link from "next/link"

const errorCodes = [
  { code: "400", name: "Bad Request", solution: "Check request parameters." },
  { code: "401", name: "Unauthorized", solution: "Use a valid API key (Pro users only)." },
  { code: "402", name: "Payment Required", solution: "Use a valid API key (Pro users only)." },
  { code: "403", name: "Forbidden", solution: "Contact us to whitelist your IP; you may have triggered security rules." },
  { code: "404", name: "Not Found", solution: "Verify the request URL and resource exist." },
  { code: "429", name: "Too Many Requests", solution: "Lower your request rate." },
  { code: "500", name: "Internal Server Error", solution: "Check your request and contact us if it persists." },
  { code: "502", name: "Bad Gateway", solution: "The proxy could not get a response; retry later." },
  { code: "503", name: "Service Unavailable", solution: "Server overload or maintenance." },
  { code: "504", name: "Gateway Timeout", solution: "Server timeout; retry with backoff." },
  { code: "509", name: "Concurrency Limit", solution: "Reduce concurrency." },
]

export function DeveloperResourcesContent() {
  return (
    <div className="space-y-12">
      <section>
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <FileCode className="h-4 w-4" />
            Developer Resources
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Developer Resources</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
          Error codes, glossary, and reference materials to help you integrate and troubleshoot OpenOcean APIs.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Link href="/docs/developer-resources/errors" className="block">
          <div className="group h-full rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
                <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              </div>
              <h2 className="text-xl font-semibold">Common Error Codes</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              HTTP status codes and API error responses with recommended handling.
            </p>
            <span className="text-sm font-medium text-primary group-hover:underline">View error reference →</span>
          </div>
        </Link>
        <Link href="/docs/developer-resources/glossary" className="block">
          <div className="group h-full rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-xl font-semibold">Developer references & glossary</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Definitions for Quote, Route, Slippage, DEX, Chain ID, and other terms.
            </p>
            <span className="text-sm font-medium text-primary group-hover:underline">View glossary →</span>
          </div>
        </Link>
      </section>

      <section id="common-error-code" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Common Error Codes</h2>
        <p className="text-muted-foreground mb-6">
          Standard HTTP and API error codes returned by OpenOcean services:
        </p>
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Error Code</th>
                <th className="px-4 py-3 text-left font-semibold">Solution</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {errorCodes.map((row) => (
                <tr key={row.code} className="hover:bg-muted/30 transition-colors">
                  <td className="px-4 py-3">
                    <Badge variant={row.code.startsWith("4") ? "outline" : "secondary"}>
                      {row.code}
                    </Badge>
                    <span className="ml-2 text-muted-foreground">{row.name}</span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{row.solution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="references" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">References</h2>
        <p className="text-muted-foreground mb-4">
          Useful modules for building with the API:
        </p>
        <CodeBlock
          code={`npm install bignumber.js
npm install web3`}
          language="bash"
          title="Recommended dependencies"
        />
        <p className="mt-4 text-sm text-muted-foreground">
          Use <InlineCode>web3</InlineCode> for Ethereum connectivity and <InlineCode>bignumber.js</InlineCode> for precision with token amounts.
        </p>
      </section>

      <section className="scroll-mt-20 pt-8 border-t border-border">
        <h2 className="text-xl font-bold mb-6">Next Steps</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <NextStepCard
            title="Common Error Code"
            description="Full error code reference and handling."
            href="/docs/developer-resources/errors"
            icon={<AlertCircle className="h-5 w-5" />}
          />
          <NextStepCard
            title="Developer references & glossary"
            description="Terms and definitions."
            href="/docs/developer-resources/glossary"
            icon={<BookOpen className="h-5 w-5" />}
          />
          <a
            href="https://open-api.openocean.finance/v4/swagger-ui.html"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="group h-full rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg flex flex-col">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Code2 className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    Swagger UI
                    <ExternalLink className="h-4 w-4 opacity-50" />
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">Interactive API reference.</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  )
}
