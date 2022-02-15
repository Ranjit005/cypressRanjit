@Buyer
Feature: Shop Flow Page

	@RegressionTest
	Scenario: I want to validate the Shop Flow

		Given I go to 'https://shift.com/cars?q=honda'
		And I set geolocation cookies
		And I select the first car
		#this step may fail locally due to geolocation but it will pass ok on remote, VDP behavior changes due to location
		When I click buy online
		Then I should see the Buy Online page displayed