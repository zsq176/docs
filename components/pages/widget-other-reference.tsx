"use client"

import { CodeBlock } from "@/components/docs/code-block"

const nginxConfig = `server {
  listen 80;
  server_name app.openocean.net;

  proxy_ssl_server_name on;
  proxy_ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection "upgrade";
  proxy_set_header Host "widget.openocean.finance";
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Real-PORT $remote_port;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  client_max_body_size 20m;
  location / {
    proxy_pass https://widget.openocean.finance;
  }
}
`

const frontendConfig = `<script>
  document.domain = "openocean.net";
</script>
<iframe src="https://app.openocean.net?domain=openocean.net"></iframe>
`

export function WidgetOtherReferenceContent() {
  return (
    <>
      <h2 className="text-2xl font-bold mt-10 mb-4">Custom Mode</h2>
      <p className="text-muted-foreground max-w-3xl mb-6">
        To address this issue, you can configure your server nginx like below, and the frontend iframe config should be the same as the OpenOcean widget.
      </p>

      <h4 className="text-lg font-semibold mt-8 mb-2">Step 1 - Config nginx</h4>
      <CodeBlock code={nginxConfig} language="nginx" className="mb-8" />

      <h4 className="text-lg font-semibold mt-8 mb-2">Step 2 - Config Front-end （for example: openocean.net）</h4>
      <CodeBlock code={frontendConfig} language="html" />
    </>
  )
}
