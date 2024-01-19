const { Given, When, Then } = require('@wdio/cucumber-framework');
const cucumberJson = require("wdio-cucumberjs-json-reporter");
const Timeouts = require('../pageobjects/Timeouts.page');
const variables= require('../variables/credentials.json');
const registerpage1 = require('../pageobjects/registerpage1');
 
 
//registerpage
Given(/^User is on the genie job page$/,async () => {
    await browser.url("http://geniehealthjobsqa-env-2.eba-kmcgagjd.us-west-1.elasticbeanstalk.com/")
    await browser.maximizeWindow();
});
 
When(/^User click on the login and register$/, async() => {
    await Timeouts.waitTime();
    await registerpage1.LoginAndRegister.moveTo();
   
});
 
When(/^User click on Register a new account$/, async() => {
    await Timeouts.waitTime();
    await registerpage1.NewRegister.click();
 
});
 
 
//emailfield
When(/^user click on the email without entering information in the email field$/,async () => {
    await Timeouts.waitTime();
    await registerpage1.Email.click()
});
 
When(/^user click on the phone number field$/, async() => {
    await Timeouts.waitTime();
    await registerpage1.Phonenumber.click();
 
});
 
Then(/^user verify the email error message$/, async() => {
    await Timeouts.waitTime();
    cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
 
});
 
When(/^user enters the email below 5characters$/, async() => {
    await Timeouts.waitTime();
    await registerpage1.Email.setValue(variables.emailA);
});
 
// Then(/^user verify the email error message$/, async() => {
//     await Timeouts.waitTime();
//     cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
// });
 
When(/^user enters the email above 100characters$/,async () => {
    await Timeouts.waitTime();
   await registerpage1.Email.setValue(variables.emailB);
});
 
// Then(/^user verify the email error message$/, async() => {
//     await Timeouts.waitTime();
//     cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
// });
 
When(/^User enters the email using space$/, async() => {
    await Timeouts.waitTime();
    await registerpage1.Email.setValue(variables.emailC);
 
});
 
// Then(/^user verify the email error message$/, async() => {
//     await Timeouts.waitTime();
//     cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
// });
 
When(/^user enters the valid email$/, async() => {
    await Timeouts.waitTime();
    await registerpage1.Email.setValue(variables.emailD);
});
 
 
//phonenumberfield
When(/^user click on the phone number without entering information in the phonenumber field$/, async() => {
    await Timeouts.waitTime();
    await registerpage1.Phonenumber.click();
});
 
When(/^user click on the password field$/, async() => {
    await Timeouts.waitTime();
    await registerpage1.Password.click();
 
});
 
Then(/^verify the  phonenumber error message$/, async() => {
    await Timeouts.waitTime();
    cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
 
});
 
When(/^user enters the phone number above 10 characters$/, async() => {
    await Timeouts.waitTime();
    await registerpage1.Phonenumber.setValue(variables.phonenumberA);
});
 
// Then(/^verify the  phonenumber error message$/, async() => {
//     await Timeouts.waitTime();
//     cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
// });
 
When(/^user enters the phone number above 20 characters$/,async () => {
    await Timeouts.waitTime();
    await registerpage1.Phonenumber.setValue(variables.phonenumberB);
});
 
// Then(/^verify the  phonenumber error message$/, async() => {
//     await Timeouts.waitTime();
//     cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
// });
 
When(/^user enter the phonenumber using the space$/, async() => {
    await Timeouts.waitTime();
await registerpage1.Phonenumber.setValue(variables.phonenumberC);
});
 
// Then(/^verify the  phonenumber error message$/, () => {
//  return true;
// });
 
When(/^user enters the valid mobile number$/, async() => {
     await Timeouts.waitTime();
     await registerpage1.Phonenumber.setValue(variables.phonenumberD);
 
});
 
 
//passwordfield


When(/^user click on the password without entering the password field$/,async () => {
    await Timeouts.waitTime();
    await registerpage1.Password.click();
    
});

When(/^user click on the confirm password field$/,async () => {
    await Timeouts.waitTime();
    await registerpage1.ConfirmPassword.click();
});

Then(/^verify the password field error message$/,async () => {
    await Timeouts.waitTime();
    cucumberJson.attach(await browser.takeScreenshot(), 'image/png');

});

