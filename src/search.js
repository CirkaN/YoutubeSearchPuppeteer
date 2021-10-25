const puppeteer = require('puppeteer');


export class Search {

    async singleSearch(query, timeout, delay) {

        const browser = await puppeteer.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });
        const page = await browser.newPage();
        await page.goto('https://youtube.com');

        await page.type("input#search", query, {delay: delay});
        await page.click('#search-icon-legacy')


        const element = await page.waitForSelector('a#video-title', {timeout: timeout})

        let result = {
            title: await element.evaluate(el => el.getAttribute('title')),
            url: 'https://youtube.com' + await element.evaluate(el => el.getAttribute('href')),
        }

        await page.waitForTimeout(4000)
        await browser.close();

        return result
    }

    async radio(query, timeout) {
        const browser = await puppeteer.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });
        const page = await browser.newPage();
        await page.goto(query);

        const titleSelector = await page.waitForSelector('a.yt-simple-endpoint > h3 > span#video-title', {timeout: timeout})
        const hrefSelector = await page.waitForSelector('a.yt-simple-endpoint.style-scope.ytd-compact-video-renderer', {timeout: timeout})


        let result = {
            title: (await titleSelector.evaluate(el => el.textContent)).trim(),
            url: 'https://youtube.com' + await hrefSelector.evaluate(el => el.getAttribute('href')),
        }

        await browser.close();
        return result;
    }
}

