import {useState, useEffect} from 'react';

function HooksKeepState() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    let itv = setInterval(()=>setCount(count + 1), 4000);
    return ()=> clearInterval(itv);
  })
  return <h1>Hooks: {count}</h1>;
}

export default HooksKeepState;
