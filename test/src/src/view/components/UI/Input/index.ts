import { Template } from '@/view/template/template';

class Input extends Template {
  inputValue: (evt: Event) => void = () => {};

  constructor(parent: HTMLElement, type: string, className: string, value?: string) {
    super(parent, 'input', 'input');
    this.element.setAttribute('type', type);
    if (value) {
      this.element.setAttribute('value', value);
    }

    this.element.setAttribute(className, '');

    this.element.addEventListener('input', (evt) => this.inputValue(evt));
  }
}

export { Input };
