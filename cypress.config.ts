import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.amaysim.com.au',
    specPattern: 'cypress/e2e/specs/*.spec.{js,jsx,ts,tsx}',
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000
  } 
})