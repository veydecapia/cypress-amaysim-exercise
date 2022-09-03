

class DashboardPage{

    get infoNumber(){
        return cy.get('.service-primary-heading')
    }
}


export default new DashboardPage();