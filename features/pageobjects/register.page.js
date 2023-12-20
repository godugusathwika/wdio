class RegisterPage{
    get webpage(){
        return browser.url("http://geniehealthjobsqa-env-4.eba-kmcgagjd.us-west-1.elasticbeanstalk.com/#/job")
    }
    get loginandregister(){
        return $("//a[text()='Login/Register']")
    }
    get RegisterAnewaccount(){
        return $("//a[text()='Register a new account']")
    }
    get email(){
        return $("//input[@id='email']");
    }
    get errormassage(){
        return $("(//p[@class='help-block'])[1]")
    }
    get phonenumber(){
        return $("//input[@id='field_phoneNumber']");
    }
    get errorphonenumber(){
        return $("//p[normalize-space()='Acceptable Phone Number Format is XXX-XXX-XXXX where X is a Numeric Digit. The dashes at 4th and 8th positions are both optional.']");
    }
    get password(){
        return $("//input[@name='password']");
    }
    get confirmpassword(){
        return $("//input[@name='confirmPassword']");
    }
    get errorMsg(){
        return $("//div[@class='alert alert-danger']");
    }
    get firstname(){
        return $("//input[@name='firstName']");
    }
    get lastname(){
        return $("//input[@name='lastName']");
    }
    get calander(){
        return $("(//button[@type='button'])[6]");
    }
    get today(){
        return $("//button[text()='Today']");
    }
   
    get clickfuturedate(){
        return $("(//button[@type='button'])[8]");
    }
    get clickDate(){
        return $("//span[text()='23']");
    }
    get Yearofexp(){
        return $("//input[@type='number']");
    }
    
   get profession(){
    return $("//select[@id='field_candidateProfession']");

    }
    get speciality(){
        return $("(//button[@ng-disabled='disabled'])[1]");
    }
    get speciality1(){
        return $("(//ul[@class='dropdown-menu dropdown-menu-form'])[1]//li//a[normalize-space()='Pharmacy']");
    }
    get speciality2(){
        return $("(//ul[@class='dropdown-menu dropdown-menu-form'])[1]//li//a[normalize-space()='Medical Technology']");
    }
    get speciality3(){
        return $("(//ul[@class='dropdown-menu dropdown-menu-form'])[1]//li//a[normalize-space()='Emergency medicine']");
    }
    get speciality4(){
        return $("(//ul[@class='dropdown-menu dropdown-menu-form'])[1]//li//a[normalize-space()='Physician assistant']");
    }
    get speciality5(){
        return $("(//ul[@class='dropdown-menu dropdown-menu-form'])[1]//li//a[normalize-space()='CT technology']");
    }
    get speciality6(){
        return $("(//ul[@class='dropdown-menu dropdown-menu-form'])[1]//li//a[normalize-space()='Occupational therapy']")
    }
    get errorspaciality(){
        return $("//div[@ng-show='vm.selectLimit']");
       // return $("(//div[@ng-show='vm.selectLimit'])//p");
       //return $("//p[@style='color:#a94442;margin-left:10px;margin-top:20px;margin-bottom:0px;']");
       //return $("//div/p[@style='color:#a94442;margin-left:10px;margin-top:20px;margin-bottom:0px;']");
    }
    get specialityCNA(){
        return $("(//a[@class='item-unselected'])[1]");
    }
    get specialityTTT(){
        return $("(//a[@class='item-unselected'])[1]");
    }
    get selectState(){
        return $("(//button[@ng-class='classesBtn'])[2]");
    } 
    get state1(){
        return $("//a[normalize-space()='Alaska']");
    }
    get state2(){
        return $("//a[normalize-space()='Connecticut']");
    }
    // get checkbox(){
    //     return $("(//label[@class='control-label'])[11]");
    // }
    // get destinationstatus(){
    //     return $("(//button[@ng-disabled='disabled'])[3]");
    // }
     get recruiter(){
         return $("//select[@name='recruiterProfile']");
    }

    }
    module.exports=new RegisterPage();

