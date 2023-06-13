import puppeteer from 'puppeteer';
//const puppeteer = require('puppeteer');

describe('Popover widget', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    }, 80000);

    page = await browser.newPage();
  });

  test('Widget should render on page start', async () => {
    await page.goto('http://localhost:9000');

    await page.waitForSelector('.widget');
  }, 20000);

  test('Widget buttons should show popover on click and close popover on next click', async () => {
    await page.goto('http://localhost:9000');

    await page.waitForSelector('.widget');

    const widget = await page.$('.widget');
    const buttons = await widget.$$('.btn');

    for (let button of buttons) {
      await button.click();
      await page.waitForSelector('.popover');

      await button.click();
      const popovers = await page.$$('.popover')
      expect(popovers.length).toBe(0)      
    }
  }, 80000);

  afterEach(async () => {
    await browser.close();
  });
});
