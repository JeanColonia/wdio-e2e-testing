Feature: Demo feature

  #@demo @debug
  @smoke
  Scenario Outline: Run our firt demo feature
    Given Google page is opened
    When Search with <searchItem>
    Then Click on the first search result
    Then URL should match <expectedResult>

    Examples:
      | searchItem  | expectedResult           |
      | webdriverio | https://webdriver.io/es/ |

