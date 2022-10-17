import { Pagination } from '@/view/components/pagination';
import { Item } from '@/view/components/winnersContainer/item';
import { Template } from '@/view/template/template';
import { getCar, IGetCar } from '@/data/interfaces/ICar';
import { IGetWinner } from '@/data/interfaces/IWinner';

interface IWinnersCars extends IGetCar, IGetWinner {}

class WinContainer extends Template {
  updCount: (num: number) => void = () => {};

  sortWin: (item: string, order: string) => void = () => {};

  title = Template;

  private _container!: Template;

  pagination: Pagination;

  winners: IGetWinner[] = [];

  constructor(parent: HTMLElement) {
    super(parent, 'div', 'winners_wrapper');

    new Template(this.element, 'h2', 'winners_title', 'Winners');

    this.pagination = new Pagination(this.element);

    this.pagination.upd = (num) => this.updCount(num);

    const titleItem = new Template(
      this.element,
      'div',
      'winners_title_item',
      `
          <div class="winner-item-id">№</div>
      <div class="winner-item-image">Car Image</div>
      <div class="winner-item-name">Name</div>
      <div class="winner-item-wins">
        <span>Total Wins</span>
        <img class="winner-item-arrow" src="./assets/arrow.svg" />
      </div>
      <div class="winner-item-time">
        <span>Time (sec)</span>
        <img class="winner-item-arrow" src="./assets/arrow.svg" />
      </div>`,
    );

    const totalWin = titleItem.element.querySelector('.winner-item-wins');

    totalWin?.addEventListener('click', () => this.sortWin('totalWins', 'desc'));
  }

  private sortWinners(item: Element, type: string) {
    item.classList.toggle('active');

    if (item.classList.contains('active')) {
      this.sortWin(type, 'ASC');
    } else {
      this.sortWin(type, 'DESC');
    }
  }

  private updTitle(winLength: string) {
    this.title.element.innerHTML = `Winners (${winLength}) cars`;
  }

  private async getCar(id: number) {
    const data = await getCar(id);

    return data;
  }

  addWinners(winners: { result: Array<IGetWinner>; count: string | null }): void {
    this._container.element.innerHTML = '';
    this.winners = winners.result;

    let id = 1;

    if (winners.count) this.updTitle(winners.count);

    this.winners.forEach(async (item) => {
      const car: IGetCar | null = await this.getCar(<number>item.id);

      if (car) {
        const carData: IWinnersCars = {
          id: id++,
          name: car.name,
          color: car.color,
          wins: item.wins,
          time: item.time,
        };

        new Item(this._container.element, carData);
      }
    });
  }
}

export { WinContainer };
