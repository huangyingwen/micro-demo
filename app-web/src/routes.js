import  Basic from './components/basic';
import  State from './components/state';
import  Integration from './components/integration';

const routes = [
  {
    path: '/app',
    exact: true,
    component: Basic
  },
  {
    path: '/app/state',
    exact: true,
    component: State,
  },
  {
    path: '/app/integration',
    exact: true,
    component: Integration,
  },
];

export default routes;
