class VDPPage {
  verifyFavoriteIconItsEmpty() {
    this.getFavoriteIcon().should('not.have.class', 'filled-heart');
  }

  verifyFavoriteIconItsFilled() {
    this.getFavoriteIcon().should('have.class', 'filled-heart');
  }

  clickFavoriteIcon() {
    this.getFavoriteIcon().click();
  }

  clickBuyOnline() {
    cy.xpath("(//a[contains(text(),'nline')])[1]").click({ force: true });
    cy.xpath("//span[contains(text(),'Buy online')]").click({ force: true });
  }

  verifyBuyOnlinePage() {
    cy.url().should('include', '/buy-online');
    cy.xpath('(//h1)[2]').should('be.visible').and('contain', 'Buy this');
    cy.get('div', { timeout: 10000 })
      .contains('Shipping Address')
      .should('be.visible');
    cy.get('div', { timeout: 10000 })
      .contains('Billing information')
      .should('be.visible');
  }

  getFavoriteIcon() {
    return cy.xpath("(//div[contains(@id,'heart-icon')])[3]");
  }

  clickOnRandomSaleEndingCar() {
    return cy.xpath('//span[contains(text(),"sale pending")]').first().click();
  }

  verifyYearMakeModelTrim(){
    this.getYMMT().should('not.be.empty');
  }

  verifySimilarCars(){
    cy.xpath("//h3[contains(text(),'Other Cars You Might Like')]").should('be.visible');
    cy.xpath("//div[contains(@class,'mb-14')]/div[@data-controller='cars--car-card']").should('have.length', 3);
  }

  getYMMT(){
    return cy.get("header>div>h1");
  }

}

export default VDPPage;
