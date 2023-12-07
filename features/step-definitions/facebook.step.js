const { Given, When, Then } = require('@wdio/cucumber-framework');
const facebookPage = require('../pageobjects/facebook.page');

Given(/^user in facebook login page$/,async () => {
    await browser.url('https://www.facebook.com/login/')
});

When(/^user enters the user name$/,async () => {
    await facebookPage.login ('sathwika@gmail.com')
});

Then(/^user enters the passwoed$/, async() => {
    await facebookPage.login('12345678')
});


When(/^user click on the login button$/,async () => {

    await facebookPage.loginButton
});

 

