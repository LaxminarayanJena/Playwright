const { test, expect } = require('@playwright/test')

test('New Locators', async ({ browser }) => {
      const context = await browser.newContext();
      const page = await context.newPage();
      await page.goto("https://rahulshettyacademy.com/angularpractice/");
      await page.getByLabel("Check me out if you Love IceCreams!").click();
      await page.getByLabel("Employed").check();
      await page.getByLabel("Gender").selectOption("Female");
      //<label for="exampleFormControlSelect1">Gender</label>
      //getByLabel -works on selection and asccoiation
      //<input class="form-control" id="exampleInputPassword1" placeholder="Password" type="password" fdprocessedid="zdj69a" data-listener-added_fd210ccb="true"></input>
      await page.getByPlaceholder("Password").fill("Learning@123");
      await page.getByRole('button', { name: 'Submit' }).click();
      await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
      await page.getByRole('link', { name: 'Shop' }).click();
      //<a class="nav-link" href="/angularpractice/shop">Shop</a>

      //CHAINING
      await page.locator("app-card").filter({ hasText: 'Nokia Edge' }).getByRole("button").click();
});


test.only('New Locators with filter logic', async ({ page }) => {
      const productName = "ZARA COAT 3";
      const products = page.locator(".card-body");
      const password = page.locator("[type='password']")
      await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
      await page.getByRole('textbox', { name: 'email@example.com' }).fill("qatest123@gmail.com");
      await page.locator("[id*='userPassword']").fill("Learning@123");
      await page.locator("[id='login']").click();
      await page.waitForLoadState('networkidle')
      await page.locator(".card-body b").first().waitFor();

      /*

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

*/

      await page.locator(".card-body").filter({ hasText: "ZARA COAT 3" })
            .getByRole("button", { name: "Add to Cart" }).click();


      await page.getByRole("listitem").getByRole('button', { name: "Cart" }).click();
      //await page.locator("text=Checkout").click();
      await page.getByRole("button", { name: "Checkout" }).click();

      await page.locator("[placeholder*='Select Country']").pressSequentially("Ind", { delay: 150 });

      // /  await page.getByPlaceholder("Select Country").pressSequentially("ind");



      await page.getByRole("button", { name: "India" }).nth(1).click();


      /*
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
               */



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