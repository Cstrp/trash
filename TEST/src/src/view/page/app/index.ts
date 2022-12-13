import Router from '@/data/Router';
import { Header } from '@/view/components/header';
import { Template } from '@/view/template/template';

class App {
  private main: Template;

  private router: Router;

  constructor(private element: HTMLElement) {
    new Header(this.element);

    this.main = new Template(this.element, 'main', 'main');

    this.router = new Router(this.element);
  }

  render() {
    this.router.render();
  }
}

export default App;
