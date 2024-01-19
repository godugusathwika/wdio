const { Given, When, Then } = require('@wdio/cucumber-framework');
const logingenie = require('../pageobjects/logingenie.page');
 const Timeouts = require('../pageobjects/Timeouts.page');
 const variables= require('../variables/credentials.json');
 const cucumberJson = require("wdio-cucumberjs-json-reporter");
//invalid1
Given(/^user is on the genie login page$/, async() => {
   await logingenie.WebPage();
   await Timeouts.waitTime(); 
    await browser.maximizeWindow();
});
When(/^user click on the login and register$/, async() => {
    await Timeouts.waitTime(); 
   await logingenie.LoginAndRegister.moveTo();
});

Then(/^user enters the Invalid user name$/,async () => {
    await Timeouts.waitTime(); 
    await logingenie.UserName.setValue(variables.InvalidUserName);
});

Then(/^user enters Invalid password$/,async () => {
    await Timeouts.waitTime(); 
    await logingenie.Password.setValue(variables.InvalidPassword);
});
When(/^User click on the remember me check box$/, async() => {
    await Timeouts.waitTime(); 
    await logingenie.CheckBox.click();
});
When(/^Click on sign in button$/,async () => {
    await Timeouts.waitTime(); 
    await logingenie.SigninButton.click();
});

Then(/^user verify the error message$/,async () => {
    await Timeouts.waitTime(); 
    await expect(logingenie.ErrorMassage).toHaveTextContaining("Failed to sign in! Please check your credentials and try again");
    await Timeouts.waitTime(); 
    console.log(await logingenie.ErrorMassage.getText());
    cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
});
//forgotpassword4
When(/^User click on forgot password button$/,async () => {
    await Timeouts.waitTime(); 
    await logingenie.ForgotPassword.click();
});
Then(/^User enter the Reset password page$/, async() => {
    await Timeouts.waitTime(); 
   console.log( await logingenie.RestPage.getText());
   
});

Then(/^user enters the empty email and verify it$/, async() => {
    await Timeouts.waitTime();
    await logingenie.ResetEmail.click();
    await Timeouts.waitTime();
    await logingenie.Resetpassword.click();
    await Timeouts.waitTime();
    cucumberJson.attach(await browser.takeScreenshot(), 'image/png');

});

Then(/^user enters the invalid email at below 5 characters$/, async() => {
	await Timeouts.waitTime();
    await logingenie.ResetEmail.setValue(variables.Resetpassword1);
   
});


Then(/^user click on the reset button and verify it$/,async () => {
	await Timeouts.waitTime();
    await logingenie.Resetpassword.click();
	await Timeouts.waitTime();
    cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
});

When(/^user enters the email above 100 characters$/, async() => {
	await Timeouts.waitTime();
    await logingenie.ResetEmail.setValue(variables.Resetpassword100);
});

Then(/^user click on the resrt password and verify it$/,async () => {
    await Timeouts.waitTime();
    await logingenie.Resetpassword.click();
    await Timeouts.waitTime();
    cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
});


Then(/^user enters the invalid email and verify it$/,async () => {
    await Timeouts.waitTime(); 
    await logingenie.ResetEmail.setValue(variables.ResetPassword);
    await Timeouts.waitTime(); 
    await logingenie.Resetpassword.click();
    await Timeouts.waitTime(); 
    console.log(await logingenie.ErrorResetMassage.getText());
    cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    await Timeouts.waitTime(); 
    await browser.back();
	
});
//registernewaccount5
When(/^User click on the register$/, async() => {
    await Timeouts.waitTime(); 
    await logingenie.Login.moveTo();
});
When(/^User click on the Register the new account$/, async() => {
    await Timeouts.waitTime(); 
    await logingenie.NewRegister.click();
});
Then(/^User enter on Caregiver Registration page verify it$/,async () => {
    await Timeouts.waitTime(); 
  console.log( await logingenie.Registration.getText());
  await Timeouts.waitTime();
  cucumberJson.attach(await browser.takeScreenshot(), 'image/png'); 
  await browser.back();
});
//validusername2

Then(/^user enters the Valid user name$/,async () => {
    await Timeouts.waitTime(); 
    await logingenie.UserName.setValue(variables.Validusername);
});
//valid6

Then(/^user enters Valid password$/,async () => {
    await Timeouts.waitTime(); 
	await logingenie.Password.setValue(variables.ValidPassword);
});


Then(/^User verify the login page$/, async() => {
    await Timeouts.waitTime(); 
    console.log(await logingenie.Loginpage.getText());
    await Timeouts.waitTime(); 
    cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
});

