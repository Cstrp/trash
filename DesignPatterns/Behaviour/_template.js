class Employ {
  constructor (name, salary) {
    this.name = name
    this.salary = salary
  }

  responsibility () {

  }

  work () {
    return `${this.name} say - again work?`
  }

  paid () {
    return `${this.name} have money ${this.salary}`
  }
}

class Developer extends Employ {
  constructor (name, salary) {
    super(name, salary);
  }

  responsibility () {
    return `Write code!`
  }
}

class QA extends Employ {
  constructor (name, salary) {
    super(name, salary);
  }

  responsibility () {
    return `Test code!`
  }
}

const dev = new Developer('Valery', 0.2 + 0.3)
const qa = new QA('Igar', Math.random())

console.log(dev.paid(), dev.work())
console.log(qa.paid(), qa.work());

