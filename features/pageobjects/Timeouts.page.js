class Timeouts{
    async Wait(Element){
    await Element.waitForClickable();
    await Element.waitForDisplayed();
    await Element.Click();
    }
    async waitTime() {
        await browser.pause(2000)    }
}
module.exports=new Timeouts();