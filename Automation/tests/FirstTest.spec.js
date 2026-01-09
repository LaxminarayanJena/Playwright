const {test ,expect} = require('@playwright/test')

//npm init playwright
//npx playwright test

//npx playwright test --headed




test.only('Browser Context Playwright test' , async ({browser})=>
{
    //asynchronous- no gurantee in sequentially
    //await
    //chrome -plugin/cookies
    const context= await browser.newContext();
    const page =await context.newPage();
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.getByRole('textbox', { name: 'Username' }).fill(" student");
    await page.locator("[id*='password']").fill(" Password123ss");
    await page.getByRole('button', { name: 'Submit' }).click();

    console.log(await page.locator("[id*='error']").textContent());
});

test('Page Playwright test' , async ({page})=>
{
     await page.goto("https://www.google.com/");
     console.log(await page.title)
     await expect(page).toHaveTitle('Google');


});
