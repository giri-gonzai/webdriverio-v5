var Accordian_PageObjects = require("../pageObjects/Accordian_PageObjects.js");
const assert = require('assert');
const chai = require('chai');

beforeEach('Accessing Contact Us URL', async()  => {            //Using async wait requests
    await browser.url('/Accordion/index.html');            //Using await command
});

describe('WebDriver Uni: Test Accordian Page', () => {
    
    it('Positive Test: Should Open Accordian Page and expand Manual Testing Box', () => {
        Accordian_PageObjects.clickManualTestingExpanderButton();
        Accordian_PageObjects.getTextManualTestingExpanderDescription();
    });

});