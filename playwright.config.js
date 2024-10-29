const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',  // Directory for your test files
  use: {
    baseURL: 'http://localhost:3000/api',  // Update with your API's base URL
  },
});
