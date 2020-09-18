import './set-public-path';
import { patchRoute } from '@micro/portal';

import routes from './routes';

export const render = () => {
  patchRoute(routes);
};
