
const { Given, When, Then } = require('@wdio/cucumber-framework');
const logingenie = require('../pageobjects/logingenie.page');
//1
Given(/^user is on the genie login page$/, async() => {
    browser.url("http://geniehealthjobsqa-env-4.eba-kmcgagjd.us-west-1.elasticbeanstalk.com/#/job")
});

Then(/^user click on the login and register$/, async() => {
    await browser.maximizeWindow();
    await browser.pause(1000);
   (await logingenie.LoginAndRegister).moveTo();
});


Then(/^enters the invalid user name as "([^"]*)"$/,async (username1) => {
    await browser.pause(1000);
    (await logingenie.UserName).setValue(username1)
});

Then(/^Invalid password as "([^"]*)"$/, async(password1) => {
    await browser.pause(1000);
    (await logingenie.Password).setValue(password1)
});
Then(/^User click on the remember me check box$/, async() => {
    await browser.pause(1000);
    await logingenie.CheckBox.click()
});

Then(/^Click on sign in button$/,async () => {
    await browser.pause(1000);
    await logingenie.SigninButton.click()
});


//2
When(/^User enters the valid username as "([^"]*)"$/, async(username1) => {
    await browser.pause(3000);
    (await logingenie.UserName).setValue(username1)
});
//4
When(/^User enters the valid password as "([^"]*)"$/,async (password1) => {
	await browser.pause(3000);
	(await logingenie.Password).setValue(password1)
    await browser.pause(3000);
});

