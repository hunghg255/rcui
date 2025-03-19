#!/usr/bin/env node
"use strict";var n=require("child_process"),e=process.argv.slice(2);(e.length<2||e[0]!=="add")&&(console.log("Usage: npx kibo-ui add [...packages]"),process.exit(1));var c=e.slice(1);for(let o of c){if(!o.trim())continue;console.log(`Adding ${o} component...`);let s=new URL(`registry/${o}.json`,"https://www.kibo-ui.com");(0,n.execSync)(`npx shadcn@latest add ${s.toString()}`)}
