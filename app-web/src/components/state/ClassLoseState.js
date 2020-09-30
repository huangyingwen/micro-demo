import * as React from 'react';

class ClassLoseState extends React.Component {
  state = {count: 0};

  componentDidMount(){
    setTimeout(()=>{
      this.itv = setInterval(()=>{
        this.setState({count: this.state.count + 1});
      }, 5000)
    }, 2000)
  }

  componentWillUnmount(){
    if(this.itv){
      clearInterval(this.itv);
      this.itv = null;
    }
  }

  render() {
    return <h1>Class: {this.state.count}</h1>;
  }
}

export default ClassLoseState;
