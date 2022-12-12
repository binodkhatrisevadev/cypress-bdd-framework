const URL = 'https://opensource-demo.orangehrmlive.com'
const USER_NAME = 'input[name=username]'
const PASS_WORD = 'input[name=password]'
const SUBMIT_BUTTOM = '.oxd-button'
const ERROR_MSG ='.oxd-alert-content > .oxd-text'

class LoginPage{
    static visit(){
        cy.visit(URL)
    }
    static fillUsername(name){
        cy.get(USER_NAME).type(name)
    }
    static fillPassword(password){
        cy.get(PASS_WORD).type(password)
    }
    static submit(){
        cy.get(SUBMIT_BUTTOM).click()
    }
    static errorMsg(){
        cy.get(ERROR_MSG).contains('Invalid credentials')
    }
}

export default LoginPage

