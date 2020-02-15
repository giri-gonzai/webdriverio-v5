var Accordian_PageObjects = require("../pageObjects/Accordian_PageObjects.js");
/* const assert = require('assert');
const chai = require('chai');
const expect = require('expect'); */

beforeEach('Accessing Contact Us URL', async()  => {            //Using async wait requests
    await browser.url('/Accordion/index.html');            //Using await command
});

describe('WebDriver Uni: Test Accordian Page', () => {
    
    it('Positive Test-Manual Testing Expander: Should Open Accordian Page and expand Manual Testing Box', () => {
        Accordian_PageObjects.clickManualTestingExpanderButton();
        Accordian_PageObjects.getTextManualTestingExpanderDescription();
    });

    it('Positive Test-Cucumber BDD Expander: Should Open Accordian Page and expand Cucumber BDD Box', () => {
        Accordian_PageObjects.clickCucumberBDDExpanderButton();
        Accordian_PageObjects.getTextCucumberBDDExpanderDescription();
    });

    it('Positive Test-Test Automation Expander: Should Open Accordian Page and expand Test Automation Box', () => {
        Accordian_PageObjects.clickAutomationTestingExpanderButton();
        Accordian_PageObjects.getTextAutomationTestingExpanderDescription();
    });
    
    it('Postive Explicit Wait Time Test', () => {
        Accordian_PageObjects.clickHiddenElementExpanderButton();
        Accordian_PageObjects.getHiddenElementExpanderDescription();
    })

});