const { test, expect, request } = require('@playwright/test');
const loginPayload = { userEmail: "qatest123@gmail.com", userPassword: "Learning@123" };
const orderPayload = { orders: [{ country: "India", productOrderedId: "6964a1cbc941646b7a91786b" }] };
//only value will have qoutes

let token;
let orderId;

test.beforeAll(async () => {
      const apiContext = await request.newContext();
      const loginResponse = await apiContext.post
            ("https://rahulshettyacademy.com/api/ecom/auth/login",
                  {
                        data: loginPayload

                  }
            )

      expect(loginResponse.ok()).toBeTruthy();

      const loginResponseJson = await loginResponse.json();
      token = loginResponseJson.token;
      console.log(token)


      const OrderResponse = await apiContext.post
            ("https://rahulshettyacademy.com/api/ecom/order/create-order",
                  {
                        data: orderPayload,
                        headers: {
                              'Authorization': token,
                              'Content-Type': 'application/json'
                        },

                  }
            )

            const orderResponseJson =await OrderResponse.json();
            console.log(orderResponseJson);
            orderId =orderResponseJson.orders[0];

});


test.beforeEach(() => {

});

test.only('Web API Test', async ({ page }) => {


      page.addInitScript(value => {
            window.localStorage.setItem('token', value)
      }, token
      );
       await page.goto("https://rahulshettyacademy.com/client/");

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


