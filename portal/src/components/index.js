import { Switch, Route } from 'react-router-dom';

import loadable from './loadable';
import { Home } from '@micro/devops-web';

const PortalHome = loadable(() => import('./home'));
const Assembly = loadable(() => import('./assembly'));

export default function Index() {
  return (
    <Switch>
      <Route path="/" exact={true}>
        <PortalHome />
      </Route>
      <Route path="/configs" exact={true}>
        <Home />
      </Route>
      <Route path="/assembly" exact={true}>
        <Assembly />
      </Route>
    </Switch>
  );
}
