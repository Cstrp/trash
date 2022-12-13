import { Template } from '@/view/template/template';

class Btn extends Template {
  btnClick: () => void = () => {};

  constructor(parent: HTMLElement, tag: string, className: string, value?: string, disabled: boolean = false) {
    super(parent, 'button', 'btn', `${value}`);

    this.element.classList.add(...className.split(' '));

    this.element.addEventListener('click', () => this.btnClick());

    if (disabled) {
      this.setDisable(true);
    }
  }

  setDisable(state: boolean = false): void {
    this.element.toggleAttribute('disabled', state);
  }

  rmDisable(): void {
    this.element.removeAttribute('disabled');
  }
}

export { Btn };
