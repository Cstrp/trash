class _iterator {
  constructor (data) {
    this.idx = 0
    this.data = data
  }

  [Symbol.iterator] () {
    return {
      next: () => {
        if (this.idx < this.data.length) {
          return {
            value: this.data[this.idx++],
            done: false
          }
        } else {
          this.idx = 0

          return {
            done: true,
            value: void 0
          }
        }
      }
    }
  }
}

function* generator (collection) {
  let idx = 0

  while (idx < collection.length) {
    yield collection[idx++]
  }
}

const itrtr = new _iterator(['This', 'Is', 'Sparta!'])

const gen = generator(['This', 'Is', 'Sparta!'])

for (const val of itrtr) {
  console.log(`Values: ${val}`)
}

for (const val of gen) {
  console.log(`Value: ${val}`)
}
