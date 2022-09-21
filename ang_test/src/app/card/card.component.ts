import { Component, Input, OnInit } from '@angular/core'
import { ICards } from '../app.component'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  // counter: number = 0

  @Input() card!: ICards

  @Input() index!: number

  // textContent: string = 'Ogogogo'

  inputText: string = ''

  name: string = ''

  state: boolean = true

  ngOnInit = (): void => {}

  // plus(): void {
  //   this.counter++
  // }
  //
  // minus(): void {
  //   if (this.counter === 0) {
  //     this.counter++
  //   }
  //   this.counter--
  // }

  toggleCard(): void {
    this.state = !this.state
  }

  inputValue(evt: Event) {
    this.inputText = (<HTMLInputElement>evt.target).value
  }
}
