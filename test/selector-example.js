describe("Test webdriveruni homepage", () => {
    beforeEach(function () {
        browser.url('./');
    })
    
    it("Test by ID", () => {
        $("#contact-us").waitForEnabled(3000);
        console.log('Homepage Title is: ' + browser.getTitle());
        const clickByID = $("#contact-us")
        clickByID.click();
        browser.switchWindow('http://webdriveruniversity.com/Contact-Us/contactus.html');
        console.log('Newpage title is: ' + browser.getTitle());
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
        browser.closeWindow();
    })
})