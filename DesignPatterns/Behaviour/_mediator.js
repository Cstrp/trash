class User {
  constructor (name) {
    this.name = name
    this.room = null
  }

  send (message, to) {
    this.room.send(message, this, to)
  }

  receive (message, from) {
    console.log(`${from.name} => ${this.name}: ${message}`)
  }
}


class ChatRoom {
  constructor () {
    this.users = {}
  }

  registration (user) {
    this.users[user.name] = user
    user.room = this
  }

  send (message, from, to) {
    if (to) {
      to.receive(message, from)
    } else {
      Object.keys(this.users).forEach((key) => {
        if (this.users[key] !== from) {
          this.users[key].receive(message, from)
        }
      })
    }
  }
}

const user1 = new User('Igar')

const user2 = new User('LoL')

const user3 = new User('Abdul')

const room = new ChatRoom()

room.registration(user1)
room.registration(user2)
room.registration(user3)

user1.send('Hi', user3)

user3.send('Darova', user2)

user2.send('How remove directory *Linux Debian* `Cry`')

