#!/usr/bin/env node
"use strict";var n=require("child_process"),c=process.argv.slice(2);(c.length<2||c[0]!=="add")&&(console.log("Usage: npx rcui-cli add [...packages]"),process.exit(1));var s=c.slice(1);for(let e of s){if(!e.trim())continue;console.log(`Adding ${e} component...`);let o=new URL(`registry/${e}.json`,"https://www.rcui.vercel.app");(0,n.execSync)(`npx shadcn@latest add ${o.toString()}`)}
