import { ITemplate, parentElement, values } from '@/data/interfaces/ITemplate';

class Template implements ITemplate {
  element: HTMLElement;

  static element: HTMLElement;

  constructor(
    parent: parentElement,
    tagName: string,
    className?: string,
    value?: values,
    attributes?: Record<string, {}>,
  ) {
    this.element = document.createElement(tagName);

    parent?.appendChild(this.element);

    if (className) {
      this.element.classList.add(...(className?.split(' ') ?? []));
    }

    if (typeof value === 'string') {
      this.element.innerHTML = value;
    }

    if (attributes) {
      Object.keys(attributes).forEach(([key, value]) => {
        this.element.setAttribute(<string>key, <string>value);
      });
    }
  }

  removeElement(): void {
    this.element.remove();
  }

  disabled(state: boolean): void {
    this.element.toggleAttribute('disabled', state);
  }

  render() {
    return this.element;
  }

  attributes!: Record<string, unknown>;

  className!: string | null;

  parent!: parentElement;

  tagName!: string;

  value!: values;
}

export { Template };
