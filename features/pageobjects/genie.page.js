class geniepage{
    get Webpage(){
        return browser.url("http://geniehealthjobsqa-env-4.eba-kmcgagjd.us-west-1.elasticbeanstalk.com/#/register")
    }
    get Email(){
        return $("//input[@id='email']")
    }
    get PhoneNumber(){
        return $("//input[@id='field_phoneNumber']")

    }
    get Password(){
        return $("//input[@name='password']")
    }
    get ConfirmPassword(){
        return $("//input[@name='confirmPassword']")
    }
    get FirstName(){
        return $("//input[@name='firstName']")
    }
    get LastName(){
        return $("//input[@name='lastName']")
    }
    async webpage(){ 
        await browser.maximizeWindow();
        await this.Webpage.open();
    
        await browser.pause(1000);
    }
    async email(Email){
        
        await this.Email.setValue(Email) ;
        await browser.pause(3000);
    }
    async phonenumber(PhoneNumber){
        await this.PhoneNumber.setValue(PhoneNumber);
        await browser.pause(3000);
    }
    async password(Password,ConfirmPassword){
        await browser.pause(3000);
        await this.Password.setValue(Password);
        await browser.pause(3000);
        await this.ConfirmPassword.setValue(ConfirmPassword)
    }
    async names(FirstName,LastName){
        await browser.pause(3000);
        await this.FirstName.setValue(FirstName);
        await browser.pause(3000);
        await this.LastName.setValue(LastName);
    }


}
module.exports=new geniepage();