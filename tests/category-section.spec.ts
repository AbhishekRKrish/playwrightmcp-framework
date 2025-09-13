import { test, expect } from '@playwright/test';

test.describe('Homepage Category Section with MCP', () => {
  test('should find and verify Shop by Category section', async ({ page }) => {
    // Navigate to homepage and wait for load
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    // Using more reliable MCP-friendly selectors
    const categoryHeading = page.locator('#entry_217842 h4');
    await expect(categoryHeading).toBeVisible();
    
    // Get text content to verify it's the right section
    const headingText = await categoryHeading.textContent();
    console.log('Found heading:', headingText);

    // Find category container
    const categoryContainer = page.locator('#entry_217842 .category-grid');
    await expect(categoryContainer).toBeVisible();

    // Find all category items using a more specific selector
    const categoryItems = page.locator('#entry_217842 .category-thumb');
    
    // Get count of categories
    const count = await categoryItems.count();
    console.log(`Found ${count} categories`);
    expect(count).toBeGreaterThan(0);

    // Log all category names for verification
    for (let i = 0; i < count; i++) {
        const categoryName = await categoryItems.nth(i).locator('.name').textContent();
        console.log(`Category ${i + 1}:`, categoryName);
    }

    // Verify first category is clickable
    const firstCategory = categoryItems.first();
    await expect(firstCategory).toBeEnabled();
    
    // Optional: Take a screenshot of the category section
    await categoryContainer.screenshot({ path: './mcp-results/category-section.png' });
  });
});