Feature: Genie Login Functionality

  @invalid1
  Scenario: Login and register the genie portal with invalid user name and password
    Given User is on the genie login page
    Then And click on the login and register
    When User enters the invalid user name as "sssssss@123"
    When invalid password as "asdfghjk"
    Then user click on the remember me check box
    Then click on sign in button
    When user enters the invalid credentials error massage will disply
  @invalid2
  Scenario: login and register the genie portal with valid user name and invalid password
    When user enters the valid username as "chandu12@gmail.com"
    When invalid password as "asdfghjk"
    Then user click on the remember me check box
    Then click on sign in button
    When user enters the invalid credentials error massage will disply
     Then user click on forgot password button
    When user enter the Reset password page verfy it
     Then user click on the register 
     Then user click on the Register the new account
     Then user enter on Caregiver Registration page verify it
     Then And click on the login and register

  @valid3
  Scenario: login and register the genie portal with valid user name and valid password
    When user enters the valid username as "chandu12@gmail.com"
    When valid password as "Chandu@123"
    Then user click on the remember me check box
    Then click on sign in button
    When verify the login page




  
