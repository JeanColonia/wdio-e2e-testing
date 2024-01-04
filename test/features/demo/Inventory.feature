Feature: Inventory Web


 @demo
 Scenario Outline: Demo Inventory:
  Given Login to inventory Web
  Then inventory page should list <numberOfProducts> products
  Then validate all products have a valid price
  Examples:
   | TestID   | numberOfProducts |
   | WEB_TC02 | 6                |



