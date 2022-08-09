class _flyweight {
    constructor(model, price) {
        this.model = model
        this.price = price
    }
}

class Factory {
    constructor() {
        this.cars = []
    }

    create(model, price) {
        const candidate = this.getCar(model)

        if (candidate) {
            return candidate
        }

        const newCar = new _flyweight(model, price)

        this.cars.push(newCar)

        return newCar
    }

    getCar(model) {
        return this.cars.find(car => car.model === model)
    }
}

const factory = new Factory()

const BMW = factory.create('BMW', 10000)

const AUDI = factory.create('AUDI', 100500)

const BMWX3 = factory.create('BMW', 50000)


console.log(BMW);

console.log(AUDI);

console.log(BMWX3);

console.log(BMW === BMWX3) // cache !
