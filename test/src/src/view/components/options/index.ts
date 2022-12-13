import { Template } from '@/view/template/template';
import { Opt_btn } from '@/view/components/options/opt_btn';
import { Opt_input } from '@/view/components/options/opt_input';
import { IGetCar, ICreateCar, IUpdateCar } from '@/data/interfaces/ICar';

class Options extends Template {
  allStart: () => void = () => {};

  allStop: () => void = () => {};

  resetAllCars: () => void = () => {};

  generateCars: () => void = () => {};

  createCar: (prop: ICreateCar) => void = () => {};

  updateCar: (prop: IUpdateCar) => void = () => {};

  updInput: Opt_input;

  optBtn: Opt_btn;

  constructor(parent: HTMLElement) {
    super(parent, 'div', 'wrapper');

    const createInput = new Opt_input(this.element, 'Generate cars', 'Generate');

    createInput.createCar = (prop) => this.createCar(prop);

    this.updInput = new Opt_input(this.element, 'Update cars', 'Update');
    this.updInput.createCar = () => {
      this.updateCar(this.updInput.state);
    };

    this.optBtn = new Opt_btn(this.element);
    this.optBtn.allStart = () => this.allStart();
    this.optBtn.allReset = () => this.allStop();
    this.optBtn.generate = () => this.generateCars();
  }

  updProp(car: IGetCar): void {
    this.updInput.state = car;
    this.updInput.updInput();
  }
}

export { Options };
