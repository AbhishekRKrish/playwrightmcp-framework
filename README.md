Playwright with MCP Test Automation Framework



A comprehensive test automation framework that demonstrates the integration of Playwright with Model Context Protocol (MCP) and Allure reporting. This framework showcases automated testing of web applications using VS Code's MCP capabilities alongside traditional Playwright features.A comprehensive test automation framework that demonstrates the integration of Playwright with Model Context Protocol (MCP) and Allure reporting. This framework showcases automated testing of web applications using VS Code's MCP capabilities alongside traditional Playwright features.



## 🌟 Key Features## 🌟 Key Features



- **MCP Integration**: Utilizes VS Code's Model Context Protocol for enhanced test automation capabilities- **MCP Integration**: Utilizes VS Code's Model Context Protocol for enhanced test automation capabilities

- **Allure Reporting**: Detailed test execution reports with screenshots and traces- **Allure Reporting**: Detailed test execution reports with screenshots and traces

- **TypeScript Support**: Strong typing and better code organization- **TypeScript Support**: Strong typing and better code organization

- **Page Object Pattern**: Modular and maintainable test structure- **Page Object Pattern**: Modular and maintainable test structure

- **Parallel Execution**: Efficient test execution using Playwright's worker threads- **Parallel Execution**: Efficient test execution using Playwright's worker threads



## 🚀 Project Structure## 🚀 Project Structure



``````

├── tests/├── tests/

│   └── product-search.spec.ts     # E-commerce search functionality tests│   └── product-search.spec.ts     # E-commerce search functionality tests

├── playwright.config.ts           # Playwright and MCP configuration├── playwright.config.ts           # Playwright and MCP configuration

├── package.json                   # Project dependencies├── package.json                   # Project dependencies

└── allure.yml                     # Allure report configuration└── allure.yml                     # Allure report configuration

``````



## 🛠️ Technologies & Tools## 🛠️ Technologies & Tools



- Playwright- Playwright

- Model Context Protocol (MCP)- Model Context Protocol (MCP)

- TypeScript- TypeScript

- Allure Reporting- Allure Reporting

- Node.js- Node.js

- VS Code- VS Code



## 🔧 Prerequisites## 🔧 Prerequisites



- Node.js (v14 or higher)- Node.js (v14 or higher)

- VS Code with MCP support- VS Code with MCP support

- npm (Node Package Manager)- npm (Node Package Manager)



## 📦 Installation## 📦 Installation



1. Clone the repository:1. Clone the repository:

```bash```bash

git clone https://github.com/AbhishekRKrish/AbhishekRKrish.gitg

``````



2. Install dependencies:2. Install dependencies:

```bash```bash

npm installnpm install

``````



3. Install Playwright browsers:3. Install Playwright browsers:

```bash```bash

npx playwright installnpx playwright install

``````



## 🎯 MCP Integration## 🎯 MCP Integration



This framework leverages VS Code's Model Context Protocol (MCP) to enhance test automation capabilities:This framework leverages VS Code's Model Context Protocol (MCP) to enhance test automation capabilities:



- **Accessibility Testing**: MCP provides enhanced accessibility snapshots- **Accessibility Testing**: MCP provides enhanced accessibility snapshots

- **Semantic Understanding**: Better element identification and interaction- **Semantic Understanding**: Better element identification and interaction

- **VS Code Integration**: Direct integration with VS Code's testing features- **VS Code Integration**: Direct integration with VS Code's testing features

- **Automatic State Management**: MCP handles browser state and context- **Automatic State Management**: MCP handles browser state and context



Example MCP usage in tests:Example MCP usage in tests:

```typescript```typescript

test('Search using MCP', async ({ page }) => {test('Search using MCP', async ({ page }) => {

  // MCP automatically enhances these Playwright commands  // MCP automatically enhances these Playwright commands

  await page.goto('/');  await page.goto('/');

  const snapshot = await page.accessibility.snapshot();  const snapshot = await page.accessibility.snapshot();

  const searchBox = page.getByRole('textbox', { name: 'Search' });  const searchBox = page.getByRole('textbox', { name: 'Search' });

  await searchBox.fill('search term');  await searchBox.fill('search term');

});});

``````



## 🧪 Running Tests## 🧪 Running Tests



1. Run all tests:1. Run all tests:

```bash```bash

npm testnpm test

``````



2. Run specific test file:2. Run specific test file:

```bash```bash

npx playwright test tests/product-search.spec.tsnpx playwright test tests/product-search.spec.ts

``````



3. Run tests with UI mode:3. Run tests with UI mode:

```bash```bash

npx playwright test --uinpx playwright test --ui

``````



## 📊 Test Reports## 📊 Test Reports



Generate and view Allure reports:Generate and view Allure reports:



```bash```bash

# Generate report# Generate report

npx allure generate allure-results -o allure-report --cleannpx allure generate allure-results -o allure-report --clean



# Open report# Open report

npx allure open allure-reportnpx allure open allure-report

``````



## ⚙️ Configuration## ⚙️ Configuration



### Playwright Configuration### Playwright Configuration

```typescript```typescript

// playwright.config.ts// playwright.config.ts

export default defineConfig({export default defineConfig({

  testDir: './tests',  testDir: './tests',

  reporter: [['list'], ['allure-playwright']],  reporter: [['list'], ['allure-playwright']],

  use: {  use: {

    baseURL: 'https://ecommerce-playground.lambdatest.io',    baseURL: 'https://ecommerce-playground.lambdatest.io',

    trace: 'on-first-retry',    trace: 'on-first-retry',

    video: 'on-first-retry',    video: 'on-first-retry',

    screenshot: 'only-on-failure'    screenshot: 'only-on-failure'

  }  }

});});

``````



### MCP Features### MCP Features

- Automatic accessibility testing- Automatic accessibility testing

- Enhanced element location strategies- Enhanced element location strategies

- Improved test stability- Improved test stability

- VS Code integration for better debugging- VS Code integration for better debugging



## 🔍 Test Scenarios## 🔍 Test Scenarios



Current test scenarios include:Current test scenarios include:

- E-commerce product search- E-commerce product search

- Results validation- Results validation

- Accessibility testing using MCP- Accessibility testing using MCP

- Multiple verification points:- Multiple verification points:

  - Page title  - Page title

  - Product visibility  - Product visibility

  - URL validation  - URL validation

  - Accessibility snapshots  - Accessibility snapshots



## 🐛 Debugging## 🐛 Debugging



1. Use VS Code's built-in debugger with MCP integration1. Use VS Code's built-in debugger with MCP integration

2. Leverage Playwright's trace viewer:2. Leverage Playwright's trace viewer:

```bash```bash

npx playwright show-trace trace.zipnpx playwright show-trace trace.zip

``````

3. Utilize MCP's enhanced debugging capabilities in VS Code3. Utilize MCP's enhanced debugging capabilities in VS Code



## 🤝 Contributing## 🤝 Contributing



1. Fork the repository1. Fork the repository

2. Create your feature branch2. Create your feature branch

3. Commit your changes3. Commit your changes

4. Push to the branch4. Push to the branch

5. Create a Pull Request5. Create a Pull Request



## 📄 License## 📄 License



ISC LicenseISC License



## 📚 Resources## 📚 Resources



- [Playwright Documentation](https://playwright.dev)- [Playwright Documentation](https://playwright.dev)

- [VS Code MCP Documentation](https://code.visualstudio.com)- [VS Code MCP Documentation](https://code.visualstudio.com)

- [Allure Framework](https://docs.qameta.io/allure/)- [Allure Framework](https://docs.qameta.io/allure/)
