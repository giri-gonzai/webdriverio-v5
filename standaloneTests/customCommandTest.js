const expect = require('chai').expect;
 
 beforeEach('Running custom commands', async() => {
    await browser.url('/Accordion/index.html');
    browser.setWindowSize(1800, 1200);
});

describe('Custom command test', () => {

    it('Test of running custom command', () => {
        //Custom Command Method
        const customCommandPageData = browser.getUrlAndTitle();

        expect(customCommandPageData.title).to.contains('Accordion Items');
        expect(customCommandPageData.url).to.contains('Accordion');
    });
});