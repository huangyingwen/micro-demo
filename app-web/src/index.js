import './set-public-path';
import { patchRoute } from '@micro/portal';
// import routes from './routes';

export { default as HelloWorld } from './components/export/HelloWorld'

export const render = () => {
  import(/* webpackChunkName: "app-routes" */ './routes').then(routes=>{
    setTimeout(()=>{
      patchRoute(routes.default);
    }, 3000)
  })
};
