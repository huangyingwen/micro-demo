import loadable from './components/loadable';

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
    component: loadable(() =>
      import(/* webpackChunkName: "app-configs" */ './components/configs')
    ),
  },
];

export default routes;
