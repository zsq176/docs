"use client"

import * as React from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { CodeBlock } from "@/components/docs/code-block"
import { Callout } from "@/components/docs/callout"
import { NextStepCard } from "@/components/docs/card-group"
import { FileCode } from "lucide-react"

const tableWrapper = "overflow-x-auto rounded-xl border border-border my-4"
const tableClass = "w-full border-collapse"
const thClass = "text-left py-3 px-4 font-medium border-b border-border bg-muted/30"
const tdClass = "py-3 px-4 border-b border-border text-sm"

export function SwapApiSdkContent() {
  return (
    <div className="space-y-12">
      <section>
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="outline">SDK</Badge>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">SDK</h1>
        <p className="mt-4 text-muted-foreground">
          GitHub: <a href="https://github.com/openocean-finance/openocean-api" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">openocean-api</a>
        </p>
      </section>

      {/* Install */}
      <section id="how-to-install" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Install OpenOcean Aggregator SDK</h2>
        <CodeBlock code={`npm i @openocean.finance/openocean-sdk`} language="bash" title="npm" />
        <p className="text-muted-foreground mt-2">Or with yarn:</p>
        <CodeBlock code={`yarn add @openocean.finance/openocean-sdk`} language="bash" />
        <p className="text-muted-foreground mt-4">If you want to build a wallet and contract object yourself, you will need web3 and bignumber.js:</p>
        <CodeBlock code={`npm install bignumber.js\nnpm install web3`} language="bash" />
      </section>

      {/* How to use */}
      <section id="how-to-use-the-sdk-in-your-project" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">How to use the SDK in your project</h2>
        <CodeBlock
          code={`import { OpenoceanSdk } from '@openocean.finance/openocean-sdk'
const openoceanSdk = new OpenoceanSdk()
const { api, swapSdk, config } = openoceanSdk`}
          language="javascript"
          showLineNumbers
        />
        <p className="text-muted-foreground mt-4">You can then use all the functions exposed by the SDK (api and swapSdk).</p>
      </section>

      {/* Start programming */}
      <section id="start-programing-now" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Start programming now</h2>
        <p className="text-muted-foreground mb-4">Before you start developing a DeFi trading project, understand the general DeFi trading workflow:</p>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-6">
          <li>Choose a chain.</li>
          <li>Choose your wallet.</li>
          <li>Choose the token pair.</li>
          <li>Input the amount you want to trade.</li>
          <li>Swap. We recommend using the Open API and Wallet plugin we provide.</li>
        </ol>
      </section>

      {/* Full vue example */}
      <section id="full-vue-example" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Full Vue example</h2>
        <CodeBlock
          code={`<template>
  <div id="app">
    <div v-if="chain">chain: {{ chain.chainName }}</div>
    <div v-if="myWallet">walletName: {{ myWallet.name }}, address: {{ myWallet.address }}</div>
    <div v-if="inToken">inToken: {{ inToken.symbol }} Balance: {{ inTokenBalance }}</div>
    <div v-if="outToken">outToken: {{ outToken.symbol }} Balance: {{ outTokenBalance }}</div>
    <div>
      <h3>ConnectWallet</h3>
      <button @click="connectWallet('eth')">connectWallet eth</button>
      <button @click="connectWallet('bsc')">connectWallet bsc</button>
      <button @click="connectWallet('polygon')">connectWallet polygon</button>
    </div>
    <div>
      <h3>Quote</h3>
      <div v-if="inToken && outToken">{{ inAmount }} {{ inToken.symbol }} swap to {{ outAmount }} {{ outToken.symbol }}</div>
      <button @click="quote">quote</button>
    </div>
    <div><h3>Swap</h3><button @click="swap">swap</button></div>
    <div><h3>GetBalance</h3><button @click="getBalance">GetBalance</button></div>
  </div>
</template>

<script>
import { OpenoceanSdk } from '@openocean.finance/openocean-sdk';
import BigNumber from 'bignumber.js';
const genSdk = new OpenoceanSdk()
const { api, swapSdk, config } = genSdk

export default {
  data() {
    return {
      chainName: 'bsc', walletName: 'MetaMask',
      inToken: null, outToken: null, gasPrice: 5,
      inTokenBalance: null, outTokenBalance: null, inAmount: 1, outAmount: null,
      myWallet: null, chain: null,
    }
  },
  methods: {
    async getGasPrice() { this.gasPrice = await api.getGasPrice({ chain: this.chainName }) },
    async getTokenList() {
      let { data } = await api.getTokenList({ chain: this.chainName })
      this.inToken = data.find(item => item.symbol == 'USDC')
      this.outToken = data.find(item => item.symbol == 'BUSD')
      this.getBalance()
    },
    async quote() {
      let response = await api.quote({
        chain: this.chainName, inTokenAddress: this.inToken.address,
        outTokenAddress: this.outToken.address, amount: this.inAmount, gasPrice: this.gasPrice
      })
      if (response.code == 200)
        this.outAmount = new BigNumber(response.data.outAmount).div(10 ** this.outToken.decimals).toFixed(4)
      else alert('Error:' + response.message)
    },
    async swap() {
      if (!this.myWallet) { alert('Please connect the wallet.'); return }
      if (this.inTokenBalance < this.inAmount) { alert(this.inToken.symbol + ' Insufficient balance.'); return }
      let { data } = await api.exchange({ chain: this.chainName })
      let allowance = await this.getAllowance(data.approveContract)
      if (new BigNumber(allowance).lt(this.inAmount)) { await this.approve(data.approveContract); return }
      let response = await swapSdk.swapQuote({
        chain: this.chainName, inTokenAddress: this.inToken.address, outTokenAddress: this.outToken.address,
        amount: this.inAmount, gasPrice: this.gasPrice, slippage: 1, account: this.myWallet.address,
      })
      if (response.code == 200) {
        swapSdk.swap(response.data)
          .on('error', (error) => {})
          .on('transactionHash', (hash) => {})
          .on('receipt', (data) => { this.getBalance() })
          .on('success', (data) => {})
      } else alert('Error:' + response.message)
    },
    async connectWallet(chainName) {
      try {
        if (chainName) this.chainName = chainName
        let data = await swapSdk.connectWallet({ chainName: this.chainName, walletName: this.walletName })
        if (data) { this.myWallet = data.wallet; this.chain = data.chain; this.getTokenList(); this.getGasPrice() }
      } catch (error) { this.myWallet = null; this.chain = null }
    },
    async getBalance() {
      if (!this.myWallet) { alert('Please connect the wallet.'); return }
      this.inTokenBalance = (await swapSdk.getBalance({ account: this.myWallet.address, chain: this.chainName, tokenAddressOrSymbol: this.inToken.address, decimals: this.inToken.decimals })).short
      this.outTokenBalance = (await swapSdk.getBalance({ account: this.myWallet.address, chain: this.chainName, tokenAddressOrSymbol: this.outToken.address, decimals: this.outToken.decimals })).short
    },
    async getAllowance(approveContract) {
      return await swapSdk.getAllowance({ chain: this.chainName, decimals: this.inToken.decimals, tokenAddress: this.inToken.address, approveContract, account: this.myWallet.address })
    },
    async approve(approveContract) {
      let approve = await swapSdk.approve({ chain: this.chainName, tokenAddress: this.inToken.address, approveContract, gasPrice: this.gasPrice, decimals: this.inToken.decimals, amount: this.inAmount })
      if (!approve.code) approve.on('error', () => {}).on('transactionHash', () => {}).on('receipt', () => {}).on('success', () => {})
    }
  }
}
</script>`}
          language="html"
          showLineNumbers
        />
      </section>

      {/* Choose Pair List */}
      <section id="choose-pair-list" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Choose Pair List</h2>
        <p className="text-muted-foreground mb-4">You can call the get Token List API to get all the available tokens we have on the blockchain you choose.</p>
        <ul className="list-none space-y-1 text-muted-foreground mb-2">
          <li>Method: GET</li>
          <li>URL: https://open-api.openocean.finance/v3/:chain/tokenList</li>
        </ul>
        <p className="font-medium mb-2">Parameters:</p>
        <div className={tableWrapper}>
          <table className={tableClass}>
            <thead><tr><th className={thClass}>Parameter</th><th className={thClass}>Type</th><th className={thClass}>Example</th><th className={thClass}>Description</th></tr></thead>
            <tbody>
              <tr><td className={tdClass}>chain</td><td className={tdClass}>string</td><td className={tdClass}>avax</td><td className={tdClass}>The chain name you want to search token</td></tr>
            </tbody>
          </table>
        </div>
        <p className="font-medium mb-2">Example request:</p>
        <CodeBlock code={`https://open-api.openocean.finance/v3/bsc/tokenList`} language="http" />
        <p className="font-medium mt-4 mb-2">Example response:</p>
        <CodeBlock
          code={`{
  "code": 200,
  "data": [
    {
      "id": 2377,
      "code": "grove",
      "name": "GroveCoin",
      "address": "0xf33893de6eb6ae9a67442e066ae9abd228f5290c",
      "decimals": 8,
      "symbol": "GRV",
      "icon": "https://s3.openocean.finance/token_logos/logos/1681183267288_9630165967657189.png",
      "chain": "bsc",
      "createtime": "2023-04-11T03:21:09.000Z",
      "hot": null,
      "sort": "2023-04-11T03:21:09.000Z",
      "chainId": null,
      "customSymbol": null,
      "customAddress": null,
      "usd": "0.948606"
    },
    ...
  ]
}`}
          language="json"
          showLineNumbers
        />
        <p className="text-muted-foreground mt-4 mb-2">You need to save the token information you need for further operations. Here is the SDK method for you to get the token list:</p>
        <CodeBlock
          code={`async getTokenList () {
  let { data } = await api.getTokenList({ chain: 'bsc' })
  this.inToken = data.find(item => item.symbol == 'USDC')
  this.outToken = data.find(item => item.symbol == 'BUSD')
}`}
          language="javascript"
          showLineNumbers
        />
      </section>

      {/* Connect Wallet */}
      <section id="connect-wallet" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Connect Wallet</h2>
        <p className="text-muted-foreground mb-4">Connect wallet is the first step you need to participate in DeFi trading. For example, you want to connect to MetaMask, so you have to get the MetaMask wallet constructor from OpenOcean wallet.</p>
        <Callout type="warning" title="">
          <p>Please note that multiple browser wallets can conflict — only open one (e.g. MetaMask, TrustWallet, Coin98Wallet can&apos;t be open at the same time).</p>
        </Callout>
        <p className="font-medium mb-2">Using wallet directly:</p>
        <CodeBlock
          code={`import { MetaMask } from "@openocean.finance/wallet";

const connectWallet = async (params) => {
  const myWallet = new MetaMask()
  const result = await myWallet.requestConnect(params.chainId);
  // you can use the requestConnect function to trigger your wallet
}`}
          language="javascript"
          showLineNumbers
        />
        <p className="font-medium mt-6 mb-2">Or trigger the wallet directly by the SDK:</p>
        <CodeBlock
          code={`async connectWallet () {
  try {
    let AllChainNames = config.chains.chainNames
    let AllWalletNames = config.wallets.walletList.map(item => item.key)
    // ["MetaMask","CryptoCom","TrustWallet",...]
    // ["eth","ropsten","rinkeby","bsc","solana","flow","polygon","avax",...]
    let data = await swapSdk.connectWallet({
      chainName: this.chainName,
      walletName: this.walletName
    })
    if (data) {
      this.myWallet = data.wallet
      // this.chain = data.chain
      // this.getBalance()
    }
  } catch (error) {
    this.myWallet = null
    this.chain = null
  }
}`}
          language="javascript"
          showLineNumbers
        />
      </section>

      {/* Run the contract */}
      <section id="run-the-contract-in-project" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Run the contract in project</h2>
        <p className="text-muted-foreground mb-4">Once you get your wallet connected, you can use Web3.js or ethers. These are tools to create the operable object for the contract, which serves for token approving, balance checking, and swapping.</p>
        <p className="font-medium mb-2">Example to init a contract object to call the ABI (e.g. check inToken balance):</p>
        <CodeBlock
          code={`const { sdk } = myWallet;
contract = new sdk.eth.Contract(Contract_abi, inToken_address);
// For example, by running this code, you get the contract to check the inToken's balance`}
          language="javascript"
          showLineNumbers
        />
        <p className="font-medium mt-6 mb-2">Or, if you want to use ethers:</p>
        <CodeBlock
          code={`const { sdk } = myWallet;
const { currentProvider } = sdk;
myEtherWallet = new ethers.providers.Web3Provider(currentProvider);
// transfer your web3 wallet object to ether
signer = myEtherWallet.getSigner();
contract = new ethers.Contract(ContractAddress, contract.abi, signer);`}
          language="javascript"
          showLineNumbers
        />
      </section>

      {/* Get Balance */}
      <section id="get-balance" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Get Balance</h2>
        <p className="text-muted-foreground mb-4">Once your wallet is connected and the address is displayed, you can use the SDK or directly use the wallet object to get the balance from your wallet.</p>
        <p className="font-medium mb-2">Use wallet API:</p>
        <CodeBlock
          code={`const { sdk } = myWallet;
const contract = new sdk.eth.Contract(ERC20_abi, inToken);
balance = await contract.methods.balanceOf(result.address).call();
// Save the result object which can be used here for balance checking.`}
          language="javascript"
          showLineNumbers
        />
        <p className="font-medium mt-6 mb-2">Use Open API:</p>
        <CodeBlock
          code={`getBalance() {
  if (this.address) {
    let params = {
      chain: 'bsc',
      chainId: 56,
      account: your wallet address,
      inTokenAddress: \`\${previousTokenAddress},\${nextTokenAddress}\`
    };
    axios.get(\`https://open-api.openocean.finance/v3/\${params.chain}/getBalance\`, { params }).then(res => {
      const { data } = res.data
      const previousBalance = data[0].balance
      const nextBalance = data[1].balance
    }).catch(e => console.log(e));
  }
}`}
          language="javascript"
          showLineNumbers
        />
        <p className="font-medium mt-6 mb-2">Use SDK:</p>
        <CodeBlock
          code={`async getBalance () {
  if (!this.myWallet) {
    alert('Please connect the wallet.')
    return
  }
  let inBalance = await swapSdk.getBalance({
    account: this.myWallet.address,
    chain: this.chainName,
    tokenAddressOrSymbol: this.inToken.address,
    decimals: this.inToken.decimals,
  })
  this.inTokenBalance = inBalance.short

  let outBalance = await swapSdk.getBalance({
    account: this.myWallet.address,
    chain: this.chainName,
    tokenAddressOrSymbol: this.outToken.address,
    decimals: this.outToken.decimals,
  })
  this.outTokenBalance = outBalance.short
}`}
          language="javascript"
          showLineNumbers
        />
      </section>

      {/* GetGasPrice */}
      <section id="getgasprice" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">GetGasPrice</h2>
        <p className="font-medium mb-2">Use Open API:</p>
        <CodeBlock
          code={`getGasPrice () {
  let chainName = 'bsc';
  let data = await axios.get(\`https://open-api.openocean.finance/v3/\${chainName}/gasPrice\`)
}`}
          language="javascript"
          showLineNumbers
        />
        <p className="font-medium mt-6 mb-2">Use SDK:</p>
        <CodeBlock
          code={`async getGasPrice () {
  this.gasPrice = await api.getGasPrice({
    chain: this.chainName,
  })
}`}
          language="javascript"
          showLineNumbers
        />
      </section>

      {/* Approve */}
      <section id="approve" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Approve</h2>
        <p className="text-muted-foreground mb-4">Approving assets is necessary for DeFi users to authorize the contract to use their tokens to swap. As with the getBalance method, you can use the wallet method or directly use our SDK to get a specific token approved for trading.</p>
        <p className="font-medium mb-2">Use wallet function:</p>
        <CodeBlock
          code={`const gas = await contract.methods.approve(toContract, approveAmount).estimateGas({ from: account });
// get your gas fee
return await contract.methods.approve(toContract, approveAmount).send({
  from: account,
  gasPrice,
  gas,
});`}
          language="javascript"
          showLineNumbers
        />
        <p className="font-medium mt-6 mb-2">Use SDK:</p>
        <CodeBlock
          code={`async approve (approveContract) {
  let approve = await swapSdk.approve({
    chain: this.chainName,
    tokenAddress: this.inToken.address,
    approveContract: approveContract,
    gasPrice: this.gasPrice,
    decimals: this.inToken.decimals,
    amount: this.inAmount
  })
  if (!approve.code) {
    approve.on('error', (error) => { debugger })
      .on('transactionHash', (hash) => { debugger })
      .on('receipt', (data) => { debugger })
      .on('success', (data) => { debugger })
  }
}`}
          language="javascript"
          showLineNumbers
        />
      </section>

      {/* Quote */}
      <section id="quote" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Quote</h2>
        <p className="text-muted-foreground mb-4">You can directly use Open API to quote the token exchange amount.</p>
        <ul className="list-none space-y-1 text-muted-foreground mb-2">
          <li>Method: GET</li>
          <li>URL: https://open-api.openocean.finance/v3/:chain/quote</li>
        </ul>
        <p className="font-medium mb-2">Parameters:</p>
        <div className={tableWrapper}>
          <table className={tableClass}>
            <thead><tr><th className={thClass}>Parameter</th><th className={thClass}>Type</th><th className={thClass}>Example</th><th className={thClass}>Description</th></tr></thead>
            <tbody>
              <tr><td className={tdClass}>chain</td><td className={tdClass}>string</td><td className={tdClass}>bsc, avax, fantom</td><td className={tdClass}>Chain name</td></tr>
              <tr><td className={tdClass}>inTokenAddress</td><td className={tdClass}>string</td><td className={tdClass}>0x9029FdFAe9A03135846381c7cE16595C3554e10A</td><td className={tdClass}>Sell token address</td></tr>
              <tr><td className={tdClass}>outTokenAddress</td><td className={tdClass}>string</td><td className={tdClass}>0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE</td><td className={tdClass}>Buy token address</td></tr>
              <tr><td className={tdClass}>amount</td><td className={tdClass}>number</td><td className={tdClass}>10</td><td className={tdClass}>Sell amount</td></tr>
              <tr><td className={tdClass}>gasPrice</td><td className={tdClass}>number</td><td className={tdClass}>5</td><td className={tdClass}>Set yourself or get through GetGasPrice</td></tr>
              <tr><td className={tdClass}>slippage</td><td className={tdClass}>number</td><td className={tdClass}>1</td><td className={tdClass}>1 equals 1%, ranges 0.01% to 100%</td></tr>
            </tbody>
          </table>
        </div>
        <p className="font-medium mt-4 mb-2">Example — get price between OOE and BNB with Axios:</p>
        <CodeBlock
          code={`const res = await axios.get("https://open-api.openocean.finance/v3/bsc/quote", {
  chain: 'bsc',
  inTokenAddress: '0x9029FdFAe9A03135846381c7cE16595C3554e10A',
  outTokenAddress: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
  amount: 10,
  gasPrice: 5,
  slippage: 1,
}).then((res) => {
  const result = res.data
}).catch((err) => {
  throw new Error(err)
})`}
          language="javascript"
          showLineNumbers
        />
        <p className="font-medium mt-4 mb-2">Example response:</p>
        <CodeBlock
          code={`{
  code: 200,
  data: {
    "inToken": { "symbol": "AUSD", "name": "Avaware USD", "address": "0x783C08b5F26E3daf8C4681F3bf49844e425b6393", "decimals": 18 },
    "outToken": { "symbol": "EMBR", "name": "EmbrToken", "address": "0xD81D45E7635400dDD9c028839e9a9eF479006B28", "decimals": 18 },
    "inAmount": "5000000000000000000",
    "outAmount": "126261357830302882735",
    "estimatedGas": "189669",
    "dexes": [ { "dexIndex": 1, "dexCode": "SushiSwap", "swapAmount": "0" }, ... ],
    "path": { }
  }
}`}
          language="javascript"
          showLineNumbers
        />
        <p className="font-medium mt-4 mb-2">Or use the API module in SDK (e.g. quote on Ont chain):</p>
        <CodeBlock
          code={`async quote () {
  let response = await api.quote({
    chain: this.chainName,
    inTokenAddress: this.inToken.address,
    outTokenAddress: this.outToken.address,
    amount: this.inAmount,
    gasPrice: this.gasPrice
  })
  if (response.code == 200) {
    this.outAmount = new BigNumber(response.data.outAmount).div(10 ** this.outToken.decimals).toFixed(4)
  } else {
    alert('Error:' + response.message)
  }
}`}
          language="javascript"
          showLineNumbers
        />
      </section>

      {/* Swap */}
      <section id="swap" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Swap</h2>
        <p className="text-muted-foreground mb-6">Here is the last step! You have several ways to swap the token you selected. You can directly use our swap API to trigger the trade (which will not awaken your personal wallet, but you have to provide your private key to the API), or use the swap_quote API to get the transaction body from our API server. The workflow we recommend for API users is: use Swapquote API to get transaction body, then use the wallet to request your transaction on chain.</p>
        <p className="font-medium mb-2">Example — make a transaction on BNB Chain (Open API + wallet):</p>
        <CodeBlock
          code={`async swap() {
  if (this.address && this.inAmount > 0) {
    let params = {
      chain: 'bsc',
      inTokenAddress: '0x9029FdFAe9A03135846381c7cE16595C3554e10A',
      outTokenAddress: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
      amount: 5,
      gasPrice: 5,
      slippage: 100,
    };
    const res = await axios.get("https://open-api.openocean.finance/v3/bsc/swap_quote?inTokenAddress=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&outTokenAddress=0x55d398326f99059ff775485246999027b3197955&amount=5&gasPrice=5&slippage=100&account=0x929B44e589AC4dD99c0282614e9a844Ea9483C69");
    if (res) {
      const { estimatedGas, data, gasPrice } = res.data.data;
      const swapParams = {
        from: this.address,
        to: '0x6352a56caadc4f1e25cd6c75970fa768a3304e64',
        gas: estimatedGas,
        gasPrice: gasPrice,
        data
      };
      const result = await this.myWallet.sdk.eth.sendTransaction(swapParams)
    } else {
      return
    }
  }
}`}
          language="javascript"
          showLineNumbers
        />
        <p className="font-medium mt-6 mb-2">On the SDK workflow (e.g. make a swap on Terra chain):</p>
        <CodeBlock
          code={`async swap () {
  if (!this.myWallet) {
    alert('Please connect the wallet.')
    return
  }
  if (this.inTokenBalance < this.inAmount) {
    alert(\`\${this.inToken.symbol} Insufficient balance.\`)
    return
  }
  let { data } = await api.exchange({ chain: this.chainName })
  let allowance = await this.getAllowance(data.approveContract)
  if (new BigNumber(allowance).lt(this.inAmount)) {
    await this.approve(data.approveContract)
    return
  }
  let response = await swapSdk.swapQuote({
    chain: this.chainName,
    inTokenAddress: this.inToken.address,
    outTokenAddress: this.outToken.address,
    amount: this.inAmount,
    gasPrice: this.gasPrice,
    slippage: 1, // 1%
    account: this.myWallet.address,
  })
  if (response.code == 200) {
    swapSdk.swap(response.data)
      .on('error', (error) => { debugger })
      .on('transactionHash', (hash) => { debugger })
      .on('receipt', (data) => {
        debugger
        this.getBalance()
      })
      .on('success', (data) => { debugger })
  } else {
    alert('Error:' + response.message)
  }
}`}
          language="javascript"
          showLineNumbers
        />
      </section>

      <section className="scroll-mt-20 pt-8 border-t border-border">
        <h2 className="text-xl font-bold mb-6">Next Steps</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <NextStepCard title="Swap API Overview" description="Introduction and Get Started." href="/docs/swap-api" icon={<FileCode className="h-5 w-5" />} />
          <NextStepCard title="API V4" description="REST endpoints and parameters." href="/docs/swap-api/v4" icon={<FileCode className="h-5 w-5" />} />
        </div>
      </section>
    </div>
  )
}
