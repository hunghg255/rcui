#!/usr/bin/env node
import{execSync as o}from"node:child_process";var c=process.argv.slice(2);(c.length<2||c[0]!=="add")&&(console.log("Usage: npx rcui-cli add [...packages]"),process.exit(1));var s=c.slice(1);for(let e of s){if(!e.trim())continue;console.log(`Adding ${e} component...`);let n=new URL(`registry/${e}.json`,"https://rcui.vercel.app");o(`npx shadcn@latest add ${n.toString()}`)}
