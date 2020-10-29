import { Assembly as App } from '@micro/app-web';
import { Assembly as Devops } from '@micro/devops-web';
import { useRouteMatch } from 'react-router-dom';

export default function Assembly({ route }) {
  let { url } = useRouteMatch();
  return (
    <div>
      <h1>{url}</h1>
      <h2>portal assemblyss</h2>
      <App />
      <Devops />
    </div>
  );
}
