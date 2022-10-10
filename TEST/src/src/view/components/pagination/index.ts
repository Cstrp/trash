import { Template } from '@/view/template/template';
import { Btn } from '@/view/components/UI/Btn';

class Pagination extends Template {
  upd: (count: number) => void = () => {};

  private count: number = 1;

  private title: Template;

  nextBtn: Btn;

  prevBtn: Btn;

  constructor(element: HTMLElement) {
    super(element, 'div', 'pagination');

    this.title = new Template(this.element, 'h2', 'pagination__title', `Page ${this.count}`);

    this.prevBtn = new Btn(this.element, 'button', 'btn_prev', 'Previous', true);
    this.prevBtn.element.addEventListener('click', () => this.switch('prev'));

    this.nextBtn = new Btn(this.element, 'button', 'btn_next', 'Next', true);
    this.nextBtn.element.addEventListener('click', () => this.switch('next'));
  }

  updNextBtn(page: number, count: number, limit: number): void {
    if (page > count / limit) {
      this.nextBtn.setDisable(true);
    } else {
      this.nextBtn.setDisable(false);
    }
  }

  private updPrevBtn(): void {
    if (this.count === 1) {
      this.prevBtn.setDisable(true);
    } else {
      this.prevBtn.setDisable(false);
    }
  }

  private switch(counter: string): void {
    if (counter === 'prev') {
      if (this.count > 1) this.count--;
    }

    if (counter === 'next') this.count++;

    this.title.element.innerHTML = `Page ${this.count}`;
    this.upd(this.count);
    this.updPrevBtn();
  }
}

export { Pagination };
