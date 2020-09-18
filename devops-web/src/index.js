import './set-public-path';
import { patchRoute } from '@micro/portal';

export { default as Home } from './components/home';

export const render = () => {
  import(/* webpackChunkName: "routes" */ './routes').then(
    ({ default: routes }) => {
      patchRoute(routes);
    }
  );
};
