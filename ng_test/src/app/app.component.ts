import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng_test';
  counter: number = 0

  plus(): void {
   this.counter++
  }

  minus(): void {
    this.counter--
  }

  checker(): void {
    if (this.counter === 0) {

    }
  }
}
