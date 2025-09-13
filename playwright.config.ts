import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [['list'], ['allure-playwright']],
  use: {
    // Base URL to use in actions like `await page.goto('/')`
    baseURL: 'https://ecommerce-playground.lambdatest.io',
    
    // Record trace for failed tests
    trace: 'on-first-retry',
    
    // Record video for failed tests
    video: 'on-first-retry',
    
    // Take screenshot on failure
    screenshot: 'only-on-failure'
  },
  
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});
