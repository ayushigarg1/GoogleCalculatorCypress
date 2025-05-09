const {defineConfig} = require("cypress");

module.exports = defineConfig({
    env: {
        url: "https://www.google.com/",
    },

    e2e: {
        testIsolation: false,
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
