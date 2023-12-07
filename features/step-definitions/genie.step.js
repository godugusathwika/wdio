const { Given, When, Then } = require('@wdio/cucumber-framework');
const geniepage = require('../pageobjects/genie.page');
Given(/^user is on the genie registration page$/, () => {
    browser.url("http://geniehealthjobsqa-env-4.eba-kmcgagjd.us-west-1.elasticbeanstalk.com/#/register")
});

When(/^user enters the email$/, async() => {
await geniepage.email('Sathwika123@gmail.com')
});

When(/^user enters the phone number$/, async() => {
await geniepage.phonenumber('7032223591')
});

Then(/^enter the password and confirm password$/, async() => {
await geniepage.password('Sathwika@123','Sathwika@123')
});

Then(/^user enters the first name and last name$/,async () => {
await geniepage.names('sathwika','godugu')
});
