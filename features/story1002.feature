Feature: UI Test Automation Playground

  Scenario: UI Test Automation Playground Automation
    Given user is on uitestingplayground.com webpage
    When user is on webpage user select dynamic table and click on it
    And verify the is a table containing following columns like name memory Network disc CPU
    And user go back to home
    When user is on home page and click on Mouse Over
    And user click on click me for 3 times
    Then user verify count is 3 or not
