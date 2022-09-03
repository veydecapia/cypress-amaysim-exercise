import accountLoginPage from "../page-objects/account-login.page";
import homePage from "../page-objects/home.page";
import myAccountPage from "../page-objects/my-account.page";


describe('Refer a friend', () => {


    beforeEach(() => {
        //Go to my account dashboards
        homePage.visit()
        homePage.accountBtn.click()
        accountLoginPage.submitLoginForm('0466134574','AWqasde321')
    });

    //TODO: Add afterEach - logout action
    
    it('should navigate to my account dashboard page', () => {
        //Act
        myAccountPage.managePlanLnk.click()//TODO: Add explicit wait here.
        
        //Assert
        cy.url().should('include', 'dashboards')
        myAccountPage.referAFriendLnk.should('be.visible')
    });

    it('should navigate to refer a friend page', () => {
        //Act
        myAccountPage.managePlanLnk.click() //TODO: Add explicit wait here.
        myAccountPage.referAFriendLnk.click()

        //Assert
        cy.url().should('include','refer_friends')
        //TODO: Add assert on Refer a friend page
    });
    
});