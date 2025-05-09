import {CalculatorPage} from "../pages/calculatorPage";
import {GoogleHomePage} from "../pages/googleHomePage";
import testData from "../fixtures/input.json";
import testDataInvalid from "../fixtures/invalidInput.json";
import testChainedInput from "../fixtures/chainedInput.json";
import {sanitizeDecimalInput} from "../support/utils";

describe("Scenario 1 :Check arithmetic operations on button click on calculator", () => {

    const calculatorPage = new CalculatorPage();

    before(function () {
        const googleHomePage = new GoogleHomePage()
        googleHomePage.openCalculator();
    });

    it("Verify addition operation", () => {
        const input1 = testData.sum.case1.input1;
        const input2 = testData.sum.case1.input2;
        calculatorPage.inputNumber(input1);
        calculatorPage.inputAction('plus');
        calculatorPage.inputNumber(input2);
        calculatorPage.inputEquals();
        calculatorPage.getResult().then((result) => {
            expect(result).to.equal(input1 + input2);
        })
    })

    it("Verify addition operation with decimal", () => {
        const input1 = testData.sum.case2.input1;
        const input2 = testData.sum.case2.input2;
        calculatorPage.inputNumber(input1);
        calculatorPage.inputAction('plus');
        calculatorPage.inputNumber(input2);
        calculatorPage.inputEquals();
        calculatorPage.getResult().then((result) => {
            expect(result).to.equal(input1 + input2);
        })
    })

    it("Verify subtraction operation", () => {
        const input1 = testData.subtract.case1.input1;
        const input2 = testData.subtract.case1.input2;
        calculatorPage.inputNumber(input1);
        calculatorPage.inputAction('minus');
        calculatorPage.inputNumber(input2);
        calculatorPage.inputEquals();
        calculatorPage.getResult().then((result) => {
            expect(result).to.equal(input1 - input2);
        })
    })

    it("Verify subtraction operation with decimal", () => {
        const input1 = testData.subtract.case2.input1;
        const input2 = testData.subtract.case2.input2;
        calculatorPage.inputNumber(input1);
        calculatorPage.inputAction('minus');
        calculatorPage.inputNumber(input2);
        calculatorPage.inputEquals();
        calculatorPage.getResult().then((result) => {
            expect(result).to.equal(input1 - input2);
        })
    })

    it("Verify multiplication operation", () => {
        const input1 = testData.multiply.case1.input1;
        const input2 = testData.multiply.case1.input2;
        calculatorPage.inputNumber(input1);
        calculatorPage.inputAction('multiply');
        calculatorPage.inputNumber(input2);
        calculatorPage.inputEquals();
        calculatorPage.getResult().then((result) => {
            expect(result).to.equal(input1 * input2);
        })
    })

    it("Verify multiplication operation with decimal", () => {
        const input1 = testData.multiply.case2.input1;
        const input2 = testData.multiply.case2.input2;
        calculatorPage.inputNumber(input1);
        calculatorPage.inputAction('multiply');
        calculatorPage.inputNumber(input2);
        calculatorPage.inputEquals();
        calculatorPage.getResult().then((result) => {
            expect(result).to.equal(input1 * input2);
        })
    })

    it("Verify division operation", () => {
        const input1 = testData.divide.case1.input1;
        const input2 = testData.divide.case1.input2;
        calculatorPage.inputNumber(input1);
        calculatorPage.inputAction('divide');
        calculatorPage.inputNumber(input2);
        calculatorPage.inputEquals();
        calculatorPage.getResult().then((result) => {
            const roundedResult = Number(result.toFixed(7));
            expect(roundedResult).to.equal(Number((input1 / input2).toFixed(7)));
        })
    })

    it("Verify division operation with decimal", () => {
        const input1 = testData.divide.case2.input1;
        const input2 = testData.divide.case2.input2;
        calculatorPage.inputNumber(input1);
        calculatorPage.inputAction('divide');
        calculatorPage.inputNumber(input2);
        calculatorPage.inputEquals();
        calculatorPage.getResult().then((result) => {
            const roundedResult = Number(result.toFixed(7));
            expect(roundedResult).to.equal(Number((input1 / input2).toFixed(7)));
        })
    })
    afterEach(
        () => {
            calculatorPage.inputAllClear();
        }
    )

});

