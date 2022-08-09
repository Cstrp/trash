class Light {
  constructor (light) {
    this.light = light
  }
}

class Red extends Light {
  constructor () {
    super('red');
  }

  sign () {
    return 'STOP!'
  }
}

class Yellow extends Light {
  constructor () {
    super('yellow');
  }

  sign () {
    return `Wait!`
  }
}

class Green extends Light {
  constructor () {
    super('green');
  }

  send () {
    return 'GO!'
  }
}

class Traffic {
  constructor () {
    this.state = [
      new Green(),
      new Red(),
      new Yellow()
    ]
    this.current = this.state[0]
  }

  change () {
    const total = this.state.length
    let idx = this.state.findIndex(i => i === this.current)

    if (idx + 1 < total) {
      this.current = this.state[idx + 1]
    } else {
      this.current = this.state[0]
    }
  }

  sign () {
    return this.current.sign()
  }
}

const traffics = new Traffic()

console.log(traffics.state)
traffics.change()
console.log(traffics.sign())
traffics.change()
console.log(traffics.sign());
traffics.change()





