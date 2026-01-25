const { Before,BeforeStep,After,AfterStep,Status,setDefaultTimeout} = require('@cucumber/cucumber');

const { chromium } = require('@playwright/test');

setDefaultTimeout(60 * 1000);

Before(async function () {
  this.browser = await chromium.launch({
    headless: false,
    args: ['--start-maximized']
  });

  this.context = await this.browser.newContext({
    viewport: null
  });

  this.page = await this.context.newPage();
});

BeforeStep({ tags: '@correct' }, async function () {
  console.log('BeforeStep running only for @correct scenarios');
});

AfterStep(async function ({ result }) {
  if (result.status === Status.FAILED) {
    const screenshot = await this.page.screenshot({
      fullPage: true
    });
    await this.attach(screenshot, 'image/png');
  }
});

After(async function () {
  await this.page.close();
  await this.context.close();
  await this.browser.close();
});
