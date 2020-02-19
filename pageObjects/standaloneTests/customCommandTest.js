const expect = require('expect'); 

beforeEach('Accessing Accordian URL', async() => {
    browser.url('/Accordion/index.html');
    browser.setWindowSize(1800, 1200);
});

describe('Custom command addition test', () => {

    it('Test of running custom command', () => {
        //const accordianLink = $("#///h1[@innertext='ACCORDION & TEXT AFFECTS (APPEAR & DISAPPEAR)']");
        //accordianLink.click();

        //Custom Command Method
        const accordianPageData = browser.getUrlAndTitle();

        expect(accordianPageData.title).to.contains('Accordian');
        expect(accordianPageData.url).to.contains('Accordian');
    });
});