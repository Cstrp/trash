class Sym {
    constructor(value = 42) {
        this.sum = value
    }

    add(value) {
        this.sum += value

        return this
    }

}

const sum1 = new Sym()

console.log(sum1.add(8).add(10).add(20).sum)
