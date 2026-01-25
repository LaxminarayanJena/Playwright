/*
const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageobjects/POManager');
const { customtest } = require('../utils/test-base');
const dataSet = JSON.parse(JSON.stringify(require('../utils/placeorderTestData.json')));
const dataSet1 = JSON.parse(JSON.stringify(require('../utils/placeorderMultiTestData.json')));
*/


import { test, expect } from '@playwright/test';
import { POManager } from '../pageobjects/POManager';
import { customtest } from '../utils/test-base';

// ---- Test data imports (TypeScript-safe) ----
import dataSet from '../utils/placeorderTestData.json';
import dataSet1 from '../utils/placeorderMultiTestData.json';

// ---- Type definitions for test data ----
type OrderData = {
  username: string;
  password: string;
  productName: string;
};




test('Client App login', async ({ page }) => {
  const poManager = new POManager(page);

  const { username, password, productName } = dataSet as OrderData;
  //js file- Login js, DashboardPage
  // const username = dataSet.username;
  // const password = dataSet.password;
  // const productName = dataSet.productName;
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
  //expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();

  expect(orderId).toContain(await ordersHistoryPage.getOrderId());
});



//for(const data of dataSet1)
for (const data of dataSet1 as OrderData[]) {
  test(`Client App login for product ${data.productName}`, async ({ page }) => {
    const poManager = new POManager(page);
    //js file- Login js, DashboardPage

    /*
    const username = data.username;
    const password = data.password;
    const productName = data.productName;
    const products = page.locator(".card-body");
    */

    const { username, password, productName } = data;
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
    //expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();

    expect(orderId).toContain(await ordersHistoryPage.getOrderId());
  });
}


customtest('Client App login using custom test fixture', async ({ page, testDataForOrder }) => {
  const poManager = new POManager(page);
  //js file- Login js, DashboardPage

  /*
  const username = testDataForOrder.username;
  const password = testDataForOrder.password;
  const productName = testDataForOrder.productName;
  const products = page.locator(".card-body");
  */
    const { username, password, productName } = testDataForOrder;
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
  // expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();

  expect(orderId).toContain(await ordersHistoryPage.getOrderId());

});


