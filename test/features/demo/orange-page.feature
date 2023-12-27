Feature: Demo feature


 Scenario Outline: Login to Orange website
  Given Im in login page
  When I insert username: <username_> and password: <password_>
  And clicked on Login button
  Then Im in the home page and it match with this url <expectedURL>

  Examples:
   | username_ | password_ | expectedURL                                                             |
   | Admin     | admin123  | https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index |

