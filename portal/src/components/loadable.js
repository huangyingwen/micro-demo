import Loadable from 'react-loadable';
import { Spin } from 'antd';

export default function loadable(loader) {
  return Loadable({
    loader,
    loading: (props) => {
      if (props.error) {
        console.error(props.error);
      }
      return <Spin />;
    },
  });
}
