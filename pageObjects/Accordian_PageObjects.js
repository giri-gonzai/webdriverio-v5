class Accordian_PageObjects {

    //Locator for Manual Testing Expander
    get manualTestingExpander() {
        return $("[id='manual-testing-accordion']");
    }
    //Locator for Manual Testing Expander Description
    get manualTestingExpanderDescription() {
        return $("[id='manual-testing-description']");
    }

    //Locator for Cucumber BDD Testing Expander
    get cucumberExpander() {
        return $("[id='cucumber-accordion']");
    }
    //Locator for Cucumber BDD Testing Expander Description
    get cucumberExpanderDescription() {
        return $("[id='cucumber-testing-description']");
    }
   
    //Locator for Test Automation Expander
    get automationTestingExpander() {
        return $("[id='automation-accordion']");
    }
    //Locator for Test Automation Expander Description
    get automationTestingExpanderDescription() {
        return $("[id='automation-testing-description']");
    }

    //Locator for Keep Clicking Expander
    get clickExpander() {
        return $("[id='click-accordion']");
    }
    //Locator for Keep Clicking Expander Description
    get hiddenElementExpanderDescription() {
        return $("[id='timeout']");
    }

    //Locator for timer box - Loading Content
    get hiddenLoadingElementBar() {
        return elem = $("[#hidden-text]");
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

    //Method for Test Automation Expander Button
    clickAutomationTestingExpanderButton() {
        return this.automationTestingExpander.click();
    }
    //Method for Automation Testing Expander Description Text
    getTextAutomationTestingExpanderDescription() {
        return this.automationTestingExpanderDescription.getText();
    }

    //Method for Cucumber BDD Testing Button
    clickCucumberBDDExpanderButton() {
        return this.cucumberExpander.click();
    }
    //Method for Cucumber BDD Testing Expander Description
    getTextCucumberBDDExpanderDescription() {
        return this.cucumberExpanderDescription.getText();
    }

    //Method for forth expand box - Keep Clicking Box
    waitForHiddenElementExpanderButton() {
        return this.hiddenLoadingElementBar.getText();
    }

    //Method for timer box - Loading Content
    getTextHiddenElementExpanderDescription() {
        return this.hiddenElementExpanderDescription.getText();
    }
}

module.exports = new Accordian_PageObjects();