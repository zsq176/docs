"use client"

import Link from "next/link"
import { CodeBlock } from "@/components/docs/code-block"
import { Callout } from "@/components/docs/callout"

export function SweepSwapApiGuideContent() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Guide</h1>
        <p className="mt-4 text-muted-foreground max-w-3xl">
          The <a href="https://app.openocean.finance/tools/sweep-swap?code=sweep-swap&amp;chain=arbitrum" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Sweep Swap</a> API allows users to <strong>save time</strong> by swapping multiple tokens in a single transaction. This feature enables seamless multi-token conversion, automatically routing through the best available liquidity pools. By eliminating the need for separate trades, users can complete all swaps in one go, significantly reducing the time and effort involved in managing individual transactions. There&apos;s 0.3% fee applies to each swap.
        </p>
        <p className="mt-2 text-muted-foreground max-w-3xl">
          It currently supports only on Arbitrum and Blast chain, will expand to more soon.
        </p>
        <p className="mt-2 text-muted-foreground max-w-3xl">
          This API is perfect for users seeking a streamlined, cost-effective way to manage diverse token portfolios.
        </p>
      </section>

      <section id="sweep-swap-api" className="scroll-mt-20">
        <h2 className="text-2xl font-semibold">Sweep Swap API</h2>
        <p className="mt-2 text-muted-foreground">
          <Link href="/docs/sweep-swap-api/api" className="text-primary hover:underline">API reference</Link>
        </p>
        <Callout type="info" title="">
          <p>
            Before you start using sweep swap API, make sure you understand the content of the swap API. Normally, you only need to use a transaction body different from the swap API in the last step to build. Check below OpenOcean swap API as reference. It currently applies to V3 version.
          </p>
          <p className="mt-2">
            <Link href="/docs/swap-api" className="text-primary hover:underline">swap API Getting Started</Link>
          </p>
        </Callout>
      </section>

      <section id="send-transaction" className="scroll-mt-20">
        <h2 className="text-2xl font-semibold">Send transaction</h2>
        <p className="mt-2 text-muted-foreground max-w-3xl">
          Here is the last step! Now you have several ways to swap the token you selected. You can use the multi_swap_quote API to get the transaction body from our API server. Here is a case for you to make a transaction on Arbitrum Chain.
        </p>
        <p className="mt-2 text-muted-foreground max-w-3xl">
          The work flow we recommend for API users, is using swap_quote API to get transaction body, then use the wallet to request your transaction on chain.
        </p>
        <CodeBlock code="https://open-api.openocean.finance/v3/arbitrum/multi_swap_quote" language="text" />
        <CodeBlock
          language="javascript"
          code={`async swap() {
    let params = {
            inToken: [
                {
                    inTokenSymbol: "ETH",
                    inTokenAddress: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
                    amount: "1000000000000000000",
                    slippage: 100
                },
                {
                    inTokenSymbol: "ARB",
                    inTokenAddress: "0x912CE59144191C1204E64559FE8253a0e49E6548",
                    amount: "1000000000000000000",
                    slippage: 100
                }
            ],
            outToken: {
                outTokenSymbol: "USDT",
                outTokenAddress: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9"
            },
            gasPrice: 10000000,
            account: "0xB3cbefF0336BaA4863Cb51238bD6C35BDAaB3D84"
        };
       
    const res = await axios.post("https://open-api.openocean.finance/v3/arbitrum/multi_swap_quote", params);
    if(res) {
        const {data,gasPrice} = res.data;
        const swapParams = {
            from:this.address,
            to:'0x6352a56caadc4f1e25cd6c75970fa768a3304e64', //Please use the contract from the contract page
            gasPrice: gasPrice,
            data
            }; 
        const result = await this.myWallet.sdk.eth.sendTransaction(swapParams)
     };
    
}`}
        />
        <p className="mt-4 text-muted-foreground max-w-3xl">
          Once your wallet plugin was triggered, which means you are successfully using the <code className="text-sm bg-muted px-1.5 py-0.5 rounded">sendTransaction</code> function and all params are set. You can swap your token and the transaction hash can be fetched once your transaction is sent on-chain.
        </p>
      </section>
    </div>
  )
}
