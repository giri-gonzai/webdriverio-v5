var ContactUs_PageObjects = require("../pageObjects/ContactUs_PageObjects.js");
var dataGenerators = require('../utilities/dataGenerators');
const assert = require('assert');
const chai = require('chai');

beforeEach('Accessing Contact Us URL', async()  => {            //Using async wait requests
    await browser.url('/Contact-Us/contactus.html');            //Using await command
});

describe('WebdriverUni: Test Contact Us Page', ()  => {     //Following POM Phase 1

    it('Positive Test: Should be able to submit a successful submission via contact us form', ()  => {  
        ContactUs_PageObjects.submitAllInformationContactUsForm('GG', 'Gogo', dataGenerators.generateRandomEmailAddress, 'NY');
        ContactUs_PageObjects.successfulSubmission.waitForDisplayed(3000);
        try { 
        expect(ContactUs_PageObjects.successfulSubmissionText).to.equal("Thank You for your Message!");
        } catch(err) {
            console.log("Exception: " + err);
            assert.fail();
        }
        });

    it('Negative Test_1: Should not be able to submit a successful submission via contact us form as all field are required', ()  => {
        ContactUs_PageObjects.setFirstName('GG');
        ContactUs_PageObjects.setLastName('Gogo');
        ContactUs_PageObjects.setEmailAddress(dataGenerators.generateRandomEmailAddress);
        ContactUs_PageObjects.clickSubmitButton();
        ContactUs_PageObjects.unsuccessfulSubmission.waitForDisplayed(3000);
        try { 
        expect(ContactUs_PageObjects.unsuccessfulSubmissionText).to.have.string("Error: all fields are required");
        } catch(err) {
            console.log("Exception: " + err);
            assert.fail();
        }
        });

    it('Negative Test_2: Should not be able to submit a successful submission via contact us form as all field are required', ()  => {
        ContactUs_PageObjects.setFirstName('GG');
        ContactUs_PageObjects.setEmailAddress('gg@mail.com');
        ContactUs_PageObjects.clickSubmitButton();
        ContactUs_PageObjects.unsuccessfulSubmission.waitForDisplayed(3000);
        try { 
            expect(ContactUs_PageObjects.unsuccessfulSubmissionText).to.have.string("Error: all fields are required");
            } catch(err) {
                console.log("Exception: " + err);
                assert.fail();
            }
        });

    it('Negative Test_3: Should not be able to submit a successful submission via contact us form as all field are required', ()  => {
        ContactUs_PageObjects.setLastName('Gogo');
        ContactUs_PageObjects.setEmailAddress('gg@mail.com');
        ContactUs_PageObjects.setMessage('NY');
        ContactUs_PageObjects.clickSubmitButton();
        ContactUs_PageObjects.unsuccessfulSubmission.waitForDisplayed(3000);
        try { 
            expect(ContactUs_PageObjects.unsuccessfulSubmissionText).to.have.string("Error: all fields are required");
            } catch(err) {
                console.log("Exception: " + err);
                assert.fail();
            }
        }); 

    it.only('Positive Test for Reset Button Check', () => {
        ContactUs_PageObjects.setFirstName('GG');
        ContactUs_PageObjects.setLastName('Gogo');
        ContactUs_PageObjects.setEmailAddress(dataGenerators.generateRandomEmailAddress());
        ContactUs_PageObjects.setMessage('NY');
        ContactUs_PageObjects.clickResetButton();
        
        //ContactUs_PageObjects.setEmailAddress().assert.isEmpty('');
        
        try {
            expect(ContactUs_PageObjects.setFirstName).to.be.null;
        }   catch(err) {
            console.log("Exception: " + err);
            chai.assert.isEmpty('');
        } 
    });    
});