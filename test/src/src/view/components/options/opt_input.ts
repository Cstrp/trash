import { ICreateCar } from '@/data/interfaces/ICar';
import { Input } from '@/view/components/UI/Input';
import { Template } from '@/view/template/template';
import { Btn } from '@/view/components/UI/Btn';

class Opt_input extends Template {
  createCar: (prop: ICreateCar) => void = () => {};

  private input: Input;

  private inputColor: Input;

  private btn: Btn;

  state = {
    name: '',
    color: '#000000',
  };

  constructor(parent: HTMLElement, className: string, value: string) {
    super(parent, 'div', 'opt_input');

    const wrapper = new Template(this.element, 'div', 'opt_input__wrapper');

    this.input = new Input(wrapper.element, 'text', 'opt_input__input-name');

    this.input.inputValue = (evt: Event) => this.updState('name', evt);

    this.inputColor = new Input(wrapper.element, 'color', 'opt_input__input-color', '#000000');

    this.inputColor.inputValue = (evt: Event) => this.updState('color', evt);

    this.btn = new Btn(this.element, 'button', 'opt_input__btn', value);

    this.btn.element.setAttribute('disabled', '');
    this.btn.btnClick = () => {
      this.createCar(this.state);
      this.resetOpt();
    };
  }

  updState(key: keyof ICreateCar, evt: Event): void {
    const input = evt.target as HTMLInputElement;

    this.state[key] = input.value;

    this.btn.element.toggleAttribute('disabled', this.state.name === '');
  }

  resetOpt(): void {
    this.state = {
      name: '',
      color: '#000000',
    };
    this.updInput();
  }

  updInput(): void {
    (this.input.element as HTMLInputElement).value = this.state.name;
    (this.input.element as HTMLInputElement).value = this.state.color;

    this.btn.element.setAttribute('disabled', '');
  }
}

export { Opt_input };
