import { test, expect } from '@playwright/test';

test('Verify Shop by Category section', async ({ page }) => {
    // Navigate to homepage
    await page.goto('/');
    
    // Wait for the page to load and locate the Shop by Category section
    // Using multiple selectors as the section might be identified in different ways
    const categorySection = page.locator('h4, .title-h4').filter({ hasText: 'Shop by Category' });
    
    // Verify the section is visible
    await expect(categorySection).toBeVisible({ timeout: 10000 });
    
    // Additional verification: Check if there are actual categories listed
    const categoryLinks = page.locator('.category-list .item');
    
    // Get the count of categories
    const categoryCount = await categoryLinks.count();
    
    // Verify that we have at least one category
    expect(categoryCount).toBeGreaterThan(0);
    
    // Log the categories found (helpful for debugging)
    const categories = await categoryLinks.allTextContents();
    console.log(`Found ${categoryCount} categories:`, categories);
});