describe("Scenario 2 :Check arithmetic operations on keyboard input on calculator", () => {

    const calculatorPage = new CalculatorPage();

    before(function () {
        const googleHomePage = new GoogleHomePage()
        googleHomePage.openCalculator();
    });

    it("Verify addition operation", () => {
        const input1 = testData.sum.case1.input1;
        const input2 = testData.sum.case1.input2;
        calculatorPage.inputKeyboard(input1 + '+' + input2);
        calculatorPage.getResult().then((result) => {
            expect(result).to.equal(input1 + input2);
        })
    })

    it("Verify addition operation with decimal", () => {
        const input1 = testData.sum.case2.input1;
        const input2 = testData.sum.case2.input2;
        calculatorPage.inputKeyboard(input1 + '+' + input2);
        calculatorPage.getResult().then((result) => {
            expect(result).to.equal(input1 + input2);
        })
    })


    it("Verify subtraction operation", () => {
        const input1 = testData.subtract.case1.input1;
        const input2 = testData.subtract.case1.input2;
        calculatorPage.inputKeyboard(input1 + '-' + input2);
        calculatorPage.getResult().then((result) => {
            expect(result).to.equal(input1 - input2);
        })
    })

    it("Verify subtraction operation with decimal", () => {
        const input1 = testData.subtract.case2.input1;
        const input2 = testData.subtract.case2.input2;
        calculatorPage.inputKeyboard(input1 + '-' + input2);
        calculatorPage.getResult().then((result) => {
            expect(result).to.equal(input1 - input2);
        })
    })

    it("Verify multiplication operation", () => {
        const input1 = testData.multiply.case1.input1;
        const input2 = testData.multiply.case1.input2;
        calculatorPage.inputKeyboard(input1 + '*' + input2);
        calculatorPage.getResult().then((result) => {
            expect(result).to.equal(input1 * input2);
        })
    })

    it("Verify multiplication operation with decimal", () => {
        const input1 = testData.multiply.case2.input1;
        const input2 = testData.multiply.case2.input2;
        calculatorPage.inputKeyboard(input1 + '*' + input2);
        calculatorPage.getResult().then((result) => {
            expect(result).to.equal(input1 * input2);
        })
    })

    it("Verify division operation", () => {
        const input1 = testData.divide.case1.input1;
        const input2 = testData.divide.case1.input2;
        calculatorPage.inputKeyboard(input1 + '/' + input2);
        calculatorPage.getResult().then((result) => {
            const roundedResult = Number(result.toFixed(7));
            expect(roundedResult).to.equal(Number((input1 / input2).toFixed(7)));
        })
    })

    it("Verify division operation with decimal", () => {
        const input1 = testData.divide.case2.input1;
        const input2 = testData.divide.case2.input2;
        calculatorPage.inputKeyboard(input1 + '/' + input2);
        calculatorPage.getResult().then((result) => {
            const roundedResult = Number(result.toFixed(7));
            expect(roundedResult).to.equal(Number((input1 / input2).toFixed(7)));
        })

    })
    afterEach(
        () => {
            calculatorPage.inputAllClear();
        }
    )
})

describe("Scenario 3 :Check arithmetic operations on button click on calculator with invalid input", () => {
    const calculatorPage = new CalculatorPage()

    before(function () {
        const googleHomePage = new GoogleHomePage()
        googleHomePage.openCalculator()
    });

    it("Verify arithmetic operations on keyboard input with double decimal ", () => {
        const input1 = testDataInvalid.multiply.input1
        const input2 = testDataInvalid.multiply.input2
        calculatorPage.inputKeyboard(input1 + '*' + input2)

        const validatedInput1 = sanitizeDecimalInput(input1)
        const validatedInput2 = sanitizeDecimalInput(input2)
        calculatorPage.getResult().then((result) => {
            expect(result).to.equal(validatedInput1 * validatedInput2);
        })

    })
    it("Verify arithmetic operations on keyboard input with characters", () => {
        const input1 = testDataInvalid.sum.input1
        const input2 = testDataInvalid.sum.input2
        calculatorPage.inputKeyboard(input1 + '+' + input2)
        calculatorPage.getResult().then((result) => {
            const resultString = String(result); // Convert result to string
            expect(resultString).to.equal('NaN')
        })
    })

    it("Verify arithmetic operations on keyboard input with special characters", () => {
        const input1 = testDataInvalid.subtract.input1
        const input2 = testDataInvalid.subtract.input2
        calculatorPage.inputKeyboard(input1 + '-' + input2)
        calculatorPage.getResult().then((result) => {
            const resultString = String(result); // Convert result to string
            expect(resultString).to.equal('NaN')
        })
    })


})

