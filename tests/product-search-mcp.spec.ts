import { test, expect } from '@playwright/test';
// Note: MCP will use the test file as a template for generating similar tests
import { HomePage } from './page-objects/HomePage';
import { SearchResultsPage } from './page-objects/SearchResultsPage';

test.describe('Product Search Tests', () => {
  let homePage: HomePage;
  let searchResultsPage: SearchResultsPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    searchResultsPage = new SearchResultsPage(page);
    await homePage.goto();
  });

  test('Search for Apple Cinema 30 using MCP', async () => {
    // Search for the product
    await homePage.searchForProduct('Apple Cinema 30');

    // Verify the search results
    await expect(async () => {
      const title = await searchResultsPage.getPageTitle();
      expect(title).toContain('Search - Apple Cinema 30');
    }).toPass();
    
    // Verify the product is visible in search results
    await expect(async () => {
      const isProductVisible = await searchResultsPage.isProductVisible('Apple Cinema 30');
      expect(isProductVisible).toBeTruthy();
    }).toPass({ timeout: 10000 });
    
    // Verify the URL contains the search query
    await expect(async () => {
      const currentUrl = await searchResultsPage.getCurrentUrl();
      expect(currentUrl).toContain('search=Apple+Cinema+30');
    }).toPass();
  });
});