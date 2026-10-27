import { test, expect } from '@playwright/test';

test('Account region persists after reload', async ({ page }) => {
  await page.goto('http://localhost:3000/login');

  await page.getByLabel('Email').fill('qa.user@mindbridge.local');
  await page.getByLabel('Password').fill('admin12345');

  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.waitForURL('**/dashboard');

  await page.goto('http://localhost:3000/account');

  await page.getByTestId('account-region').fill('APAC');
  await page.getByTestId('account-save-btn').click();

  await expect(
    page.getByTestId('account-save-success')
  ).toBeVisible();

  await page.reload();

  await expect(
    page.getByTestId('account-region')
  ).toHaveValue('APAC');
});