describe("Scenario 4: Check arithmetic operation division by zero", () => {
    const calculatorPage = new CalculatorPage()

    before(function () {
        const googleHomePage = new GoogleHomePage()
        googleHomePage.openCalculator()
    });

    it("Verify division by zero", () => {
        const input1 = testDataInvalid.divide.input1
        const input2 = testDataInvalid.divide.input2
        calculatorPage.inputKeyboard(input1 + '/' + input2)
        calculatorPage.getResult().then((result) => {
            const resultString = String(result); // Convert result to string
            expect(resultString).to.equal('Infinity')
        })

    })
    afterEach(
        () => {
            calculatorPage.inputAllClear();
        }
    )


})

describe("Scenario 5: Check arithmetic operation multiply by zero", () => {
    const calculatorPage = new CalculatorPage()

    before(function () {
        const googleHomePage = new GoogleHomePage()
        googleHomePage.openCalculator()
    });

    it("Verify arithmetic operations with multiple operations", () => {
        const input1 = testData.multiply.case3.input1
        const input2 = testData.multiply.case3.input2
        calculatorPage.inputKeyboard(input1 + '*' + input2)
        calculatorPage.getResult().then((result) => {
            expect(result).to.equal(input1 * input2);
        })
    })
    afterEach(
        () => {
            calculatorPage.inputAllClear();
        }
    )
})

describe("Scenario 6: Check clear functionality", () => {

    const calculatorPage = new CalculatorPage()

    before(function () {
        const googleHomePage = new GoogleHomePage()
        googleHomePage.openCalculator()
    });

    it("Verify new input is accepted after clearing previous one", () => {

        const input1 = testData.sum.case3.input1
        const input2 = testData.sum.case3.input2
        const input3 = testData.sum.case3.input3
        const input4 = testData.sum.case3.input4
        calculatorPage.inputNumber(input1)
        calculatorPage.inputAction('plus')
        calculatorPage.inputNumber(input2)
        calculatorPage.inputClearEntry()
        calculatorPage.inputNumber(input3)
        calculatorPage.inputEquals()
        calculatorPage.getResult().then((result) => {
            expect(result).to.equal(input1 + input4);
        })
    })
    afterEach(
        () => {
            calculatorPage.inputAllClear();
        }
    )
})

describe("Scenario 7: Check chained operations", () => {

    const calculatorPage = new CalculatorPage()

    before(function () {
        const googleHomePage = new GoogleHomePage()
        googleHomePage.openCalculator()
    });

    it("Verify chained addition and subtraction with click", () => {
        const input1 = testChainedInput.chainedInput.case1.input1
        const input2 = testChainedInput.chainedInput.case1.input2
        const input3 = testChainedInput.chainedInput.case1.input3
        calculatorPage.inputNumber(input1)
        calculatorPage.inputAction('plus')
        calculatorPage.inputNumber(input2)
        calculatorPage.inputAction('minus')
        calculatorPage.inputNumber(input3)
        calculatorPage.inputEquals()
        calculatorPage.getResult().then((result) => {
            expect(result).to.equal((input1 + input2) - input3);
        })
    })

    it("Verify chained addition and multiplication with keyboard", () => {

        const input1 = testChainedInput.chainedInput.case1.input1
        const input2 = testChainedInput.chainedInput.case1.input2
        const input3 = testChainedInput.chainedInput.case1.input3
        calculatorPage.inputKeyboard(input1 + '+' + input2 + '*' + input3)
        calculatorPage.getResult().then((result) => {
            expect(result).to.equal(input1 + input2 * input3);
        })
    })

    it("Verify chained addition and division with decimal", () => {

        const input1 = testChainedInput.chainedInput.case2.input1
        const input2 = testChainedInput.chainedInput.case2.input2
        const input3 = testChainedInput.chainedInput.case2.input3
        calculatorPage.inputKeyboard(input1 + '+' + input2 + '/' + input3)
        calculatorPage.getResult().then((result) => {
            const roundedResult = Number(result.toFixed(7));
            expect(roundedResult).to.equal(Number((input1 + input2 / input3).toFixed(7)));
        })
    })
    afterEach(
        () => {
            calculatorPage.inputAllClear();
        }
    )
})









