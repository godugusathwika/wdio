const { Given, When, Then } = require('@wdio/cucumber-framework');
const Story1002 = require('../pageobjects/story1002.page');

Given(/^user is on uitestingplayground.com webpage$/, async() => {
    browser.url('http://www.uitestingplayground.com/')
});

When(/^user is on webpage user select dynamic table and click on it$/,async () => {
    await Story1002.DynamicTable()
});

When(/^verify the is a table containing following columns like name memory Network disc CPU$/, async() => {

    await Story1002.VerifyColumns()
    
});

When(/^user go back to home$/,async () => {
await Story1002.BackHome();
});

When(/^user is on home page and click on Mouse Over$/,async () => {
    await Story1002.MouseOver();
});

When(/^user click on click me for 3 times$/,async () => {
    await Story1002.click();
});

Then(/^user verify count is 3 or not$/,async () => {
    await Story1002.VerifyCount()
});

