import { useEffect, useRef, useState } from 'react';
import { Spin } from 'antd';

const queue = new Map();

function Error() {
  return <Error>js 加载错误</Error>;
}

const LoaderShareComponent = (module, componentName, url) => () => {
  const [loading, setLoading] = useState(true);
  const compRef = useRef();

  const onload = () => {
    compRef.current = window[module][componentName];
    setLoading(false);
  };
  const onerror = () => {
    compRef.current = Error;
    console.log('Comp=========', Comp, loading);
    setLoading(false);
  };

  useEffect(() => {
    if (queue.has(module)) {
      const events = queue.get(module);
      events.push({ onload, onerror });
      return;
    }

    queue.set(module, [{ onload, onerror }]);

    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onload = () => {
      const events = queue.get(module);
      let evt = events.pop();
      while (evt) {
        evt.onload();
        evt = events.pop();
      }
    };
    script.onerror = () => {
      const events = queue.get(module);
      let evt = events.pop();
      while (evt) {
        evt.onerror();
        evt = events.pop();
      }
    };

    document.getElementsByTagName('head')[0].appendChild(script);
    return () => {
      script = null;
    };
  }, []);

  const Comp = compRef.current;

  return loading ? <Spin /> : <Comp />;
};

export default LoaderShareComponent;