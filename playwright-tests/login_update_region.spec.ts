import { test, expect } from '@playwright/test'

//const BASE_URL = 'http://localhost:3000'
//const TEST_EMAIL = 'qa.user@mindbridge.local'
//const TEST_PASSWORD = 'admin12345'

test('Account Update happy path', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  
  await page.getByLabel('Email').fill('qa.user@mindbridge.local');
  await page.getByLabel('Password').fill('admin12345');
  await page.getByRole('button', { name: 'Sign in' }).click();
  
  await page.waitForURL('**/dashboard');
  await page.goto('/account');
  
  await page.getByPlaceholder('e.g. EMEA, NA, APAC').fill('APAC');
  await page.getByTestId('account-save-btn').click();
  await expect(page.getByTestId('account-save-success')).toBeVisible();
  
  await page.reload();
  await expect(region).toHaveValue('APAC');

 });
