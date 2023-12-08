class logingenie{
    // get WebPage(){
    //     return browser.url("http://geniehealthjobsqa-env-4.eba-kmcgagjd.us-west-1.elasticbeanstalk.com/#/register")
    // }
    get LoginAndRegister(){
        return $("//a[text()='Login/Register']")
    }
    get UserName(){
        return $("//input[@id='username']")
    }
    get Password(){
        return $("(//input[@type='password'])[1]")

    }
    get CheckBox(){
        return $("(//input[@aria-invalid='false'])[3]")
    }
    get SigninButton(){
        return $("//button[@class='btn btn-primary sign-in-button']")
    }
    
}
module.exports=new logingenie();