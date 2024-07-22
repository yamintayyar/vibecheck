import puppeteer from 'puppeteer';

//NOTE: caption algorithm will not retrieve swears; may need to find workaround / different
//method of getting caption

const caption = async (id) => {

    const browser = await puppeteer.launch({
      headless: true,
      defaultViewport:null,
      });

    const page = await browser.newPage();

    await page.goto("https://youtubetranscript.com/?v=" + id, {
      waitUntil: "networkidle0",
    });

    console.log("pg loaded, url = " + page.url());

    const captions = await page.evaluate( async () => { //gives captions
        const txt = getTextWithSpaces(document.getElementById("demo"));
        return Promise.resolve(txt);
    });  

    console.log(captions);    

    await browser.close();    

};

caption('A5ucvNAENjU');