Feature: orangeHRM login functionality

  @invalid
  Scenario: loging the orangepage with invalid usernmae and password
    Given user is on the orange login page
    Then user enters the username and password
    And click n the login button

  @valid
  Scenario: user enters the valid username and password
    Given user enters the user name and password and pim module
    And click on the addemploye option
    When fill the elements and click the add button
