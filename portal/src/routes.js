import Basic from './components/basic';
import State from './components/state';

const routes = [
  {
    path: '/',
    exact: true,
    component: Basic
  },
  {
    path: '/state',
    exact: true,
    component: State
  },
];

export default routes;
