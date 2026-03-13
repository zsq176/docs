"use client"

import * as React from "react"
import { CodeBlock } from "@/components/docs/code-block"

export function DCAApiWebsocketGuideContent() {
  return (
    <div className="space-y-12">
      <section id="dca-websocket-doc" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">DCA (Dollar Cost Averaging) API Integration Documentation</h2>
        <h3 className="text-xl font-semibold mt-6 mb-3">Overview</h3>
        <p className="text-muted-foreground max-w-3xl leading-relaxed mb-4">
          The OpenOcean Socket Data Push service provides real-time event streaming via <strong className="text-foreground">Socket.IO</strong> over WebSocket transport.
        </p>
        <p className="text-muted-foreground max-w-3xl leading-relaxed mb-4">
          This service allows clients to subscribe to user-specific data streams using a wallet address. Once subscribed, the server pushes live updates automatically.
        </p>
        <p className="text-muted-foreground max-w-3xl leading-relaxed">
          This document explains how to connect, subscribe, handle events, and implement best practices for production usage.
        </p>
      </section>

      <section id="api-base" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">API Base Information</h2>
        <h3 className="text-lg font-semibold mt-4 mb-2">Base Endpoint</h3>
        <CodeBlock code="https://open-api.openocean.finance/socket" language="text" />
        <h3 className="text-lg font-semibold mt-4 mb-2">Custom Path</h3>
        <p className="text-muted-foreground max-w-3xl mb-2">
          The service uses a custom Socket.IO path. Make sure the <code className="rounded bg-muted px-1 py-0.5">path</code> option is configured correctly.
        </p>
        <CodeBlock code="/v1/socket" language="text" />
        <h3 className="text-lg font-semibold mt-4 mb-2">Transport Protocol</h3>
        <p className="text-muted-foreground max-w-3xl mb-2">
          Only WebSocket transport is recommended:
        </p>
        <CodeBlock code="transports: ['websocket']" language="javascript" />
      </section>

      <section id="example" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Example (Node.js)</h2>
        <CodeBlock
          code={`const ioClient = require('socket.io-client');

const socket = ioClient('https://open-api.openocean.finance/socket', {
    path: '/v1/socket',
    transports: ['websocket'],
    reconnection: true,
});

socket.on('connect', () => {
    console.log('connect!');
    socket.emit('subscribe', {
        address: '0x677883Ea48511bD266D09bEFefc0A925E5e1C01F'
    });
});

socket.on('data', (msg) => {
    console.log('received:', msg);
});

socket.on('connect_error', (err) => {
    console.error('connect_error', err);
});

socket.on('disconnect', (reason) => {
    console.log('disconnect:', reason);
});`}
          language="javascript"
        />
      </section>

      <section id="socket-event-data" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Socket Event Data</h2>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground max-w-3xl mb-4">
          <li>To receive real-time updates, emit a <code className="rounded bg-muted px-1 py-0.5">subscribe</code> event with your wallet address</li>
          <li>All real-time messages are delivered via the <code className="rounded bg-muted px-1 py-0.5">data</code> event</li>
          <li>event_type: dca_filled, limitorder_filled</li>
        </ul>
        <p className="font-medium mb-2">Example Data Payload:</p>
        <CodeBlock
          code={`{
  "event_type": "dca_filled",
  "data": {
    "chainId": 56,
    "makerAsset": "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
    "takerAsset": "0xfde4c96c8593536e31f229ea8f37b2ada2699bb2",
    "makerAmount": "20000000",
    "makerAddress": "0x...",
    "txHash": "0x...",
    "orderHash": "0x..."
  }
}`}
          language="json"
        />
      </section>

      <section id="support" className="scroll-mt-20">
        <h2 className="text-2xl font-bold mb-4">Support</h2>
        <p className="text-muted-foreground max-w-3xl mb-2">
          For technical support or questions about the API:
        </p>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground max-w-3xl">
          <li>Check the <a href="https://docs.openocean.finance" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">OpenOcean Documentation</a></li>
          <li>Contact the development team</li>
          <li>Review error logs and API responses</li>
        </ul>
      </section>
    </div>
  )
}
