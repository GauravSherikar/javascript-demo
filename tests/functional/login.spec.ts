import { test, expect } from "@playwright/test";

test.describe("Login Functionality", () => {
  test.beforeEach("Go to the login page", async ({ page }) => {
    //launch URL and assert title and header text
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await expect(page).toHaveTitle("CURA Healthcare Service");
    await expect(
      page.locator("//h1[normalize-space()='CURA Healthcare Service']"),
    ).toHaveText("CURA Healthcare Service");

    //Click on the make appointment
    await page.getByRole("link", { name: "Make Appointment" }).click();
    await expect(
      page.getByText("Please login to make appointment."),
    ).toBeVisible();
  });

  test("Should login successfully", async ({ page }) => {
    //login Successfully
    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();

    //Assert a text
    await expect(page.locator("//a[@id='btn-make-appointment']")).toContainText(
      "Make Appointment",
    );
  });

  test("Should prevent login with incorrect credentials", async ({ page }) => {
    //unsuccessful login
    await page.getByLabel("Username").fill("John Smith");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();

    //Assert an error message
    await expect(page.locator("#login")).toContainText(
      "Login failed! Please ensure the username and password are valid.",
    );
  });

  test("Should make an appointment with non-default values", async ({ page }) => {
    // Login first (page shows login prompt from beforeEach)
    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();
    // Wait for the appointment heading/form to be visible
    await expect(page.getByRole("heading", { name: "Make Appointment" })).toBeVisible();
    const facility = page.getByRole("combobox", { name: /facility/i });
    await expect(facility).toBeVisible();
    // Select facility by visible label using combobox role
    await facility.selectOption({ label: "Hongkong CURA Healthcare Center" });
    // Verify the select now has the chosen option selected (value may be the label on this site)
    await expect(facility).toHaveValue("Hongkong CURA Healthcare Center");

    // Check the hospital readmission checkbox (label-based)
    await page.getByLabel("Apply for hospital readmission").check();

    // Select the Medicaid radio
    await page.getByRole("radio", { name: "Medicaid" }).check();

    // Date selection: open datepicker and click a day
    await page.getByRole("textbox", { name: "Visit Date (Required)" }).click();
    // pick a day — this picks the 1st day cell occurrence; adjust if flaky for your locale/calendar
    await page.getByRole("cell", { name: "1" }).nth(1).click();

    // Fill comment
    await page.getByRole("textbox", { name: "Comment" }).fill("This is just playwright comment box");

    // Click Book Appointment
    await page.getByRole("button", { name: "Book Appointment" }).click();

    // Assertion: after booking, Appointment Confirmation should be visible
    await expect(page.locator("h2")).toContainText("Appointment Confirmation");
    await expect(page.getByRole("link", { name: "Go to Homepage" })).toBeVisible();
  });

});
