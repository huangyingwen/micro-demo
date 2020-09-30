
import Simple from './Simple';
import AsyncRoutes from './AsyncRoutes';
import AsyncMfeLoad from './AsyncMfeLoad';

export default function AppBasic() {
  return (
    <div>
      App Integration {new Date().toUTCString()}
      <Simple />
      <AsyncRoutes />
      <AsyncMfeLoad />
    </div>
  );
}
