Feature: Inventory Web


 @demo
 Scenario Outline: <TestID>: Demo Inventory:
  Given Login to inventory Web
   | userType        | userName         |
   | standarUser     | standar_user     |
   | performanceUser | performance_user |
   | troubleUser     | trouble_user     |
  Then inventory page should list <numberOfProducts> products
  Then validate all products have a valid price
  Examples:
   | TestID    | numberOfProducts |
   | WEB_TC001 | 6                |



