Feature: E2E Test to Store Website

  @demo
  Scenario Outline: <TestID>: Search external customers

    Given Get list of users from reqres.in
    When An as admin user login to nopcommerce site
    When Search users in customer list
    Then Verify if all users exist in customers list

  Example:
      | TestID     |
      | INTV_TC001 |