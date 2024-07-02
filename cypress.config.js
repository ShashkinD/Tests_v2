const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://dev.omni-dispatch.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
