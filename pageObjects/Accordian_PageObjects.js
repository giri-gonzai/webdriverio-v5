class Accordian_PageObjects {

    //Locator for Manual Testing Expander
    get manualTestingExpander() {
        return $("[id='manual-testing-accordion']");
    }
    //Locator for Manual Testing Expander Description
    get manualTestingExpanderDescription() {
        return $("[id='manual-testing-description']");
    }
    //Getting Text for Manual Testing Expander Description
    get manualTestingExpanderDescriptionText() {
        return this.manualTestingExpanderDescription.getText();
    }

    //Locator for Cucumber BDD Testing Expander
    get cucumberExpander() {
        return $("[id='cucumber-accordion']");
    }
    //Locator for Cucumber BDD Testing Expander Description
    get cucumberExpanderDescription() {
        return $("[id='cucumber-accordion-description']");
    }
    //Getting Text for Cucumber BDD Testing Expander Description
    get cucumberExpanderDescriptionText() {
        return this.cucumberExpanderDescription.getText();
    }

    //Locator for Test Automation Expander
    get automationTestingExpander() {
        return $("[id='automation-accordion']");
    }
    //Locator for Test Automation Expander Description
    get automationTestingExpanderDescription() {
        return $("[id='automation-testing-description']");
    }
    //Getting Text for Test Automation Expander Description
    get automationTestingExpanderDescriptionText() {
        return this.automationTestingExpanderDescription.getText();
    }

    //Locator for Keep Clicking Expander
    get clickExpander() {
        return $("[id='click-accordion']");
    }
    //Locator for Keep Clicking Expander Description
    get clickExpanderDescription() {
        return $("[id='timeout']");
    }
    //Getting Text for Keep Clicking Expander Description
    get clickExpanderDescriptionText() {
        return this.clickExpanderDescription.getText();
    }

    //Locator for timer box - Loading Content
    get hiddenElementBar() {
        return $("[id='hidden-text']");
    }

    //////////////////////////////////////////////////////////

    //Locator Methods

    //Method for Manual Testing Expander Button
    clickManualTestingExpanderButton() {
        return this.manualTestingExpander.click();
    }
    //Method for Manual Testing Expander Description Text
    getTextManualTestingExpanderDescription() {
        return this.manualTestingExpanderDescription.getText();
    }

    //Method for second expand box - Cucumber BDD Testing
    //Method for third expand box - Test Automation
    //Method for forth expand box - Keep Clicking Box
    //Method for timer box - Loading Content

}

module.exports = new Accordian_PageObjects();