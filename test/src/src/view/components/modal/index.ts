import { IDataCar } from '@/data/interfaces/IData';
import { Template } from '@/view/template/template';

class Modal extends Template {
  constructor(parent: HTMLElement, data: IDataCar) {
    super(parent, 'div', 'modal');

    const title = new Template(this.element, 'h2', 'modal__title');

    title.element.style.color = `${data.color}`;
    title.element.innerHTML = `
    Winner: ${data.name} - ${data.speed} seconds
    `;
  }
}

export { Modal };
