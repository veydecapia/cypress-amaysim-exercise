import { defineConfig } from 'cypress'
import clipboard from 'clipboardy';


export default defineConfig({
  // setupNodeEvents(on, config) {
  //   on('task', {
  //     getClipboard () {
  //       return clipboard.readSync();
  //     }
  //   })
  // },
  e2e: {
    specPattern: 'cypress/e2e/specs/*.spec.{js,jsx,ts,tsx}',
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    experimentalSessionAndOrigin: true,


  }
})