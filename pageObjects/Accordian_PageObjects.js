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
    get manualTestingExpander() {
        return $("[id='cucumber-accordion']");
    }
    //Locator for Cucumber BDD Testing Expander Description
    get manualTestingExpanderDescription() {
        return $("[id='cucumber-accordion-description']");
    }

    //Locator for Test Automation Expander
    get manualTestingExpander() {
        return $("[id='automation-accordion']");
    }
    //Locator for Test Automation Expander Description
    get manualTestingExpanderDescription() {
        return $("[id='automation-testing-description']");
    }

    //Locator for Keep Clicking Expander
    get manualTestingExpander() {
        return $("[id='click-accordion']");
    }
    //Locator for Keep Clicking Expander Description
    get manualTestingExpanderDescription() {
        return $("[id='timeout']");
    }

    //Locator for timer box - Loading Content

    //////////////////////////////////////////////////////////

    //Locator Methods

    //Method for first expand box - Manual Testing
    //Method for second expand box - Cucumber BDD Testing
    //Method for third expand box - Test Automation
    //Method for forth expand box - Keep Clicking Box
    //Method for timer box - Loading Content

}