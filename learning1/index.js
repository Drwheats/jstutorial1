// in a new folder be sure to run "npm init -y" and "npm install puppeteer"
const puppeteer = require("puppeteer")
const fs = require("fs.promises")
const nodemailer = require('nodemailer')
const CronJob = require('cron').CronJob;
const cheerio = require('cheerio')

async function start() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://www.amazon.ca")
    await page.type("#twotabsearchtextbox", "e scooter")
    await Promise.all([page.click("#nav-search-submit-button"), page.waitForNavigation()])
    // logs our search query to console
    const myResult = await page.$eval(".a-color-state", element => element.textContent)


    await console.log(`Results for : ${myResult}:`)
    const box = await page.$$eval('s-result-item', guy => guy)
    let i = 0;
    box.forEach(guy => console.log(guy.textContent)
    );
    console.log(box)

    // div.sg-col-4-of-12:nth-child(6)


    // const names = await page.evaluate(() => {
    //    return Array.from(document.querySelectorAll(".info strong")).map(x => x.textContent)
    // })
    // await fs.writeFile("names.txt", names.join("\r\n"))
    //
    // await page.click("#clickme")
    // const clickedData = await page.$eval("#data", el => el.textContent)
    // console.log(clickedData)
    //
    //
    //
    // await page.type("#ourfield", "blue")
    // await Promise.all([page.click("#ourform button"), page.waitForNavigation()])
    // const info = await page.$eval("#message", el => el.textContent)
    //
    // console.log(info)
    // const photos = await page.$$eval("img", imgs => {
    //     return imgs.map(x => x.src)
    // })
    // for (const photo of photos) {
    //     const imagepage = await page.goto(photo)
    //     await fs.writeFile(photo.split("/").pop(), await imagepage.buffer())
    // }

    await browser.close()
}

start()