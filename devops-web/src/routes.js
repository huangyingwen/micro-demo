import { loadable, Assembly } from '@micro/portal';

const routes = [
  {
    path: '/devops-home',
    exact: true,
    component: loadable(() => import('./components/home')),
  },
  {
    path: '/devops-configs',
    exact: true,
    component: loadable(() => import('./components/configs')),
  },
  {
    path: '/devops-assembly',
    exact: true,
    component: Assembly,
  },
];

export default routes;
