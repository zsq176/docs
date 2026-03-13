"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Globe, Search } from "lucide-react"
import Link from "next/link"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

// Swap API supported chains — from docs/supported-chains.md (EVM + Non-EVM)
const swapApiChains = [
  { name: "Ethereum", chainCode: "eth", chainId: "1", nativeToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", swapApi: true, gaslessApi: false },
  { name: "BNB Chain", chainCode: "bsc", chainId: "56", nativeToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", swapApi: true, gaslessApi: true },
  { name: "Base", chainCode: "base", chainId: "8453", nativeToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", swapApi: true, gaslessApi: true },
  { name: "Polygon", chainCode: "polygon", chainId: "137", nativeToken: "0x0000000000000000000000000000000000001010", swapApi: true, gaslessApi: true },
  { name: "Arbitrum", chainCode: "arbitrum", chainId: "42161", nativeToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", swapApi: true, gaslessApi: true },
  { name: "Linea", chainCode: "linea", chainId: "59144", nativeToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", swapApi: true, gaslessApi: true },
  { name: "HyperEVM", chainCode: "hyperevm", chainId: "999", nativeToken: "0x0000000000000000000000000000000000000000", swapApi: true, gaslessApi: true },
  { name: "Avalanche", chainCode: "avax", chainId: "43114", nativeToken: "0x0000000000000000000000000000000000000000", swapApi: true, gaslessApi: true },
  { name: "Optimism", chainCode: "optimism", chainId: "10", nativeToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", swapApi: true, gaslessApi: true },
  { name: "Sonic", chainCode: "sonic", chainId: "146", nativeToken: "0x0000000000000000000000000000000000000000", swapApi: true, gaslessApi: true },
  { name: "UniChain", chainCode: "uni", chainId: "130", nativeToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", swapApi: true, gaslessApi: true },
  { name: "Berachain", chainCode: "bera", chainId: "80094", nativeToken: "0x0000000000000000000000000000000000000000", swapApi: true, gaslessApi: true },
  { name: "Sei", chainCode: "sei", chainId: "1329", nativeToken: "0x0000000000000000000000000000000000000000", swapApi: true, gaslessApi: true },
  { name: "Plasma", chainCode: "plasma", chainId: "9745", nativeToken: "0x0000000000000000000000000000000000000000", swapApi: true, gaslessApi: true },
  { name: "Monad", chainCode: "monad", chainId: "143", nativeToken: "0x0000000000000000000000000000000000000000", swapApi: true, gaslessApi: false },
  { name: "Injective", chainCode: "injective", chainId: "1776", nativeToken: "0x0000000000000000000000000000000000000000", swapApi: true, gaslessApi: false },
  { name: "zkSync Era", chainCode: "zksync", chainId: "324", nativeToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", swapApi: true, gaslessApi: false },
  { name: "Aurora", chainCode: "aurora", chainId: "1313161554", nativeToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", swapApi: true, gaslessApi: false },
  { name: "Cronos", chainCode: "cronos", chainId: "25", nativeToken: "0x0000000000000000000000000000000000000000", swapApi: true, gaslessApi: false },
  { name: "Harmony", chainCode: "harmony", chainId: "1666600000", nativeToken: "0x0000000000000000000000000000000000000000", swapApi: true, gaslessApi: false },
  { name: "Kava", chainCode: "kava", chainId: "2222", nativeToken: "0x0000000000000000000000000000000000000000", swapApi: true, gaslessApi: false },
  { name: "Metis", chainCode: "metis", chainId: "1088", nativeToken: "0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000", swapApi: true, gaslessApi: false },
  { name: "Celo", chainCode: "celo", chainId: "42220", nativeToken: "0x471EcE3750Da237f93B8E339c536989b8978a438", swapApi: true, gaslessApi: false },
  { name: "Telos", chainCode: "telos", chainId: "40", nativeToken: "0x0000000000000000000000000000000000000000", swapApi: true, gaslessApi: false },
  { name: "Polygon zkEVM", chainCode: "polygon_zkevm", chainId: "1101", nativeToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", swapApi: true, gaslessApi: false },
  { name: "Gnosis", chainCode: "xdai", chainId: "100", nativeToken: "0x0000000000000000000000000000000000000000", swapApi: true, gaslessApi: false },
  { name: "opBNB", chainCode: "opbnb", chainId: "204", nativeToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", swapApi: true, gaslessApi: false },
  { name: "Mantle", chainCode: "mantle", chainId: "5000", nativeToken: "0x0000000000000000000000000000000000000000", swapApi: true, gaslessApi: false },
  { name: "Manta", chainCode: "manta", chainId: "169", nativeToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", swapApi: true, gaslessApi: false },
  { name: "Scroll", chainCode: "scroll", chainId: "534352", nativeToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", swapApi: true, gaslessApi: false },
  { name: "Blast", chainCode: "blast", chainId: "81457", nativeToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", swapApi: true, gaslessApi: false },
  { name: "Mode", chainCode: "mode", chainId: "34443", nativeToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", swapApi: true, gaslessApi: false },
  { name: "Rootstock", chainCode: "rootstock", chainId: "30", nativeToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", swapApi: true, gaslessApi: false },
  { name: "Gravity", chainCode: "gravity", chainId: "1625", nativeToken: "0x0000000000000000000000000000000000000000", swapApi: true, gaslessApi: false },
  { name: "Apechain", chainCode: "ape", chainId: "33139", nativeToken: "0x0000000000000000000000000000000000000000", swapApi: true, gaslessApi: false },
  { name: "Flare", chainCode: "flare", chainId: "14", nativeToken: "0x0000000000000000000000000000000000000000", swapApi: true, gaslessApi: false },
  { name: "Swell", chainCode: "swell", chainId: "1923", nativeToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", swapApi: true, gaslessApi: false },
  { name: "Plume", chainCode: "plume", chainId: "98866", nativeToken: "0x0000000000000000000000000000000000000000", swapApi: true, gaslessApi: false },
  { name: "TAC", chainCode: "tac", chainId: "239", nativeToken: "0x0000000000000000000000000000000000000000", swapApi: true, gaslessApi: false },
  { name: "Moonriver", chainCode: "moonriver", chainId: "1285", nativeToken: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", swapApi: true, gaslessApi: false },
  { name: "Fantom", chainCode: "fantom", chainId: "250", nativeToken: "0x0000000000000000000000000000000000000000", swapApi: true, gaslessApi: false },
  // Non-EVM
  { name: "Solana", chainCode: "solana", chainId: "solana", nativeToken: "So11111111111111111111111111111111111111112", swapApi: true, gaslessApi: false },
  { name: "Sui", chainCode: "sui", chainId: "sui", nativeToken: "", swapApi: true, gaslessApi: false },
]

// DCA API supported chains — from docs/supported-chains.md
const dcaApiChains = [
  { name: "Ethereum", chainId: "1" },
  { name: "BNB Chain", chainId: "56" },
  { name: "Arbitrum", chainId: "42161" },
  { name: "Berachain", chainId: "80094" },
  { name: "Base", chainId: "8453" },
  { name: "Sonic", chainId: "146" },
  { name: "HyperEVM", chainId: "999" },
  { name: "Unichain", chainId: "130" },
  { name: "Optimism", chainId: "10" },
  { name: "Polygon", chainId: "137" },
  { name: "Sei", chainId: "1329" },
  { name: "Avalanche", chainId: "43114" },
  { name: "Plasma", chainId: "9745" },
  { name: "Monad", chainId: "143" },
]

// Limit Order API supported chains — from docs/supported-chains.md (Contract Address = explorer link)
const limitOrderApiChains = [
  { name: "Ethereum", chainId: "1", contractUrl: "https://etherscan.io/address/0xcC8d695603ce0b43D352891892FcC716c6a7C9f4", contractAddress: "0xcC8d695603ce0b43D352891892FcC716c6a7C9f4" },
  { name: "BNB Chain", chainId: "56", contractUrl: "https://bscscan.com/address/0xA8A0213bb2ce671E457Ec14D08EB9d40E6DA8e2d", contractAddress: "0xA8A0213bb2ce671E457Ec14D08EB9d40E6DA8e2d" },
  { name: "Arbitrum", chainId: "42161", contractUrl: "https://arbiscan.io/address/0x23c78b3d85b45bfa6dc8e09b517ba2d9b0ecca8c", contractAddress: "0x23c78b3d85b45bfa6dc8e09b517ba2d9b0ecca8c" },
  { name: "Berachain", chainId: "80094", contractUrl: "https://berascan.com/address/0x8d2b7e5501eb6d92f8e349f2febe785dd070be74", contractAddress: "0x8d2b7e5501eb6d92f8e349f2febe785dd070be74" },
  { name: "Base", chainId: "8453", contractUrl: "https://basescan.org/address/0xb5486f71c902fe0844bb07221fa8f47834d90b1b", contractAddress: "0xb5486f71c902fe0844bb07221fa8f47834d90b1b" },
  { name: "Sonic", chainId: "146", contractUrl: "https://sonicscan.org/address/0xb45373129b4220160b92bd2320869f44d48ecd01", contractAddress: "0xb45373129b4220160b92bd2320869f44d48ecd01" },
  { name: "HyperEVM", chainId: "999", contractUrl: "https://purrsec.com/address/0x4E6b18217AC75A779262c20B3Cc07050cBe7282B", contractAddress: "0x4E6b18217AC75A779262c20B3Cc07050cBe7282B" },
  { name: "Optimism", chainId: "10", contractUrl: "https://optimistic.etherscan.io/address/0xc0A62DDCd284020dC883C642A3Ed5D2A1770eb91", contractAddress: "0xc0A62DDCd284020dC883C642A3Ed5D2A1770eb91" },
  { name: "Polygon", chainId: "137", contractUrl: "https://polygonscan.com/address/0xFA9B584Bc9543B66BeFdc41fb1DA8636edD7a697", contractAddress: "0xFA9B584Bc9543B66BeFdc41fb1DA8636edD7a697" },
  { name: "Sei", chainId: "1329", contractUrl: "https://seiscan.io/address/0xfE9a934A8607EF020aDf22D4431d6cE6005Aa4d3", contractAddress: "0xfE9a934A8607EF020aDf22D4431d6cE6005Aa4d3" },
  { name: "Avalanche", chainId: "43114", contractUrl: "https://snowtrace.io/address/0x99b3488Ee3432bB60256140b4BD2488E3b6A705f", contractAddress: "0x99b3488Ee3432bB60256140b4BD2488E3b6A705f" },
  { name: "Plasma", chainId: "9745", contractUrl: "https://plasmascan.to/address/0x9F92b2706c643ae6FDF2e9ca472f0E48497385f1", contractAddress: "0x9F92b2706c643ae6FDF2e9ca472f0E48497385f1" },
  { name: "Monad", chainId: "143", contractUrl: "https://monadvision.com/address/0x8D2B7e5501Eb6D92F8e349f2FEbe785DD070bE74", contractAddress: "0x8D2B7e5501Eb6D92F8e349f2FEbe785DD070bE74" },
]

const tableWrapper = "overflow-x-auto rounded-xl border border-border"
const tableClass = "w-full border-collapse"
const thClass = "text-left py-3 px-4 font-medium border-b border-border bg-muted/30"
const tdClass = "py-3 px-4 border-b border-border"
const trClass = "hover:bg-muted/30 transition-colors"

export function SupportedChainsContent() {
  const [search, setSearch] = useState("")

  const filteredChainIdRef = swapApiChains.filter(
    chain =>
      chain.name.toLowerCase().includes(search.toLowerCase()) ||
      chain.chainCode.toLowerCase().includes(search.toLowerCase()) ||
      String(chain.chainId).toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <motion.div {...fadeIn} className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
          <Globe className="w-4 h-4" />
          Supported Chains
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-balance">
          Supported Networks
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          OpenOcean supports 40+ chains for Swap API, Gasless API, DCA API, and Limit Order API.
          Use the tables below for chain codes and IDs.
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-6 rounded-xl border bg-card text-center">
          <div className="text-3xl font-bold gradient-text">40+</div>
          <div className="text-sm text-muted-foreground mt-1">Networks</div>
        </div>
        <div className="p-6 rounded-xl border bg-card text-center">
          <div className="text-3xl font-bold gradient-text">500+</div>
          <div className="text-sm text-muted-foreground mt-1">DEXs</div>
        </div>
        <div className="p-6 rounded-xl border bg-card text-center">
          <div className="text-3xl font-bold gradient-text">100K+</div>
          <div className="text-sm text-muted-foreground mt-1">Tokens</div>
        </div>
        <div className="p-6 rounded-xl border bg-card text-center">
          <div className="text-3xl font-bold gradient-text">99.9%</div>
          <div className="text-sm text-muted-foreground mt-1">Uptime</div>
        </div>
      </motion.div>

      {/* Search — filters Chain ID Reference */}
      <motion.div {...fadeIn} transition={{ delay: 0.15 }} id="overview" className="space-y-4">
        <h2 className="text-2xl font-semibold">Search</h2>
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search by network or chain code..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
      </motion.div>

      {/* Swap API supported chains */}
      <motion.section {...fadeIn} transition={{ delay: 0.2 }} id="swap-api-chains" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold">Swap API supported chains</h2>
        <p className="text-muted-foreground">
          Swap API is supported on all chains below. Gasless API is available only on specific chains, as indicated in the table.
        </p>
        <p className="text-sm text-muted-foreground">
          Non-EVM chains (Solana, Sui) are available only to whitelisted users with an authorized API key. To get whitelisted, please register to submit the{" "}
          <a href="https://openocean.larksuite.com/share/base/form/shrusY4ukLSoP6htyoprXgZiiQc" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">form</a>.
          For custom chain support, reach out to us via{" "}
          <a href="https://discord.gg/cxK6CCYcGp" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Discord</a>
          {" or "}
          <a href="https://t.me/OpenOceanAPI" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Telegram</a>.
        </p>
        <div className={tableWrapper}>
          <table className={tableClass}>
            <thead>
              <tr>
                <th className={thClass}>Chain Name</th>
                <th className={thClass}>Chain Code</th>
                <th className={thClass}>Chain ID</th>
                <th className={thClass}>Native Token Address</th>
                <th className={thClass}>Swap API</th>
                <th className={thClass}>Gasless API</th>
              </tr>
            </thead>
            <tbody>
              {swapApiChains.map((row) => (
                <tr key={`${row.chainCode}-${row.chainId}`} className={trClass}>
                  <td className={tdClass}>{row.name}</td>
                  <td className={tdClass}><code className="text-sm bg-muted px-2 py-0.5 rounded">{row.chainCode}</code></td>
                  <td className={tdClass}><code className="text-sm bg-muted px-2 py-0.5 rounded">{row.chainId}</code></td>
                  <td className={tdClass}><code className="text-xs bg-muted px-2 py-0.5 rounded break-all">{row.nativeToken || "—"}</code></td>
                  <td className={tdClass}>{row.swapApi ? "✓" : "—"}</td>
                  <td className={tdClass}>{row.gaslessApi ? "✓" : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* DCA API supported chains */}
      <motion.section {...fadeIn} transition={{ delay: 0.25 }} id="dca-api-chains" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold">DCA API supported chains</h2>
        <p className="text-muted-foreground">
          DCA API is available on the following chains. Use the chain ID in API requests.
        </p>
        <div className={tableWrapper}>
          <table className={tableClass}>
            <thead>
              <tr>
                <th className={thClass}>Chain Name</th>
                <th className={thClass}>Chain ID</th>
              </tr>
            </thead>
            <tbody>
              {dcaApiChains.map((row) => (
                <tr key={row.chainId} className={trClass}>
                  <td className={tdClass}>{row.name}</td>
                  <td className={tdClass}><code className="text-sm bg-muted px-2 py-0.5 rounded">{row.chainId}</code></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* Limit Order API supported chains */}
      <motion.section {...fadeIn} transition={{ delay: 0.3 }} id="limit-order-api-chains" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold">Limit Order API supported chains</h2>
        <p className="text-muted-foreground">
          Limit Order contracts are deployed on the following chains. Contract addresses link to the block explorer.
        </p>
        <div className={tableWrapper}>
          <table className={tableClass}>
            <thead>
              <tr>
                <th className={thClass}>Chain Name</th>
                <th className={thClass}>Chain ID</th>
                <th className={thClass}>Contract Address</th>
              </tr>
            </thead>
            <tbody>
              {limitOrderApiChains.map((row) => (
                <tr key={row.chainId} className={trClass}>
                  <td className={tdClass}>{row.name}</td>
                  <td className={tdClass}><code className="text-sm bg-muted px-2 py-0.5 rounded">{row.chainId}</code></td>
                  <td className={tdClass}>
                    <Link href={row.contractUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm font-mono break-all">
                      {row.contractAddress}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* Chain ID Reference */}
      <motion.section {...fadeIn} transition={{ delay: 0.4 }} id="chain-ids" className="space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-semibold">Chain ID Reference</h2>
        <p className="text-muted-foreground">
          Use the correct chain ID or chain code when calling the API. You can search above to filter this list.
        </p>
        <div className={tableWrapper}>
          <table className={tableClass}>
            <thead>
              <tr>
                <th className={thClass}>Network</th>
                <th className={thClass}>Chain ID</th>
                <th className={thClass}>Chain Code</th>
                <th className={thClass}>Type</th>
              </tr>
            </thead>
            <tbody>
              {filteredChainIdRef.map((row) => (
                <tr key={`${row.chainCode}-${row.chainId}`} className={trClass}>
                  <td className={tdClass}>{row.name}</td>
                  <td className={tdClass}><code className="text-sm bg-muted px-2 py-0.5 rounded">{row.chainId}</code></td>
                  <td className={tdClass}><code className="text-sm bg-muted px-2 py-0.5 rounded">{row.chainCode}</code></td>
                  <td className={tdClass}>
                    <Badge variant={row.chainId === "solana" || row.chainId === "sui" ? "secondary" : "default"}>
                      {row.chainId === "solana" || row.chainId === "sui" ? "Non-EVM" : "EVM"}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>
    </div>
  )
}
