
import * as React from 'react';
import ClassDefault from './ClassDefault';
import { ClassNamed } from './ClassNamed';
import FunctionDefault from './FunctionDefault';
import { FunctionNamed } from './FunctionNamed';
import AnonyFunction from './AnonyFunction';
import MemoComponent from './MemoComponent';
import loadable from '../loadable';

const LazyComponent = React.lazy(() => import(/* webpackChunkName: "lazy" */'./LazyComponent'));
const LoadableComponent = loadable(() => import(/* webpackChunkName: "loadable" */'./LoadableComponent'))

export default function Basic() {
  return (
    <div>
      {new Date().toUTCString()}
      <ClassDefault />
      <ClassNamed />
      <FunctionDefault />
      <FunctionNamed />
      <AnonyFunction />
      <MemoComponent />
      <React.Suspense fallback={<h1>Loading</h1>}>
        <LazyComponent />
      </React.Suspense>
      <LoadableComponent />
    </div>
  );
}
