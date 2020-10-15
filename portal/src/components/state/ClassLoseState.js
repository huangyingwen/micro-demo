import * as React from 'react';

class ClassLoseState extends React.Component {
  state = {count: 0};

  componentDidMount(){
    this.itv = setInterval(()=>{
      this.setState({count: this.state.count + 1});
    }, 5000)
  }

  componentWillUnmount(){
    if(this.itv){
      clearInterval(this.itv);
      this.itv = null;
    }
  }

  render() {
    return <h1>Class1: {this.state.count}</h1>;
  }
}

export default ClassLoseState;
