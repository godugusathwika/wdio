const { Given, When, Then } = require('@wdio/cucumber-framework');
const OrgHRMpage= require('../pageobjects/orgHRM.page');
const orgHRMPage = require('../pageobjects/orgHRM.page');

Given(/^user is on the orange login page$/,async () => {
    browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

});

Then(/^user enters the username and password$/, async() => {
    await orgHRMPage.Login1('sathwika','godugu')
});

Then(/^click n the login button$/,async () => {
    await orgHRMPage. LoginButton();
});
Given(/^user enters the user name and password and pim module$/,async () => {
    await orgHRMPage.Login('Admin','admin123')
});


Then(/^click on the addemploye option$/,async () => {
    await orgHRMPage.ClickAddemploye();
});

When(/^fill the elements and click the add button$/,async () => {
    await orgHRMPage.Loginnames('sathwika','godugu','a')
});
