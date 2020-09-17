import loadable from './components/loadable';
import { Home } from '@micro/devops-web';

const routes = [
  {
    path: '/',
    exact: true,
    component: loadable(() =>
      import(/* webpackChunkName: "app-home" */ './components/home')
    ),
  },
  {
    path: '/configs',
    exact: true,
    component: Home,
  },
];

export default routes;
