class registerpage{
   
    get LoginAndRegister(){
        return $("//a[text()='Login/Register']");
    }
    get NewRegister(){
        return $("//a[text()='Register a new account']");
    }
    get Email(){
        return $("//input[@id='email']");
    }
    get Phonenumber(){
        return $("//input[@id='field_phoneNumber']");
    }
    get Password(){
        return $("//input[@name='password']");
    }
    get ConfirmPassword(){
        return $("//input[@name='confirmPassword']");
    }
    get Firstname(){
        return $("//input[@name='firstName']");
    }
    get Lastname(){
        return $("//input[@name='lastName']");
    }
    get Availabletostart(){
        return $("//input[@id='field_availableToStart']");

    }
    get Availablrtstart1(){
        return $("//button[@class='btn btn-default']");
    }
    get Todaydate(){
        // return $("//button[@fdprocessedid='jbo13']");
        return $("//button[text()='Today']");
    }
    get Futurdate(){
        return $("//button[@ng-click='move(1)']");
    }
    get ClickDate(){
        return $("//span[text()='23']");
    }
    get YearofExperience(){
        return $("//input[@type='number']");
    }
    get Profession(){
        return $("//select[@id='field_candidateProfession']");
    
   }
        get Speciality(){
            return $("//select[@name='candidateSpecialty']");
   }
   get Statelicensed(){
    return $("(//button[@ng-class='classesBtn'])[1]");
   }
   get PreferredDestinationStates(){
    return $("(//button[@ng-class='classesBtn'])[2]");
   }
   get State1(){
    return $("//a[normalize-space()='Indiana'][1]");
   }
   get State2(){
    return $("//a[normalize-space()='Hawaii'][1]");
   }
   get Destinationstate1(){
    return $("(//a[normalize-space()='Colorado'])[2]");
   }
   get Destinationstate2(){
    return $("(//a[normalize-space()='Idaho'])[2]");
   }
   get PreferredRecruiter(){
    return $("//option[text()='Choose Recruiter']");
   }
   get recruiter1(){
    return $("//option[text()='Ashwaq Mohammed']");
   }
   get Noterecruiter(){
    return $("//textarea[@id='field_notes']");
   }
   get Compactlicense(){
    return $("//input[@id='field_compactLicense']");
   }
   get Homepage(){
    return $("//span[text()='Home (Jobs Listing)']");
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

   get recruiter(){
     return $("//select[@name='recruiterProfile']");
   }
   get Resume(){
    return $("//button[normalize-space()='Upload Resume']");
   }


    


   

 
}
module.exports=new registerpage();