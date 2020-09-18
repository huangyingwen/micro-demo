import loadable from './components/loadable';
import { Home } from '@micro/devops-web';

const routes = [
  {
    path: '/',
    exact: true,
    component: loadable(() => import('./components/home')),
  },
  {
    path: '/configs',
    exact: true,
    component: Home,
  },
  {
    path: '/assembly',
    exact: true,
    component: loadable(() => import('./components/assembly')),
  },
];

export default routes;
