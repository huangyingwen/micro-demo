import './set-public-path';
import { patchRoute, loadable } from '@micro/portal';
import routes from './routes';

export { default as HelloWorld } from './components/export/HelloWorld'

export const render = () => {
  patchRoute(routes);
};
