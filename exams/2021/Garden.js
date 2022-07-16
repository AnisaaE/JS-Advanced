class Garden {
  constructor(spaceAvailable) {
    this.spaceAvailable = spaceAvailable;
    this.plants = [];
    this.storage = [];
  }

  addPlant(plantName, spaceRequired) {
    if (this.spaceAvailable < spaceRequired) {
      throw new Error("Not enough space in the garden.");
    }

    this.spaceAvailable -= spaceRequired;
    this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
    return `The ${plantName} has been successfully planted in the garden.`;
  }

  ripenPlant(plantName, quantity) {
    let plant = this.plants.find((x) => x.plantName == plantName);

    if (!plant) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }

    if (plant.ripe == true) {
      throw new Error(`The ${plantName} is already ripe.`);
    }

    if (quantity <= 0) {
      throw new Error(`The quantity cannot be zero or negative.`);
    }

    plant.ripe = true;
    plant.quantity += quantity;

    if (quantity == 1) {
      return `${quantity} ${plantName} has successfully ripened.`;
    } else {
      return `${quantity} ${plantName}s have successfully ripened.`;
    }
  }
