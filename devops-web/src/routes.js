import { loadable, Assembly } from '@micro/portal';
import { Switch, Route } from 'react-router-dom';

const DevopsHome = loadable(() => import('./components/home'));
const DevopsConfigs = loadable(() => import('./components/configs'));

export default function Root() {
  return (
    <Switch>
      <Route path="/devops-home" exact={true}>
        <DevopsHome />
      </Route>
      <Route path="/devops-configs" exact={true}>
        <DevopsConfigs />
      </Route>
      <Route path="/devops-assembly" exact={true}>
        <Assembly />
      </Route>
    </Switch>
  );
}
