import { loadable, Assembly } from '@micro/portal';
import { Home } from '@micro/devops-web';
import { Switch, Route } from 'react-router-dom';

const AppHome = loadable(() =>
  import(/* webpackChunkName: "app-home" */ './components/home')
);

export default function Root() {
  return (
    <Switch>
      <Route path="/app-home" exact={true}>
        <AppHome />
      </Route>
      <Route path="/app-configs" exact={true}>
        <Home />
      </Route>
      <Route path="/app-assembly" exact={true}>
        <Assembly />
      </Route>
    </Switch>
  );
}
