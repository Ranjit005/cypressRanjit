
Given('I navigate to Google Page', () => {
  cy.visit("https://www.google.co.in/")
});
Given('I click on Search Link', () => {
  cy.log("Reaching tO Search Page")
    //cy.xpath("//a[contains(text(),'Sign in')]").click()
  //cy.xpath("//a[contains(text(),'NonSense')]").should('be.visible')
  });
