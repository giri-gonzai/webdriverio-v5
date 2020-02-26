module.exports = {
    //Function to generate random email address
    generateRandomEmailAddress : function() {
        let emailAddress = "AutoFramework_" + Math.random().toString().replace('0', '') + "@webdriveruni.com"
        return emailAddress;
    },

    generateRandomMessage : function() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
}