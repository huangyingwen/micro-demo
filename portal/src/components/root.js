import { Link } from 'react-router-dom';

export default function Root({ children }) {
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
          <Link to="/app-home">app-home</Link>
        </li>
        <li>
          <Link to="/app-configs">app-configs</Link>
        </li>
        <li>
          <Link to="/devops-home">devops-home</Link>
        </li>
        <li>
          <Link to="/devops-configs">devops-configs</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
