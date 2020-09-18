import { Assembly as App } from '@micro/app-web';
import { Assembly as Devops } from '@micro/devops-web';

export default function Assembly({ route }) {
  return (
    <div>
      <h1>{route.path}</h1>
      <h2>portal assemblyss</h2>
      <App />
      <Devops />
    </div>
  );
}