Then(/^user enters the password above 50 characters$/,async () => {
    await Timeouts.waitTime();
    await registerpage1.Password.setValue(variables.passwordB);
});

// Then(/^verify the password field error message$/,async () => {
//     await Timeouts.waitTime();
// });

When(/^user enters the valid password$/,async () => {
    await Timeouts.waitTime();
    await registerpage1.Password.setValue(variables.passwordA);
});


//confirmpasswordfield
When(/^user click on the confirmpassword without entering the input field$/,async () => {
    await Timeouts.waitTime();
    await registerpage1.ConfirmPassword.click();
});

When(/^user click on the first name field$/,async () => {
    await Timeouts.waitTime();
    await registerpage1.Firstname.click();
});

Then(/^user verify the confirm password error message$/,async () => {
    await Timeouts.waitTime();
    cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
});

When(/^user enters the incorrect confirm password$/,async () => {
    await Timeouts.waitTime();
    await registerpage1.ConfirmPassword.setValue(variables.confirmpasswordA);
});

// Then(/^user verify the confirm password error message$/,async () => {
//     await Timeouts.waitTime();
// });

When(/^user again enters the confirm password above 50 characters$/,async () => {
    await Timeouts.waitTime();
    await registerpage1.ConfirmPassword.setValue(variables.confirmpasswordB);

});

// Then(/^user verify the confirm password error message$/,async () => {
//     await Timeouts.waitTime();
// });

When(/^user enters the correct confirm password$/,async () => {
    await Timeouts.waitTime();
    await registerpage1.ConfirmPassword.setValue(variables.confirmpasswordC);
});


//firstnamefield
When(/^user click on the first name without entering the field$/,async () => {
    await Timeouts.waitTime();
    await registerpage1.Firstname.click();
});

When(/^user click on the lastname field$/,async () => {
    await Timeouts.waitTime();
    await registerpage1.Lastname.click();
});

Then(/^verify the firstname field error massage$/,async () => {
    await Timeouts.waitTime();
    cucumberJson.attach(await browser.takeScreenshot(), 'image/png');

});

When(/^user enters the first name above 100 characters$/,async () => {
    await Timeouts.waitTime();
    await registerpage1.Firstname.setValue(variables.firstnameA);
});

// Then(/^verify the firstname field error massage$/,async () => {
//     await Timeouts.waitTime();
// });

When(/^user enters the correct firstname$/,async () => {
    await Timeouts.waitTime();
    await registerpage1.Firstname.setValue(variables.firstnameB);
});


//lastnamefield
When(/^user click on the last name without entering the field$/,async () => {
    await Timeouts.waitTime();
    await registerpage1.Lastname.click();
});

When(/^user click on the Available To Start field$/,async () => {
    await Timeouts.waitTime();
    await registerpage1.Availabletostart.click();
});

Then(/^verify the lastname field error massage$/,async () => {
    await Timeouts.waitTime();
    cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
});

When(/^user enters the last name above 100 characters$/,async () => {
    await Timeouts.waitTime();
    await registerpage1.Lastname.setValue(variables.lastnameA);
});

// Then(/^verify the lastname field error massage$/,async () => {
//     await Timeouts.waitTime();
// });

When(/^user enters the correct lastname$/,async () => {
    await Timeouts.waitTime();
    await registerpage1.Lastname.setValue(variables.lastnameB);
});

//availabletostart

When(/^user click on the available to start$/,async  () => {
    await Timeouts.waitTime();
    await registerpage1.Availabletostart.click();

});

When(/^user click n the years of experience field$/, async() => {
   await Timeouts.waitTime();
   await registerpage1.YearofExperience.click()

});

Then(/^user verify the available to start error message$/,  async() => {
	   await Timeouts.waitTime();
       cucumberJson.attach(await browser.takeScreenshot(), 'image/png');

});

Then(/^user click on the today date$/,async() => {
	   await Timeouts.waitTime();
       await registerpage1.Availablrtstart1.click();
       await registerpage1.Todaydate.click();

});

