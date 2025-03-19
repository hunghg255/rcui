#!/usr/bin/env node
import{execSync as s}from"node:child_process";var e=process.argv.slice(2);(e.length<2||e[0]!=="add")&&(console.log("Usage: npx kibo-ui add [...packages]"),process.exit(1));var c=e.slice(1);for(let o of c){if(!o.trim())continue;console.log(`Adding ${o} component...`);let n=new URL(`registry/${o}.json`,"https://www.kibo-ui.com");s(`npx shadcn@latest add ${n.toString()}`)}
