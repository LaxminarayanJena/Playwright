const {test} = require('@playwright/test')

//npm init playwright
//npx playwright test

//npx playwright test --headed



test('Browser Context Playwright test' , async ({browser})=>
{
    //asynchronous- no gurantee in sequentially
    //await
    //chrome -plugin/cookies
    const context= await browser.newContext();
    const page =await context.newPage();
     await page.goto("https://practicetestautomation.com/practice-test-login/");

});

test.only('Page Playwright test' , async ({page})=>
{
     await page.goto("https://www.google.com/");

});
