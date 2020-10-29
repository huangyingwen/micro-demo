import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import loaderShareComponent from './lib/loaderJs';

const modules = [
  {
    id: '@micro/app-web',
    basePath: '/app',
    url: 'http://localhost:9011/index.js',
  },
  {
    id: '@micro/devops-web',
    basePath: '/devops',
    url: 'http://localhost:9012/index.js',
  },
];

export default function Root({ children }) {
  const location = useLocation();
  const [moduleComps, setModuleComps] = useState({});
  const moduleRef = useRef();
  useEffect(() => {
    for (const module of modules) {
      if (location.pathname.startsWith(module.basePath)) {
        if (moduleComps[module.id]) {
          moduleRef.current = moduleComps[module.id];
        } else {
          moduleRef.current = loaderShareComponent(
            module.id,
            'Root',
            module.url
          );

          setModuleComps({ [module.id]: moduleRef.current });
        }
        return;
      }
    }
  }, [location]);

  const Comp = moduleRef.current;
  return (
    <div>
      <h1>Root</h1>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/configs">configs</Link>
        </li>
        <li>
          <Link to="/assembly">assembly</Link>
        </li>
        <li>
          <Link to="/app-home">app-home</Link>
        </li>
        <li>
          <Link to="/app-configs">app-configs</Link>
        </li>
        <li>
          <Link to="/app-assembly">assembly</Link>
        </li>
        <li>
          <Link to="/devops-home">devops-home</Link>
        </li>
        <li>
          <Link to="/devops-configs">devops-configs</Link>
        </li>
        <li>
          <Link to="/devops-assembly">assembly</Link>
        </li>
      </ul>
      {children}
      {Comp && <Comp />}
    </div>
  );
}
