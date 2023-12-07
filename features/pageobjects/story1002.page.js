class Story1002{
    
    get dynamicTable(){
        return $("//a[text()='Dynamic Table']")
    }
    get verifyColumns(){
        return $("(//div[@role='rowgroup'])[1]")

    }
    get backHome(){
        return $("//a[text()='Home']")
    }
    get mouseOver(){
        return $("//a[text()='Mouse Over']")
    }
    get Click(){
        return $("//a[text()='Click me']")
    }
    get verifyCount(){
        return $("//span[@id='clickCount']")

    }
    
    async DynamicTable(){
        await this.dynamicTable.click();
    }
    async VerifyColumns(){
        await browser.pause(1000)
       var columnname= await this.verifyColumns.getText();
       console.log("verifycolumns:"+columnname)
    }
    async BackHome(){
        await browser.pause(1000)
        await this.backHome.click();
    }
    async MouseOver(){
        await browser.pause(1000)
        await this.mouseOver.click();
    }
   async click(){
    //  var i
    //     for(i=1; i<=3; i++){
    //         console.log(i);
       // }
         await browser.pause(1000)
        await this.Click.click();
         await browser.pause(1000)
        await this.Click.click();
        await browser.pause(1000)
        await this.Click.click();
    }
    async VerifyCount(){
        await browser.pause(1000)
       var clickCount= await this.verifyCount.getText();
       console.log("the click is clicked"+clickCount + 'times')
    }
}
module.exports=new Story1002();