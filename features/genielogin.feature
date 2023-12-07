Feature: Genie Login Functionality

  @invalid1
  Scenario: Login and register the genie portal with invalid user name and password
    Given User is on the genie login page
    Then And click on the login and register
    And User enters the invalid user name as "sathwika@123"
    And invalid password as "sathwika123"
    Then user click on the remember me check box
    Then click on sign in button
  @invalid2
  Scenario: login and register the genie portal with valid user name and invalid password
    When user enters the valid username as "chandu12@gmail.com"
    And invalid password as "sathwika123"
    Then user click on the remember me check box
   Then click on sign in button

  @invalid3
  Scenario: login and register the genie portal with valid user name
    When user enters the invalid username as "sathwika@123"
    And valid password as "Chandu@123"
   Then user click on the remember me check box
    Then click on sign in button


  @invalid4
  Scenario: login and register the genie portal with valid username only
    When user enters the valid username as "chandu12@gmail.com"
    Then user click on the remember me check box
    Then click on sign in button


  @invalid5
  Scenario: login and register the genie portal with valid password only
    When user enters the valid password as "Chandu@123"
    Then user click on the remember me check box
    Then click on sign in button


  @valid
  Scenario: Login and register the genie portal
    Given user enters the valid user name "chandu12@gmail.com"
    And valid password "Chandu@123"
    Then user click on the remember me check box
    Then click on sign in button

