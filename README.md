const-Use when the value should not be reassigned. </br>
Let-Use when the value needs to change later.Can be redeclaredBlock scoped,Can be reassigned,Good for loops or dynamic values  </br>
var-Function scoped, not block scoped ,Causes unexpected behavior in async tests  </br>

In Playwright, context means a browser context. Think of it like a separate browser profile inside the same browser instance. Each context has its own cookies, storage, session, and permissions.
test('two users chat', async ({ browser }) => {

  const context1 = await browser.newContext();
  const page1 = await context1.newPage();

  const context2 = await browser.newContext();
  const page2 = await context2.newPage();

});
await pauses execution until the action completes. </br>

Playwright Test already gives you some built-in fixtures like browser, context, and page

Codegen means code generator. It’s a tool that records your actions in the browser and automatically generates Playwright test code for you.
npx playwright codegen https://example.com

npx playwright test --debug


I designed the JavaScript Cucumber framework using a layered approach so that tests stay maintainable and scalable.”

“First, I created feature files where business scenarios are written in Gherkin format. Then I mapped those steps to step definition files written in JavaScript. Instead of putting all automation logic inside steps, I followed Page Object Model. All locators and reusable actions were kept inside page classes, and step definitions only called those methods.”

“I structured the project with separate folders for features, step definitions, page objects, hooks, and utilities. Hooks were used for browser setup, teardown, and common configurations like screenshots on failure.”

“For execution, the framework runs on Node.js with Cucumber as the test runner, and the browser interactions are handled using Selenium or Playwright. I also added reusable utilities for waits, config handling, and test data to avoid code duplication.”

“The main goal while designing was readability, reusability, and easy debugging. So I kept feature files clean, step definitions lightweight, and business logic inside page objects.


console.log("Try programiz.pro");
let s ="Thissssisinntteeerrrrvvviiieeeewwww";

const map = new Map();

for (const ch of s.toLowerCase()) {
  map.set(ch, (map.get(ch) || 0) + 1);
}

for (const [ch, count] of map) {
  if (count > 4) console.log(ch);
}
