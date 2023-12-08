class GenieloginPage{
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
    get ErrorMessage(){
        return $("(//div[@aria-hidden='false'])[1]")
    }
    get ForgotPassword(){
        return $("//a[text()='Forgot password?']")
     }
     get RestPage(){
        return $("//h3[text()='Reset your password']")
     }
    get NewRegister(){
        return $("//a[text()='Register a new account']")

    }
    get LOGIN(){
        return $("//a[@class='login-register-link nav-bar-items']")
    }
    get Registration(){
        return $("//h3[text()='Caregiver Registration']")
    }
    get loginpage(){
        return $("(//span[@class='hidden-sm nav-bar-items'])[4]")
    }

}
module.exports=new GenieloginPage();