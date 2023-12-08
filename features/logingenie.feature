Feature: Genie login Functionality

  @invalid1
  Scenario: Login and register the genie portal with invalid user name and password
    Given user is on the genie login page
    Then user click on the login and register
    And enters the invalid user name as "sathwika@123"
    And Invalid password as "sathwika123"
    Then User click on the remember me check box
    Then Click on sign in button

  @invalid2
  Scenario: login and register the genie portal with valid user name and invalid password
    When User enters the valid username as "chandu12@gmail.com"
    And Invalid password as "sathwika123"
    Then User click on the remember me check box
    Then Click on sign in button

  @invalid3
  Scenario: login and register the genie portal with valid username only
    When User enters the valid username as "chandu12@gmail.com"
    Then User click on the remember me check box
    Then Click on sign in button

 

    @valid4
    Scenario:login and register the valid user name and valid password
      When User enters the valid username as "chandu12@gmail.com"
    When User enters the valid password as "Chandu@123"
   Then User click on the remember me check box
    Then Click on sign in button

