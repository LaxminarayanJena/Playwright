const { test, expect } = require('@playwright/test');
const { Console } = require('console');

//C:\PlayWright\Automation> run from project root not from test folder
//npm init playwright
//npx playwright test (run from project root-Automation not from test folder)
//npx playwright test --headed
//npx playwright test tests/EndToEnd.spec.js
//npx playwright test --ui
//npc playwright test --debug CLS
/*  package.json for api debugging
 "scripts": {
"test": "npx playwright test tests/API.spec.js"
},
//npm install

//shift ctrl p -debug npm script

*/
//trace: 'on' , in config.js
//npx playwright codegen  (play and record)
//shift + alt + f - formatting
//shift + alt + a - multi comment



test('Browser Context Playwright test', async ({ browser }) => {
     //asynchronous- no gurantee in sequentially
     //await
     //chrome -plugin/cookies
     //pass browser(fixture) if u want to parametrise from config
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

});

test('Popup validations And FRAME Validations', async ({ page }) => {
     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
     //await page.goto("https://www.google.com/");
     // await page.goBack();
     // await page.goForward();
     await page.locator("#hide-textbox").click();
     await expect(page.locator("#displayed-text")).toBeHidden();
     page.on('dialog', dialog => dialog.accept()); //Dialog handler should be registered before clicking
     await page.locator("#confirmbtn").click();
     await page.locator("#mousehover").hover();

     const framesPage = page.frameLocator("#courses-iframe");
     await framesPage.locator("li a[href*='lifetime-access']:visible").click();
     console.log(await framesPage.locator(".text h2").textContent());


});


test('Screenshot and partial screenshot', async ({ page }) => {
     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
     await page.locator("#displayed-text").screenshot({ path: 'partialscreenshot.png' });
     await page.locator("#hide-textbox").click();
     await expect(page.locator("#displayed-text")).toBeHidden();
     await page.screenshot({ path: 'screenshot.png' })
     page.on('dialog', dialog => dialog.accept()); //Dialog handler should be registered before clicking
     await page.locator("#confirmbtn").click();


});


test('visual', async ({ page }) => {
     await page.goto("https://rahulshettyacademy.com/angularpractice/");
     expect(await page.screenshot()).toMatchSnapshot('landing.png');
     //Stored in tests/FirstTest.spec.js-snapshot folder
})


test.only('Upload and Download', async ({ page }) => {
     await page.goto('https://rahulshettyacademy.com/upload-download-test/index.html');
     const downloadDir = 'C:\\PlayWright\\Excel';
     const path = require('path');
     const fs = require('fs');
     const ExcelUtil = require('../../Excel/ExcelUtil');
     const UpdatedText="9678";

     if (!fs.existsSync(downloadDir)) {
          fs.mkdirSync(downloadDir, { recursive: true });
     }
     const [download] = await Promise.all([
          page.waitForEvent('download'),
          page.locator('#downloadButton').click()
     ]);

     const filePath = path.join(downloadDir, 'download.xlsx');
     await download.saveAs(filePath);

     console.log('File saved at:', filePath);
     await ExcelUtil.updateCellByPosition(
          filePath,
          'Sheet1',
          5,
          4,
          UpdatedText
     );

     await page.locator('#fileinput').setInputFiles(filePath);

 const desiredRow = await page.getByRole('row').filter({ has: page.getByText("Banana") });
  await expect(desiredRow.locator('#cell-4-undefined')).toContainText(UpdatedText);
});




