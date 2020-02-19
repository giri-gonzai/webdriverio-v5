//const expect = require('expect'); 

beforeEach('Running custom commands', async() => {
    await browser.url('/Accordion/index.html');
    browser.setWindowSize(1800, 1200);
});

describe('Custom command test', () => {

    it('Test of running custom command', () => {
        //const accordianLink = $("#///h1[@innertext='ACCORDION & TEXT AFFECTS (APPEAR & DISAPPEAR)']");
        //accordianLink.click();

        //Custom Command Method
        const customCommandPageData = browser.getUrlAndTitle();

        //expect(customCommandPageData.title).to.contains('Accordian');
        //expect(customCommandPageData.url).to.contains('Accordian');
    });
});