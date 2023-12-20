Feature: Genie login Functionality

  @invalid1
  Scenario: Login and register the genie portal with invalid user name and password
    Given user is on the genie login page
    Then user click on the login and register
    Then user enters the Invalid user name 
    Then user enters Invalid password 
    When  User click on the remember me check box
    When Click on sign in button

  @invalid2
  Scenario: login and register the genie portal with valid user name and invalid password
     Then user enters the Valid user name 
    Then user enters Invalid password 
    When User click on the remember me check box
    When Click on sign in button

  @invalid3
  Scenario: login and register the genie portal with valid username only
    Then user enters the Invalid user name 
    When User click on the remember me check box
    When Click on sign in button
    When User enters the invalid credentials error massage will disply
    When User click on forgot password button
    Then User enter the Reset password page verfy it
    Then user enter the Reset Email 
    When User click on the register
    When User click on the Register the new account
    Then User enter on Caregiver Registration page verify it
    When user click on the login and register

  @valid
  Scenario: login and register the valid user name and valid password
    Then user enters the Valid user name 
    Then user enters Valid password 
    When User click on the remember me check box
    When Click on sign in button
    Then User verify the login page
