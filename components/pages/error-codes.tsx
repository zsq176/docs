"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { AlertCircle } from "lucide-react"

const errorCodes = [
  { code: "400", name: "Bad Request", solution: "Please double check the parameters in the request" },
  { code: "401, 402", name: "Unauthorized", solution: "Please use the correct API Key (Only for Pro User)" },
  { code: "403", name: "Forbidden", solution: "Please contact us to whitelist your IP, seems you have broken some of the security strategies" },
  { code: "404", name: "Not Found", solution: "Please double check whether the request URL exist." },
  { code: "429", name: "Too Many Requests", solution: "Please lower your request rate" },
  { code: "500", name: "Internal Server Error", solution: "Please double check your request and contact us" },
  { code: "502", name: "Bad Gateway", solution: "The proxy gateway server cannot receive the respond" },
  { code: "503", name: "Service Unavailable", solution: "Server is overload or maintenance" },
  { code: "504", name: "Gateway Timeout", solution: "Server timeout" },
  { code: "509", name: "Concurrency Limit", solution: "Please lower the concurrency" },
]

export function ErrorCodesContent() {
  return (
    <div className="space-y-12">
      <section>
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <AlertCircle className="h-4 w-4" />
            Common Error Code
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Common Error Code</h1>
      </section>

      <section>
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold w-[250px]">Error Code</th>
                <th className="px-4 py-3 text-left font-semibold">Solution</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {errorCodes.map((row) => (
                <tr key={row.code} className="hover:bg-muted/30 transition-colors">
                  <td className="px-4 py-3">
                    <Badge variant="secondary">{row.code}</Badge>
                    <span className="ml-2 text-muted-foreground">{row.name}</span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{row.solution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
