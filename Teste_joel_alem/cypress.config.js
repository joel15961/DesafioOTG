const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:9090/',
    "viewportWidth": 1920,
    "viewportHeight": 1080,
    chromeWebSecurity: false,
    defaultCommandTimeout: 60000,
    responseTimeout: 60000,
    requestTimeout: 60000,
    setupNodeEvents(on, config) {
    }, 

  },
});
