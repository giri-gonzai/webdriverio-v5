const expect = require('chai').expect;
 
 beforeEach('Running custom javascript on webpage', async() => {
    await browser.url('/Accordion/index.html');
    browser.setWindowSize(1800, 1200);
});

describe('Custom JavaScript running command test', () => {

    it('Custom JavaScript turning background red', () => {
        browser.execute(() => {
            return (document.body.style.backgroundColor = "red");
        });
        browser.pause(5000);
    });
});