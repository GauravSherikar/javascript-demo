import { test, expect } from '@playwright/test';

//using codegen to generate the code

test('test', async ({ page }) => {
  //1.launch URL
  await page.goto('https://katalon-demo-cura.herokuapp.com/');
  //2.CLick on the Make Appointment
  await page.getByRole('link', { name: 'Make Appointment' }).click();
  await expect(page.getByText('Please login to make')).toBeVisible();
  //3.login
  await page.getByLabel('Username').fill('John Doe');
  await page.getByLabel('Password').fill('ThisIsNotAPassword');
  await page.getByRole('button', { name: 'Login' }).click();
  //4.Ass
  await expect(page.locator('h2')).toContainText('Make Appointment');
});