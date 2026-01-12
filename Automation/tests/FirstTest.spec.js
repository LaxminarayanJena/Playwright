const { test, expect } = require('@playwright/test')

//npm init playwright
//npx playwright test
//npx playwright test --headed
//npx playwright test tests/EndToEnd.spec.js
//npx playwright test --ui
//shift + alt + f - formatting
//shift + alt + a - multi comment






test('Browser Context Playwright test', async ({ browser }) => {
     //asynchronous- no gurantee in sequentially
     //await
     //chrome -plugin/cookies
     //pass browser if u want to parametrise from config
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




test('UI CONTROL', async ({ browser }) => {
     const context = await browser.newContext();
     const page = await context.newPage();
     const password = page.locator("[type='password']")
     const error = page.locator("[id*='error']")
     const cardTitles = page.locator(".card-body a")
     const documentLink = page.locator("[href*='documents-request']");
     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
     await page.getByRole('textbox', { name: 'Username:' }).fill("rahulshettyacademy");
     await password.fill("learning");
     const dropdown = page.locator("select.form-control");
     dropdown.selectOption("consult");
     await page.locator(".radiotextsty").last().click();
     await page.locator("#okayBtn").click();
     console.log(await page.locator(".radiotextsty").last().isChecked());
     await expect(page.locator(".radiotextsty").last()).toBeChecked();
     await page.locator("#terms").click();
     await expect(page.locator("#terms")).toBeChecked();
     await page.locator("#terms").uncheck();
     expect(await page.locator("#terms").isChecked()).toBeFalsy();
     await expect(documentLink).toHaveAttribute("class", 'blinkingText');


     //await await page.getByRole('button', { name: 'Sign In' }).click();
     //console.log(await cardTitles.first().textContent());
     //console.log(await  cardTitles.nth(1).textContent());
     // await page.waitForLoadState('networkidle');//discouraged
     //await cardTitles.waitFor(); //encouraged
     //await cardTitles.first().waitFor(); //encouraged
     //const allTitles =await cardTitles.allTextContents() //playwright will not wait
     //console.log(allTitles)

     await page.waitForTimeout(3000); // waits for 2 seconds


});


test('CHILD TAB CONTROL', async ({ browser }) => {
     const context = await browser.newContext();
     const page = await context.newPage();
     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
     const documentLink = page.locator("[href*='documents-request']");

     //listen for any new page pending,rejected,fullfiled
     // const [newPage,newPage2] = await Promise.all( //if 2 windows opned

     const [newPage] = await Promise.all(
          [context.waitForEvent('page'),
          documentLink.click(),
          ])

     const text = await newPage.locator(".red").textContent();
     console.log(text)

     const arrayText = text.split("@")
     console.log(arrayText);
     const domain = arrayText[1].split(" ")[0]
     console.log(domain);

      await page.getByRole('textbox', { name: 'Username:' }).fill(domain);
      console.log(await page.locator("#username").inputValue());
      await page.pause();





















});

