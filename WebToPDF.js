// required dependencies
const puppeteer = require("puppeteer");
const fs = require("fs");

async function createPDf(pathOrLink, pdfName, pdfFormat, background) {
  try {
    const browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    // replace the link in the goto to the link where the html file is (should be a url)
    await page.goto(pathOrLink, {
      waitUntil: "networkidle0",
      timeout: 10000,
    });


    await page.pdf({
      path: pdfName, //string
      format: pdfFormat, //string
      printBackground: background, //boolean
    });

    console.log("Done");
    await browser.close();
    process.exit();
  } catch (err) {
    throw err;
  }
}
