const assert = require('assert');
describe("Test webdriveruni homepage", () => {
    it("Validate homepage of webdriveruniversity is correct", () => {
        browser.url('./')
        const title = browser.getTitle();
        assert.strictEqual(title, 'WebDriverUniversity.com');
    })
})