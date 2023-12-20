const { Given, When, Then } = require('@wdio/cucumber-framework');
const RegisterPage = require('../pageobjects/register.page');



Given(/^user is on the genie job page$/,async () => {
   await browser.url("http://geniehealthjobsqa-env-4.eba-kmcgagjd.us-west-1.elasticbeanstalk.com/#/job")
    await browser.maximizeWindow();
    
});

Then(/^click on the login and register$/, async() => {
	await browser.pause(2000);
    await RegisterPage.loginandregister.moveTo();
});

When(/^user click on Register a new account$/,async () => {
	await browser.pause(2000);
    await RegisterPage.RegisterAnewaccount.click();
});


When(/^user enter the invalid email id as "([^"]*)" and verify the erroe massage$/, async(email1) => {
	await browser.pause(2000);
    await RegisterPage.email.setValue(email1);
    await browser.pause(3000);
    console.log(await RegisterPage.errormassage.getText());
});

When(/^user enters the valid email id as "([^"]*)"$/,async (email1) => {
    await browser.pause(3000)
    await RegisterPage.email.setValue(email1);
});

Then(/^user enters the invalid phone number as "([^"]*)" and verify the error massage$/,async (phonenumber1) => {
    await RegisterPage.phonenumber.click();
    await browser.pause(4000)
    await RegisterPage.phonenumber.setValue(phonenumber1);
    await browser.pause(4000)
    await RegisterPage.password.click();
    await browser.pause(4000)
    console.log(await RegisterPage.errorphonenumber.getText());
    await browser.pause(3000)
});

Then(/^user enters the valid phone number as "([^"]*)"$/, async(phonenumber) => {
	await browser.pause(3000);
    await RegisterPage.phonenumber.setValue(phonenumber);
});

When(/^user enters the password as "([^"]*)"$/,async (password1) => {
	await browser.pause(2000);
    await RegisterPage.password.setValue(password1)
});

When(/^user enters the incorrect confirm password as "([^"]*)" and enters the valid confirm password as "([^"]*)"$/, async(invalidpassword,validpassword) => {
	await browser.pause(2000);
    await RegisterPage.confirmpassword.setValue(invalidpassword)
    await browser.pause(2000);
    console.log(await RegisterPage.errorMsg.getText());
    await browser.pause(2000);
    await RegisterPage.confirmpassword.setValue(validpassword);
});


Then(/^enters the first name  as "([^"]*)"and last name as"([^"]*)"$/,async (firstname1,lastname1) => {
	await browser.pause(2000);
    await RegisterPage.firstname.setValue(firstname1);
    await browser.pause(2000);
    await RegisterPage.lastname.setValue(lastname1);


});

Given(/^user click on the available to start select the today date$/,async () => {
	await browser.pause(2000);
    await RegisterPage.calander.click();
    await browser.pause(2000);
    await RegisterPage.today.click();
    await browser.pause(2000);
});

When(/^user enters the feature date$/,async () => {
	await browser.pause(2000);
    await RegisterPage.calander.click();

    
    for( var i=0;i<=14;i++){
        await RegisterPage.clickfuturedate.click();
    }
await browser.pause(2000);
await RegisterPage.clickDate.click();
});

Then(/^user click on the years Of Experience as "([^"]*)"$/, async(exp) => {
    await browser.pause(3000);
    await RegisterPage.Yearofexp.setValue(exp);
    await browser.pause(3000);
});

Then(/^user select the Profession$/, async() => {
    await browser.pause(4000);
    await RegisterPage.profession.selectByIndex(1)

});

Then(/^select the Specialty$/,async () => {
    await browser.pause(2000);
    await RegisterPage.speciality.click();
    await browser.pause(2000);
    await RegisterPage.speciality1.click()
    await browser.pause(2000);
    await RegisterPage.speciality2.click()
    await browser.pause(2000);
    await RegisterPage.speciality3.click()
    await browser.pause(2000);
    await RegisterPage.speciality4.click()
    await browser.pause(2000);
    await RegisterPage.speciality5.click()
    await browser.pause(2000);
    await RegisterPage.speciality6.click();
    
});


When(/^verify the error message$/, async() => {
    console.log(await RegisterPage.errorspaciality.getText()); 
});

Then(/^again click on the profession and select the Specialty$/,async () => {
    await browser.pause(2000);
    await RegisterPage.profession.selectByIndex(2)
    await browser.pause(2000);
    await RegisterPage.speciality.click();
    await browser.pause(2000);
    await RegisterPage.specialityCNA.click();
    await browser.pause(2000);
    await RegisterPage.specialityTTT.click();
});

Given(/^user click on the States Licensed and sellect the states$/, async() => {
    await browser.pause(3000); 
    await RegisterPage.selectState.click();
    await browser.pause(3000); 
    await RegisterPage.state1.click();
    await browser.pause(3000)
    await RegisterPage.state2.click();
    

});

// When(/^click on the Compact License$/, async() => {
//     await browser.pause(5000); 
//     // await RegisterPage.checkbox.click();
//     // await browser.pause(4000);



// });

// When(/^select the Preferred Destination States$/, async() => {
//     await browser.pause(2000);
//     await RegisterPage.destinationstatus.click()
//     await browser.pause(2000);
//     await RegisterPage.destinationstatus.selectByIndex(5);


// });

 Then(/^user select the Preferred Recruiter$/, async() => {
    // await browser.pause(2000);
    // await RegisterPage.recruiter.click();
    await browser.pause(6000);
    await RegisterPage.recruiter.selectByIndex(4);
    await browser.pause(6000);


});





