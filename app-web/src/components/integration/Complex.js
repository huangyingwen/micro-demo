// import {HelloWorld} from '@micro/devops-web';

const HelloWorld = React.lazy(()=>loadMicroFrontend('@micro/devops-web').then((exp)=>{
  console.debug(exp);
  return {default: exp.HelloWorld}
}));

/**
 * 异步加载微前端。为什么？由于无法确定依赖的微前端是否已经加载了，所以必须通过异步函数来查询并下载。
 * 也就说说本函数还需要实现下载指定微前端的能力。
 * 以下只是示例。
 * @param {string} id 
 */
async function loadMicroFrontend(id){
  if(window[id]) return window[id];
  return new Promise((resolve)=>{
    let itv = setInterval(()=>{
      if(window[id]){
        clearInterval(itv);
        return resolve(window[id]);
      }
    }, 1000)
  })
}

export default function ComplexIntegration(){
  return (<div>
    <h1>Complex Integration:</h1>
    <React.Suspense fallback={'loading'}>
      <HelloWorld></HelloWorld>
    </React.Suspense>
  </div>)
}