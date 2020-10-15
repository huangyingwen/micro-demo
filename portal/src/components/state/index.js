
import ClassLoseState from './ClassLoseState';
import HooksKeepState from './HooksKeepState';

export default function State() {
  return (
    <div>
      {new Date().toUTCString()}
      <ClassLoseState />
      <HooksKeepState />
    </div>
  );
}
