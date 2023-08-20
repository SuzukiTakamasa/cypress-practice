import parseCSV from "./parse_csv";

const Papa = require('papaparse');

describe('template spec', () => {
let testCase = [];

before(() => {
  parseCSV("./csv/test_data_e2e.csv").then(data => {
    testCase = data
  });
});

  it('passes', () => {
    cy.visit('https://example.cypress.io')
  });
});