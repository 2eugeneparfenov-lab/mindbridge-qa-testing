import { test, expect } from '@playwright/test';

test('successful login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');

  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText(/invalid password/i)).toBeVisible();

  await expect(page).toHaveURL('https://www.saucedemo.com/');
});