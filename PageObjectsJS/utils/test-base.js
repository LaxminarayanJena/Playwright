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
