const { test, expect } = require('@playwright/test');
const { Console } = require('console');



test.describe.configure({mode:'parallel'});
//test.describe.configure({mode:'serial'}); interdependent mode

test.skip('Browser Context Playwright test', async ({ browser }) => {
     const context = await browser.newContext();
     const page = await context.newPage();
     await page.goto("https://practicetestautomation.com/practice-test-login/");
     await page.getByRole('textbox', { name: 'Username' }).fill(" student");
     await page.locator("[id*='password']").fill(" Password123ss");
     await page.getByRole('button', { name: 'Submit' }).click();
     console.log(await page.locator("[id*='error']").textContent());
     await expect(page.locator("[id*='error']")).toContainText('Your username is invalid!')
});

test('Page Playwright test', async ({ page }) => {
     await page.goto("https://www.google.com/");
     console.log(await page.title)
     await expect(page).toHaveTitle('Google');


});


test('practice Context Playwright test', async ({ browser }) => {
     const context = await browser.newContext();
     const page = await context.newPage();
     const password = page.locator("[type='password']")
     const error = page.locator("[id*='error']")
     const cardTitles = page.locator(".card-body a")
     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
     await page.getByRole('textbox', { name: 'Username:' }).fill("rahulshettyacademy");
     await password.fill("learning");
     await await page.getByRole('button', { name: 'Sign In' }).click();
     console.log(await cardTitles.first().textContent());
     console.log(await cardTitles.nth(1).textContent());
     // await page.waitForLoadState('networkidle');//discouraged
     //await cardTitles.waitFor(); //encouraged
     //await cardTitles.first().waitFor(); //encouraged
     const allTitles = await cardTitles.allTextContents() //playwright will not wait
     console.log(allTitles)

     //await page.waitForTimeout(6000); // waits for 2 seconds


});

