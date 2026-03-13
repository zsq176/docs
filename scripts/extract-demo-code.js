const fs = require("fs");
const path = require("path");
const base = path.resolve(__dirname, "..");
const mdPath = path.join(base, "docs/developer/apis/gasless-swap-api/demo-code.md");
const md = fs.existsSync(mdPath)
  ? fs.readFileSync(mdPath, "utf8")
  : "";
const match = md.match(/```javascript\r?\n([\s\S]*?)```\s*/);
if (!match) {
  if (!md) {
    console.log("docs/developer/.../demo-code.md not found, skipping extract-demo-code.");
    process.exit(0);
  }
  console.error("No match. Length:", md.length);
  const idx = md.indexOf("```javascript");
  console.error("Index of ```javascript:", idx);
  console.error("Last 100 chars:", JSON.stringify(md.slice(-100)));
  process.exit(1);
}
let code = match[1];
code = code.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
fs.writeFileSync(
  path.join(base, "lib/gasless-demo-code-escaped.txt"),
  code,
  "utf8"
);
const tsContent = "export const gaslessDemoCode = `\n" + code + "\n`;\n";
fs.writeFileSync(
  path.join(base, "lib/gasless-demo-code.ts"),
  tsContent,
  "utf8"
);
console.log("Written", code.length);
