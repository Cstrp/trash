const car = {
    wheels: 4,
    color: 'Black',
    message() {
        console.log(`I have ${this.wheels} wheels, and my owner ${this.owner}`)
    }
}

const owner = Object.create(car, {
    owner: {
        value: 'Kek'
    }
})

console.log(owner.__proto__ === car)

console.log(owner.message());
