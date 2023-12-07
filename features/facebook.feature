Feature: open the facebook page

  Scenario: user open the facebook page
    Given user in facebook login page
    When user enters the user name
    Then user enters the passwoed
    When user click on the login button
