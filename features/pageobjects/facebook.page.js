class FacebookPage{
get usernameTextbox(){

    return $("//input[@autocomplete='username']")

}

get passwordTextbox(){

    return $("//input[@id='pass']")



}

get loginButton(){

    return $("//button[@id='loginbutton']")

}

async login(username){

    await this.usernameTextbox.setValue(username)

   

    await this.loginButton.click()



}
async login(password){
    await this.passwordTextbox.setValue(password)
}

async loginButton(){
    await this.loginButton.click()
}


}



module.exports = new FacebookPage();
