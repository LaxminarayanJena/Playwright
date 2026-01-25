const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageobjects/POManager');
const { customtest } = require('../utils/test-base');
const dataSet = JSON.parse(JSON.stringify(require('../utils/placeorderTestData.json')));
const dataSet1 = JSON.parse(JSON.stringify(require('../utils/placeorderMultiTestData.json')));


test('Client App login', async ({ page }) => {
      const poManager = new POManager(page);
      //js file- Login js, DashboardPage
      const username = dataSet.username;
      const password = dataSet.password;
      const productName = dataSet.productName;
      const products = page.locator(".card-body");
      const loginPage = poManager.getLoginPage();
      await loginPage.goTo();
      await loginPage.validLogin(username, password);
      const dashboardPage = poManager.getDashboardPage();
      await dashboardPage.searchProductAddCart(productName);
      await dashboardPage.navigateToCart();

      const cartPage = poManager.getCartPage();
      await cartPage.VerifyProductIsDisplayed(productName);
      await cartPage.Checkout();

      const ordersReviewPage = poManager.getOrdersReviewPage();
      await ordersReviewPage.searchCountryAndSelect("ind", "India");
      const orderId = await ordersReviewPage.SubmitAndGetOrderId();
      console.log(orderId);
      await dashboardPage.navigateToOrders();
      const ordersHistoryPage = poManager.getOrdersHistoryPage();
      await ordersHistoryPage.searchOrderAndSelect(orderId);
      expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();

});


for(const data of dataSet1)
{
test(`Client App login for product ${data.productName}`, async ({ page }) => {
      const poManager = new POManager(page);
      //js file- Login js, DashboardPage
      const username = data.username;
      const password = data.password;
      const productName = data.productName;
      const products = page.locator(".card-body");
      const loginPage = poManager.getLoginPage();
      await loginPage.goTo();
      await loginPage.validLogin(username, password);
      const dashboardPage = poManager.getDashboardPage();
      await dashboardPage.searchProductAddCart(productName);
      await dashboardPage.navigateToCart();

      const cartPage = poManager.getCartPage();
      await cartPage.VerifyProductIsDisplayed(productName);
      await cartPage.Checkout();

      const ordersReviewPage = poManager.getOrdersReviewPage();
      await ordersReviewPage.searchCountryAndSelect("ind", "India");
      const orderId = await ordersReviewPage.SubmitAndGetOrderId();
      console.log(orderId);
      await dashboardPage.navigateToOrders();
      const ordersHistoryPage = poManager.getOrdersHistoryPage();
      await ordersHistoryPage.searchOrderAndSelect(orderId);
      expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
});
}


customtest.only('Client App login using custom test fixture', async ({ page,testDataForOrder }) => {
      const poManager = new POManager(page);
      //js file- Login js, DashboardPage
      const username = testDataForOrder.username;
      const password = testDataForOrder.password;
      const productName = testDataForOrder.productName;
      const products = page.locator(".card-body");
      const loginPage = poManager.getLoginPage();
      await loginPage.goTo();
      await loginPage.validLogin(username, password);
      const dashboardPage = poManager.getDashboardPage();
      await dashboardPage.searchProductAddCart(productName);
      await dashboardPage.navigateToCart();

      const cartPage = poManager.getCartPage();
      await cartPage.VerifyProductIsDisplayed(productName);
      await cartPage.Checkout();

      const ordersReviewPage = poManager.getOrdersReviewPage();
      await ordersReviewPage.searchCountryAndSelect("ind", "India");
      const orderId = await ordersReviewPage.SubmitAndGetOrderId();
      console.log(orderId);
      await dashboardPage.navigateToOrders();
      const ordersHistoryPage = poManager.getOrdersHistoryPage();
      await ordersHistoryPage.searchOrderAndSelect(orderId);
      expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();

});


