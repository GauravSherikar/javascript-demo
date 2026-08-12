import { test, expect } from "@playwright/test";

test.describe("Login Functionality", () => {
  test.beforeEach("Go to the login page", async ({ page }) => {
    //launch URL and assert title and header text
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await expect(page).toHaveTitle("CURA Healthcare Service");
    await expect(page.locator("//h1[normalize-space()='CURA Healthcare Service']"),).toHaveText("CURA Healthcare Service");

    //Click on the make appointment
    await page.getByRole("link", { name: "Make Appointment" }).click();
    await expect(page.getByText("Please login to make appointment."),).toBeVisible();
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
});
