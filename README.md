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
await pauses execution until the action completes.
