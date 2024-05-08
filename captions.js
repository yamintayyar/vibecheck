import puppeteer from 'puppeteer';
import Sentiment from 'sentiment';

var sentiment = new Sentiment();
var options = {
  extras: {
    '[ __ ]' : -5
  }
}; //transcript will not include swears, let each one count for -10 points

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

    const captions = await page.evaluate( async () => {
        const txt = getTextWithSpaces(document.getElementById("demo"));
        return Promise.resolve(txt);
    });    
    console.log(captions);    

    var sa = sentiment.analyze(captions);
    var comp =  sa['comparative']; //gets comparative score between -5,5
    var sc = sa['score'];

    //console.log('score = ' + sc + ', comp score = ' + comp);
    console.log(sa);

    await browser.close();    

};