
class HomePage{
    visit(){
        cy.visit('')
    }

    get accountBtn(){
        return cy.get('.variant-b').contains('Account')
    }
}


export default new HomePage()