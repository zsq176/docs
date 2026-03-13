"use client"

import * as React from "react"
import { BookOpen } from "lucide-react"
import Link from "next/link"
import { CodeBlock } from "@/components/docs/code-block"

const chainTableRows = [
  { chainName: "Ethereum Mainnet", chainId: "1", mainPair: "eth-usdt" },
  { chainName: "Binance Smart Chain", chainId: "56", mainPair: "bnb-busd" },
  { chainName: "Solana Mainnet", chainId: "--", mainPair: "eth-usdt" },
  { chainName: "Polygon Mainnet", chainId: "137", mainPair: "matic-usdt" },
  { chainName: "Avalanche", chainId: "43114", mainPair: "avax-usdt.e" },
  { chainName: "Fantom", chainId: "250", mainPair: "ftm-usdc" },
  { chainName: "Arbitrum", chainId: "42161", mainPair: "uni-usdc" },
  { chainName: "Terra Mainnet", chainId: "columbus-5", mainPair: "luna-ust" },
  { chainName: "Gnosis Mainnet", chainId: "100", mainPair: "xdai-usdt" },
  { chainName: "Boba Mainnet", chainId: "288", mainPair: "weth-usdt" },
  { chainName: "Ontology Mainnet", chainId: "--", mainPair: "wing-ontd" },
  { chainName: "Tron Mainnet", chainId: "--", mainPair: "trx-usdt" },
  { chainName: "Heco Mainnet", chainId: "128", mainPair: "ht-usdc" },
  { chainName: "OEC Mainnet", chainId: "66", mainPair: "okt-usdt" },
  { chainName: "Optimism", chainId: "10", mainPair: "uni-usdc" },
  { chainName: "Moonriver", chainId: "1285", mainPair: "eth-usdt" },
]

const erc20AbiCode = `[{
	"constant": true,
	"inputs": [],
	"name": "name",
	"outputs": [{
		"name": "",
		"type": "string"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"name": "_spender",
		"type": "address"
	}, {
		"name": "_value",
		"type": "uint256"
	}],
	"name": "approve",
	"outputs": [{
		"name": "",
		"type": "bool"
	}],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": true,
	"inputs": [],
	"name": "totalSupply",
	"outputs": [{
		"name": "",
		"type": "uint256"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"name": "_from",
		"type": "address"
	}, {
		"name": "_to",
		"type": "address"
	}, {
		"name": "_value",
		"type": "uint256"
	}],
	"name": "transferFrom",
	"outputs": [{
		"name": "",
		"type": "bool"
	}],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": true,
	"inputs": [],
	"name": "decimals",
	"outputs": [{
		"name": "",
		"type": "uint8"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": true,
	"inputs": [{
		"name": "_owner",
		"type": "address"
	}],
	"name": "balanceOf",
	"outputs": [{
		"name": "balance",
		"type": "uint256"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": true,
	"inputs": [],
	"name": "symbol",
	"outputs": [{
		"name": "",
		"type": "string"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"name": "_to",
		"type": "address"
	}, {
		"name": "_value",
		"type": "uint256"
	}],
	"name": "transfer",
	"outputs": [{
		"name": "",
		"type": "bool"
	}],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"constant": true,
	"inputs": [{
		"name": "_owner",
		"type": "address"
	}, {
		"name": "_spender",
		"type": "address"
	}],
	"name": "allowance",
	"outputs": [{
		"name": "",
		"type": "uint256"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
}, {
	"payable": true,
	"stateMutability": "payable",
	"type": "fallback"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"name": "owner",
		"type": "address"
	}, {
		"indexed": true,
		"name": "spender",
		"type": "address"
	}, {
		"indexed": false,
		"name": "value",
		"type": "uint256"
	}],
	"name": "Approval",
	"type": "event"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": true,
		"name": "from",
		"type": "address"
	}, {
		"indexed": true,
		"name": "to",
		"type": "address"
	}, {
		"indexed": false,
		"name": "value",
		"type": "uint256"
	}],
	"name": "Transfer",
	"type": "event"
}];`

