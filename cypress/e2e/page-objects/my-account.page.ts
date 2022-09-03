import homePage from "./home.page"


class myAccountPage{
    visit(){

    }

    get serviceTileMobileSection(){
        return cy.get('#service_tile_mobile')
    }

    get managePlanLnk(){
        return cy.contains('Manage plan')
    }

    get referAFriendLnk(){
        return cy.contains('Refer a friend')
    }

}

export default new myAccountPage()