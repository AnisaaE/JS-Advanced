const { expect } = require('chai')
const rentCar = require('./app')

describe("rentCar", () => {
  describe("Test for searchCar", () => {
    it("Check for invalid parameters", () => {
      expect(() =>
      rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 3) 
          .to.throw("Invalid input!")
      );
      expect(() =>
      rentCar.searchCar({Volkswagen, BMW, Audi},'Audi').to.throw("Invalid input!")
      );
      expect(() =>
      rentCar.searchCar(3,["Volkswagen", "BMW", "Audi"] ).to.throw("Invalid input!")
      );
      expect(() =>
      rentCar.searchCar(undefined,'Audi').to.throw("Invalid input!")
      );
      expect(() =>
      rentCar.searchCar("Volkswagen", 'Volkswagen').to.throw("Invalid input!")
      );
      expect(() =>
      rentCar.searchCar(["Volkswagen", "BMW", "Audi"],undefined).to.throw("Invalid input!")
      );
    });

    it("Check model", () => {
      expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "Audi")).to.equal(
        `There is 1 car of model Audi in the catalog!`
      );
      expect(rentCar.searchCar(['Audi'], 'bmw')).to.throw(
        'There are no such models in the catalog!'
      );
    });
  });

  describe("Test for price", () => {
    it("Check valid parameters", () => {
      expect(rentCar.calculatePriceOfCar("BMW", "one")).to.throw(
        "Invalid input!"
      );
      expect(rentCar.calculatePriceOfCar([], 10)).to.throw(
        "Invalid input!"
      );
      expect(rentCar.calculatePriceOfCar({}, 10)).to.throw(
        "Invalid input!"
      );
      expect(rentCar.calculatePriceOfCar("BMW", undefined)).to.throw(
        "Invalid input!"
      );
    });
    it("Check valid parameters", () => {
      expect(rentCar.calculatePriceOfCar("BMW", 1)).to.equal(
        `You choose "BMW" and it will cost $45!`
      );
    it("Check valid parameters", () => {

      expect(rentCar.calculatePriceOfCar("Audi", 2.5)).to.throw(
        "Invalid input!"
      );})
    it("Check valid parameters", () => {
      expect(rentCar.calculatePriceOfCar('Neshto', 10)).to.throw(
        'No such model in the catalog!'
      );})
    it("Check valid parameters", () => {

      expect(rentCar.calculatePriceOfCar("BMW", undefined)).to.throw(
        "Invalid input!"
      );})
    });
  });


describe("Test for budgets", () => {
      it("Check for invalid parameters", () => {
        expect(() =>
          rentCar
            .checkBudget(12,"two", 25)
            .to.throw("Invalid input!")
        ) });
        it("Check for invalid parameters", () => {
        expect(() =>
        rentCar
        .checkBudget('two', 34, 55)
            .to.throw("Invalid input!")
        );});
        it("Check for invalid parameters", () => {  expect(() =>
        rentCar
        .checkBudget(44,5,'somef')
            .to.throw("Invalid input!")
        );});
  });
});
