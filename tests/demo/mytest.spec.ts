import { test, expect } from "@playwright/test";

test("should load homepage with correct title", async ({ page }) => {
  //1. Go to the home page
  await page.goto("https://katalon-demo-cura.herokuapp.com/");
  //2. Assert if the little is correct
  await expect(page).toHaveTitle("CURA Healthcare Service");
  //3. Assert header text
  await expect(
    page.locator("//h1[normalize-space()='CURA Healthcare Service']"),
  ).toHaveText("CURA Healthcare Service");
});

test("Should do something", { tag: "@smoke" }, async ({ page }, testInfo) => {
  await page.goto("https://katalon-demo-cura.herokuapp.com/"); // go to the app first
  await page
    .locator("//h1[normalize-space()='CURA Healthcare Service']")
    .click();
});

test("Should demo locators", async ({ page }) => {
  // ✅ `page.getBy*()` and `page.locator()` methods returns the `locator` object
  // ✅ The above methods not to be `awaited`
  // ✅ The type of locator is an `object`
  // ✅ Locators are LAZY until an action is fired on them

  //1.launch URL
  await page.goto("https://katalon-demo-cura.herokuapp.com/");
  //2.CLick on the Make Appointment
  //let makeappbtn = page.getByRole("link", { name: "Invalid Locator" });
  //console.log(`type of locator is:  ${typeof makeappbtn}`, `The value of locator is: ${JSON.stringify(makeappbtn)}`);//locators are LAZY
  //await makeappbtn.click();//once take action on locators it is working fine
  //await page.getByRole("link", { name: "Make Appointment" }).click();
  //await expect(page.getByText("Please login to make")).toBeVisible();

  await page.getByRole('heading', { name: 'We Care About Your Health' }).click();//click on testing icond left side and select pick locator and click on it

  await page.getByRole('heading', { name: 'We Care About Your Health' }).click()//enter npx playwright codegen and URL of the page like https://katalon-demo-cura.herokuapp.com/ command on terminal 
  //codegen locator and click on it
});

test("Should demo config file" , async ({ page }, testInfo) => {
  console.log(`>> Config at run-time: ${JSON.stringify(testInfo.config)}`);

});

test.only("Should demo fixtures" , async ({ page, browserName }, testInfo) => {
  console.log(`>> The test run on ${browserName}`);

});