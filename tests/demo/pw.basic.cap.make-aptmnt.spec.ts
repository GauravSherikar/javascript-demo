import { test, expect } from "@playwright/test";

test.describe("Make the Appointment",{annotation : {type: "Story", description: "JIRA-1234: Make Appointment feature"}}, () => {
  test.beforeEach("Login with the valid credetials", async ({ page },testInfo) => {
    //1.launch URL and assert title and header text
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await expect(page).toHaveTitle("CURA Healthcare Service");
    await expect(
      page.locator("//h1[normalize-space()='CURA Healthcare Service']"),
    ).toHaveText("CURA Healthcare Service");

    //2. Click on the make appointment
    await page.getByRole("link", { name: "Make Appointment" }).click();
    await expect(
      page.getByText("Please login to make appointment."),
    ).toBeVisible();

    //login Successfully
    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();

    /*
    Add custom screenshot project scoop level
    @ todo add this as a helper function    
    */
   let fullPageLoginScreenShot = await page.screenshot({ fullPage: true });
   await testInfo.attach("login page", {
     body: fullPageLoginScreenShot,
     contentType: "image/png",
   }); 
   
    //Assert a text
    await expect(page.locator("//a[@id='btn-make-appointment']")).toContainText(
      "Make Appointment",
    );
  });

  //test goes here

  test("Should make an appointment with non-default values",
    {annotation:{type:"Bug",description:"Defect:1234 - Does not work in Firefox"}},
     async ({ page, browserName }) => {
      //Skip this test for Firefox browser
      test.skip(browserName === "firefox", "Open bug ID:1234");


    //Dropdown
    await page.getByLabel("Facility").selectOption("Hongkong CURA Healthcare Center");
    //Checkbox
    await page.getByText("Apply for hospital readmission").click();
    //Radio button
    await page.getByRole("radio", { name: "Medicaid" }).check();
    //Date Input box
    await page.getByRole("textbox", { name: "Visit Date (Required)" }).click();
    await page.getByRole("textbox", { name: "Visit Date (Required)" }).fill("13/08/2025");
    await page.getByRole("textbox", { name: "Visit Date (Required)" }).press("Enter");
    //Multi-line comments input box
    await page.getByRole("textbox", { name: "Comment" }).click();
    await page.getByRole("textbox", { name: "Comment" }).fill("This is multi-line comments capture by playwright codegen");
    //Button
    await page.getByRole("button", { name: "Book Appointment" }).click();
    //Assertion
    await expect(page.locator("h2")).toContainText("Appointment Confirmation");
    await expect(page.getByRole("link", { name: "Go to Homepage" })).toBeVisible();
  });
  //More tests can be added here for different scenarios like making appointment with default values, invalid values, etc.
});
