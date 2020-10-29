import loaderShareComponent from './loaderJs';
const modules = {
  '@micro/app-web': 'http://localhost:9011/index.js',
  '@micro/devops-web': 'http://localhost:9012/index.js',
};

const sharedManage = new Proxy(
  {},
  {
    get: (obj, module) => {
      if (window[module]) return window[module];
      if (modules[module]) {
        return new Proxy(
          {},
          {
            get: (obj, name) => {
              return loaderShareComponent(module, name, modules[module]);
            },
          }
        );
      }
    },
  }
);

export default sharedManage;
