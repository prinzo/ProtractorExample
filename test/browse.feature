Feature: Visiting Angular's website
  As a user
  I should be able to enter my name in the textbox and the message should contain my name

  Scenario Outline: User tries out search bar
    Given I go to angular's website and I enter <text> into the name box
    Then the greeting should be <greetingText>

    Examples:
      | text  | greetingText |
      | hello | Hello hello! |
      | bye   | Hello bye!   |