class Subj {
  constructor () {
    this.observers = []
  }

  subscribe (observer) {
    this.observers.push(observer)
  }

  unsubscribe (observer) {
    this.observers = this.observers.filter(obs => obs !== observer)
  }

  fire (changes) {
    this.observers.forEach((obs) => {
      obs.update(changes)
    })
  }
}

class Observer {
  constructor (state) {
    this.state = state
    this.initialState = state
  }

  update (changes) {
    if (changes.type === 'INCREMENT') {
      this.state = ++this.state
    } else if (changes.type === 'DECREMENT') {
      this.state = --this.state
      this.state += changes.payload
      this.state = this.initialState
    } else if (changes.type === 'ADD') {
      this.state += changes.payload
      this.state = this.initialState
    } else {
      this.state = this.initialState
    }
  }
}


const stream$ = new Subj()

const obs = new Observer()
const obs1 = new Observer(1)
const obs2 = new Observer(2)


stream$.subscribe(obs)
stream$.subscribe(obs1)
stream$.subscribe(obs2)

stream$.fire({type: 'INCREMENT'})
stream$.fire({type: 'DECREMENT'})
stream$.fire({type: 'ADD', payload: 10})

console.log(obs.state)
console.log(obs1.state)
console.log(obs2.state)
