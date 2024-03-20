import { test, expect } from '@playwright/test';

const URL = 'http://frontend:80';

test('has title', async ({ page }) => {
  await page.goto(URL);
  await expect(page).toHaveTitle('Vite + React');
});


test('has Add new merchant button', async ({ page }) => {
  await page.goto(URL);
  // Check if the button is visible
  await expect(page.locator('button').first()).toBeVisible();
  // Check name of the button
  await expect(page.locator('button').first()).toHaveText('Add New merchant...'); 
  // Check second button
  await expect(page.locator('button').nth(1)).toBeVisible();
  await expect(page.locator('button').nth(1)).toHaveText('Delete merchant'); 
  // Check third button
  await expect(page.locator('button').nth(2)).toBeVisible();
  await expect(page.locator('button').nth(2)).toHaveText('Update merchant');
});
