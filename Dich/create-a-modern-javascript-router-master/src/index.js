/* eslint-disable no-console */
/* eslint-disable no-alert */

import Router from './Router';

const router = new Router({
  mode: 'hash',
  root: '/'
});

router
  .add(/about/, () => {
    console.log('welcome in about page');
  })
  .add(/products\/(.*)\/specification\/(.*)/, (id, specification) => {
    console.log(`products: ${id} specification: ${specification}`);
  })
  .add('', () => {
    console.log('welcome in catch all controller');
  });
