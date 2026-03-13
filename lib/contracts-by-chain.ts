// Swap API contract addresses per chain — from docs/swap-api/contracts-of-chains.md

export interface ContractByChain {
  name: string
  chainId: string
  contractUrl: string
  contractAddress: string
}

export const contractsByChain: ContractByChain[] = [
  { name: "Ethereum", chainId: "1", contractUrl: "https://etherscan.io/address/0x6352a56caadc4f1e25cd6c75970fa768a3304e64", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "BNB Chain", chainId: "56", contractUrl: "https://bscscan.com/address/0x6352a56caadc4f1e25cd6c75970fa768a3304e64", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Base", chainId: "8453", contractUrl: "https://basescan.org/address/0x6352a56caadc4f1e25cd6c75970fa768a3304e64", contractAddress: "0x6352a56caadc4f1e25cd6c75970fa768a3304e64" },
  { name: "Polygon", chainId: "137", contractUrl: "https://polygonscan.com/address/0x6352a56caadc4f1e25cd6c75970fa768a3304e64", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Avalanche", chainId: "43114", contractUrl: "https://snowtrace.io/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Sonic", chainId: "146", contractUrl: "https://sonicscan.org/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Arbitrum", chainId: "42161", contractUrl: "https://arbiscan.io/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Optimism", chainId: "10", contractUrl: "https://optimistic.etherscan.io/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Berachain", chainId: "80094", contractUrl: "https://berascan.com/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "zkSync Era", chainId: "324", contractUrl: "https://explorer.zksync.io/address/0x36A1aCbbCAfca2468b85011DDD16E7Cb4d673230", contractAddress: "0x36A1aCbbCAfca2468b85011DDD16E7Cb4d673230" },
  { name: "HyperEVM", chainId: "999", contractUrl: "https://purrsec.com/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64/transactions", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Plasma", chainId: "9745", contractUrl: "https://plasmascan.to/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Monad", chainId: "143", contractUrl: "https://monadvision.com/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Injective", chainId: "1776", contractUrl: "https://injective.cloud.blockscout.com/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "UniChain", chainId: "130", contractUrl: "https://uniscan.xyz/address/0x6352a56caadc4f1e25cd6c75970fa768a3304e64", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "opBNB", chainId: "204", contractUrl: "https://opbnbscan.com/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Linea", chainId: "59144", contractUrl: "https://explorer.linea.build/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Mantle", chainId: "5000", contractUrl: "https://explorer.mantle.xyz/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Manta", chainId: "169", contractUrl: "https://pacific-explorer.manta.network/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Telos", chainId: "40", contractUrl: "https://www.teloscan.io/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Scroll", chainId: "534352", contractUrl: "https://scrollscan.com/address/0x6352a56caadc4f1e25cd6c75970fa768a3304e64", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Gnosis", chainId: "100", contractUrl: "https://blockscout.com/xdai/mainnet/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64/transactions", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Cronos", chainId: "25", contractUrl: "https://cronos.org/explorer/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Harmony", chainId: "1666600000", contractUrl: "https://explorer.harmony.one/address/0x6352a56caadc4f1e25cd6c75970fa768a3304e64", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Blast", chainId: "81457", contractUrl: "https://blastscan.io/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Mode", chainId: "34443", contractUrl: "https://explorer.mode.network/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Rootstock (RSK)", chainId: "30", contractUrl: "https://explorer.rootstock.io/address/0x6352a56caadc4f1e25cd6c75970fa768a3304e64", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Sei", chainId: "1329", contractUrl: "https://seiscan.io/address/0x6352a56caadc4f1e25cd6c75970fa768a3304e64", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Gravity", chainId: "1625", contractUrl: "https://explorer.gravity.xyz/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Kava", chainId: "2222", contractUrl: "https://www.mintscan.io/kava/evm/contract/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Metis", chainId: "1088", contractUrl: "https://andromeda-explorer.metis.io/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Celo", chainId: "42220", contractUrl: "https://explorer.celo.org/mainnet/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Polygon zkEVM", chainId: "1101", contractUrl: "https://zkevm.polygonscan.com/address/0x6dd434082EAB5Cd134B33719ec1FF05fE985B97b", contractAddress: "0x6dd434082EAB5Cd134B33719ec1FF05fE985B97b" },
  { name: "Moonriver", chainId: "1285", contractUrl: "https://moonriver.moonscan.io/address/0x6352a56caadc4f1e25cd6c75970fa768a3304e64", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Aurora", chainId: "1313161554", contractUrl: "https://aurorascan.dev/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "APE", chainId: "33139", contractUrl: "https://apescan.io/address/0x6352a56caadc4f1e25cd6c75970fa768a3304e64", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Flare", chainId: "14", contractUrl: "https://flare-explorer.flare.network/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "SwellChain", chainId: "1923", contractUrl: "https://swellchainscan.io/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Plume", chainId: "98866", contractUrl: "https://explorer.plume.org/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "TAC Chain", chainId: "239", contractUrl: "https://plasmascan.to/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Fantom", chainId: "250", contractUrl: "https://explorer.fantom.network/address/0x6352a56caadC4F1E25CD6c75970Fa768A3304e64", contractAddress: "0x6352a56caadC4F1E25CD6c75970Fa768A3304e64" },
  { name: "Sui", chainId: "sui", contractUrl: "https://suiscan.xyz/mainnet/object/0x50e9e91fa4e5524fd0dafc6aa4a4fb1c3494c326384a278fdd282faffe5f4492/tx-blocks", contractAddress: "0x50e9e91fa4e5524fd0dafc6aa4a4fb1c3494c326384a278fdd282faffe5f4492" },
]
