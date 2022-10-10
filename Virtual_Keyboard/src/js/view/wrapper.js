import Create from '../utils/create';

class Wrapper extends Create {
  constructor() {
    super(document.body, 'div', 'wrapper', null, null);
    this.content = new Create(this.element, 'div', 'content', null, null);
    this.container = new Create(
      this.content.element,
      'div',
      'container',
      null,
      null
    );
    this.canvas = new Create(
      this.container.element,
      'canvas',
      'background',
      null,
      null
    );
    this.title = new Create(
      this.container.element,
      'h1',
      'title glitch',
      'Virtual_Keyboard',
      null
    );
    this.output = new Create(
      this.container.element,
      'textarea',
      'output',
      null,
      {
        placeholder: 'Type your text here...',
        spellcheck: false,
        readonly: true,
      }
    );
  }
}

export default Wrapper;
