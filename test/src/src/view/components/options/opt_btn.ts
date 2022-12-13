import { Template } from '@/view/template/template';
import { Btn } from '@/view/components/UI/Btn';

class Opt_btn extends Template {
  allStart: () => void = () => {};

  allReset: () => void = () => {};

  generate: () => void = () => {};

  btnRace: Btn;

  btnReset: Btn;

  btnGenerate: Btn;

  constructor(parent: HTMLElement) {
    super(parent, 'div', 'opt_btn');

    this.btnRace = new Btn(this.element, 'button', 'race_btn', 'Race');

    this.btnRace.btnClick = () => this.allStart();

    this.btnReset = new Btn(this.element, 'button', 'reset_btn', 'Reset');

    this.btnReset.btnClick = () => this.allReset();

    this.btnGenerate = new Btn(this.element, 'button', 'generage_btn', 'Generate');

    this.btnGenerate.btnClick = () => this.generate();
  }
}

export { Opt_btn };
