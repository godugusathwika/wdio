const { Given, When, Then } = require('@wdio/cucumber-framework');
const resume=require('../pageobjects/resumeuplode');
const cucumberJson = require("wdio-cucumberjs-json-reporter");
Given(/^user is on the login w3school page$/,async () => {
	await browser.url("https://www.w3schools.com/howto/howto_html_file_upload_button.asp");
    await browser.maximizeWindow();
});

When(/^user uplode the resume$/, async() => {
    await browser.pause(2000);
	// await resume.file.setValue("C:\\Users\\Sathwika\\Documents\\SATHWIKA RESUME.pdf");
    await resume.file.setValue("C:\\Users\\Sathwika\\Documents\\shyam.resume.docx")
    cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
});
