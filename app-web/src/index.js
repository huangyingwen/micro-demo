import './set-public-path';
import { patchRoute, loadable } from '@micro/portal';

export const Assembly = loadable(() =>
  import(/* webpackChunkName: "assembly" */ './components/assembly')
);

export const render = () => {
  import(/* webpackChunkName: "routes" */ './routes').then(
    ({ default: routes }) => {
      patchRoute(routes);
    }
  );
};
