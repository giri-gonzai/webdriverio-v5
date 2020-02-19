var Accordian_PageObjects = require("../pageObjects/Accordian_PageObjects.js");
const assert = require('assert');
/* const chai = require('chai');
const expect = require('expect'); */

beforeEach('Accessing Accordian URL', async()  => {            //Using async wait requests
    await browser.url('/Accordion/index.html');            //Using await command
});

describe('WebDriver Uni: Test Accordian Page', () => {

    it('Positive Test-Manual Testing Expander: Should Open Accordian Page and expand Manual Testing Box', () => {      
        Accordian_PageObjects.clickManualTestingExpanderButton();
        Accordian_PageObjects.getTextManualTestingExpanderDescription();
      
        const accordianPageData = browser.getUrlAndTitle();
        //console.log(accordianPageData.url);
        expect(accordianPageData.url).to.contains('Accordion');
        expect(accordianPageData.title).to.contains('Accordion');
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
        const loadingContent = $('#hidden-text');
        const hiddenTextExpander = $("[id='click-accordion']");
        const hiddenTextExpanderText = $("/html//div[@id='timeout']");
        
        loadingContent.waitForExist(10000);
        //hiddenTextExpander.click();
        hiddenTextExpander.getText();
        hiddenTextExpanderText.getText('');
        //assert.equal(hiddenTextExpanderText.getText(''), 'This text has appeared after 5 seconds!');
        
        //Accordian_PageObjects.getTextHiddenElementExpanderDescription();

        
        /* while(Accordian_PageObjects.waitForHiddenElementExpanderButton() != 'LOADING COMPLETE.') {
            browser.pause(1000);
        } */    
    })

});