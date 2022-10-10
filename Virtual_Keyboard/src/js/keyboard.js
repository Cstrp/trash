import Create from './utils/create';
import Wrapper from './view/wrapper';
import language from './language/exp';

const rowsOrder = [
  [
    'Backquote',
    'Digit1',
    'Digit2',
    'Digit3',
    'Digit4',
    'Digit5',
    'Digit6',
    'Digit7',
    'Digit8',
    'Digit9',
    'Digit0',
    'Minus',
    'Equal',
    'Backspace',
  ],
  [
    'Tab',
    'KeyQ',
    'KeyW',
    'KeyE',
    'KeyR',
    'KeyT',
    'KeyY',
    'KeyU',
    'KeyI',
    'KeyO',
    'KeyP',
    'BracketLeft',
    'BracketRight',
    'Backslash',
  ],
  [
    'CapsLock',
    'KeyA',
    'KeyS',
    'KeyD',
    'KeyF',
    'KeyG',
    'KeyH',
    'KeyJ',
    'KeyK',
    'KeyL',
    'Semicolon',
    'Quote',
    'Enter',
  ],
  [
    'ShiftLeft',
    'KeyZ',
    'KeyX',
    'KeyC',
    'KeyV',
    'KeyB',
    'KeyN',
    'KeyM',
    'Comma',
    'Period',
    'Slash',
    'ShiftRight',
  ],
  [
    'ControlLeft',
    'AltLeft',
    'Space',
    'AltRight',
    'ControlRight',
    'ArrowLeft',
    'ArrowDown',
    'ArrowRight',
    'ArrowUp',
  ],
];

export default class Keyboard extends Wrapper {
  keysOrder;

  constructor() {
    super();
  }

