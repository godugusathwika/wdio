const { Given, When, Then } = require('@wdio/cucumber-framework');
const GenieloginPage = require('../pageobjects/Genielogin.page');
//@invalid1//
Given(/^User is on the genie login page$/,async () => {
    browser.url("http://geniehealthjobsqa-env-4.eba-kmcgagjd.us-west-1.elasticbeanstalk.com/#/register")
    await browser.maximizeWindow();
    await browser.pause(1000);
});
 
Then(/^And click on the login and register$/, async() => {
   (await GenieloginPage.LoginAndRegister).moveTo();
});
 
When('User enters the invalid user name as {string}',async (username1) => {
    await browser.pause(1000);
    (await GenieloginPage.UserName).setValue(username1);
});
 
When('invalid password as {string}',async (password1) => {
    await browser.pause(1000);
    (await GenieloginPage.Password).setValue(password1);
});
 
Then(/^user click on the remember me check box$/,async () => {
    await browser.pause(1000);
   (await GenieloginPage.CheckBox).click();
});
 
Then(/^click on sign in button$/, async() => {
    await browser.pause(1000);
    (await GenieloginPage.SigninButton).click();
});
    
When(/^user enters the invalid credentials error massage will disp$/, async() => {
    await browser.pause(1000);
    await expect(GenieloginPage.ErrorMassage).toHaveTextContaining("Failed to sign in! Please check your credentials and try again");
console.log(await GenieloginPage.ErrorMassage.getText());
   
       
});
 //@invalid2//
When('user enters the valid username as {string}',async (username1) => {
    await browser.pause(3000);
    (await GenieloginPage.UserName).setValue(username1)
});
   
When(/^user enters the invalid credentials error massage will disply$/,async () => {
    await browser.pause(3000);
    await expect(GenieloginPage.ErrorMassage).toHaveTextContaining("Failed to sign in! Please check your credentials and try again");
    console.log(await GenieloginPage.ErrorMassage.getText());
});
 
Then(/^user click on forgot password button$/,async () => {
    await browser.pause(2000);
    await GenieloginPage.ForgotPassword.click();
   
 
});
 
When(/^user enter the Reset password page verfy it$/,async () => {
    await browser.pause(2000);
   console.log( await GenieloginPage.RestPage.getText());
   await browser.pause(2000);
   await browser.back();
   
});
 
Then(/^user click on the register$/,async () => {
    await browser.pause(2000);
    await GenieloginPage.LOGIN.moveTo();
});
 
 
Then(/^user click on the Register the new account$/,async () => {
    await browser.pause(2000);
    await GenieloginPage.NewRegister.click();
   
 
});
 
Then(/^user enter on Caregiver Registration page verify it$/,async () => {
    await browser.pause(2000)
  console.log ( await GenieloginPage.Registration.getText());
  await browser.pause(2000);
   
});
 
 
// Given(/^user click on the go back button and click on the fotgot password and verify it$/,async () => {
//     await browser.pause(2000)
//     await browser.back();
 
 
//     await browser.pause(2000)
//     await GenieloginPage.LoginAndRegister.click();
//     await browser.pause(2000)
//     await GenieloginPage.ForgotPassword.click();
 
// });
 
// When(/^user again back to the login page and and click on thr login and register$/,async () => {
// await browser.pause(2000)
// await GenieloginPage.back();
// await GenieloginPage.LoginAndRegister.click();
 
 
// });
 
// When(/^user click on the new rwgister account$/,async () => {
// await browser.pause(2000)
// await GenieloginPage.NewRegister.click()
 
// });
 
// When('and invalid password {string}',async (password1) => {
//     await browser.pause(3000);
//  (await GenieloginPage.Password).setValue(password1)
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
//  When('user enters the invalid username as {string}', async(username1) => {
//     await browser.pause(3000);
//     (await GenieloginPage.UserName).setValue(username1)
//  });
 
When('valid password as {string}', async(password1) => {
    await browser.pause(3000);
    (await GenieloginPage.Password).setValue(password1);
    await browser.pause(3000);
 });
 
When(/^verify the login page$/,async () => {
    await browser.pause(3000);
    console.log(await GenieloginPage.loginpage.getText());
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
//  When ('user enters the valid username as {string}',async (username1) => {
//      await browser.pause(1000);    
//        (await GenieloginPage.UserName).setValue(username1)
   
//  });
 
 //Then(/^user  click on the remember me check box$/, async() => {
//  await browser.pause(1000);
//      (await GenieloginPage.CheckBox).click();
 
//  });
 
// Then(/^user  click on sign in button$/,async () => {
//      await browser.pause(1000);
//      (await GenieloginPage.SigninButton).click();
// });
//@invalid5//
//  When('user enters the valid password as {string}', async(password1) => {
//      await browser.pause(3000);
//      (await GenieloginPage.Password).setValue(password1)
//  });
 
// Then(/^User Click on The Sign in Button$/, async() => {
//     await browser.pause(3000);
//     (await GenieloginPage.SigninButton).click();
 
// });
 
 
//  Then(/^user  click on the remember me check box$/,async () => {
//      await browser.pause(1000);
//      (await GenieloginPage.CheckBox).click();
// });
 
//  Then(/^user  click on sign in button$/,async () => {
//     await browser.pause(1000);
//      (await GenieloginPage.SigninButton).click();
//  });
//@valid//
//  Given('user enters the valid user name {string}' , async(username1) => {
//      await browser.pause(3000);
//      (await GenieloginPage.UserName).setValue(username1)
//  });
 
//  Then('valid password {string}', async(password1) => {
//      await browser.pause(3000);
//      (await GenieloginPage.Password).setValue(password1)
//  });
 
//  When(/^user  click on the remember me check box$/,async () => {
//      await browser.pause(1000);
//     (await GenieloginPage.CheckBox).click();
// });
 
// When(/^user  click on sign in button$/,async () => {
//     await browser.pause(1000);
//      (await GenieloginPage.SigninButton).click();
//  });
 
// Given(/^user click on the go back button and click on the fotgot password and verify it$/,async () => {
//     await browser.pause(2000)
//     await browser.back();
 
 
//     await browser.pause(2000)
//     await GenieloginPage.LoginAndRegister.click();
//     await browser.pause(2000)
//     await GenieloginPage.ForgotPassword.click();
 
// });
 
// When(/^user again back to the login page and and click on thr login and register$/,async () => {
// await browser.pause(2000)
// await GenieloginPage.back();
// await GenieloginPage.LoginAndRegister.click();
 
 
// });
 
// When(/^user click on the new rwgister account$/,async () => {
// await browser.pause(2000)
// await GenieloginPage.NewRegister.click()
 
// });

 