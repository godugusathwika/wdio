Feature: Verify the genie register Functionality
 
  Scenario: user verify the genie register page
    Given User is on the genie job page
    When User click on the login and register
    When User click on Register a new account
 
  @EmailField
  Scenario: user verify the email field
    When user click on the email without entering information in the email field
    When user click on the phone number field
    Then user verify the email error message
    When user enters the email below 5characters
    Then user verify the email error message
    When user enters the email above 100characters
    Then user verify the email error message
    When User enters the email using space
    Then user verify the email error message
    When user enters the valid email
 
  @PhoneNumberField
  Scenario: user verify the phonenumber field
    When user click on the phone number without entering information in the phonenumber field
    When user click on the password field
    Then verify the  phonenumber error message
    When user enters the phone number above 10 characters
    Then verify the  phonenumber error message
    When user enters the phone number above 20 characters
    Then verify the  phonenumber error message
    When user enter the phonenumber using the space
    Then verify the  phonenumber error message
    When user enters the valid mobile number
   
  @passwordfield
  Scenario:user verify the password field
  When user click on the password without entering the password field
  When user click on the confirm password field
  Then verify the password field error message
  When user enter the password below 4 characters
  Then verify the password field error message
  And user enters the password above 50 characters
  Then verify the password field error message
  When user enters the valid password
 
  @confirmpassword
  Scenario:user verify the confirmpassword field
  When user click on the confirmpassword without entering the input field
  And user click on the first name field
  Then user verify the confirm password error message
  When user enters the incorrect confirm password
  Then user verify the confirm password error message
  When user enters the confirm password below 4 characters
  Then user verify the confirm password error message
  When user again enters the confirm password above 50 characters
Then user verify the confirm password error message
  When user enters the correct confirm password
 
 
 
  @firstnamefield
  Scenario:user verify the first name field
  When user click on the first name without entering the field
  When user click on the lastname field
  Then verify the firstname field error massage
  When user enters the first name above 100 characters
 Then verify the firstname field error massage
 When user enters the correct firstname
 
 
 @lastname
 Scenario:user verify the last name field
  When user click on the last name without entering the field
  When user click on the Available To Start field
  Then verify the lastname field error massage
  When user enters the last name above 100 characters
 Then verify the lastname field error massage
 When user enters the correct lastname

@availableToStart
Scenario:user handle the available to start
When user click on the available to start
When user click n the years of experience field
Then user verify the available to start error message
And user click on the today date
When user enter the feature date 

@YearsOfExperience
Scenario:user verify the Years Of Experience field
When user click on the year of experience field
When user enters the year of experience

@profession
Scenario:user verify the profession field
When user click on the profession 
And user without selecting the profession click on the Specialty
Then verify the profession error message 
When user select the option in profession field

@Speciality
Scenario:user verify the Specialty field
When user click on the speciality without entering the fileld
And user click on the States Licensed field
Then verify the speciality error message
When user select the specility 


@StatesLicensed
Scenario:user verify the States Licensed fileld
When user select the multipul licensed States

@PreferredDestinationStates
Scenario:user verify the Preferred Destination Statesfield
When user click on the Preferred Destination States field
When user select the multipul StatesLicensed


@PreferredRecruiter
Scenario:user verify the PreferredRecruiter field
When user click on the  PreferredRecruiter field
And user click on the note to Recruiter
Then verify the PreferredRecruiter error
When user select the PreferredRecruiter


@noteRecruiter
Scenario:user verify the note recruiter field
When user enter the note to recruiter
Then verify the error note message
When user enters the below 1000 characters
Then verify the error note message
When user click on the Compact License checkbox

@RegisterButton 
Scenario:user verify the register button 
When user click on the register burron 
Then user navigate to new page verify it 
When user go back to regissster page
When User click on the login and register
When User click on Register a new account
When user enters the valid email
 When user click on the phone number field
Then user verify the email error message
 






 #@resumefield
 #Scenario:user upload the resumefield
 #When user click on the rusume and upload the resume