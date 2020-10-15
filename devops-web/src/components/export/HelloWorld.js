import {HelloWorld as AppHelloWorld} from '@micro/app-web';

export default class HelloWorld extends React.Component{
  render(){
    return (<div>
      hello world from devops!
      <br></br>↓
      <AppHelloWorld></AppHelloWorld>
    </div>)
  }
}