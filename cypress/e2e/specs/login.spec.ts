import accountLoginPage from "../page-objects/account-login.page";
import homePage from "../page-objects/home.page";



describe('Login', () => {
    
    beforeEach(() => {
        //Go to Account login page
        homePage.visit()
        homePage.accountBtn.click()
    });

    it('should display login screen', () => {
        //Assert
        cy.url().should('include', 'login')
        cy.contains('Login to amaysim').should('be.visible')
    });

    it('should login successfully', () => {
        //Act
        //TODOS: Convert to Fixture data
        accountLoginPage.submitLoginForm('0466134574','AWqasde321')

        //Assert
        cy.contains('Welcome back!').should('be.visible')
    });
    
});