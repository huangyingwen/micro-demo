import './set-public-path';
import { loadable } from '@micro/portal';

export const Assembly = loadable(() =>
  import(/* webpackChunkName: "assembly" */ './components/assembly')
);

export const Root = loadable(() =>
  import(/* webpackChunkName: "appRoot" */ './routes')
);
