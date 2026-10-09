import { chromium } from "playwright";
import fs from "node:fs/promises";
const sites=[
 ["pooja-publication","https://poojapublication.com/"],
 ["lixus-spaces","https://lixusspaces.com/"],
 ["focus-education","https://focusedu.org/"],
 ["titan-energy","https://titanenergy.qa/"],
 ["arun-waghmode","https://arunwaghmode.com/"],
 ["coach-nilkamal","https://coachnilkamal.com/"],
 ["lalit-bhargav","https://lalitbhargav.com/"],
 ["ritta-nairr","https://rittanairr.com/"],
 ["powertech-energy","https://powertechenergysolutions.com/"],
 ["ajarkhi","https://ajarkhi.com/"]
];
await fs.mkdir("assets/projects",{recursive:true});
const browser=await chromium.launch({headless:true});
for(const [name,url] of sites){
 const page=await browser.newPage({viewport:{width:1440,height:1000},deviceScaleFactor:1});
 try{
   await page.goto(url,{waitUntil:"domcontentloaded",timeout:90000});
   await page.waitForTimeout(7000);
   await page.screenshot({path:`assets/projects/${name}.png`,fullPage:false});
 }catch(error){console.error(name,error.message)}
 await page.close();
}
await browser.close();
