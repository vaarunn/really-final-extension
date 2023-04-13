// import puppeteer from "puppeteer";
// import fs from "fs";
// const Puppy = async (url) => {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//   await page.goto("https://linuxhint.com/import-export-javascript/");

//   console.log(url);

//   const pageText = await page.evaluate(() => {
//     return Array.from(document.querySelectorAll("body *"))
//       .map((element) => element.textContent.trim().replace(/\s+/g, " "))
//       .join(" ");
//   });

//   fs.writeFile("content.json", JSON.stringify(pageText), (err) => {
//     if (err) throw err;
//     console.log("Content written to file!");
//   });

//   // console.log(pageText);

//   await browser.close();
// };

// Puppy();

// export default Puppy;
