import { Component } from '@angular/core'

export interface ICards {
  name: string
  age: string
}

interface IItem {
  name: string
  age: string
  state: boolean
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

  protected props: IItem = {
    name: '',
    age: '',
    state: false
  }

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

  // items: IItem[] = [
  //   { id: 1, text: 'One' },
  //   { id: 2, text: 'Two' },
  //   { id: 3, text: 'Three' }
  // ]

  date = [
    new Date(2022, 22, 22),
    new Date(2021, 32, 2),
    new Date(2021, 11, 2),
    new Date(2021, 22, 1)
  ]

  toggleCard(): void {
    this.props.state = !this.props.state
  }

  setCard(car: ICards[]) {
    return car.length === 3
  }

  addCard() {
    if (this.props.name.length !== 0 && this.props.age.length !== 0) {
      this.cards.push({ name: this.props.name, age: this.props.age })
      this.props.name = ''
      this.props.age = ''
    }
  }
}
