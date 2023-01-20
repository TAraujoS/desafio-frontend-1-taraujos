describe("Desafio 1 Test", () => {
  it("Checking main title", () => {
    cy.visit("");
    cy.viewport(1440, 900);

    cy.get("h1").should("contain", "Simule sua Antecipação");
  });

  it("Checking message about value", () => {
    cy.visit("");
    cy.viewport(1440, 900);

    cy.get("label").should("contain", "valor da venda*");
  });

  it("Checking message about installments", () => {
    cy.visit("");
    cy.viewport(1440, 900);

    cy.get("label").should("contain", "quantas parcelas*");
  });

  it("Checking message about mdr", () => {
    cy.visit("");
    cy.viewport(1440, 900);

    cy.get("label").should("contain", "percentual de MDR*");
  });

  it("Checking 15 days initial value", () => {
    cy.visit("");
    cy.viewport(1440, 900);

    cy.get("p").should("contain", "Em 15 dias: R$ 0,00");
  });

  it("Tries to calculate", () => {
    cy.visit("");
    cy.viewport(1440, 900);

    cy.get("input[id=amout]").type("10000");
    cy.get("input[id=installments]").type("5");
    cy.get("input[id=mdr]").type("1");

    cy.get("p").should("contain", "Em 15 dias: R$ 9652,00");
  });

  it("Checking 15 days final value", () => {
    cy.visit("");
    cy.viewport(1440, 900);

    cy.get("input[id=amout]").type("10000");
    cy.get("input[id=installments]").type("5");
    cy.get("input[id=mdr]").type("1");

    cy.get("p").should("contain", "Em 15 dias: R$ 9652,00");
  });

  it("Checking value error", () => {
    cy.visit("");
    cy.viewport(1440, 900);

    cy.get("input[id=amout]").type("100");

    cy.get("span").should("contain", "*Valor mínimo 1000");
  });

  it("Checking installments error", () => {
    cy.visit("");
    cy.viewport(1440, 900);

    cy.get("input[id=amout]").type("10000");
    cy.get("input[id=installments]").type("15");

    cy.get("span").should("contain", "*Valor máximo 12");
  });

  it("Checking mdr error", () => {
    cy.visit("");
    cy.viewport(1440, 900);

    cy.get("input[id=amout]").type("10000");
    cy.get("input[id=mdr]").type("200");

    cy.get("span").should("contain", "*Valor máximo 100");
  });
});
