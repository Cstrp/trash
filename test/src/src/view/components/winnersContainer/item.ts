import { carImg } from '@/data/Utils/car';
import { Template } from '@/view/template/template';
import { IGetCar } from '@/data/interfaces/ICar';
import { IGetWinner } from '@/data/interfaces/IWinner';

interface IWinnersCars extends IGetCar, IGetWinner {}

class Item extends Template {
  constructor(parent: HTMLElement, win: IWinnersCars) {
    super(parent, 'div', 'winner-item');

    const { id, name, color, wins, time } = win;

    const item = new Template(this.element, 'div', 'winner-item-item');

    new Template(item.element, 'div', 'winner-item-id', `${id}`);

    new Template(item.element, 'div', 'winner-item-image', `${carImg(color)}`);

    new Template(item.element, 'div', 'winner-item-name', `${name}`);

    new Template(item.element, 'div', 'winner-item-wins', `${wins}`);

    new Template(item.element, 'div', 'winner-item-time', `${time}`);
  }
}

export { Item };
