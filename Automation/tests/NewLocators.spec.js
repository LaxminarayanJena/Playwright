const { test, expect } = require('@playwright/test')

test.only('New Locators', async ({ browser }) => {
      const context = await browser.newContext();
      const page = await context.newPage();
      await page.goto("https://rahulshettyacademy.com/angularpractice/");
      await page.getByLabel("Check me out if you Love IceCreams!").click();
      await page.getByLabel("Employed").check();
      await page.getByLabel("Gender").selectOption("Female");
      //<label for="exampleFormControlSelect1">Gender</label>
      //getByLabel -works on selection
      //<input class="form-control" id="exampleInputPassword1" placeholder="Password" type="password" fdprocessedid="zdj69a" data-listener-added_fd210ccb="true"></input>
      await page.getByPlaceholder("Password").fill("Learning@123");
      await page.getByRole('button', { name: 'Submit' }).click();
      await page.getByText("Success! The Form has been submitted successfully!.")




     

});


