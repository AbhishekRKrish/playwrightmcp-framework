import { test, expect } from '@playwright/test';

// This test is designed to work with MCP for recording and debugging
test.describe('Product Price Verification', () => {
  test('should display correct price for iPhone', async ({ page }) => {
    // Navigate to homepage
    await page.goto('/');
    
    // Search for iPhone
    const searchBox = page.getByRole('textbox', { name: 'Search For Products' });
    await searchBox.click();
    await searchBox.fill('iPhone');
    await searchBox.press('Enter');
    
    // Wait for search results and verify page title
    await expect(page).toHaveTitle(/Search - iPhone/);
    
    // Find the iPhone product card
    const productCard = page.locator('.product-layout').filter({ 
      has: page.getByText('iPhone') 
    }).first();
    
    // Verify the product card is visible
    await expect(productCard).toBeVisible();
    
    // Get the price element
    const priceElement = productCard.locator('.price-new');
    
    // Verify price format (should start with $ and contain numbers)
    const priceText = await priceElement.textContent();
    expect(priceText).toBeTruthy();
    expect(priceText).toMatch(/\$\d+(\.\d{2})?/);
    
    // Optional: Click on the product to view details
    await productCard.click();
    
    // Verify we're on the product details page
    await expect(page).toHaveTitle(/iPhone/);
  });
});