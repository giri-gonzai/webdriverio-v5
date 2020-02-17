var Login_PageObjects = require("../pageObjects/Login_PageObjects.js");
const assert = require('assert');

beforeEach('Accessing Login Page URL', async()  => {            //Using async wait requests
    await browser.url('/Login-Portal/index.html');            //Using await command
});

describe('WebDriver Uni: Test Login Page', () => {

    it('Postive Test: Enter valid credentials and login', () => {

    });
});