const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { POManager } = require('../../pageobjects/POManager');


let poManager;
let loginPage;
let dashboardPage;
let cartPage;
let ordersReviewPage;
let ordersHistoryPage;
let orderId;

Given(
    'a login to Ecommerce application with {string} and {string}',
    async function (username, password) {

        poManager = new POManager(this.page);

        loginPage = poManager.getLoginPage();
        await loginPage.goTo();
        await loginPage.validLogin(username, password);

        dashboardPage = poManager.getDashboardPage();
    }
);

When('Add {string} to Cart', async function (productName) {

    await dashboardPage.searchProductAddCart(productName);
    await dashboardPage.navigateToCart();

    cartPage = poManager.getCartPage();
});

Then('Verify {string} is displayed in the Cart', async function (productName) {

    await cartPage.VerifyProductIsDisplayed(productName);
    await cartPage.Checkout();
});

When('Enter valid details and Place the Order', async function () {

    ordersReviewPage = poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect('ind', 'India');
    orderId = await ordersReviewPage.SubmitAndGetOrderId();
});

Then('Verify order is present in the OrderHistory', async function () {

    await dashboardPage.navigateToOrders();
    ordersHistoryPage = poManager.getOrdersHistoryPage();

    await ordersHistoryPage.searchOrderAndSelect(orderId);
    const fetchedOrderId = await ordersHistoryPage.getOrderId();

    expect(orderId.includes(fetchedOrderId)).toBeTruthy();
});
