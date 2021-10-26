const puppeteer = require('puppeteer');
const moment = require('moment');

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

    async radio(query, timeout, max_length = 10) {
        const browser = await puppeteer.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
            headless: false
        },);
        const page = await browser.newPage();
        await page.goto(query);


        const titleSelector = await page.waitForSelector('a.yt-simple-endpoint > h3 > span#video-title', {timeout: timeout})
        const hrefSelector = await page.waitForSelector('a.yt-simple-endpoint.style-scope.ytd-compact-video-renderer', {timeout: timeout})
        const videoLengthSelector = await page.waitForSelector('a.yt-simple-endpoint.inline-block.style-scope.ytd-thumbnail > div.style-scope.ytd-thumbnail > ytd-thumbnail-overlay-time-status-renderer > span.style-scope.ytd-thumbnail-overlay-time-status-renderer', {timeout: timeout})

        let videoLength = await (await videoLengthSelector.evaluate(el => el.textContent)).trim();
        let seconds = moment.duration(videoLength).asSeconds()


        //
        // const test = await page.$$('ytd-compact-video-renderer',(element=>{console.log(element.textContent)}));
        // const text = await page.evaluate(() => Array.from(document.querySelectorAll('ytd-compact-video-renderer'), element => {
        //     console.log(element)
        // }));

        // console.log(text[0])
        // text.forEach(e => {
        //      console.log('h' + e)
        // })

        let n = await page.evaluate(() => {
            console.log(document.querySelectorAll('ytd-compact-video-renderer'));
            /*      let divs = [...document.querySelectorAll('ytd-compact-video-renderer')]
                  console.log(divs);
                  return divs.map((div)=>{return div.textContent});*/
        })
        console.log(n);

        let result = {

            title: (await titleSelector.evaluate(el => el.textContent)).trim(),
            url: 'https://youtube.com' + await hrefSelector.evaluate(el => el.getAttribute('href')),
            length: (await videoLengthSelector.evaluate(el => el.textContent)).trim()
        }

        await browser.close();
        return result;
    }

}

