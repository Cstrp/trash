import { Template } from '@/view/template/template';
import { IGetCar } from '@/data/interfaces/ICar';
import { Pagination } from '@/view/components/pagination';
import { Item } from './item';

class GarageContainer extends Template {
  rmCar: (id: number) => void = () => {};

  updCar: (id: number) => void = () => {};

  updatePage: (id: number) => void = () => {};

  private container: Template;

  private title: Template;

  pagination: Pagination;

  cars: Array<Item>;

  constructor(parent: HTMLElement) {
    super(parent, 'div', 'wrapper');
    this.cars = [];

    this.title = new Template(this.element, 'div', 'garage__title');

    this.pagination = new Pagination(this.element);

    this.container = new Template(this.element, 'div', 'garage__wrapper');

    this.pagination.upd = (page) => this.updatePage(page);
  }

  private updTitle(carLength: string): void {
    this.title.element.innerHTML = `Your cars ${carLength}`;
  }

  private clean(): void {
    this.container.element.innerHTML = '';
    this.cars = [];
  }

  addCar(cars: Array<IGetCar>, carLength: string): void {
    this.clean();

    this.updTitle(carLength);

    this.cars = cars.map((i): Item => {
      const item = new Item(this.container.element, i);

      i.rmCar = (id: number) => this.rmCar(id);
      i.updCar = (id: number) => this.updCar(id);

      return item;
    });
  }
}

export { GarageContainer };
