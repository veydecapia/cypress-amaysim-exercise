/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Gets the iFrame documents body and retry 
       * until the body element is not empty
       * Finally, wraps body DOM element to allow more chaining
       * @example
       * cy.getIframeBody('iframe')
       */
       getIframeBody(iFrameSelector: string): Chainable<any>
    }
  }