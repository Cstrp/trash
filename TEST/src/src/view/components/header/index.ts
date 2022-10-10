import { Template } from '@/view/template/template';

export class Header extends Template {
  private navItems: Template[] = [];

  private readonly garageLink: Template;

  private readonly winnersLink: Template;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'header');

    this.garageLink = new Template(this.element, 'a', 'nav__item', 'Garage');

    this.winnersLink = new Template(this.element, 'a', 'nav__item', 'Winners');

    this.garageLink.element.setAttribute('href', '#/');
    this.winnersLink.element.setAttribute('href', '#/winners');

    this.navItems = [this.garageLink, this.winnersLink];

    window.addEventListener('hashchange', () => this.updateActive(this.navItems));
    window.addEventListener('load', () => this.updateActive(this.navItems));
  }

  private updateActive(navItems: Template[]): void {
    this.navItems = navItems.map((item) => {
      item.element.classList.remove('nav__item--active');
      if (item.element.getAttribute('href') === window.location.hash) {
        item.element.classList.add('nav__item--active');
      }

      return item;
    });
  }
}
