import { data } from "cypress/types/jquery";
import accountLoginPage from "../page-objects/account-login.page";
import myAccountPage from "../page-objects/my-account.page";
import referAFriendPage from "../page-objects/refer-a-friend.page";


describe('Refer a friend', () => {

    beforeEach(() => {
        accountLoginPage.submitLoginForm(Cypress.env('USERNAME'),
                                            Cypress.env('PASSWORD'))
    });
    
    it('should navigate to my account dashboard page', () => {
        //Act
        cy.visit('/my-account/my-amaysim/dashboards')
        
        //Assert
        cy.url().should('include', 'dashboards')
        myAccountPage.referAFriendLnk.should('be.visible')
    });

    it('should navigate to refer a friend page', () => {
        //Act
        cy.visit('/my-account/my-amaysim/refer_friends')

        //Assert
        cy.url().should('include','refer_friends')
        cy.contains('refer a friend').should('be.visible')
    });

    it('should refer a friend by sharing referral link - using Copy button', () => {
        //Arrange
        cy.visit('/my-account/my-amaysim/refer_friends')

        referAFriendPage.waitForReferralLinkToLoad()

        //Act
        referAFriendPage.copyBtn
                .realClick() // Use realclick to handle copy
                .should('have.text', 'Copied!')

        //Assert: Verify clipboard value
        referAFriendPage.verifyClipboardTextIfEqualToReferralLink()
    });

    it('should refer a friend by sharing referral link - clicking the link to copy', () => {
        //Arrange
        cy.visit('/my-account/my-amaysim/refer_friends')
        referAFriendPage.waitForReferralLinkToLoad()

        //Act
        referAFriendPage.referralLinkTxtbox.realClick()
                        .should('have.text', 'Copied!')

        //Assert: Verify clipboard value
        referAFriendPage.verifyClipboardTextIfEqualToReferralLink()
    });

    it.only('should refer a friend by sharing referral link - Email', () => {
        //Arrange
        //TODO: Move this path file to a fixture
        cy.visit('/my-account/my-amaysim/refer_friends')

        //Act
        cy.fixture('referafriend').then((data) => {
            referAFriendPage.emailTxtbox.clear().type(data.email)
            referAFriendPage.emailBodyTextArea.clear().type(data.body)
        })
        
        referAFriendPage.shareBtn.click()

        //Assert
        referAFriendPage.referAFriendComponent
            .contains('Thanks for sharing the big love')
            .should('be.visible')

        referAFriendPage.shareAgainBtn.should('be.visible')
    });

    //TODO: Add reminder it block

    
});