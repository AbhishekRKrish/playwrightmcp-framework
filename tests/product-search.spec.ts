import { test, expect } from '@playwright/test';

test('Search for Apple Cinema 30', async ({ page }) => {
  // Navigate to the homepage
  await page.goto('/');

  // Find and fill the search input
  const searchBox = page.getByRole('textbox', { name: 'Search For Products' });
  await searchBox.fill('Apple Cinema 30');
  await searchBox.press('Enter');

  // Verify the search results
  await expect(page).toHaveTitle(/Search - Apple Cinema 30/);
  
  // Verify that search results contain the product
  const productLinks = page.getByRole('link', { name: /Apple Cinema 30/ });
  await expect(productLinks.first()).toBeVisible();
  
  // Additional verification: Check if we're on the search results page
  const currentUrl = page.url();
  expect(currentUrl).toContain('search=Apple+Cinema+30');
});