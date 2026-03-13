"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const tableWrapper = "overflow-x-auto rounded-xl border border-border"
const tableClass = "w-full border-collapse"
const thClass = "text-left py-3 px-4 font-medium border-b border-border bg-muted/30"
const tdClass = "py-3 px-4 border-b border-border"
const trClass = "hover:bg-muted/30 transition-colors"

// OpenOcean contract addresses from developer/apis/swap-api/contracts-of-chains.md
const evmChains = [
  { name: "Ethereum", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractUrl: "https://etherscan.io/address/0x6352a56caadc4f1e25cd6c75970fa768a3304e64" },
  { name: "BNB Chain", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractUrl: "https://bscscan.com/address/0x6352a56caadc4f1e25cd6c75970fa768a3304e64" },
  { name: "Base", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractUrl: "https://basescan.org/address/0x6352a56caadc4f1e25cd6c75970fa768a3304e64" },
  { name: "Polygon", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractUrl: "https://polygonscan.com/address/0x6352a56caadc4f1e25cd6c75970fa768a3304e64" },
  { name: "Avalanche", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractUrl: "https://snowtrace.io/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Sonic", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractUrl: "https://sonicscan.org/address/0x6352a56caadc4f1e25cd6c75970fa768a3304e64" },
  { name: "Arbitrum", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractUrl: "https://arbiscan.io/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Optimism", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractUrl: "https://optimistic.etherscan.io/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Berachain", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractUrl: "https://berascan.com/address/0x6352a56caadc4f1e25cd6c75970fa768a3304e64" },
  { name: "zkSync Era", contractAddress: "0x36A1aCbbCAfca2468b85011DDD16E7Cb4d673230", contractUrl: "https://explorer.zksync.io/address/0x36A1aCbbCAfca2468b85011DDD16E7Cb4d673230" },
  { name: "HyperEVM", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractUrl: "https://purrsec.com/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64/transactions" },
  { name: "Plasma", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractUrl: "https://plasmascan.to/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Monad", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractUrl: "https://monadvision.com/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Injective", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractUrl: "https://injective.cloud.blockscout.com/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "UniChain", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractUrl: "https://uniscan.xyz/address/0x6352a56caadc4f1e25cd6c75970fa768a3304e64" },
  { name: "opBNB", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractUrl: "https://opbnbscan.com/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Linea", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractUrl: "https://explorer.linea.build/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Mantle", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractUrl: "https://explorer.mantle.xyz/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Manta", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractUrl: "https://pacific-explorer.manta.network/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Telos", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractUrl: "https://www.teloscan.io/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Scroll", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractUrl: "https://scrollscan.com/address/0x6352a56caadc4f1e25cd6c75970fa768a3304e64" },
  { name: "Gnosis", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractUrl: "https://blockscout.com/xdai/mainnet/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64/transactions" },
  { name: "Cronos", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractUrl: "https://cronos.org/explorer/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Harmony", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractUrl: "https://explorer.harmony.one/address/0x6352a56caadc4f1e25cd6c75970fa768a3304e64" },
  { name: "Blast", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractUrl: "https://blastscan.io/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Mode", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractUrl: "https://explorer.mode.network/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Rootstock (RSK)", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractUrl: "https://explorer.rootstock.io/address/0x6352a56caadc4f1e25cd6c75970fa768a3304e64" },
  { name: "Sei", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractUrl: "https://seiscan.io/address/0x6352a56caadc4f1e25cd6c75970fa768a3304e64" },
  { name: "Gravity", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractUrl: "https://explorer.gravity.xyz/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Kava", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractUrl: "https://www.mintscan.io/kava/evm/contract/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Metis", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractUrl: "https://andromeda-explorer.metis.io/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Celo", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractUrl: "https://explorer.celo.org/mainnet/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Polygon zkEVM", contractAddress: "0x6dd434082EAB5Cd134B33719ec1FF05fE985B97b", contractUrl: "https://zkevm.polygonscan.com/address/0x6dd434082EAB5Cd134B33719ec1FF05fE985B97b" },
  { name: "Moonriver", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractUrl: "https://moonriver.moonscan.io/address/0x6352a56caadc4f1e25cd6c75970fa768a3304e64" },
  { name: "Aurora", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractUrl: "https://aurorascan.dev/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "APE", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractUrl: "https://apescan.io/address/0x6352a56caadc4f1e25cd6c75970fa768a3304e64" },
  { name: "Flare", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractUrl: "https://flare-explorer.flare.network/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "SwellChain", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractUrl: "https://swellchainscan.io/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Plume", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractUrl: "https://explorer.plume.org/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "TAC Chain", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractUrl: "https://plasmascan.to/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Fantom", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractUrl: "https://explorer.fantom.network/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
]

const nonEvmChains = [
  { name: "Sui", contractAddress: "0x50e9e91fa4e5524fd0dafc6aa4a4fb1c3494c326384a278fdd282faffe5f4492", contractUrl: "https://suiscan.xyz/mainnet/object/0x50e9e91fa4e5524fd0dafc6aa4a4fb1c3494c326384a278fdd282faffe5f4492/tx-blocks" },
]

export function ContractsContent() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Contracts of Chains</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
          OpenOcean&apos;s current contract addresses across our supported chains.
        </p>
      </section>

      <section id="evm-chains" className="scroll-mt-20">
        <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
          <Badge variant="secondary" className="font-medium">EVM Chains</Badge>
        </h2>
        <p className="text-muted-foreground mb-4">
          OpenOcean&apos;s current contract addresses. Contract addresses link to the block explorer.
        </p>
        <div className={tableWrapper}>
          <table className={tableClass}>
            <thead>
              <tr>
                <th className={thClass}>Chain Name</th>
                <th className={thClass}>Contract Address</th>
              </tr>
            </thead>
            <tbody>
              {evmChains.map((row) => (
                <tr key={row.name} className={trClass}>
                  <td className={tdClass}>{row.name}</td>
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
      </section>

      <section id="non-evm-chains" className="scroll-mt-20">
        <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
          <Badge variant="secondary" className="font-medium">Non-EVM Chain</Badge>
        </h2>
        <div className={tableWrapper}>
          <table className={tableClass}>
            <thead>
              <tr>
                <th className={thClass}>Chain Name</th>
                <th className={thClass}>Contract Address</th>
              </tr>
            </thead>
            <tbody>
              {nonEvmChains.map((row) => (
                <tr key={row.name} className={trClass}>
                  <td className={tdClass}>{row.name}</td>
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
      </section>
    </div>
  )
}
