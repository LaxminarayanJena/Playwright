const { test, expect } = require('@playwright/test');
let webContext;

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.getByRole('textbox', { name: 'email@example.com' }).fill("qatest123@gmail.com");
    await page.locator("[id*='userPassword']").fill("Learning@123");
    await page.locator("[id='login']").click();
    await page.waitForLoadState('networkidle');
    await context.storageState({ path: 'state.json' });
    webContext = await browser.newContext({ storageState: 'state.json' });


})

test('Local Storage TestCase1', async () => {
    const productName = "ZARA COAT 3";
    const page = await webContext.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    await page.waitForLoadState('networkidle');
    const products = page.locator(".card-body");
    const password = page.locator("[type='password']")
    await page.locator(".card-body b").first().waitFor();
    const title = await page.locator(".card-body b").allTextContents();
    console.log(title)
    const count = await products.count();
    for (let i = 0; i < count; i++) {
        if (await products.nth(i).locator("b").textContent() === productName)
        //  === (strict equality)Compares both value and type
        {
            await products.nth(i).locator("text= Add To Cart").click();
            break;

        }
    }

    await page.locator("[routerlink*='cart']").click();
  
});


test('Local Storage TestCase 2', async () => {
    const page = await webContext.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    await page.waitForLoadState('networkidle');
    const title = await page.locator(".card-body b").allTextContents();
    console.log(title)

});


