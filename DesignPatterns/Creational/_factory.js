class MemerShip {
    constructor(name) {
        this.name = name
        this.cost = 50
    }
}

class StMember {
    constructor(name) {
        this.name = name
        this.cost = 150
    }
}

class PremMember {
    constructor(name) {
        this.name = name
        this.cost = 100500
    }
}

class Facotry {
    static list = {
        simple: MemerShip,
        st: StMember,
        prem: PremMember

    }

    create(name, type = 'simple') {
        const MemShip = Facotry.list[type] || Facotry.list.simple
        const member = new MemShip(name)
        member.type = type
        member.define = function () {
            console.log(`${this.name} - ${this.type} - ${this.cost}`)
        }

        return member
    }
}

const fac = new Facotry()

const member = [
    fac.create('Agar', 'simple'),
    fac.create('Kek', 'prem'),
    fac.create('Lola', 'st'),
    fac.create('Kok-el')
]

console.log(member.forEach(function (m) {
    m.define();
}));


