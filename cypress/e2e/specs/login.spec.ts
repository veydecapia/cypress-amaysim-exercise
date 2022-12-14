import accountLoginPage from "../page-objects/account-login.page";
import dashboardPage from "../page-objects/dashboard.page";



describe('Login', () => {

    beforeEach(() => {
        accountLoginPage.submitLoginForm(Cypress.env('USERNAME'),
                                            Cypress.env('PASSWORD'))
    });

    it('should display login screen', () => {
        //Act
        cy.visit(Cypress.env('loginUrl'))

        //Assert
        cy.url().should('contain', '/login')
        cy.title().should('equal', 'My amaysim')
        cy.contains('Login to amaysim').should('be.visible')
    });

    it('should login successfully', () => {
        //Act
        cy.visit('/my-account/my-amaysim/services')

        //Assert
        cy.url().should('contain', '/my-account')
        cy.contains('Welcome back!').should('be.visible')
    });

    it('should navigate to my account dashboard page', {
        retries: 2 // Handle flaky network level issue
    }, () => {
        //Act
        cy.visit('/my-account/my-amaysim/dashboards')

        //Assert
        dashboardPage.infoNumber.should('be.visible')
    });
    
});