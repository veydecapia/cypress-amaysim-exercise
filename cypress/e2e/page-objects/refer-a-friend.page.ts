

class ReferAFriendPage{

    get referAFriendComponent(){
        return cy.getIframeBody('#friendbuylandingpage iframe')
    }

    get referralLinkTxtbox(){
        return this.referAFriendComponent
                    .find('.Text-markdown-container.copyText')
                    .first()
    }

    get referralLinkTxtboxTextValue(){
        return this.referralLinkTxtbox
                        .find('a') // Go to the element a tag
                        .invoke('text')
    }

    get copyBtn(){
        return this.referAFriendComponent
                    .contains('Copy')
                    .parent()
    }

    get emailTxtbox(){
        return this.referAFriendComponent
                    .find('input[aria-label="Send To Input Field"]')
    }

    get emailBodyTextArea(){
        return this.referAFriendComponent
                    .find('textarea[aria-label="Message Input Field"]')
    }

    get sendMyFriendAReminderCheckbox(){
        return this.referAFriendComponent
                    .find('.Checkbox-input')
    }

    get shareBtn(){
        return this.referAFriendComponent
                    .contains('Share')
    }

    get shareAgainBtn(){
        return this.referAFriendComponent
                    .contains('Share Again')
    }


    /**
     * @description
     * Waits for the referral link to load
     * should contain http link to continue
     */
    waitForReferralLinkToLoad = () => {
        this.referralLinkTxtboxTextValue
            .should('contain', 'http', {setTimeout: 10000})
    }


    /**
     * @description
     * Get referral link text value then compare 
     * to the clipboards value
     */
    verifyClipboardTextIfEqualToReferralLink = () => {
        this.waitForReferralLinkToLoad()

        this.referralLinkTxtboxTextValue
            .then((referralText) => {
                cy.window().its('navigator.clipboard').invoke('readText')
                    .should((clipboardText) => {
                        expect(referralText).to.include(clipboardText)
                    })
            })

        // !Exception when using clipboard API
        // (uncaught exception)NotAllowedError: The Clipboard API has been blocked because of a permissions policy applied to the current document. See https://goo.gl/EuHzyv for more details.
        // cy.window().then((win) => {
        //     win.navigator.clipboard.readText()
        //         .then((clipboardText) => {
        //             this.referralLinkTxtboxTextValue
        //                 .should((referralText) => {
        //                     expect(clipboardText).to.contain(referralText)
        //                 })
        //         })
        // })
    }
    
}


export default new ReferAFriendPage();