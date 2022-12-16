const ADMIN_PROF = '.oxd-main-menu-item:eq(0)'
const PIM_INFO = '.oxd-main-menu-item:eq(1)'
const LEAVE_LIST = '.oxd-main-menu-item:eq(2)'
const TIME_SHEET = '.oxd-main-menu-item:eq(3)'
const RECRUITMENT_INFO = '.oxd-main-menu-item:eq(4)'
const MY_INFO = '.oxd-main-menu-item:eq(5)'
const PERFORMANCE_INFO = '.oxd-main-menu-item:eq(6)'
const DASHBOARD_INFO = '.oxd-main-menu-item:eq(7)'
const DIRECTORY_INFO = '.oxd-main-menu-item:eq(8)'
const MAINTENANCE_INFO = '.oxd-main-menu-item:eq(9)'
const BUZZ_INFO = '.oxd-main-menu-item:eq(10)'

class MainPage {
    static admin() {
        cy.get(ADMIN_PROF).click()
    }
    static pim() {
        cy.get(PIM_INFO).click()
    }
    static leave() {
        cy.get(LEAVE_LIST).click()
    }
    static time() {
        cy.get(TIME_SHEET).click()
    }
    static recruit() {
        cy.get(RECRUITMENT_INFO).click()
    }
    static myinfo() {
        cy.get(MY_INFO).click()
    }
    static performance() {
        cy.get(PERFORMANCE_INFO).click()
    }
    static dashboard() {
        cy.get(DASHBOARD_INFO).click()
    }
    static directory() {
        cy.get(DIRECTORY_INFO).click()
    }
    static maintenance() {
        cy.get(MAINTENANCE_INFO).click()
    }
    static buzz() {
        cy.get(BUZZ_INFO).click()
    }
}   

export default MainPage

