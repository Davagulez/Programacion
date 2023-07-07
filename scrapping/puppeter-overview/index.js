const Puppeteer = require("puppeteer");
const fs = require("fs/promises");

async function oneWebPage() {
    const browser = await Puppeteer.launch(
       {
              headless: false,
              slowMo: 200,
       }
    );
    const page = await browser.newPage();
    await page.goto("https://www.google.com");
    await browser.close();
}

/* oneWebPage(); */

async function captureScreenshot() {
    const browser = await Puppeteer.launch(
       {
              headless: false,
              slowMo: 200,
       }
    );
    const page = await browser.newPage();
    await page.goto("https://www.google.com");
    await page.screenshot({ path: "google.png" });
    await browser.close();
}

/* captureScreenshot(); */

async function navigateWebPage() {
    const browser = await Puppeteer.launch(
       {
              headless: false,
              slowMo: 200,
       }
    );
    const page = await browser.newPage();

    await page.goto("https://quotes.toscrape.com");
    await page.click('a[href="/login"]');
    await new Promise((r) => setTimeout(r, 4000));
    await browser.close();
}

/* navigateWebPage(); */

async function getDataFromWebPag() {
    const browser = await Puppeteer.launch(
        {
               headless: false,
               slowMo: 200,
        }
     );
     const page = await browser.newPage();
 
     await page.goto("https://example.com");
     const result = await page.evaluate(() => {
        const title =  document.querySelector("h1").innerText;
        const description = document.querySelector("p").innerText;
        const more = document.querySelector("a").innerText;
        return {
            title,
            description,
            more    
        }
     });
     console.log(result)
     await browser.close();
}

/* getDataFromWebPag(); */

async function handleDynamicWebPage() {
    const browser = await Puppeteer.launch(
        {
               headless: false,
               slowMo: 500,
        }
    );
    const page = await browser.newPage();
 
    await page.goto("https://quotes.toscrape.com");
        
    const result = await page.evaluate(() => {
        const quotes = document.querySelectorAll('.quote');
        const data = [...quotes].map((quote) => {
            const quoteText = quote.querySelector('.text').innerText;
            const author = quote.querySelector('.author').innerText;
            const tags = [...quote.querySelectorAll('.tag')].map((tag) => tag.innerText);
            return {
                quoteText,
                author,
                tags
            }
        });
        return data;
    });
    console.log(result);
    await fs.writeFile('quotes.json', JSON.stringify(result, null, 2));
    await browser.close();
}

handleDynamicWebPage();