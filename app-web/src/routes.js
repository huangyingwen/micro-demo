import { loadable, Assembly } from '@micro/portal';
import { Home } from '@micro/devops-web';

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
    component: Home,
    // component: loadable(() =>
    //   import(/* webpackChunkName: "app-configs" */ './components/configs')
    // ),
  },
  {
    path: '/app-assembly',
    exact: true,
    component: Assembly,
  },
];

export default routes;
