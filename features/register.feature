Feature: genie register Functionality

  Scenario: register the genie portal
    Given user is on the genie job page
    Then click on the login and register
    When user click on Register a new account
    When user enter the invalid email id as "1234@11" and verify the erroe massage
    And user enters the valid email id as "sathwika466@gmail.com"
    Then user enters the invalid phone number as "70322235" and verify the error massage
    Then user enters the valid phone number as "7032223591"
    When user enters the password as "Sathwika@123"
    When user enters the incorrect confirm password as "sathwik" and enters the valid confirm password as "Sathwika@123"
    Then enters the first name  as "Sathwika"and last name as"godugu"

  @date
  Scenario: user handle the available to start
    Given user click on the available to start select the today date
    When user enters the feature date
    Then user click on the years Of Experience as "6"
    Then user select the Profession
    And select the Specialty
    When verify the error message
    Then again click on the profession and select the Specialty

  Scenario: user handle the States Licensed and below field
    Given user click on the States Licensed and sellect the states
    Then user select the Preferred Recruiter