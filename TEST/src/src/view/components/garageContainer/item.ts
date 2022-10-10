import { Template } from '@/view/template/template';
import { Btn } from '@/view/components/UI/Btn';
import { IGetCar } from '@/data/interfaces/ICar';
import { IEngine, startEngine, stopEngine, switchMode } from '@/data/interfaces/IEngine';
import { carImg } from '@/data/Utils/car';

const carImgWidth = 100;

class Item extends Template {
  rmCar: (id: number) => void = () => {};

  updCar: (id: number) => void = () => {};

  private startEngine: Btn;

  private stopEngine: Btn;

  private imgCar: Template;

  public car: IGetCar;

  public speed: number = 0;

  private anime: Animation | undefined;

  // eslint-disable-next-line max-lines-per-function
  constructor(parent: HTMLElement, car: IGetCar) {
    super(parent, 'div', 'garage__item');

    this.car = car;

    const headerCar = new Template(this.element, 'div', 'garage__item-top');

    const selectBtn = new Btn(headerCar.element, 'button', 'select_btn', 'Select');

    selectBtn.btnClick = () => {
      if (car.id) this.updCar(car.id);
    };

    const removeBtn = new Btn(headerCar.element, 'button', 'remove_btn', 'Remove');

    removeBtn.btnClick = () => {
      if (car.id) this.rmCar(car.id);
      this.removeElement();
    };

    new Template(headerCar.element, 'div', 'car_name', car.name);

    const fieldCar = new Template(this.element, 'div', 'garage__item-bottom');

    const options = new Template(fieldCar.element, 'div', 'options');

    this.startEngine = new Btn(options.element, 'button', 'start_btn', 'A', true);
    this.startEngine.btnClick = () => {
      if (car.id) this.startEng(car.id);
    };

    this.stopEngine = new Btn(options.element, 'button', 'stop_btn', 'B', true);

    this.startEngine.btnClick = () => {
      if (car.id) this.stopEng(car.id);
    };

    this.imgCar = new Template(fieldCar.element, 'div', 'car_img', `${carImg(car.color)}`);

    new Template(fieldCar.element, 'div', 'finish');
    // не забыть про финиш картинку
  }

  updBtn(bool: boolean = false): void {
    this.startEngine.setDisable(bool);
    this.stopEngine.setDisable(!bool);
  }

  async startEng(id: number) {
    const data = await startEngine(id);

    if (data.status === 200) {
      this.updBtn(true);

      const { result } = data;

      const time = result.distance / result.velocity;

      this.animateCar(time);
      await this.switchMode(result);
    }
  }

  async stopEng(id: number) {
    const data = await stopEngine(id);

    if (data.status === 200) {
      this.updBtn();
      this.speed = 0;
      this.anime?.cancel();
      this.imgCar.element.style.left = `${carImgWidth}px`;
    }
  }

  private animateCar(time: number): void {
    this.anime = this.imgCar.element.animate([{ left: '50px' }, { left: `calc(100% - ${carImgWidth}px)` }], {
      duration: time,
      easing: 'easy-in-out',
    });
    this.anime.play();
    this.anime.onfinish = () => {
      this.imgCar.element.style.left = `calc(100% - ${carImgWidth}px)`;
    };
  }

  private async switchMode(car: IEngine): Promise<void> {
    const mode = await switchMode(this.car.id as number);

    return new Promise((res) => {
      if (mode === 500) {
        this.anime?.pause();
      }

      if (mode === 200) {
        this.speed = Math.round(car.distance / car.velocity);
        res();
      }
    });
  }

  allDisable(): void {
    this.startEngine.setDisable(true);
    this.stopEngine.setDisable(false);
  }
}

export { Item };
