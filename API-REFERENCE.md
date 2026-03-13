# OpenOcean API Reference (Knowledge Base)

A detailed reference for integrating with OpenOcean's DeFi APIs: Swap, Gasless Swap, Limit Order, DCA, Sweep Swap, Zap, and Support (Ticket) APIs.

---

## Table of Contents

1. [Overview & Terminology](#1-overview--terminology)
2. [Base URL, Access & Rate Limits](#2-base-url-access--rate-limits)
3. [Supported Chains & Contracts](#3-supported-chains--contracts)
4. [Common HTTP Error Codes](#4-common-http-error-codes)
5. [Swap API V4](#5-swap-api-v4-recommended)
6. [Gasless Swap API](#6-gasless-swap-api)
7. [Limit Order API](#7-limit-order-api)
8. [DCA API](#8-dca-api)
9. [Sweep Swap API](#9-sweep-swap-api)
10. [Zap API](#10-zap-api)
11. [Ticket API (Support)](#11-ticket-api-support)
12. [Integration Best Practices](#12-integration-best-practices)
13. [Glossary](#13-glossary)

---

## 1. Overview & Terminology

- **Base URL:** All endpoints use `https://open-api.openocean.finance` unless stated otherwise.
- **Chain identifier:** Most endpoints accept either chain **name** (e.g. `bsc`, `arbitrum`) or **chain ID** (e.g. `56`, `42161`). Use the same format consistently in a request.
- **Amounts with decimals:** Use full token amounts including decimals (e.g. 1 USDT with 6 decimals → `1000000`; 1 ETH with 18 decimals → `1000000000000000000`). The API documents refer to this as `amountDecimals`.
- **Deprecated parameters:** For Swap API V4, `amount` and `gasPrice` (without decimals) are deprecated. Use `amountDecimals` and `gasPriceDecimals` instead.
- **EOA:** Externally Owned Account — a normal wallet address (not a contract). Used for `referrer` in many endpoints.
- **Referrer / referrerFee:** Optional partner tracking and revenue share. `referrer` is an EOA that receives a share of fees; `referrerFee` is the percentage (e.g. `1` = 1%). OpenOcean typically keeps a share (e.g. 20% for swap, 30% for zap); contact OpenOcean to change the split.
- **Dex filtering:** Use the `dexList` endpoint to get dex indices for a chain. Then pass `enabledDexIds` or `disabledDexIds` (comma-separated). `enabledDexIds` takes priority over `disabledDexIds` when both are present.
- **Swagger UI:** Interactive API docs: [https://open-api.openocean.finance/v4/swagger-ui.html](https://open-api.openocean.finance/v4/swagger-ui.html).

---

## 2. Base URL, Access & Rate Limits

- **Base URL:** `https://open-api.openocean.finance`
- **Free trial:** 2-week free trial available (under 10 RPS). Contact OpenOcean (e.g. Telegram API group or enquiry form).
- **Public Swap API:** Default rate limit 2 RPS; standard dynamic fee model. No API key required for basic access.
- **Pro API:** Higher rate limits and custom fee arrangements. Requires API key and contact with OpenOcean (401/402 if key is missing or invalid).
- **Authentication:** Pro users must use the correct API Key in requests; public endpoints do not require a key.

---

## 3. Supported Chains & Contracts

### 3.1 Chain list (Swap / common)

| Chain Name   | Code     | Chain ID  | Gasless Swap |
|-------------|----------|-----------|---------------|
| Ethereum    | eth      | 1         | No            |
| BNB Chain   | bsc      | 56        | Yes           |
| Base        | base     | 8453      | Yes           |
| Polygon     | polygon  | 137       | Yes           |
| Arbitrum    | arbitrum | 42161     | Yes           |
| Linea       | linea    | 59144     | Yes           |
| HyperEVM    | hyperevm | 999       | Yes           |
| Avalanche   | avax     | 43114     | Yes           |
| Optimism    | optimism | 10        | Yes           |
| Sonic       | sonic    | 146       | Yes           |
| UniChain    | uni      | 130       | Yes           |
| Berachain   | bera     | 80094     | Yes           |
| Sei         | sei      | 1329      | Yes           |
| Solana      | solana   | —         | No            |
| Sui         | sui      | —         | No            |

Additional chains (e.g. zkSync 324, Blast 81457, Scroll 534352) are supported by the Swap API; see official docs or Swagger for the full list.

### 3.2 Limit Order API chains

Chain IDs: **1, 56, 146, 8453, 80094** (Ethereum, BNB, Sonic, Base, Berachain).

### 3.3 DCA API chains

Chain IDs: **8453, 146, 80094, 1, 999** (Base, Sonic, Berachain, Ethereum, HyperEVM).

### 3.4 Swap contract address (EVM)

On most EVM chains the main Swap API contract address is:

`0x6352a56caadC4F1E25CD6c75970Fa768A3304e64`

(zkSync Era and a few others use a different address; see OpenOcean contracts documentation.)

Users must approve this contract (or the correct one per chain) for ERC-20 tokens before swapping.

---

## 4. Common HTTP Error Codes

| HTTP Code | Name                 | Suggested action |
|-----------|----------------------|------------------|
| 400       | Bad Request          | Check request parameters (chain, addresses, amounts, decimals). |
| 401, 402  | Unauthorized         | Use the correct API Key (Pro users). |
| 403       | Forbidden            | Contact OpenOcean; may be IP whitelist or security policy. |
| 404       | Not Found            | Verify the request URL and path. |
| 429       | Too Many Requests    | Reduce request rate; stay within rate limits. |
| 500       | Internal Server Error| Retry; if persistent, contact support. |
| 502       | Bad Gateway          | Proxy/gateway issue; retry later. |
| 503       | Service Unavailable  | Server overload or maintenance. |
| 504       | Gateway Timeout      | Server timeout; retry. |
| 509       | Concurrency Limit    | Reduce concurrency. |

---

## 5. Swap API V4 (Recommended)

REST API for getting token swap quotes and transaction data (calldata, to, value, etc.). The client sends the transaction on-chain. Use **amountDecimals** and **gasPriceDecimals**; avoid deprecated `amount` and `gasPrice`.

### 5.1 Quote

**Purpose:** Get an estimated output amount and route for a given input token and amount. No transaction data is returned.

| Method | Endpoint |
|--------|----------|
| GET    | `/v4/:chain/quote` |

**Full URL example:**  
`https://open-api.openocean.finance/v4/bsc/quote?inTokenAddress=0x55d398326f99059ff775485246999027b3197955&outTokenAddress=0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d&amountDecimals=5000000000000000000&gasPriceDecimals=1000000000`

**Parameters**

| Name              | Type   | Required | Default | Description |
|-------------------|--------|----------|---------|-------------|
| chain             | string | Yes      | —       | Chain name or chain ID (e.g. bsc, 56). |
| inTokenAddress    | string | Yes      | —       | Input token contract address. |
| outTokenAddress   | string | Yes      | —       | Output token contract address. |
| amountDecimals    | string | Yes      | —       | Input amount with decimals (e.g. 5e18 for 5 tokens with 18 decimals). |
| gasPriceDecimals  | string | Yes      | —       | Gas price with decimals (e.g. from /v4/:chain/gasPrice). |
| slippage          | string | No       | 1       | Slippage tolerance 0.05–50; 1 means 1%. |
| disabledDexIds    | string | No       | —       | Comma-separated dex indices from dexList to exclude. |
| enabledDexIds     | string | No       | —       | Comma-separated dex indices to allow; overrides disabledDexIds. |

**Response (200)**  
- `code`: 200  
- `data`: object with:
  - `inToken`, `outToken`: address, decimals, symbol, name, usd, volume
  - `inAmount`, `outAmount`: strings (with decimals)
  - `estimatedGas`: string (reference only; recommend estimating gas locally)
  - `dexes`: array of { dexIndex, dexCode, swapAmount }
  - `path`: from, to, parts, routes (routing detail)
  - `save`: number
  - `price_impact`: string (e.g. "0.01%") — indicative; integrators should enforce their own max
  - `exchange`: contract address to call

**Note:** `price_impact` is not enforced by the API; implement your own threshold and abort if exceeded.

---

### 5.2 Reverse Quote

**Purpose:** “Buy” flow: specify how much **inToken** you want to **receive**; the API returns how much **outToken** you need to sell. In the request, inToken/outToken are **reversed** compared to the frontend (user wants to receive inToken, so request uses inToken = that token, outToken = the other).

| Method | Endpoint |
|--------|----------|
| GET    | `/v4/:chain/reverseQuote` |

**Parameters:** Same as Quote; `amountDecimals` here is the **target amount of inToken to receive**.

**Example:** User wants to receive 1 BNB. Frontend: inToken=USDC, outToken=BNB. Request: inToken=BNB, outToken=USDC, amount=1 (in token decimals).  
**Response:** Similar to Quote, with an additional `reverseAmount` field.

---

### 5.3 Swap (get transaction data)

**Purpose:** Get the transaction payload (to, value, data, etc.) to execute the swap. If `account` is omitted, the response may contain only quote data without calldata.

| Method | Endpoint |
|--------|----------|
| GET    | `/v4/:chain/swap` |

**Parameters:** All Quote parameters plus:

| Name              | Type   | Required | Description |
|-------------------|--------|----------|-------------|
| account           | string | Yes*     | User wallet address. *Omit for quote-only (no calldata). |
| referrer          | string | No       | EOA for partner tracking / fee. |
| referrerFee       | number | No       | 0.01–5 (e.g. 1 = 1%). OpenOcean shares 20% by default. |
| enabledDexIds     | string | No       | Dex indices, comma-separated. |
| disabledDexIds    | string | No       | Dex indices, comma-separated. |
| sender            | string | No       | If set: sender=caller, account=receiver; else account is both. |
| minOutput         | number | No       | Minimum output amount with decimals (supported: Base, BNB, ETH). |

**Response (200)**  
- `data`: inToken, outToken, inAmount, outAmount, estimatedGas, minOutAmount, from, to, value, gasPrice, data (calldata), chainId, price_impact, etc.

**Notes:**  
- `estimatedGas` is only a reference; prefer local estimation (e.g. eth_estimateGas × 1.25–2.5).  
- `minOutput`: use decimals (e.g. 9.9 USDC, 6 decimals → 9900000). Transaction will revert if output is below this.

---

### 5.4 Token List

| Method | Endpoint |
|--------|----------|
| GET    | `/v4/:chain/tokenList` |

**Parameters:** `chain` (string, required).

**Response:** `code: 200`, `data`: array of tokens (id, code, name, address, decimals, symbol, icon, chain, etc.).

---

### 5.5 Dex List

| Method | Endpoint |
|--------|----------|
| GET    | `/v4/:chain/dexList` |

**Parameters:** `chain` (string, required).

**Response example:**  
`{ "code": 200, "data": [ { "index": 1, "code": "SushiSwap", "name": "SushiSwap" }, ... ] }`  
Use `index` in `enabledDexIds` / `disabledDexIds` for quote and swap.

---

### 5.6 Gas Price

| Method | Endpoint |
|--------|----------|
| GET    | `/v4/:chain/gasPrice` |

**Parameters:** `chain` (string, required).

**Response (EVM):** `data.base`, `data.standard` / `fast` / `instant` with legacyGasPrice, maxPriorityFeePerGas, maxFeePerGas, waitTimeEstimate; and `without_decimals`. Use the value **with decimals** for `/quote` and `/swap` (gasPriceDecimals).

---

### 5.7 Get Transaction

| Method | Endpoint |
|--------|----------|
| GET    | `/v4/:chain/getTransaction` |

**Parameters:** `chain`, `hash` (OpenOcean contract transaction hash).

**Response:** code 200, data with id, block_number, tx_hash, sender, receiver, in_token_address, out_token_address, in_amount, out_amount, referrer, tx_fee, status, etc.

---

### 5.8 Decode Input Data

| Method | Endpoint |
|--------|----------|
| GET or POST | `/v4/:chain/decodeInputData` |

**Parameters:**  
- GET: query params `chain`, `data` (inputData), `method` (e.g. swap).  
- POST: URL param `chain`; body `{ "data": "...", "method": "swap" }`.

**Response:** caller, desc (srcToken, dstToken, srcReceiver, dstReceiver, amount, minReturnAmount, guaranteedAmount, flags, referrer, permit), calls array.

---

## 6. Gasless Swap API

User signs a permit (no gas); relayer submits the transaction. Flow: get quote → user signs permit → POST swap with quote data + permit → poll order status.

### 6.1 Get Quote

| Method | Endpoint |
|--------|----------|
| GET    | `/v4/gasless/:chain/quote` |

**Parameters**

| Name              | Type   | Required | Description |
|-------------------|--------|----------|-------------|
| chain             | string | Yes      | Chain ID (e.g. 42161). |
| inTokenAddress    | string | Yes      | In token address. |
| outTokenAddress   | string | Yes      | Out token address. |
| amountDecimals    | string | Yes      | Token amount with decimals (e.g. 1 USDT 6 decimals → 1000000). |
| gasPriceDecimals  | string | Yes      | Gas price with decimals. |
| slippage          | number | No       | e.g. 1 for 1%. |
| referrer          | string | No       | Referrer address. |
| disabledDexIds    | string | No       | Disabled dex ids, comma-separated. |

**Response:** Same shape as Swap V4 quote plus fields needed for submit (e.g. from, to, data, minOutAmount, feeAmount1, feeAmount2, flag, hash). Save these for the Submit Gasless Swap step.

---

### 6.2 Submit Gasless Swap

| Method | Endpoint |
|--------|----------|
| POST   | `/v4/gasless/:chain/swap` |

**Path:** `chain` = chain ID (e.g. 42161).

**Request body (all from quote response or user):**

| Field             | Type   | Required | Description |
|-------------------|--------|----------|-------------|
| from              | string | Yes      | User wallet address. |
| to                | string | Yes      | From quote response. |
| data              | string | Yes      | From quote response. |
| amountDecimals    | number | Yes      | Token amount with decimals. |
| feeAmount1        | number | Yes      | From quote response. |
| feeAmount2        | number | Yes      | From quote response. |
| flag              | number | Yes      | From quote response. |
| gasPriceDecimals  | number | Yes      | Gas price. |
| deadline          | number | Yes      | Permit deadline (unix timestamp). |
| inToken           | string | Yes      | In token address. |
| outToken          | string | Yes      | Out token address. |
| nonce             | number | Yes      | Permit nonce. |
| permit            | string | Yes      | Permit signature data. |
| usdValuation      | number | Yes      | Trade volume in USD. |
| minOutAmount      | number | Yes      | From quote response. |
| hash              | string | Yes      | From quote response. |
| ceilingFee        | number | No       | For ETH; from quote if present. |

**Response (success):** `code: 0`, `msg: "ok"`, `orderHash`: use this for Get Order Status.

---

### 6.3 Get Order Status

| Method | Endpoint |
|--------|----------|
| GET    | `/v4/gasless/:chain/order` |

**Parameters:** `chain`, `orderHash` (from Submit Gasless Swap response).

**Response:** `code: 0`, `msg: "ok"`, `data`: { hash (tx hash), err }.

---

## 7. Limit Order API

Create and cancel limit orders; query orders by user address. Supported chain IDs: **1, 56, 146, 8453, 80094**.

### 7.1 Create Limit Order

| Method | Endpoint |
|--------|----------|
| POST   | `https://open-api.openocean.finance/v2/:chainId/limit-order` |

**Path parameter:** `chainId` (number): 1, 56, 146, 8453, 80094.

**Request body**

| Name            | Type   | Required | Description |
|-----------------|--------|----------|-------------|
| takerAsset      | string | Yes      | Token address (taker side). |
| makerAsset      | string | Yes      | Token address (maker side). |
| expireTime      | string | Yes      | Expiry time in milliseconds. |
| orderMaker      | string | Yes      | Wallet address of maker. |
| signature       | string | Yes      | wallet.signMessage(message). |
| takerAmount     | string | Yes      | Amount with decimals. |
| makerAmount     | string | Yes      | Amount with decimals. |
| referrer        | string | No       | EOA for tracking/fee. |
| referrerFee     | number | No       | 0.01–5 (e.g. 1 = 1%); OpenOcean shares 20% by default. |
| enabledDexIds   | string | No       | Dex index from dexList (overrides disabled). |
| disabledDexIds  | string | No       | Dex index, comma-separated (e.g. "2,6,9"). |

**Response (200):** `{ "code": 200 }`. Order details (e.g. orderHash) may be returned in response or via Get Limit Order by Address.

---

### 7.2 Cancel Limit Order

| Method | Endpoint |
|--------|----------|
| POST   | `/v2/:chainId/limit-order/cancelLimitOrder` |

**Path:** `chainId` (same as above).

**Request body:** `orderHash` (required, from create or list response), `signature` (optional, signature of orderHash).

**Response (200):** `{ "code": 200 }`.

---

### 7.3 Get Limit Orders by Address (single chain)

| Method | Endpoint |
|--------|----------|
| GET    | `/v2/:chainId/limit-order/address/:address` |

**Path:** `chainId`, `address` (user wallet).

**Query parameters**

| Name     | Type   | Description |
|----------|--------|-------------|
| statuses | string | e.g. [1,2,3]. 1=unfill, 2=fail, 3=cancel, 4=filled, 5=pending, 6=hash not exist, 7=expire. |
| limit    | number | Max number of orders to return. |

**Response:** `code: 200`, `data`: array of order objects (chainId, makerAmount, takerAmount, signature, orderHash, createDateTime, orderMaker, remainingMakerAmount, expireTime, statuses, data with maker/taker asset info, etc.).

---

### 7.4 Get All-Chain Limit Orders by Address

| Method | Endpoint |
|--------|----------|
| GET    | `/v2/limit-order/address/:address` |

Same query parameters as 7.3. Returns orders across all supported limit-order chains.

---

## 8. DCA API

Dollar-Cost Averaging: schedule repeated swaps (makerAsset → takerAsset) at an interval. Supported chain IDs: **8453, 146, 80094, 1, 999**.

### 8.1 Create DCA Order

| Method | Endpoint |
|--------|----------|
| POST   | `/v2/:chainId/dca/swap` |

**Path:** `chainId` (e.g. 8453, 146, 80094, 1, 999).

**Request body**

| Name            | Type   | Required | Description |
|-----------------|--------|----------|-------------|
| makerAmount     | string | Yes      | Total amount with decimals. Min per swap: Ethereum ≥$30, others ≥$5. |
| signature       | string | Yes      | wallet.signMessage(message). |
| orderMaker      | string | Yes      | Wallet address. |
| makerAsset      | string | Yes      | Token address (source). |
| takerAsset      | string | Yes      | Token address (target). |
| time            | number | Yes      | Interval in seconds (min 60). |
| times           | number | Yes      | Number of swaps. |
| minPrice        | string | No       | Price range lower bound. |
| maxPrice        | string | No       | Price range upper bound. |
| referrer        | string | No       | EOA for fee/tracking. |
| referrerFee     | string | No       | e.g. "1" = 1%, range 0–5%. |
| enabledDexIds   | string | No       | Dex index from dexList. |
| disabledDexIds  | string | No       | Dex index, comma-separated (e.g. "12,49,51,52"). |

**Example body (conceptual):**  
makerAmount total with decimals; time 300 (seconds); times 2; optional minPrice/maxPrice, referrer, referrerFee, disabledDexIds.

**Response (200):** `{ "code": 200 }`. Use Get DCA order by address to obtain orderHash for cancel or fill details.

---

### 8.2 Cancel DCA Order

| Method | Endpoint |
|--------|----------|
| POST   | `/v2/:chainId/dca/cancel` |

**Request body:** `orderHash` (required), `signature` (required).

**Response (200):** `{ "code": 200 }`.

---

### 8.3 Get DCA Orders by Address (single chain)

| Method | Endpoint |
|--------|----------|
| GET    | `/v2/:chainId/dca/address/:address` |

**Query:** `statuses` (array, default [1,3,4]: 1=unfill, 3=cancel, 4=filled, 5=pending, 6=hash not exist, 7=expire), `limit`.

**Response:** `code: 200`, `data`: array of DCA orders (chainId, makerAmount, takerAmount, orderHash, createDateTime, orderMaker, expireTime, statuses, time, times, haveFilled, minPrice, maxPrice, data with maker/taker asset info).

---

### 8.4 Get All-Chain DCA Orders by Address

| Method | Endpoint |
|--------|----------|
| GET    | `/v2/dca/address/:address` |

Same query as 8.3. Returns DCA orders across all supported DCA chains.

---

### 8.5 Get DCA Order Execution Details

| Method | Endpoint |
|--------|----------|
| GET    | `/v2/:chainId/dca/fill/:orderHash` |

**Response:** `code: 200`, `data`: array of fill records (orderHash, txHash, filledOrderTime, payment, paymentValue, status, reason).

---

## 9. Sweep Swap API

Swap **multiple** input tokens into **one** output token in a single transaction.

### 9.1 Multi Swap Quote

| Method | Endpoint |
|--------|----------|
| POST   | `/v3/:chain/multi_swap_quote` |

**Path:** `chain` (e.g. arbitrum).

**Request body**

| Name           | Type   | Description |
|----------------|--------|-------------|
| chain          | string | e.g. arbitrum. |
| inToken        | array  | Each element: inTokenSymbol, inTokenAddress, amount (with decimals), slippage (100 = 1%). |
| outToken       | object | outTokenSymbol, outTokenAddress. |
| gasPrice       | number | Gas price. |
| account        | string | User wallet address. |
| referrer       | string | Optional. |
| disabledDexIds | string | Optional; from dexList. |

**Example inToken:**  
`[{ "inTokenSymbol": "ETH", "inTokenAddress": "0xEee...", "amount": "1000000000000000000", "slippage": 1000 }, ...]`

**Response:** inToken/outToken info, from, to, swap array (inAmount, outAmount, minOutAmount per leg), gasPrice, chainId, value, data (calldata).

---

## 10. Zap API

Zap into liquidity pools (e.g. Uniswap V2/V3): swap and add liquidity in one flow. Base path: `/zap/:chain/in/...` (chain = chainId, e.g. 8453).

### 10.1 Get Route

| Method | Endpoint |
|--------|----------|
| POST   | `/zap/:chain/in/route` |

**Path:** `chain` (chainId, e.g. 8453).

**Request body**

| Name               | Type   | Required | Description |
|--------------------|--------|----------|-------------|
| dex                | string | Yes      | e.g. UNISWAP_V2, UNISWAP_V3. |
| pool               | string | Yes      | Pool contract address. |
| positionTickUpper  | number | No*      | *Required for Uniswap V3. Max tick of position. |
| positionTickLower  | number | No*      | *Required for Uniswap V3. Min tick of position. |
| tokens             | array  | Yes      | tokens[].token (address), tokens[].amount (with decimals). |
| slippage           | string | Yes      | Basis points 0–5000 (e.g. 100 = 1%). |
| referrer           | string | No       | Referrer address. |
| referrerFee        | number | No       | 0.01–50 (e.g. 100 = 1%); OpenOcean shares 30% by default. |

**Response:** code 200, data with chainId, poolDetail (poolId, dex, token0, token1), zapDetails (initialAmountUsd, actions, addedLiquidityUsd, zapImpact), route (opaque string for Build Route), routerAddress.

---

### 10.2 Build Route

| Method | Endpoint |
|--------|----------|
| POST   | `/zap/:chain/in/route/build` |

**Request body**

| Name     | Type   | Required | Description |
|----------|--------|----------|-------------|
| route    | string | Yes      | From Get Route response. |
| deadline | number | No       | Expiration time (unix seconds). |
| account  | string | Yes      | Wallet that will receive the new LP position. |
| permits  | array  | No       | For Permit2: permits[].token, permits[].permit. |

**Response:** code 200, data with zapDetails, to (router address), value, data (calldata for transaction).

---

## 11. Ticket API (Support)

Submit and list support tickets for quote/swap issues. Base path: `https://open-api.openocean.finance/v4/:referrer/ticket`. A valid **referrer** is required (contact OpenOcean if you do not have one).

### 11.1 Submit Ticket

| Method | Endpoint |
|--------|----------|
| POST   | `/v4/:referrer/ticket` |

**Path:** `referrer` (required).

**Request body**

| Name        | Type   | Required | Description |
|-------------|--------|----------|-------------|
| account     | string | Yes      | User wallet address. |
| hash        | string | No       | Transaction hash. |
| question    | string | No       | Question description. |
| quote       | object | No       | Quote request/response info. |
| transaction | object | No       | Transaction info (from, to, value, data, gasPrice, gasLimit). |
| error       | object | No       | Error details (e.g. code, message). |
| chain       | number | No       | Chain ID. |
| version     | string | No       | e.g. v2, v4. |

**Response:** `code: 0`, `msg: "ok"`, `data.ticket`: ticket ID (use for follow-up).

---

### 11.2 Get Ticket List by Referrer

| Method | Endpoint |
|--------|----------|
| GET    | `/v4/:referrer/ticket` |

**Path:** `referrer` (required).

**Response:** `code: 200`, `data`: array of tickets (hash, question, process, remark, answer, account, params, createAt).

---

## 12. Integration Best Practices

### 12.1 Typical Swap flow (Swap API V4)

1. **(Optional)** Get token list: `GET /v4/:chain/tokenList` to resolve symbols/addresses and decimals.
2. **Get gas price:** `GET /v4/:chain/gasPrice`; use the value with decimals for quote/swap.
3. **(Optional)** Check allowance: use OpenOcean allowance endpoint or chain RPC; ensure user has approved the swap contract for the input token.
4. **Token approval:** User approves the correct swap contract for the input token (max or sufficient amount).
5. **Quote:** `GET /v4/:chain/quote` with amountDecimals and gasPriceDecimals. Check `price_impact`; abort if above your threshold.
6. **Swap data:** `GET /v4/:chain/swap` with same params plus `account`. Use returned `to`, `value`, `data`, and optionally adjust gas.
7. **Send transaction:** User signs and broadcasts the transaction (e.g. via wallet or backend).

### 12.2 General notes

- **Price impact:** Treat `price_impact` as indicative; enforce a maximum on your side and reject or warn users if exceeded.
- **Gas:** Use `estimatedGas` only as a hint; prefer eth_estimateGas (or similar) and apply a multiplier (e.g. 1.25–2.5).
- **Amounts:** Always use full decimals (amountDecimals, gasPriceDecimals) for V4.
- **Referrer:** To earn fees, pass your EOA as `referrer` and set `referrerFee` within the allowed range; contact OpenOcean for custom splits.
- **Dex filtering:** Use dexList to get indices; then use enabledDexIds or disabledDexIds as needed.
- **GitHub examples:** Backend and frontend demos: [OpenOcean-API-Examples](https://github.com/openocean-finance/OpenOcean-API-Examples) (e.g. swap-api-demo, limit-order-api-demo, dca-api-demo).

---

## 13. Glossary

- **Chain ID:** Numeric identifier for a blockchain (e.g. 1 = Ethereum, 56 = BNB Chain).
- **Decimals:** Number of decimal places for a token (e.g. USDC 6, ETH 18). Amounts in API are in smallest units (e.g. 1 USDC = 1000000).
- **Dex:** Decentralized exchange. OpenOcean aggregates multiple DEXs; dexList returns available DEXs per chain.
- **EOA:** Externally Owned Account; a normal user wallet (not a contract).
- **Gasless swap:** User signs a permit; a relayer pays gas and submits the transaction.
- **Limit order:** Order to swap at a specified price (or better); executed when market conditions match.
- **Maker / Taker:** In limit orders, maker provides liquidity; taker fills. makerAsset/makerAmount vs takerAsset/takerAmount.
- **Permit:** Signature-based approval (e.g. EIP-2612) used in gasless flows instead of on-chain approve.
- **Referrer:** EOA used for partner attribution and optional fee share (referrerFee).
- **Slippage:** Maximum acceptable price movement; typically expressed as percentage (e.g. 1 = 1%). API may use basis points (100 = 1%) in some endpoints.
- **Swap contract:** OpenOcean’s aggregation contract on each chain; user approves this to spend tokens. Main EVM address: 0x6352a56caadC4F1E25CD6c75970Fa768A3304e64 (verify per chain in docs).
- **Zap:** Swap one or more tokens and add liquidity to a pool in a single transaction.

---

*For the latest list of supported chains, contract addresses, and optional parameters, use the [Swagger UI](https://open-api.openocean.finance/v4/swagger-ui.html) or the official OpenOcean documentation.*
