import myAccountPage from "./my-account.page"
import * as env from '../../../cypress.env.json'


class LoginPage{
    visit(){
        
    }

    get usernameTxtbox(){
        return cy.get('#username')
    }

    get passwordTxtbox(){
        return cy.get('#password')
    }

    get loginBtn(){
        return cy.get("button[name='button']")
    }

    /**
     * @description
     * Logins the user to Amaysim account using number or email
     * @param {string} username Can either be a number or email.
     * @param {string} password Account password.
     */
    submitLoginForm = (
        username: string,
        password: string
    ) => {
        cy.session([username, password], () => {
            cy.visit(Cypress.env('loginUrl'))
            this.usernameTxtbox.type(username)
            this.passwordTxtbox.type(password)
            this.loginBtn.click()
            this.goToDashboards() // For caching purposes
        })
    }


    /**
     * @description
     * Goes to dashboard after doing a successful login
     * Pre-condition: Need a valid login
     */
    goToDashboards = () => {
        cy.url().should('contain', '/services')
        myAccountPage.serviceTileMobileSection
                .should('be.visible') 

        myAccountPage.managePlanLnk.realClick()
        cy.url().should('contain', '/dashboards')
    }





    

}

export default new LoginPage()