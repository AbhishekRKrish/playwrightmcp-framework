import { Page } from '@playwright/test';

export class SearchResultsPage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Get the current page title
     * @returns Promise<string> The page title
     */
    async getPageTitle(): Promise<string> {
        return await this.page.title();
    }

    /**
     * Check if a specific product is visible in the search results
     * @param productName The name of the product to look for
     * @returns Promise<boolean> True if the product is visible
     */
    async isProductVisible(productName: string): Promise<boolean> {
        const productLink = this.page.getByRole('link', { name: new RegExp(productName, 'i') });
        return await productLink.first().isVisible();
    }

    /**
     * Get all product names from search results
     * @returns Promise<string[]> Array of product names
     */
    async getProductNames(): Promise<string[]> {
        const products = this.page.getByRole('link').filter({
            has: this.page.locator('.description')
        });
        return await products.allTextContents();
    }

    /**
     * Get the current URL of the search results page
     * @returns Promise<string> The current URL
     */
    async getCurrentUrl(): Promise<string> {
        return this.page.url();
    }
}