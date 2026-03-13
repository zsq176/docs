"use client"

import { motion } from "framer-motion"
import { CodeBlock } from "@/components/docs/code-block"
import { ProjectStructureTree } from "@/components/docs/project-structure-tree"
import { Bot } from "lucide-react"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const projectStructureCode = `openocean-skills/
├── skills/
│   ├── quote/              # Get a swap quote
│   │   └── SKILL.md
│   ├── swap-build/         # Build swap calldata (with confirmation)
│   │   └── SKILL.md
│   ├── swap-execute/       # Execute a swap via Foundry cast (with confirmation)
│   │   └── SKILL.md
│   ├── swap-execute-fast/  # Build and execute in one step (no confirmation)
│   │   ├── SKILL.md
│   │   └── scripts/
│   │       ├── fast-swap.sh      # Token resolution and route building
│   │       └── execute-swap.sh   # Calls fast-swap.sh and then broadcasts
│   └── error-handling/     # Troubleshooting and error codes
│       └── SKILL.md
├── references/             # Shared docs
│   ├── api-reference.md
│   └── token-registry.md
├── test/                   # Prompt test cases
│   └── agent-test-cases.md # English test prompts
└── README.md
`

export function AIAgentsContent() {
  return (
    <div className="space-y-12">
      <motion.section {...fadeIn} className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
          <Bot className="w-4 h-4" />
          AI Agents
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-balance">AI Agents</h1>
        <p className="text-muted-foreground max-w-3xl">
          <a
            href="https://github.com/openocean-finance/OpenOcean-skills"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            OpenOcean-skills (GitHub)
          </a>
        </p>
      </motion.section>

      <motion.section {...fadeIn} transition={{ delay: 0.05 }} id="introduction">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-muted-foreground max-w-3xl mb-4">
          OpenOcean Skills is an open-source plugin that brings the OpenOcean Aggregator API into AI coding assistants like Cursor, Claude Code and OpenClaw. Instead of calling APIs manually or writing integration code from scratch, developers can use natural language commands to get real-time swap quotes, build transaction calldata, and execute on-chain swaps — across 40+ chains including EVM networks and non-EVM chains like Solana and Sui.
        </p>
        <p className="text-muted-foreground max-w-3xl">
          Skills work with any tool that supports skill or plugin-style instructions. Quotes and transaction builds require no local setup. On-chain execution requires Foundry.
        </p>
      </motion.section>

      <hr className="border-border my-10" />

      <motion.section {...fadeIn} transition={{ delay: 0.1 }} id="overview">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-muted-foreground max-w-3xl">
          There are four skills, designed to be used from safest to fastest. quote and swap-build only need GET requests and work out of the box. swap-execute and swap-execute-fast require Foundry and wallet configuration for on-chain broadcasting.
        </p>
      </motion.section>

      <motion.section {...fadeIn} transition={{ delay: 0.15 }} id="project-structure">
        <h2 className="text-2xl font-semibold mb-4">Project Structure</h2>
        <p className="text-muted-foreground max-w-3xl mb-4">
          Skills live under <code className="rounded bg-muted px-1.5 py-0.5 text-sm">skills/</code>, while shared API docs and token data live under <code className="rounded bg-muted px-1.5 py-0.5 text-sm">references/</code>.
        </p>
        <ProjectStructureTree content={projectStructureCode} />
      </motion.section>

      <motion.section {...fadeIn} transition={{ delay: 0.2 }} id="installation">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <p className="text-muted-foreground max-w-3xl mb-4">
          This repo works with Cursor, Claude Code, OpenClaw, and other mainstream tools.
        </p>
        <p className="text-muted-foreground max-w-3xl">
          Download the repo, either as a ZIP archive or via <code className="rounded bg-muted px-1.5 py-0.5 text-sm">git clone</code>, and place it in your tool&apos;s skills directory.
        </p>
        <p className="text-muted-foreground max-w-3xl mt-4">
          After extraction, make sure the project root still contains the <code className="rounded bg-muted px-1.5 py-0.5 text-sm">references/</code> folder, since the skills read <code className="rounded bg-muted px-1.5 py-0.5 text-sm">token-registry.md</code> and <code className="rounded bg-muted px-1.5 py-0.5 text-sm">api-reference.md</code> from there.
        </p>
      </motion.section>

      <motion.section {...fadeIn} transition={{ delay: 0.25 }} id="prerequisites">
        <h2 className="text-2xl font-semibold mb-4">Prerequisites & Availability</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground max-w-3xl mb-4">
          <li><strong>Reference files</strong>: Skills read <code className="rounded bg-muted px-1.5 py-0.5 text-sm">references/token-registry.md</code> and <code className="rounded bg-muted px-1.5 py-0.5 text-sm">references/api-reference.md</code> from the workspace root. Ensure these files are present.</li>
          <li><strong>Quote / Build</strong>: <code className="rounded bg-muted px-1.5 py-0.5 text-sm">quote</code> and <code className="rounded bg-muted px-1.5 py-0.5 text-sm">swap-build</code> only require the ability to send GET requests, such as <code className="rounded bg-muted px-1.5 py-0.5 text-sm">mcp_web_fetch</code> or <code className="rounded bg-muted px-1.5 py-0.5 text-sm">curl</code>; no local installation is needed.</li>
          <li><strong>Execute</strong>: <code className="rounded bg-muted px-1.5 py-0.5 text-sm">swap-execute</code> and <code className="rounded bg-muted px-1.5 py-0.5 text-sm">swap-execute-fast</code> require <a href="https://getfoundry.sh/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Foundry</a> (<code className="rounded bg-muted px-1.5 py-0.5 text-sm">cast</code>) plus RPC and wallet configuration.</li>
        </ul>
        <p className="text-muted-foreground max-w-3xl mb-2">If something goes wrong, check:</p>
        <ol className="list-decimal list-inside space-y-1 text-muted-foreground max-w-3xl">
          <li>Correct workspace with <code className="rounded bg-muted px-1.5 py-0.5 text-sm">references/</code>;</li>
          <li>API requests use integer-string <code className="rounded bg-muted px-1.5 py-0.5 text-sm">amountDecimals</code> (no decimal point);</li>
          <li>User-facing <code className="rounded bg-muted px-1.5 py-0.5 text-sm">slippage 100</code> means 100 bps = 1%, while the API parameter uses percent (<code className="rounded bg-muted px-1.5 py-0.5 text-sm">1</code> = 1%);</li>
          <li>Foundry is installed and <code className="rounded bg-muted px-1.5 py-0.5 text-sm">ETH_RPC_URL</code> plus any required wallet settings are configured for on-chain execution.</li>
        </ol>
      </motion.section>

      <motion.section {...fadeIn} transition={{ delay: 0.3 }} id="skills-overview">
        <h2 className="text-2xl font-semibold mb-6">Skills Overview</h2>

        <h3 className="text-xl font-semibold mb-3">quote</h3>
        <p className="text-muted-foreground max-w-3xl mb-4">
          Get the best swap route and price for a token pair.
        </p>
        <CodeBlock
          code={`/quote 1 ETH to USDC on ethereum

/quote 100 USDC to WBTC on arbitrum

/quote 0.5 WBTC to DAI on polygon`}
          language="text"
          className="mb-4"
        />
        <p className="text-muted-foreground max-w-3xl mb-8">
          Returns: expected output amount, USD value, exchange rate, estimated gas, and route path (DEXes used).
        </p>

        <h3 className="text-xl font-semibold mb-3">swap-build</h3>
        <p className="text-muted-foreground max-w-3xl mb-4">
          Build a full swap transaction, including the route and encoded calldata. Requires a sender address. Shows quote details such as rate, minimum output, and gas, then asks for confirmation before building.
        </p>
        <CodeBlock
          code={`/swap-build 100 USDC to ETH on arbitrum from 0xYourAddress

/swap-build 1 ETH to USDC on ethereum from 0xYourAddress slippage 100`}
          language="text"
          className="mb-4"
        />
        <p className="text-muted-foreground max-w-3xl mb-8">
          Returns: encoded calldata, router address, transaction value, gas estimate, minimum output after slippage. <strong>Does not</strong> submit on-chain.
        </p>

        <h3 className="text-xl font-semibold mb-3">swap-execute</h3>
        <p className="text-muted-foreground max-w-3xl mb-4">
          Execute a previously built swap on-chain using Foundry&apos;s <code className="rounded bg-muted px-1.5 py-0.5 text-sm">cast send</code>. Consumes <code className="rounded bg-muted px-1.5 py-0.5 text-sm">swap-build</code> output and broadcasts it.
        </p>
        <CodeBlock code="/swap-execute" language="text" className="mb-4" />
        <p className="text-muted-foreground max-w-3xl mb-8">
          Requires Foundry (<code className="rounded bg-muted px-1.5 py-0.5 text-sm">cast</code>). Supports multiple wallet options, including environment variables, Ledger, Trezor, or a keystore. Asks for confirmation before execution because the transaction is irreversible.
        </p>

        <h3 className="text-xl font-semibold mb-3">swap-execute-fast</h3>
        <p className="text-muted-foreground max-w-3xl mb-4">
          Build and execute a swap in one step, with no confirmation prompt.
        </p>
        <CodeBlock
          code={`/swap-execute-fast 1 ETH to USDC on base from 0xYourAddress

/swap-execute-fast 100 USDC to ETH on arbitrum from 0xYourAddress keystore mykey

/swap-execute-fast 0.5 WBTC to DAI on polygon from 0xYourAddress ledger`}
          language="text"
          className="mb-4"
        />
        <p className="text-muted-foreground max-w-3xl">
          Requires <code className="rounded bg-muted px-1.5 py-0.5 text-sm">cast</code>, <code className="rounded bg-muted px-1.5 py-0.5 text-sm">curl</code>, and <code className="rounded bg-muted px-1.5 py-0.5 text-sm">jq</code>. <strong>Extremely dangerous</strong>: builds and executes immediately with no confirmation. Use only when you fully trust the parameters and understand the risks.
        </p>
      </motion.section>
    </div>
  )
}
