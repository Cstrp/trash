import { Component, Input, OnInit } from '@angular/core';
import { ICard } from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  title = 'Title test'; // переменная
  text: string = 'Some text';

  @Input() card!: ICard;

  @Input() index!: number;

  date: Date = new Date();
  // protected text: string = 'lorem10'
  // number: number = 213
  // arr: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  // obj = {
  //   name: 'valery',
  //   info: {
  //     age: 25,
  //     job: false
  //   }
  // }
  // https://cms-assets.tutsplus.com/uploads/users/34/posts/28933/preview_image/angular-js.png
  disabled = false;

  textColor!: string;

  img: string =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/2214px-How_to_use_icon.svg.png';

  ngOnInit() {
    setTimeout(() => {
      this.img =
        'https://cms-assets.tutsplus.com/uploads/users/34/posts/28933/preview_image/angular-js.png';
      this.disabled = true;
    }, 3000);
  }

  getInfo(): string {
    return `This is info!!!!`;
  }

  changeTitle() {
    this.card.title = 'NeLog';
  }

  inputHandler(value: string) {
    this.title = value;
  }

  changeHandler() {
    console.log(this.title);
  }
}
