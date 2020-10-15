import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Root from './components/root';
import loadable from './components/loadable';
import routes from './routes'

export { loadable };

export { default as HelloWorld } from './components/export/HelloWorld'


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

window.ReactRefresh = require('react-refresh/runtime');