import './set-public-path';
import { patchRoute } from '@micro/portal';

export { default as HelloWorld } from './components/export/HelloWorld'

export const render = () => {
  import(/* webpackChunkName: "routes" */ './routes').then(
    ({ default: routes }) => {
      patchRoute(routes);
    }
  );
};
