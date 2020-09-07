import { loadable } from '@micro/portal';

const routes = [
  {
    path: '/devops-home',
    exact: true,
    component: loadable(() =>
      import(/* webpackChunkName: "devops-home" */ './components/home')
    ),
  },
  {
    path: '/devops-configs',
    exact: true,
    component: loadable(() =>
      import(/* webpackChunkName: "devops-configs" */ './components/configs')
    ),
  },
];

export default routes;
