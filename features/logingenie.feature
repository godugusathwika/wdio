Feature: Genie login Functionality

  @invalid1
  Scenario: Login and register the genie portal with invalid user name and invalid password
    Given user is on the genie login page
    When user click on the login and register
    Then user enters the Invalid user name 
    Then user enters Invalid password 
    When  User click on the remember me check box
    When Click on sign in button
    Then user verify the error message


  @invalid2
  Scenario: login and register the genie portal with valid user name and invalid password
     Then user enters the Valid user name 
    Then user enters Invalid password 
    When User click on the remember me check box
    When Click on sign in button
    Then user verify the error message

  @invalid3
  Scenario: login and register the genie portal with Invalid username and valid password
    Then user enters the Invalid user name 
    Then user enters Valid password 
    When User click on the remember me check box
    When Click on sign in button
    Then user verify the error message

    @forgotpassword4
    Scenario:user verify the forgot password page
    When User click on forgot password button
    Then User enter the Reset password page 
    Then user enters the empty email and verify it
    Then user enters the invalid email at below 5 characters 
    Then user click on the reset button and verify it
    When  user enters the email above 100 characters
    Then user click on the resrt password and verify it 
    Then user enters the invalid email and verify it


    @registerNewAccount5
    Scenario:User verify the register new account page
    When User click on the register
    When User click on the Register the new account
    Then User enter on Caregiver Registration page verify it
    When user click on the login and register

  @valid6
  Scenario: login and register the valid user name and valid password
    Then user enters the Valid user name 
    Then user enters Valid password 
    When User click on the remember me check box
    When Click on sign in button
    Then User verify the login page
