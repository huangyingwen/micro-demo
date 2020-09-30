/**
 * 静态引用其他微前端 export 的插件，务必保证本微前端的 routes 是异步加载。
 * 否则可能会导致在本组件执行时，@micro/devops-web 还没有加载，直接报
 * undefined 异常。
 */
import { HelloWorld } from '@micro/devops-web';

export default function AsyncRoutes(){
  return (<div>
    <h1>Async routes with static import:</h1>
    <HelloWorld></HelloWorld>
  </div>)
}