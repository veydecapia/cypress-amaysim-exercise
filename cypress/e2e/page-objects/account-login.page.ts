

class LoginPage{
    visit(){
        
    }

    get usernameTxtbox(){
        return cy.get('#username')
    }

    get passwordTxtbox(){
        return cy.get('#password')
    }

    get loginBtn(){
        return cy.get("button[name='button']")
    }

    /**
     * @description
     * Logins the user to Amaysim account using number or email
     * @param {string} username Can either be a number or email.
     * @param {string} password Account password.
     */
    submitLoginForm = (
        username: string,
        password: string
    ) => {
        cy.session([username, password], () => {
            cy.visit('https://accounts.amaysim.com.au/identity/login')
            this.usernameTxtbox.type(username)
            this.passwordTxtbox.type(password)
            this.loginBtn.click()
        })
    }

}

export default new LoginPage()