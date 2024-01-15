Feature: Inventory Web



 Scenario Outline: <TestID>: Demo Inventory:
  Given Login to inventory Web
   | username      | password     |
   | standard_user | secret_sauce |
  Then inventory page should list <numberOfProducts> products
  Then validate all products have a valid price
  Examples:
   | TestID    | numberOfProducts |
   | WEB_TC001 | 6                |



