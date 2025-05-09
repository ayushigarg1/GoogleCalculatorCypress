export class CalculatorPage {

    // This class contains locators and methods for interacting with the Google calculator
    webLocators = {
        digits: (number) => `//div[@class='XRsWPe AOvabd' and contains(text(),'${number}')]`,
        operations: (operation) => `//div[@aria-label='${operation}']`,
        equals: () => `//div[@aria-label='equals']`,
        result: '#cwos',
        allClear: '//div[@aria-label="all clear"]',
        clearEntry: '//div[@aria-label="clear entry"]'
    }

    //This method is to input a number into the calculator
    inputNumber(number) {
        // Split the number into its digits and click each digit
        number = number.toString().split('');
        for (let i = 0; i < number.length; i++) {
            cy.xpath(this.webLocators.digits(number[i])).click();
        }

    }

    // This method is to input an operation into the calculator
    inputAction(action) {
        cy.xpath(this.webLocators.operations(action)).click();
    }

    // This method is to input the equals operation into the calculator
    inputEquals() {
        cy.xpath(this.webLocators.equals()).click();
    }

    //This method is to get the result from the calculator
    getResult() {
        return cy.get(this.webLocators.result).invoke('text').then((text) => {
            return Number(text.trim());
        });
    }

    // This method is to input a number using the keyboard
    inputKeyboard(input) {
        cy.get(this.webLocators.result).type(input).type('{enter}');
    }

    // This method is to clear all entries in the calculator
    inputAllClear() {
        cy.xpath(this.webLocators.allClear).should('be.visible');
    }

    //This method is to clear a single entry in the calculator
    inputClearEntry() {
        cy.xpath(this.webLocators.clearEntry).should('be.visible').click();
    }
}