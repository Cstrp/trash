import { Template } from '@/view/template/template';

class Error extends Template {
  constructor() {
    super(null, 'div', 'error-wrapper');
    this.element.innerHTML = 'Error';
  }
}

export default Error;
