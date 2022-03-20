const puppeteer = require('puppeteer');

async function scrapePage(url){

    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('/html/body/div[1]/div/main/div[1]/div[1]/div[2]/div[1]/button/span');
    const text = await el.getProperty('textContent');
    const likes = await text.jsonValue();

    const [el2] = await page.$x('//*[@id="__next"]/div/main/div[1]/div[1]/div[2]/div[1]/div[2]/p[2]');
    const title = await el2.getProperty('textContent');
    const listing = await title.jsonValue();

    const [el3] = await page.$x('//*[@id="__next"]/div/main/div[1]/div[1]/div[1]/div/div[1]/div[2]/ul/li[1]/div/img');
    const src = await el3.getProperty('src');
    const image = await src.jsonValue();

    browser.close();

    console.log({likes, listing, image})

    return {likes, listing, image}
}

module.exports = {
    scrapePage 
}