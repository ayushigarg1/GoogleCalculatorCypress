export class GoogleHomePage {
    /**
     * open calculator and dismiss sign in pop-up
     */

    openCalculator() {
        cy.visit(Cypress.env("url"));
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //Dismiss the sign in pop-up if it appears
        cy.get('body').then($body => {
            if ($body.find('div[class="kHtcsd"]').length) {
                cy.contains('Stay signed out').click({force: true})
            } else cy.log("no sign in pop-up")
        })
        // Click on the search box
        cy.get('textarea[name="q"]').type('calculator{enter}', {delay: 100})
        // Wait for the calculation history to be visible if captcha appears
        cy.xpath('//span[@aria-label="calculations history"]', {timeout: 600000}).should('be.visible')

    }
}