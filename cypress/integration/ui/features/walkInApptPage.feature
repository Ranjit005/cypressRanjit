@Internal
Feature: Walk In Appointment Page

  @RegresionTest
  Scenario: I want to search for a vehicle with no VIN number

    Given I log into OpsWeb
    And I navigate to Walk In Appointments Page
    And I fill out appointment details
      | Region        | Lot           |
      | San Francisco | San Francisco |
    When I search for a vehicle VIN
      | VIN |
      |     |
    Then Empty VIN error is displayed

  @RegresionTest
  Scenario: I want to search for an incorrect VIN

    Given I log into OpsWeb
    And I navigate to Walk In Appointments Page
    And I fill out appointment details
      | Region        | Lot           |
      | San Francisco | San Francisco |
    When I search for a vehicle VIN
      | VIN    |
      | TstVIN |
    Then Select vehicle error is displayed

  @RegresionTest
  Scenario: I want to create a vehicle interest without choosing a car

    Given I log into OpsWeb
    And I navigate to Walk In Appointments Page
    And I fill out appointment details
      | Region        | Lot           |
      | San Francisco | San Francisco |
    When I do not select a vehicle
    Then Select vehicle error is displayed