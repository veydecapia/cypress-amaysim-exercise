import homePage from "./home.page"


class MyAccount{
    visit(){

    }

    get serviceTileMobileSection(){
        return cy.get('#service_tile_mobile')
    }

    get managePlanLnk(){
        return this.serviceTileMobileSection.contains('Manage plan')
    }

    get referAFriendLnk(){
        return cy.contains('Refer a friend')
    }

}

export default new MyAccount()