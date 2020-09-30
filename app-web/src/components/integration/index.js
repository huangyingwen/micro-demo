
import Simple from './Simple';
import Complex from './Complex';

export default function AppBasic() {
  return (
    <div>
      App Integration {new Date().toUTCString()}
      <Simple />
      <Complex />
    </div>
  );
}
