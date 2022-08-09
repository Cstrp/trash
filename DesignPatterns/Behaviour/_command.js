class customMath {
    constructor(value = 0) {
        this.num = value
    }

    square() {
        return this.num ** 2
    }

    cube() {
        return this.num ** 3
    }
}

class Command {
    constructor(subj) {
        this.subj = subj
        this.result = []
    }

    execute(command) {
        this.result.push(command)

        return this.subj[command]()
    }
}

const a = new Command(new customMath(42))

console.log(a.execute('square'));

console.log(a.execute('cube'))

console.log(a.result) // result write command
