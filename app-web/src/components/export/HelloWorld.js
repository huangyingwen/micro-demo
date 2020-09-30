import {HelloWorld as PortalHelloWorld } from '@micro/portal';

export default class HelloWorld extends React.Component{
  render(){
    return (<div>
      hello world from app!
      <br></br>↓
      <PortalHelloWorld></PortalHelloWorld>
      </div>)
  }
}