const { Given, When, Then } = require('@wdio/cucumber-framework');
const resume1= require('../pageobjects/genie.page');
const cucumberJson = require("wdio-cucumberjs-json-reporter");
Given(/^user is on the genie login page a$/,async () => {
await browser.url("http://geniehealthjobsqa-env-2.eba-kmcgagjd.us-west-1.elasticbeanstalk.com/#/register");
await browser.maximizeWindow();
});

When(/^user is upload resume pdf$/, async() => {
await browser.pause(1000);


await browser.pause(2000);
await resume1.pdf.setValue("C:\\Users\\Sathwika\\Documents\\SATHWIKA RESUME.pdf");
await browser.pause(2000);

cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
});