When(/^user enter the feature date$/,async() => {
	   await Timeouts.waitTime();
       await registerpage1.Availablrtstart1.click();
       for( var i=0;i<=14;i++){
        await registerpage1.Futurdate.click();
       
    }
    await Timeouts.waitTime();
    await registerpage1.ClickDate.click();
});
    //yearofexp
    
When(/^user click on the year of experience field$/, async() => {
    await Timeouts.waitTime();
    await registerpage1.YearofExperience.click();
});

When(/^user enters the year of experience$/, async() => {
    await Timeouts.waitTime();
    await registerpage1.YearofExperience.setValue(variables.Yearofexp);

});

//professionfield

When(/^user click on the profession$/,async () => {
	await Timeouts.waitTime();
    await registerpage1.Profession.click();
});

When(/^user without selecting the profession click on the Specialty$/, async() => {
	await Timeouts.waitTime();
    await registerpage1.Speciality.click();

});

Then(/^verify the profession error message$/, async() => {
	await Timeouts.waitTime();
    cucumberJson.attach(await browser.takeScreenshot(), 'image/png');

});

When(/^user select the option in profession field$/,async () => {
	await Timeouts.waitTime();
    await registerpage1.Profession.selectByIndex(1)

});


//specialityfield
When(/^user click on the speciality without entering the fileld$/, async() => {
    await Timeouts.waitTime();
    await registerpage1.Speciality.click();

});

When(/^user click on the States Licensed field$/,async () => {
	await Timeouts.waitTime();
    await registerpage1.Statelicensed.click();


});

Then(/^verify the speciality error message$/, async() => {
	await Timeouts.waitTime();
    cucumberJson.attach(await browser.takeScreenshot(), 'image/png');

});

When(/^user select the specility$/,async () => {
	await Timeouts.waitTime();
    await registerpage1.Speciality.selectByIndex(4);
    
});

//stateslicensed

When(/^user select the multipul licensed States$/, async() => {
	await Timeouts.waitTime();
     await registerpage1.Statelicensed.click();
    await registerpage1.State1.click();
    await Timeouts.waitTime();
    await registerpage1.State2.click();

});


//perferreddestinationstatus
When(/^user click on the Preferred Destination States field$/,async () => {
	await Timeouts.waitTime();
    await registerpage1.PreferredDestinationStates.click();
});

When(/^user select the multipul StatesLicensed$/, async() => {
    await Timeouts.waitTime();
    await registerpage1.Destinationstate1.click();
    await Timeouts.waitTime();
    await registerpage1.Destinationstate2.click();
});

//PreferredRecruiter

When(/^user click on the  PreferredRecruiter field$/, async() => {
    await Timeouts.waitTime();
    await registerpage1.PreferredRecruiter.click();
});

When(/^user click on the note to Recruiter$/, async() => {
    await Timeouts.waitTime();
    await registerpage1.Noterecruiter.click();

});

Then(/^verify the PreferredRecruiter error$/,async () => {
    await Timeouts.waitTime();
    cucumberJson.attach(await browser.takeScreenshot(), 'image/png');

});


When(/^user select the PreferredRecruiter$/,async () => {
	await Timeouts.waitTime();
    await registerpage1.PreferredRecruiter.click();
    await Timeouts.waitTime();
    await registerpage1.recruiter1.click();
});


//noteRecruiter

When(/^user enter the note to recruiter$/, async() => {
	await Timeouts.waitTime();
    await registerpage1.Noterecruiter.click();
    await Timeouts.waitTime();
    await registerpage1.Noterecruiter.setValue(variables.noterecruter);
    // for(var i=0;i<1001;i++){
    //     console.log(await registerpage1.Noterecruiter);
    // }
});

Then(/^verify the error note message$/,async () => {
	await Timeouts.waitTime();
    cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
});
//compactlicense

When(/^user click on the Compact License checkbox$/,async () => {
	await Timeouts.waitTime();
    await registerpage1.Compactlicense.click();
    cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    
});

// When(/^user click on the rusume and upload the resume$/, async() => {
// 	// await registerpage1.Resume.click();
//     // const path = require('path');
// const filePath = registerpage1.Resume.join(__dirname, '"C:\Users\Sathwika\Documents\Sathwika@123.pdf"');
// fileUpload.setValue(filePath);
// });













