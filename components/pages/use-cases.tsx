"use client"

import { motion } from "framer-motion"
import { Callout } from "@/components/docs/callout"
import { Lightbulb } from "lucide-react"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

export function UseCasesContent() {
  return (
    <div className="space-y-12">
      <motion.section {...fadeIn} className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
          <Lightbulb className="w-4 h-4" />
          Use Cases
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-balance">
          Use Cases
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          OpenOcean&apos;s APIs - including Swap, DCA, Limit Order and ZAP, can power a wide range of Web3 applications. With a simple integration, you can plug directly into deep aggregated liquidity across 40+ chains, incl. EVM, such as Ethereum, BNB Chain, Arbitrum, HyperEVM, Plasma, Monad and Layer2s - Base, UniChain, and Non-EVM like Solana, delivering the best rates with minimal slippage.
        </p>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          These APIs enable seamless any-to-any tokens swaps, automated DCA strategies, and precise limit orders, helping developers build efficient and user-friendly trading experiences. Applications can also monetize trades by setting custom fees through all supported API.
        </p>
      </motion.section>

      <motion.section {...fadeIn} transition={{ delay: 0.1 }} id="openocean-aggregator-swap-api" className="scroll-mt-20 space-y-6">
        <h2 className="text-2xl font-semibold">OpenOcean Aggregator Swap API</h2>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          OpenOcean&apos;s multi-chain DEX aggregator API allows developers to build and scale multiple DeFi verticals at the same time. The API toolkit provides builders with the blueprints to build complex composable workflows with ease.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Wallets:</h3>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              OpenOcean enables wallets to incorporate built-in swap functionalities for any-to-any tokens at the best swap rates with access to the deepest liquidity across 40+ chains, incl. Solana.
            </p>
            <Callout type="info" title="">
              <p className="italic">Example: MetaMask, Rabby Wallet, Block Wallet and more</p>
            </Callout>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">DEXs, Meta-Aggregators, and Launchpads:</h3>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              These platforms require smarter routing to optimize liquidity and pricing. OpenOcean provides advanced in-house routing to improve token pathing and overall best rate for any-to-any token execution efficiency.
            </p>
            <Callout type="info" title="">
              <p className="italic">Example: Equalizer, Camelot, Hybra, Hydrex, and more</p>
            </Callout>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Cross-Chain Swaps and Bridges:</h3>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              OpenOcean powers cross-chain swap and bridge protocols with best-rate asset execution across the widest chain coverage, including EVMs and Solana, supporting both pre-bridge and post-bridge swap stages.
            </p>
            <Callout type="info" title="">
              <p className="italic">Example: deBridge, Li.Fi, Relay, Mayan, Symbiosis, and more</p>
            </Callout>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">DeFi Protocols:</h3>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              OpenOcean Aggregator Swap API supports DeFi protocols, such as lending, staking, and yield farming protocols with instant best price swap functionality to enhance collateral swap, anyToken minting, rebalancing, leveraged looping, liquidations and much more.
            </p>
            <Callout type="info" title="">
              <p className="italic">Example: Euler Finance, VFAT, Kamino and more</p>
            </Callout>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">DeFi Dashboard:</h3>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              As dashboards deliver real-time token and market insights, users tend to make instant moves. OpenOcean&apos;s broad chain coverage allows these platforms to offer real-time swaps, enabling immediate execution for their users.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Marketplaces:</h3>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              Marketplaces, including NFT platforms, prediction markets, gaming, and tokenized real-world assets (RWA) platforms - often require users to purchase assets using specific tokens. With OpenOcean, marketplaces can enable instant any-to-any swaps so buyers can pay with any token across multiple chains and seamlessly convert into the required asset.
            </p>
            <Callout type="info" title="">
              <p className="italic">Example: Polymarket and more</p>
            </Callout>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Developer Infrastructure Platforms:</h3>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              RPC providers, API marketplaces, and developer platforms can integrate OpenOcean Aggregator APIs to provide direct multi-chain swap access inside their ecosystems, exposing the functionality as a programmable service that allows applications, automation scripts, and AI agents to fetch swap quotes or build transactions without directly integrating the aggregator.
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mt-2">
              Some platforms support metered API access through the x402 payment standard, enabling OpenOcean endpoints to be accessed through proxy layers that automatically handle API payments and request execution.
            </p>
            <Callout type="info" title="">
              <p className="italic">Example: QuickNode, RelAI and more</p>
            </Callout>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">AI Agents:</h3>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              AI agents are autonomous on-chain programs designed to automate and simplify DeFi interactions. With OpenOcean integrated, these agents can support their users to execute smart trading strategies in real time with fast response times and the best prices.
            </p>
            <Callout type="info" title="">
              <p className="italic">Example: HeyAnon and more</p>
            </Callout>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Arbitrage/Market Making:</h3>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              Arbitrage and market-making strategies rely on capturing price differences across DEXs or chains with fast, reliable execution. With integrated deep liquidity across 40+ chains, OpenOcean&apos;s Aggregator Swap API provides best-rate execution, enabling bots to capture spreads and maximize revenue.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeIn} transition={{ delay: 0.2 }} id="dca-api" className="scroll-mt-20 space-y-4 pt-8 border-t border-border">
        <h2 className="text-2xl font-semibold">DCA API</h2>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          OpenOcean&apos;s DCA (Dollar Cost Averaging) API automates this process with gasless, non-custodial execution, ensuring optimal prices at every preset interval. It is widely adopted by protocols, such as Dexs, for recurring accumulation and token buyback strategies.
        </p>
        <p className="text-muted-foreground">
          <strong>Examples:</strong> Alienbase, HyperSwap, Upheaval and more
        </p>
      </motion.section>

      <motion.section {...fadeIn} transition={{ delay: 0.3 }} id="limit-order-api" className="scroll-mt-20 space-y-4 pt-8 border-t border-border">
        <h2 className="text-2xl font-semibold">Limit Order API</h2>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          OpenOcean&apos;s Limit Order API is also a gasless, non-custodial solution built on top of OpenOcean&apos;s Aggregation Swap API. It lets users set target execution prices and settles trades automatically on-chain when market conditions match - offering a precise, flexible, and advanced trading tool for dApps.
        </p>
        <p className="text-muted-foreground">
          <strong>Examples:</strong> Hybra, Upheaval, HyperSwap and more
        </p>
      </motion.section>

      <motion.section {...fadeIn} transition={{ delay: 0.4 }} id="zap-api" className="scroll-mt-20 space-y-4 pt-8 border-t border-border">
        <h2 className="text-2xl font-semibold">ZAP API</h2>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          OpenOcean Zap API simplifies the process of adding and removing liquidity on Dexs. It enables effortless liquidity provision into LP using any tokens, minimizing price impact through optimized routing. Plus, for staking protocols and stablecoin minters this API allows staking any token into vaults with a single click, supporting single and dual zap-in/out to streamline both deposit and withdrawal process.
        </p>
        <p className="text-muted-foreground">
          <strong>Examples:</strong> gLiquid and more
        </p>
      </motion.section>
    </div>
  )
}
