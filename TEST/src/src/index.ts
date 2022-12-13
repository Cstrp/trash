import './view/styles/common.scss';
import App from '@/view/page/app';

window.addEventListener('DOMContentLoaded', () => {
  const root = document.body;

  root.classList.add('root');
  const app = new App(root);

  app.render();
});
