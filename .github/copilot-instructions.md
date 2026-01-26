# AI Coding Agent Instructions

## Overview
This codebase is a multi-folder Playwright testing framework with various configurations, utilities, and test cases. It is structured to support end-to-end testing, API testing, and data-driven testing. The project includes JavaScript and TypeScript implementations, along with integrations for reporting and test data management.

## Key Components

### Folder Structure
- **AI/**: Contains Playwright tests, configurations, and utilities for end-to-end testing.
- **Automation/**: Includes additional Playwright tests and Allure reporting setup.
- **Cucumber/**: Houses Cucumber-based BDD tests and related configurations.
- **Excel/**: Provides utilities for Excel file handling.
- **Javascript/**: Contains JavaScript examples and utilities.
- **PageObjectsJS/** and **PageObjectsTS/**: Implement the Page Object Model (POM) pattern in JavaScript and TypeScript, respectively.

### Important Files
- `playwright.config.js`: Main configuration file for Playwright.
- `playwright.configCustom.js`: Custom configurations for specific test scenarios.
- `POManager.js`: Manages Page Object instances.
- `placeorderTestData.json`: Example of test data used in data-driven tests.

## Developer Workflows

### Running Tests
- Use `npx playwright test` to run all tests.
- For specific configurations, use `npx playwright test --config=playwright.configCustom.js`.
- To run tests in parallel, ensure the `--workers` flag is set appropriately.

### Debugging
- Use `npx playwright test --debug` to launch tests in debug mode.
- Add `debugger;` statements in your test files to pause execution.

### Reporting
- Allure reports are generated in the `allure-results/` folder. Use `allure serve` to view them.
- Playwright HTML reports are available in the `playwright-report/` folder.

## Project-Specific Conventions

### Page Object Model
- Each page object is defined in the `pageobjects/` folder.
- Use `POManager.js` to instantiate and manage page objects.

### Test Data
- Test data is stored in JSON files under the `utils/` folder.
- Use `require` to load test data into your test scripts.

### Custom Fixtures
- Custom test fixtures are defined in `test-base.js`.
- Use these fixtures to set up and tear down test environments.

## External Dependencies
- **Playwright**: Core testing framework.
- **Allure**: For generating detailed test reports.
- **Cucumber**: For BDD-style testing.
- **ExcelJS**: For handling Excel files.

## Examples

### Sample Test
```javascript
const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('https://example.com');
  const title = await page.title();
  expect(title).toBe('Example Domain');
});
```

### Using Page Objects
```javascript
const { test } = require('@playwright/test');
const POManager = require('./pageobjects/POManager');

test('login test', async ({ page }) => {
  const poManager = new POManager(page);
  const loginPage = poManager.getLoginPage();
  await loginPage.login('user', 'password');
});
```

## Notes
- Ensure Node.js is installed and dependencies are up-to-date (`npm install`).
- Follow the Page Object Model for creating new tests.
- Use the existing test data structure for consistency.

For further details, refer to the respective `README.md` files in each folder (if available).