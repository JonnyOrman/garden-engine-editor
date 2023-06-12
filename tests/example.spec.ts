import { test, expect } from '@playwright/test';

test('go to home page', async ({ page }) => {
  await page.goto('http://localhost:1420/');

  await expect(page).toHaveTitle("Garden Engine Editor");

  const header = page.locator("#header");
  await expect(header).toHaveText("Garden Engine Editor");
});

test('go to create new game', async ({ page }) => {
  await page.goto('http://localhost:1420/');

  const createNewGameButton = page.locator("//button[text()='Create new game']")
  await createNewGameButton.click();

  await expect(page).toHaveTitle("Garden Engine Editor");

  const header = page.locator("#header");
  await expect(header).toHaveText("Create new game");
});

test('submit empty new game form', async ({ page }) => {
  await page.goto('http://localhost:1420/');

  const createNewGameButton = page.locator("//button[text()='Create new game']")
  await createNewGameButton.click();
  
});
