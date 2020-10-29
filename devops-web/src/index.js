import './set-public-path';
import { loadable } from '@micro/portal';

export { default as Home } from './components/home';

export const Assembly = loadable(() =>
  import(/* webpackChunkName: "assembly" */ './components/assembly')
);

export const Root = loadable(() =>
  import(/* webpackChunkName: "devopsRoot" */ './routes')
);
