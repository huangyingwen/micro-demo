import { Link } from 'react-router-dom';

export default function Root({ children }) {
  return (
    <div>
      <h1>Showcases</h1>
      <div>There are three micro frontends: portal, app and devops.</div>
      <ul>
        <li>
          <Link to="/">Basic</Link>
        </li>
        <li>
          <Link to="/state">State</Link>
        </li>
        <li>
          <Link to="/app">App Basic</Link>
        </li>
        <li>
          <Link to="/app/state">App State</Link>
        </li>
        <li>
          <Link to="/app/integration">App Integration</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
