

class ReferAFriendPage{

    get referAFriendComponent(){
        return cy.getIframeBody('#friendbuylandingpage iframe')
    }

    get referralLinkTxtbox(){
        return this.referAFriendComponent
                    .find('.Text-markdown-container.copyText')
    }

    get copyBtn(){
        return this.referAFriendComponent
                    .contains('Copy')
                    .parent()
    }
    
}


export default new ReferAFriendPage();