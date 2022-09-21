import { Component } from '@angular/core'

export interface ICards {
  name: string
  age: string
}

interface IItem {
  id: number
  text: string
}

interface ICardContent {
  name: string
  surname: string
  age: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ang_test'

  name: string = ''

  age: string = ''

  state: boolean = false

  cards: ICards[] = [
    {
      name: 'MalBat',
      age: '150'
    },
    {
      name: 'Bat',
      age: '123'
    },
    {
      name: 'Mab',
      age: '321'
    }
  ]

  content: ICardContent[] = [
    {
      name: 'Lol',
      surname: 'Lolovich',
      age: 2222
    },
    {
      name: 'Kek',
      surname: 'Kekovich',
      age: 1111
    },
    {
      name: 'Lola',
      surname: 'Lolovna',
      age: 3333
    }
  ]

  items: IItem[] = [
    { id: 1, text: 'One' },
    { id: 2, text: 'Two' },
    { id: 3, text: 'Three' }
  ]

  toggleCard(): void {
    this.state = !this.state
  }

  addCard() {
    if (this.cards) this.cards.push({ name: this.name, age: this.age })
    this.name = ''
    this.age = ''
  }
}
