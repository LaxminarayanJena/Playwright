/*
const base = require('@playwright/test');

exports.customtest = base.test.extend(

    {
        testDataForOrder:
        {
            "username": "qatest123@gmail.com",
            "password": "Learning@123",
            "productName": "iphone 13 pro"
        }
    }

)
    */
import { test as base } from '@playwright/test';

type OrderTestData = {
  username: string;
  password: string;
  productName: string;
};

export const customtest = base.extend<{
  testDataForOrder: OrderTestData;
}>({
  testDataForOrder: {
    username: 'qatest123@gmail.com',
    password: 'Learning@123',
    productName: 'iphone 13 pro',
  },
});


