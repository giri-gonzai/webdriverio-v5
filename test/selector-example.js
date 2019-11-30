describe("Test webdriveruni homepage", () => {
    beforeEach(function () {
        browser.url('./');
    })
    
    it("Test by ID", () => {
        $("#contact-us").waitForEnabled(3000);
        const clickByID = $("#contact-us")
        clickByID.click();
    })

    it("Test by Class", () => {
        //$("#contact-us").waitForEnabled(3000);
        const clickByClass = $(".section-title")
        clickByClass.click();
    })

    it("Test by XPath", () => {
        $("#contact-us").waitForEnabled(3000);
        const clickByXPath = $("//h1[text()='CONTACT US']")
        clickByXPath.click();
    })

    it("Test by CSS", () => {
        $("#contact-us").waitForEnabled(3000);
        const clickByCSS = $("#contact-us h1")
        clickByCSS.click();
    })
})