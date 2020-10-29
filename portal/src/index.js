import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Root from './root';
import loadable from './components/loadable';

export { default as sharedManage } from './lib/sharedManage';

export { default as loadable } from './components/loadable';

export const Async = loadable(() =>
  import(/* webpackChunkName: "async" */ './components/async')
);

export const Assembly = loadable(() =>
  import(/* webpackChunkName: "assembly" */ './components/assembly')
);

const PortalRoot = loadable(() =>
  import(/* webpackChunkName: "portalRoot" */ './components/index')
);

export const render = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Route path="/">
        {/* kick it all off with the root route */}
        <Root>
          <PortalRoot />
        </Root>
      </Route>
    </BrowserRouter>,
    document.getElementById('root')
  );
};
