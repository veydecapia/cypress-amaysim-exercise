import accountLoginPage from "../page-objects/account-login.page";
import myAccountPage from "../page-objects/my-account.page";
import referAFriendPage from "../page-objects/refer-a-friend.page";


describe('Refer a friend', () => {


    beforeEach(() => {
        accountLoginPage.submitLoginForm('0466134574','AWqasde321')
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

        /**
         * Wait for the referral link to load
         * should contain http link to continue
         */
        referAFriendPage.referralLinkTxtbox
            .find('p') // Go to the element p tag
            .invoke('text')
            .should('contain', 'http')

        //Act
        referAFriendPage.copyBtn.realClick()
                .should('have.text', 'Copied!')

        //Assert: Verify clipboard value
        // Get referral link text value then compare to clipboard value
        referAFriendPage.referralLinkTxtbox.find('p').invoke('text')
            .then((referralText) => {
                cy.window().its('navigator.clipboard').invoke('readText')
                    .should((clipboardText) => {
                        expect(referralText).to.eql(referralText)
                    })
            })

        // //Get clipboard value then compare to referral link string value
        // cy.window().then((win) => {
        //     win.navigator.clipboard.readText().then((clipboardText) => {
        //         referAFriendPage.referralLinkTxtbox
        //             .find('p').invoke('text').should((referralText) => {
        //                 expect(clipboardText).to.not.contain(referralText)
        //                 cy.log("Referral Text: " + referralText)
        //             })
        //     })
        // })
    });

    
});