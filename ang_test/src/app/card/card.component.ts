import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  counter: number = 0

  textContent: string = 'Ogogogo'

  inputText: string = ''

  name: string = ''

  state: boolean = false

  ngOnInit = (): void => {}

  plus(): void {
    this.counter++
  }
  minus(): void {
    if (this.counter === 0) {
      this.counter++
    }
    this.counter--
  }

  addText() {
    this.state = true
    console.log(this.state)
  }

  inputValue(evt: Event) {
    this.inputText = (<HTMLInputElement>evt.target).value
  }
}
