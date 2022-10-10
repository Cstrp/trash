import { AppPage } from '@/data/Enums/page';
import { Template } from '@/view/template/template';
import Garage from '@/view/page/garage';
import Winners from '@/view/page/winners';

interface IRouter {
  path: string;
  component: () => void;
}

class Router {
  private readonly routes: IRouter[];

  private defaultPath: IRouter;

  garage!: Template;

  winners!: Template;

  constructor(private element: HTMLElement) {
    this.garage = new Garage(this.element);

    this.routes = [
      {
        path: AppPage.garage,
        component: () => {
          this.element.append(this.garage.element);
        },
      },
      {
        path: AppPage.winners,
        component: () => {
          this.winners = new Winners(this.element);
          this.element.append(this.winners.element);
        },
      },
    ];

    this.defaultPath = {
      path: AppPage.garage,
      component: () => {
        this.element.append(this.garage.element);
      },
    };
  }

  updRoute(): void {
    this.element.innerHTML = '';
    const hash = window.location.hash.replace('#', '/').slice(1);
    const route = this.routes.find((item) => item.path === hash);

    if (route) {
      route.component();
    }
  }

  render(): void {
    if (window.location.hash === '') {
      window.location.hash = this.defaultPath.path;
    }

    window.onpopstate = () => this.updRoute();
    this.updRoute();
  }
}

export default Router;
