import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    //1.launch URL
  await page.goto('https://katalon-demo-cura.herokuapp.com/');
  await page.getByRole('link', { name: 'Make Appointment' }).click();
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('John Doe');
  await page.getByLabel('Username').press('Tab');
  await page.getByLabel('Password').fill('ThisIsNotAPassword');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('checkbox', { name: 'Apply for hospital readmission' }).check();
  await page.locator('span').click();
  await page.getByRole('cell', { name: '16' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).fill('This is just Demo purpose');
  await page.getByRole('button', { name: 'Book Appointment' }).click();
  await page.getByText('Please be informed that your').click();
  await page.getByRole('link', { name: 'Go to Homepage' }).click();
});