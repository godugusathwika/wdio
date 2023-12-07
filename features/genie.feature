Feature: genie registration

  Scenario: genie portal web page
    Given user is on the genie registration page
    When user enters the email
    And user enters the phone number
    Then enter the password and confirm password
    And user enters the first name and last name
    
