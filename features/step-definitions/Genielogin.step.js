const { Given, When, Then } = require('@wdio/cucumber-framework');
const GenieloginPage = require('../pageobjects/Genielogin.page');
//@invalid1//
Given(/^User is on the genie login page$/, () => {
    browser.url("http://geniehealthjobsqa-env-4.eba-kmcgagjd.us-west-1.elasticbeanstalk.com/#/job")
});

Then(/^And click on the login and register$/, async() => {
    await browser.maximizeWindow();
    await browser.pause(1000);
   (await GenieloginPage.LoginAndRegister).moveTo();
});

Then('User enters the invalid user name as {string}',async (username1) => {
    await browser.pause(1000);
	(await GenieloginPage.UserName).setValue(username1)
});

Then('invalid password as {string}',async (password1) => {
    await browser.pause(1000);
	(await GenieloginPage.Password).setValue(password1)
});

Then(/^user click on the remember me check box$/,async () => {
    await browser.pause(1000);
   (await GenieloginPage.CheckBox).click();
});

Then(/^click on sign in button$/, async() => {
    await browser.pause(1000);
    (await GenieloginPage.SigninButton).click();
        
});
 //@invalid2//
When('user enters the valid username as {string}',async (username1) => {
    await browser.pause(3000);
	(await GenieloginPage.UserName).setValue(username1)
});

// When('and invalid password {string}',async (password1) => {
//     await browser.pause(3000);
// 	(await GenieloginPage.Password).setValue(password1)
// });

//  Then(/^user  click on the remember me check box$/,async () => {
//     await browser.pause(1000);
//     (await GenieloginPage.CheckBox).click();
// });

//  Then(/^user  click on sign in button$/,async () => {
//     await browser.pause(1000); 
//         (await GenieloginPage.SigninButton).click();
// });
//@invalid3//
 When('user enters the invalid username as {string}', async(username1) => {
    await browser.pause(3000);
    (await GenieloginPage.UserName).setValue(username1)
 });

When('valid password as {string}', async(password1) => {
    await browser.pause(3000); 
    (await GenieloginPage.Password).setValue(password1)
 });

//  Then(/^user  click on the remember me check box$/,async () => {
//     await browser.pause(1000);
//     (await GenieloginPage.CheckBox).click();
// });

//  Then(/^user  click on sign in button$/, async() => {
//      await browser.pause(1000);
//      (await GenieloginPage.SigninButton).click();
//  });
//@invalid4//
//  When('user enters the valid username as {string}',async (username1) => {
//      await browser.pause(1000);
//      (await GenieloginPage.UserName).setValue(username1)
	
//  });

// Then(/^user  click on the remember me check box$/, async() => {
//     await browser.pause(1000);
//      (await GenieloginPage.CheckBox).click();

//  });

// Then(/^user  click on sign in button$/,async () => {
//      await browser.pause(1000);
//      (await GenieloginPage.SigninButton).click();
// });
//@invalid5//
 When('user enters the valid password as {string}', async(password1) => {
     await browser.pause(3000);
     (await GenieloginPage.Password).setValue(password1)
 });

//  Then(/^user  click on the remember me check box$/,async () => {
//      await browser.pause(1000);
//      (await GenieloginPage.CheckBox).click();
// });

//  Then(/^user  click on sign in button$/,async () => {
//     await browser.pause(1000);
//      (await GenieloginPage.SigninButton).click();
//  });
//@valid//
 Given('user enters the valid user name {string}' , async(username1) => {
     await browser.pause(3000);
     (await GenieloginPage.UserName).setValue(username1)
 });

 Then('valid password {string}', async(password1) => {
     await browser.pause(3000);
     (await GenieloginPage.Password).setValue(password1)
 });

//  When(/^user  click on the remember me check box$/,async () => {
//      await browser.pause(1000);
//     (await GenieloginPage.CheckBox).click();
// });

// When(/^user  click on sign in button$/,async () => {
//     await browser.pause(1000);
//      (await GenieloginPage.SigninButton).click();
//  });
