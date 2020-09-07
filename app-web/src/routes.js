import { loadable } from '@micro/portal';

const routes = [
  {
    path: '/app-home',
    exact: true,
    component: loadable(() =>
      import(/* webpackChunkName: "app-home" */ './components/home')
    ),
  },
  {
    path: '/app-configs',
    exact: true,
    component: loadable(() =>
      import(/* webpackChunkName: "app-configs" */ './components/configs')
    ),
  },
];

export default routes;
