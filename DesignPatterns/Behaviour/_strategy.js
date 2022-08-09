class Vehicle {
  time () {
    return this.timeTrack
  }
}

class Bus extends Vehicle {
  constructor () {
    super();
    this.timeTrack = 10
  }

}

class Taxi extends Vehicle {
  constructor () {
    super();
    this.timeTrack = 5
  }

}

class Car extends Vehicle {
  constructor () {
    super();
    this.timeTrack = 3
  }

}

class Commute {
  travel (transport) {
    return transport.time()
  }
}

const commute = new Commute()

console.log(commute.travel(new Bus()));
console.log(commute.travel(new Car()));
console.log(commute.travel(new Taxi()));
