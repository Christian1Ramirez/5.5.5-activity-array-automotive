//this includes the vehicle class as a module
const VehicleModule = require("./vehicle.js");

//part of array automotive
class Car extends VehicleModule.Vehicle {
  constructor(
    make,
    model,
    year,
    color,
    mileage,
    maxPass,
    maxSpeed,
    fuel,
    scheduleService
  ) {
    super(make, model, year, color, mileage);
    this.maxPass = maxPass;
    this.maxSpeed = maxSpeed;
    this.fuel = fuel;
    this.scheduleService = scheduleService;
  }
  //check if the number of passengers are not exceeding the max
  loadPassenger(num) {
    if (num <= this.maxPass) {
      super.passenger = num;
      return true;
    } else {
      return false;
    }
  }

  //check if fuel is enough
  start() {
    if (this.fuel > 0) {
      console.log("engine started");
      return (this.started = true);
    } else {
      console.log("engine cannot start");
      return (this.started = false);
    }
  }

  //check mileage for service
  scheduleService(mileage) {
    if (mileage > this.scheduleService) {
      return true;
    } else {
      return false;
    }
  }
}

//this shows how to call from this module...
let v = new VehicleModule.Vehicle(
  "Mercury",
  "Sedan",
  "1965",
  "color",
  "mileage"
);
console.log(v.make);

let mercurySedan = new Car(
  "Mercury",
  "Sedan",
  "1965",
  "color",
  "mileage",
  5,
  160,
  10,
  30000
);
console.log(mercurySedan.make);