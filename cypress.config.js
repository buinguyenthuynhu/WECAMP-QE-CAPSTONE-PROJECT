const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
    // env: {
    //   register: '/register?redirect=',
    //   signin: '/signin',
    //   profile: '/profile'
    // },
    experimentalModifyObstructiveThirdPartyCode: true, 
    experimentalSessionAndOrigin: true,
    chromeWebSecurity: false,
    experimentalStudio: true,
  },
});