import { chromium } from "playwright";
import fs from "node:fs/promises";
const sites=[
  ["pooja-publication","https://poojapublication.com/"],
  ["lixus-spaces","https://lixusspaces.com/"],
  ["focus-education","https://focusedu.org/"],
  ["titan-energy","https://titanenergy.qa/"]
];
await fs.mkdir("assets/projects",{recursive:true});
const browser=await chromium.launch({headless:true});
const page=await browser.newPage({viewport:{width:1440,height:1000},deviceScaleFactor:1});
for(const [name,url] of sites){
  await page.goto(url,{waitUntil:"networkidle",timeout:90000}).catch(async()=>page.goto(url,{waitUntil:"domcontentloaded",timeout:90000}));
  await page.waitForTimeout(4000);
  await page.screenshot({path:`assets/projects/${name}.png`,fullPage:false});
}
await browser.close();
