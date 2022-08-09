class Old {
    operations(t1, t2, operation) {
        switch (operation) {
            case 'add':
                return t1 + t2
                break
            case 'sub':
                return t1 - t2
                break
            default:
                return NaN
        }
    }
}

class New {
    add(t1, t2) {
        return t1 + t2
    }

    sub(t1, t2) {
        return t1 - t2
    }
}

class Adapter {
    constructor() {
        this.calc = new New()
    }

    operations(t1, t2, operation) {
        switch (operation) {
            case 'add':
                return this.calc.add(t1, t2)
                break
            case 'sub':
                return this.calc.sub(t1, t2)
                break
            default:
                return NaN
        }
    }
}

const veryOld = new Old()
console.log(veryOld.operations(10, 15, 'add'))

const newNew = new New()
console.log(newNew.add(10, 15))

const adapt = new Adapter()
console.log(adapt.operations(10, 15, 'add'))
