import { Component } from '@angular/core';

export interface ICard {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng_base';

  state: boolean = true;

  cards: ICard[] = [
    { title: 'First card', text: 'Ohhhh ' },
    { title: 'Second card', text: 'Ohhhh my' },
    { title: 'Third card', text: 'Ohhhh my good' },
  ];

  togleCards() {
    this.state = !this.state;
  }
}
