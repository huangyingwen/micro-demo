import './set-public-path';
import { patchRoute } from '@micro/portal';

export const render = () => {
  import(/* webpackChunkName: "routes" */ './routes').then(
    ({ default: routes }) => {
      patchRoute(routes);
    }
  );
};
