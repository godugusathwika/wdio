class logingenie{
   
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
    get ErrorMassage(){
        return $("(//div[@aria-hidden='false'])[1]")
    }
    get ForgotPassword(){
       return $("//a[text()='Forgot password?']")
     }
     get RestPage(){
        return $("//h3[text()='Reset your password']")
     }
     get ResetEmail(){
        return $("//input[@placeholder='Your email']");
     }
     get Resetpassword(){
        return $("//button[@class='btn btn-info pull-right']");
     }
     get ErrorResetMassage(){
        return $("//div[@ng-show='vm.errorEmailNotExists']");
     }
    get NewRegister(){
        return $("//a[text()='Register a new account']")

    }
    get Login(){
        return $("//a[@class='login-register-link nav-bar-items']")
    }
    get Registration(){
        return $("//h3[text()='Caregiver Registration']")
    }
    get Loginpage(){
        return $("(//span[@class='hidden-sm nav-bar-items'])[4]")

    
}
async WebPage(){
    await browser.url("http://geniehealthjobsqa-env-4.eba-kmcgagjd.us-west-1.elasticbeanstalk.com/#/job");
}
}
module.exports=new logingenie();