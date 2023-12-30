import './App.css';
import React, { useState } from 'react'

function App() {
  function countInit1(){
    console.log("run function count 4");
    return 4;
  }

  function countInit2(){
    console.log("run function count 5");
    return 5;
  }

  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(2);
  const [count3, setCount3] = useState(()=>{ console.log("run function count3"); return 3;});
  const [count4, setCount4] = useState(countInit1());
  const [count5, setCount5] = useState(()=>countInit2());
  const [state, setState] = useState({count: 6, theme: 'red'});
  const count6 = state.count;
  const theme1 = state.theme;
  const [count7, setCount7] = useState(()=>{return 7;});
  const [theme2, setTheme2] = useState('red');

  function decreCount1(){
    setCount1(count1 - 1)
    setCount1(count1 - 1)
  }

  function increCount1(){
    setCount1(count1 + 1)
    setCount1(count1 + 1)
  }

  function decreCount2(){
    setCount2((prevCount)=>prevCount -1)
    setCount2((prevCount)=>prevCount -1)
  }

  function increCount2(){
    setCount2((prevCount)=>prevCount +1)
    setCount2((prevCount)=>prevCount +1)
  }

  function decreCount3(){
    setCount3((prevCount)=>prevCount -1)
    setCount3((prevCount)=>prevCount -1)
    setCount3((prevCount)=>prevCount -1)
  }

  function increCount3(){
    setCount3((prevCount)=>prevCount +1)
    setCount3((prevCount)=>prevCount +1)
    setCount3((prevCount)=>prevCount +1)
  }

  function decreCount4(){
    setCount4((prevCount)=>prevCount -1)
    setCount4((prevCount)=>prevCount -1)
    setCount4((prevCount)=>prevCount -1)
    setCount4((prevCount)=>prevCount -1)
  }

  function increCount4(){
    setCount4((prevCount)=>prevCount +1)
    setCount4((prevCount)=>prevCount +1)
    setCount4((prevCount)=>prevCount +1)
    setCount4((prevCount)=>prevCount +1)
  }

  function decreCount5(){
    setCount5((prevCount)=>prevCount -1)
    setCount5((prevCount)=>prevCount -1)
    setCount5((prevCount)=>prevCount -1)
    setCount5((prevCount)=>prevCount -1)
    setCount5((prevCount)=>prevCount -1)
  }

  function increCount5(){
    setCount5((prevCount)=>prevCount +1)
    setCount5((prevCount)=>prevCount +1)
    setCount5((prevCount)=>prevCount +1)
    setCount5((prevCount)=>prevCount +1)
    setCount5((prevCount)=>prevCount +1)
  }

  function decreCount6(){
    setState((prevState)=> {return {...prevState, count: prevState.count -1}})
    setState((prevState)=> {return {...prevState, count: prevState.count -1}})
    setState((prevState)=> {return {...prevState, count: prevState.count -1}})
    setState((prevState)=> {return {...prevState, count: prevState.count -1}})
    setState((prevState)=> {return {...prevState, count: prevState.count -1}})
    setState((prevState)=> {return {...prevState, count: prevState.count -1}})
  }

  function increCount6(){
    setState((prevState)=> {return {...prevState, count: prevState.count +1}})
    setState((prevState)=> {return {...prevState, count: prevState.count +1}})
    setState((prevState)=> {return {...prevState, count: prevState.count +1}})
    setState((prevState)=> {return {...prevState, count: prevState.count +1}})
    setState((prevState)=> {return {...prevState, count: prevState.count +1}})
    setState((prevState)=> {return {...prevState, count: prevState.count +1}})
  }

  function decreCount7(){
    setCount7((prevCount)=>prevCount - 1);
    setCount7((prevCount)=>prevCount - 1);
    setCount7((prevCount)=>prevCount - 1);
    setCount7((prevCount)=>prevCount - 1);
    setCount7((prevCount)=>prevCount - 1);
    setCount7((prevCount)=>prevCount - 1);
    setCount7((prevCount)=>prevCount - 1);
    setTheme2('red');
  }

  function increCount7(){
    setCount7((prevCount)=>prevCount + 1);
    setCount7((prevCount)=>prevCount + 1);
    setCount7((prevCount)=>prevCount + 1);
    setCount7((prevCount)=>prevCount + 1);
    setCount7((prevCount)=>prevCount + 1);
    setCount7((prevCount)=>prevCount + 1);
    setCount7((prevCount)=>prevCount + 1);
    setTheme2('blue');
  }
  return (
    <>
      <div>
        <button onClick={decreCount1}>-</button>
        <span>{count1}</span>
        <button onClick={increCount1}>+</button>
      </div>

      <div>
        <button onClick={decreCount2}>--</button>
        <span>{count2}</span>
        <button onClick={increCount2}>++</button>
      </div>

      <div>
        <button onClick={decreCount3}>---</button>
        <span>{count3}</span>
        <button onClick={increCount3}>+++</button>
      </div>

      <div>
        <button onClick={decreCount4}>-*4</button>
        <span>{count4}</span>
        <button onClick={increCount4}>+*4</button>
      </div>

      <div>
        <button onClick={decreCount5}>-*5</button>
        <span>{count5}</span>
        <button onClick={increCount5}>+*5</button>
      </div>

      <div>
        <button onClick={decreCount6}>-*6</button>
        <span>{count6}</span>
        <span>{theme1}</span>
        <button onClick={increCount6}>+*6</button>
      </div>

      <div>
        <button onClick={decreCount7}>-*7</button>
        <span>{count7}</span>
        <span>{theme2}</span>
        <button onClick={increCount7}>+*7</button>
      </div>
    </>
  );
}

export default App;
