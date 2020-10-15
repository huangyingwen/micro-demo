
import * as React from 'react';
import { loadable } from '@micro/portal';
import ClassDefault from './ClassDefault';
import { ClassNamed } from './ClassNamed';
import FunctionDefault from './FunctionDefault';
import { FunctionNamed } from './FunctionNamed';
import AnonyFunction from './AnonyFunction';
import MemoComponent from './MemoComponent';

const LazyComponent = React.lazy(() => import(/* webpackChunkName: "app-lazy" */'./LazyComponent'));
const AppLoadableComponent = loadable(() => import(/* webpackChunkName: "app-loadable" */'./LoadableComponent'))

export default function AppBasic() {
  return (
    <div>
      App {new Date().toUTCString()}
      <ClassDefault />
      <ClassNamed />
      <FunctionDefault />
      <FunctionNamed />
      <AnonyFunction />
      <MemoComponent />
      <React.Suspense fallback={<h1>Loading</h1>}>
        <LazyComponent />
      </React.Suspense>
      <AppLoadableComponent />
    </div>
  );
}
