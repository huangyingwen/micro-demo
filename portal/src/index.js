import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Root from './components/root';
import loadable from './components/loadable';

export { default as loadable } from './components/loadable';

export const Async = loadable(() =>
  import(/* webpackChunkName: "async" */ './components/async')
);

export const patchRoute = (route) => {
  if (Array.isArray(route)) {
    routes.push(...route);
  } else {
    routes.push(route);
  }
};

export const render = () => {
  import(/* webpackChunkName: "routes" */ './routes').then(
    ({ default: routes }) => {
      ReactDOM.render(
        <BrowserRouter>
          {/* kick it all off with the root route */}
          <Root>{renderRoutes(routes)}</Root>
        </BrowserRouter>,
        document.getElementById('root')
      );
    }
  );
};
