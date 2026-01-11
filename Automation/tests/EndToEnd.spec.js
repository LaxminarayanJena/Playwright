const { test, expect } = require('@playwright/test')

test.only('EndToEnd', async ({ browser }) => {
      const context = await browser.newContext();
      const page = await context.newPage();
      const productName = "ZARA COAT 3";
      const products = page.locator(".card-body");
      const password = page.locator("[type='password']")
      await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
      await page.getByRole('textbox', { name: 'email@example.com' }).fill("qatest123@gmail.com");
      await page.locator("[id*='userPassword']").fill("Learning@123");
      await page.locator("[id='login']").click();
      await page.waitForLoadState('networkidle')
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
      await page.locator("div li").first().waitFor();
      const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible()
      expect(bool).toBeTruthy();
      await page.locator("text=Checkout").click();

      await page.locator("[placeholder*='Select Country']").pressSequentially("Ind", { delay: 150 });

      const dropdown = page.locator(".ta-results");
      await dropdown.waitFor();
      const optionsCount = await dropdown.locator("button").count();
      for (let i = 0; i < optionsCount; i++) {
            const text = await dropdown.locator("button").nth(i).textContent();
            if (text === " India") {
                  await dropdown.locator("button").nth(i).click();
                  break;
            }
      }

      await expect(page.locator(".user__name [type='text']").first()).toHaveText("qatest123@gmail.com");
      await page.locator(".action__submit").click();

      await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
      const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
      console.log(orderId)


      await page.locator("button[routerlink*='myorders']").click();
      await page.locator("tbody").waitFor();

      const rows = await page.locator("tbody tr");

      for (let i = 0; i < await rows.count(); i++) {
            const rowOrderId = await rows.nth(i).locator("th").textContent();
            if (orderId.includes(rowOrderId)) {
                  await rows.nth(i).locator("button").first().click();
            }
      }

      const orderIdDetails = await page.locator(".col-text").textContent();
      expect(orderId.includes(orderIdDetails)).toBeTruthy();



      // await page.pause();
});