  engKeyboardLayout() {
    const { eng } = language;
    const keys = Object.entries(eng);
    this.keyboard = new Create(
      this.container.element,
      'div',
      'keyboard',
      '',
      ''
    );
    const keysOrder = rowsOrder.map(row =>
      row.map(key => keys.find(keyItem => keyItem[1].code === key))
    );
    keysOrder.forEach(row => {
      const keyboardRow = new Create(
        this.keyboard.element,
        'div',
        'keyboard-row',
        '',
        ''
      );
      row.forEach(key => {
        const keyboardKey = new Create(
          keyboardRow.element,
          'div',
          'keyboard-key',
          key[1].small,
          {
            'data-key': key[1].code,
          }
        );
        if (key[1].code === 'Space') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('space');
          keyboardKey.element.innerHTML = '&nbsp;';
          keyboardKey.element.addEventListener('click', e => {
            e.preventDefault();
            this.output.element.value += ' ';
            this.output.element.focus();
          });
        } else if (key[1].code === 'Enter') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('enter');
          keyboardKey.element.addEventListener('click', e => {
            e.preventDefault();
            this.output.element.value += '\n';
            this.output.element.focus();
          });
        } else if (key[1].code === 'Backspace') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('backspace');
          keyboardKey.element.addEventListener('click', e => {
            e.preventDefault();
            this.output.element.value = this.output.element.value.slice(
              0,
              this.output.element.value.length - 1
            );
            this.output.element.focus();
          });
        } else if (key[1].code === 'CapsLock') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('capslock');
          keyboardKey.element.addEventListener('click', e => {
            e.preventDefault();
            this.output.element.value = this.output.element.value.toUpperCase();
            this.output.element.focus();
          });
        } else if (key[1].code === 'ShiftLeft') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('shiftLeft');
          keyboardKey.element.innerHTML = 'Shift';
        } else if (key[1].code === 'ShiftRight') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('shiftRight');
          keyboardKey.element.innerHTML = 'Shift';
        } else if (key[1].code === 'ControlLeft') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('ctrlLeft');
          keyboardKey.element.innerHTML = 'Ctrl';
        } else if (key[1].code === 'ControlRight') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('ctrlRight');
          keyboardKey.element.innerHTML = 'Ctrl';
        } else if (key[1].code === 'AltLeft') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('altLeft');
          keyboardKey.element.innerHTML = 'Alt';
        } else if (key[1].code === 'AltRight') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('altRight');
          keyboardKey.element.innerHTML = 'Alt';
        } else if (key[1].code === 'ArrowLeft') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('left');
          keyboardKey.element.innerHTML = '\t&#8592;';
          keyboardKey.element.addEventListener('click', e => {
            e.preventDefault();
            this.output.element.value += '→';
          });
        } else if (key[1].code === 'ArrowRight') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('right');
          keyboardKey.element.innerHTML = '&#8594;';
          keyboardKey.element.addEventListener('click', e => {
            e.preventDefault();
            this.output.element.value += '←';
          });
        } else if (key[1].code === 'ArrowUp') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('up');
          keyboardKey.element.innerHTML = '&#8593;';
          keyboardKey.element.addEventListener('click', e => {
            e.preventDefault();
            this.output.element.value += '↑';
          });
        } else if (key[1].code === 'ArrowDown') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('down');
          keyboardKey.element.innerHTML = '\t&#8595;';
          keyboardKey.element.addEventListener('click', e => {
            e.preventDefault();
            this.output.element.value += '↓';
          });
        } else if (key[1].code === 'Tab') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('tab');
          keyboardKey.element.addEventListener('click', e => {
            e.preventDefault();
            this.output.element.value += '\t';
            this.output.element.focus();
          });
        }
      });
    });
  }

  evtHandlerOnKey() {
    const keys = this.keyboard.element.querySelectorAll('.keyboard-key');
    keys.forEach(key => {
      key.addEventListener('click', e => {
        e.preventDefault();
        this.output.element.value += key.innerHTML;
        this.output.element.focus();
      });
    });
  }

  eventMouse() {
    const keys = this.keyboard.element.querySelectorAll('.keyboard-key');
    keys.forEach(key => {
      key.addEventListener('mousedown', e => {
        e.preventDefault();
        key.classList.add('active');
      });
      key.addEventListener('mouseup', e => {
        e.preventDefault();
        key.classList.remove('active');
      });
    });
  }

  eventKeysPress() {
    function keyPressed(e) {
      const key = document.querySelector(`.keyboard-key[data-key="${e.code}"]`);
      // console.log(key)
      if (key) {
        key.classList.add('active');
        this.output.element.value += key.innerHTML;
        this.output.element.focus();
      }
    }

    function keyReleased(e) {
      const key = document.querySelector(`.keyboard-key[data-key="${e.code}"]`);
      if (key) {
        key.classList.remove('active');
      }
      this.output.element.focus();
    }

    document.addEventListener('keydown', keyPressed.bind(this));
    document.addEventListener('keyup', keyReleased.bind(this));
  }

  specialKeys() {
    function backspace(e) {
      if (e.code === 'Backspace') {
        this.output.element.value = this.output.element.value.slice(
          0,

          this.output.element.value.length - 1
        );
      }
    }

    function tab(e) {
      if (e.code === 'Tab') {
        e.preventDefault();
        this.output.element.value += '\t';
        this.output.element.focus();
      }
    }

    function enter(e) {
      if (e.code === 'Enter') {
        e.preventDefault();
        this.output.element.value += '\n';
        this.output.element.focus();
      }
    }

    function shift(e) {
      if (e.shiftKey === true) {
        e.preventDefault();
        this.output.element.value = this.output.element.selectionStart
          ? this.output.element.value.toUpperCase()
          : this.output.element.value.toLowerCase();
        this.output.element.focus();
      }
      if (e.shiftKey === false) {
        e.preventDefault();
        this.output.element.value = this.output.element.value.selectionEnd
          ? this.output.element.value.toUpperCase()
          : this.output.element.value.toLowerCase();
        this.output.element.focus();
      }
    }

    function space(evt) {
      if (evt.code === 'Space') {
        evt.preventDefault();
        this.output.element.value += ' ';
      }
    }

    function arrows(e) {
      if (e.code === 'ArrowLeft') {
        e.preventDefault();
        this.output.element.value += '←';
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        this.output.element.value += '→';
      } else if (e.code === 'ArrowUp') {
        e.preventDefault();
        this.output.element.value += '↑';
      } else if (e.code === 'ArrowDown') {
        e.preventDefault();
        this.output.element.value += '↓';
      }
    }

    document.addEventListener('keydown', backspace.bind(this));
    document.addEventListener('keydown', tab.bind(this));
    document.addEventListener('keydown', enter.bind(this));
    document.addEventListener('keydown', shift.bind(this));
    document.addEventListener('keyup', shift.bind(this));
    document.addEventListener('keydown', arrows.bind(this));
    document.addEventListener('keydown', space.bind(this));
  }

  rusKeyboardLayout() {
    const { rus } = language;
    const keys = Object.entries(rus);
    rowsOrder.map(row =>
      row.map(key => keys.find(keyItem => keyItem[1].code === key))
    );
    this.keysOrder.forEach(row => {
      const keyboardRow = new Create(
        this.keyboard.element,
        'div',
        'keyboard-row',
        '',
        ''
      );
      row.forEach(key => {
        const keyboardKey = new Create(
          keyboardRow.element,
          'div',
          'keyboard-key',
          key[1].small,
          {
            'data-key': key[1].code,
          }
        );
        if (key[1].code === 'Space') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('space');
          keyboardKey.element.innerHTML = '&nbsp;';
          keyboardKey.element.addEventListener('click', e => {
            e.preventDefault();
            this.output.element.value += ' ';
            this.output.element.focus();
          });
        } else if (key[1].code === 'Enter') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('enter');
          keyboardKey.element.addEventListener('click', e => {
            e.preventDefault();
            this.output.element.value += '\n';
            this.output.element.focus();
          });
        } else if (key[1].code === 'Backspace') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('backspace');
          keyboardKey.element.addEventListener('click', e => {
            e.preventDefault();
            this.output.element.value = this.output.element.value.slice(
              0,
              this.output.element.value.length - 1
            );
            this.output.element.focus();
          });
        } else if (key[1].code === 'CapsLock') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('capslock');
          keyboardKey.element.addEventListener('click', e => {
            e.preventDefault();
            this.output.element.value = this.output.element.value.toUpperCase();
            this.output.element.focus();
          });
        } else if (key[1].code === 'ShiftLeft') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('shiftLeft');
          keyboardKey.element.innerHTML = 'Shift';
        } else if (key[1].code === 'ShiftRight') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('shiftRight');
          keyboardKey.element.innerHTML = 'Shift';
        } else if (key[1].code === 'ControlLeft') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('ctrlLeft');
          keyboardKey.element.innerHTML = 'Ctrl';
        } else if (key[1].code === 'ControlRight') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('ctrlRight');
          keyboardKey.element.innerHTML = 'Ctrl';
        } else if (key[1].code === 'AltLeft') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('altLeft');
          keyboardKey.element.innerHTML = 'Alt';
        } else if (key[1].code === 'AltRight') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('altRight');
          keyboardKey.element.innerHTML = 'Alt';
        } else if (key[1].code === 'ArrowLeft') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('left');
          keyboardKey.element.innerHTML = '\t&#8592;';
          keyboardKey.element.addEventListener('click', e => {
            e.preventDefault();
            this.output.element.value += '→';
          });
        } else if (key[1].code === 'ArrowRight') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('right');
          keyboardKey.element.innerHTML = '&#8594;';
          keyboardKey.element.addEventListener('click', e => {
            e.preventDefault();
            this.output.element.value += '←';
            console.log(value);
          });
        } else if (key[1].code === 'ArrowUp') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('up');
          keyboardKey.element.innerHTML = '&#8593;';
          keyboardKey.element.addEventListener('click', e => {
            e.preventDefault();
            this.output.element.value += '↑';
          });
        } else if (key[1].code === 'ArrowDown') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('down');
          keyboardKey.element.innerHTML = '\t&#8595;';
          keyboardKey.element.addEventListener('click', e => {
            e.preventDefault();
            this.output.element.value += '↓';
          });
        } else if (key[1].code === 'Tab') {
          keyboardKey.element.classList.remove('keyboard-key');
          keyboardKey.element.classList.add('tab');
          keyboardKey.element.addEventListener('click', e => {
            e.preventDefault();
            this.output.element.value += '\t';
            this.output.element.focus();
          });
        }
      });
    });
  }

  render() {
    this.engKeyboardLayout();
    this.evtHandlerOnKey();
    this.eventMouse();
    this.eventKeysPress();
    this.specialKeys();
  }
}
