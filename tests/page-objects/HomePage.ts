import { Page } from '@playwright/test';

export class HomePage {
    private readonly page: Page;
    private readonly searchInput;

    constructor(page: Page) {
        this.page = page;
        this.searchInput = this.page.getByRole('textbox', { name: 'Search For Products' });
    }

    /**
     * Navigate to the home page
     */
    async goto() {
        await this.page.goto('/');
    }

    /**
     * Search for a product using the search box
     * @param productName The name of the product to search for
     */
    async searchForProduct(productName: string) {
        await this.searchInput.fill(productName);
        await this.searchInput.press('Enter');
    }

    /**
     * Get the current page title
     * @returns Promise<string> The page title
     */
    async getPageTitle(): Promise<string> {
        return await this.page.title();
    }
}