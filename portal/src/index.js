export * as React from 'react';
import ReactDOM from 'react-dom';
import * as ReactRouterDOM from 'react-router-dom';
window.ReactRouter = ReactRouterDOM;
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
export * as ReactRouterConfig from 'react-router-config';
export * as antd from 'antd';
import moment from 'moment';
import Root from './components/root';
import loadable from './components/loadable';
import routes from './routes';

export { loadable };

export { default as HelloWorld } from './components/export/HelloWorld';

// export const Async = loadable(() =>
//   import(/* webpackChunkName: "async" */ './components/async')
// );

// export const Assembly = loadable(() =>
//   import(/* webpackChunkName: "portal-assembly" */ './components/assembly')
// );

export const patchRoute = (route) => {
  if (Array.isArray(route)) {
    routes.push(...route);
  } else {
    routes.push(route);
  }
  render();
};

export const render = () => {
  ReactDOM.render(
    <BrowserRouter>
      {/* kick it all off with the root route */}
      <Root>{renderRoutes(routes)}</Root>
    </BrowserRouter>,
    document.getElementById('root')
  );
};

export { ReactDOM, moment, ReactRouterDOM };

window.ReactRefresh = require('react-refresh/runtime');