const glossaryTerms = [
  {
    term: "API",
    def: "An application programming interface (API) is a set of protocols and codes that determine how different software platforms communicate and share information. APIs define different types of requests and calls that can be made, the data types that can be used, and how to make these requests. It serves as an intermediary between different software systems. A developer can use an API to incorporate features of an external application into their own software. By allowing different platforms to communicate, APIs enhance interoperability across the web.",
    via: { text: "Gemini(opens new window)", url: "https://www.gemini.com/cryptopedia/glossary" },
  },
  {
    term: "SDK",
    def: "A software development kit (SDK) is a collection of software development tools in one installable package.They ease creation of applications by having compiler, debugger and perhaps a software framework.They are normally specific to a hardware platform and operating system combination.",
    via: { text: "Binah(opens new window)", url: "https://support.binah.ai/hc/en-us/articles/360007663478-Introduction-to-Software-Development-Kits" },
  },
  {
    term: "Wallet",
    def: "In the Crypto Defi world, wallets are software that can be used to view cryptocurrency balances and make transactions. Each wallet type is a little bit different, but in general, any given wallet will work with one or more cryptocurrencies and will be able to store one or more cryptocurrency-specific \"public addresses. Cryptocurrency itself is not actually \"stored\" in a wallet, it is stored on a coin's blockchain. Your wallet is simply software designed to interact with the blockchain. That is the magic part of Defi application, you can finish you trade business on the customer side!",
    via: { text: "crypto(opens new window)", url: "https://crypto.com/university/crypto-wallets" },
  },
  {
    term: "Contract",
    def: "Smart contracts are simply programs stored on a blockchain that run when predetermined conditions are met. They typically are used to automate the execution of an agreement so that all participants can be immediately certain of the outcome, without any intermediary's involvement or time loss.",
    via: { text: "IBM(opens new window)", url: "https://www.ibm.com/topics/smart-contracts" },
  },
  {
    term: "OOP",
    def: "As a developer, you should know the Defi project programing is a good case for Object Oriented Programming (OOP). OOP is a popular programming paradigm based on the concept of \"Object\", which can contain data and code: data in the form of fields (often known as attributes or properties), and code, in the form of procedures (often known as methods). In Defi programming, you have the two most important \"Objects\" to work with, wallet object and contract object. They are the tools you need to interact with blockchain, and these two objects have all the medhods you need for your transaction.",
    via: { text: "TechTarget(opens new window)", url: "https://www.techtarget.com/searchapparchitecture/definition/object-oriented-programming-OOP" },
  },
  {
    term: "Arbitrage",
    def: "To arbitrage is to get benefit from the price difference of an asset or security between two markets for profit. We can make an example in the crypto case, some token is selling in market A in $3 but selling in market B with $5. So there is $2 per token's profit if someone sold the tokens he/she get from market A to market B. Arbitrage is a necessary financial mechanism that keeps prices consistent between different exchanges and wider markets.",
    via: { text: "Gemini(opens new window)", url: "https://www.gemini.com/cryptopedia/glossary" },
  },
  {
    term: "GasPrice",
    def: "Gas refers to the fee, or pricing value, required to successfully conduct a transaction or execute a contract on the Ethereum blockchain platform. Priced in small fractions of the cryptocurrency ether (ETH), commonly referred to as gwei and sometimes also called nanoeth, the gas is used to allocate resources of the Ethereum virtual machine (EVM) so that decentralized applications such as smart contracts can self-execute in a secured but decentralized fashion.",
    via: { text: "investopedia(opens new window)", url: "https://www.investopedia.com/terms/g/gas-ethereum.asp" },
  },
  {
    term: "Slippage",
    def: "Slippage happens when traders have to settle for a different price than what they initially requested due to a movement in price between the time the order (say for Bitcoin) enters the market and the execution of a trade. This phenomenon can occur in all markets, like forex and stocks. However, it is more frequent, and a lot worse, in crypto markets (especially on decentralized exchanges like Uniswap) due to the high levels of price volatility.",
    via: { text: "coinmarketcap", url: "https://coinmarketcap.com/alexandria/glossary/slippage" },
  },
]

export function GlossaryContent() {
  return (
    <div className="space-y-12">
      <section>
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <BookOpen className="h-4 w-4" />
            Developer references & glossary
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Developer references & glossary</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
          If you have questions about calling Open API, this document provides full request body params and response body.
        </p>
      </section>

      <section id="openocean-api-document" className="scroll-mt-24">
        <h3 className="text-xl font-semibold mb-4">
          <Link href="/docs" className="text-primary hover:underline">OpenOcean API Document</Link>
        </h3>
      </section>

      <section id="files-and-modules-needed-for-api-users" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mt-10 mb-4">Files and modules needed for API users</h2>
        <p className="text-muted-foreground max-w-3xl mb-4">
          Here are some modules you need to import in addition to the open API:
        </p>
        <CodeBlock
          code={`npm install bignumber.js
npm install web3`}
          language="shell"
          className="mb-4"
        />
        <p className="text-muted-foreground max-w-3xl mb-4">
          The web3.js library is a collection of modules that contain functionality for the Ethereum ecosystem. Meanwhile, bignumber is the module used to operate the multiple-precision floating-point number, which is used in all smart contract&apos;s number running.
        </p>
        <h3 className="text-lg font-semibold mb-2">
          <a href="https://web3js.readthedocs.io/en/v1.7.0/getting-started.html#adding-web3-js" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">web3.js</a>
        </h3>
        <h3 className="text-lg font-semibold mb-4">
          <a href="https://mikemcl.github.io/bignumber.js/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">bignumber.js</a>
        </h3>
        <p className="text-muted-foreground max-w-3xl mb-4">
          Table of chainId you need for directing your wallet plugin to the blockchain you select.
        </p>
        <div className="overflow-hidden rounded-lg border border-border mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-semibold">Chain_Name</th>
                <th className="px-4 py-3 text-left font-semibold">Chain_ID</th>
                <th className="px-4 py-3 text-left font-semibold">main-pair</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {chainTableRows.map((row) => (
                <tr key={row.chainName} className="hover:bg-muted/30 transition-colors">
                  <td className="px-4 py-3 text-muted-foreground">{row.chainName}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.chainId}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.mainPair}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground max-w-3xl mb-2">Erc20 Abi: Contains the abi you need to approve your token.</p>
        <CodeBlock code={erc20AbiCode} language="javascript" className="mb-10" />
      </section>

      <section id="glossary" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mt-10 mb-4">Glossary</h2>
        <p className="text-muted-foreground max-w-3xl mb-8">
          Below we explain several terms that will help you start programming.
        </p>
        <div className="space-y-8">
          {glossaryTerms.map((item) => (
          <div key={item.term} id={item.term.toLowerCase().replace(/\s+/g, "-")} className="scroll-mt-20">
              <h3 className="text-xl font-semibold text-foreground mb-2">{item.term}</h3>
              <p className="text-muted-foreground mb-2">{item.def}</p>
              <p className="text-sm text-muted-foreground">
                * via <a href={item.via.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{item.via.text}</a>
              </p>
          </div>
        ))}
        </div>
      </section>

      <section className="pt-6">
        <Link
          href="/docs/developer-resources/errors"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← Back to Developer Resources
        </Link>
      </section>
    </div>
  )
}
