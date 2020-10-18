import React, { useState,useEffect } from 'react';
import './App.css';
// import Employee from './Employee';
// import Logo from './krishi.png'


const employee = [
  {
    f_name:"Sagar",
    l_name:"Parker",
    id:1
  },
  {
    f_name:"Max",
    l_name:"Verstapen",
    id:2
  },
  {
    f_name:"Charles",
    l_name:"Leclerc",
    id:3
  },
]

function App(){
  const [count,setCount] = useState(0);

  // REACT COMPONENT LIFE CYCLE //

  ///COMPONENT MOUNT//////
    useEffect(()=>{
    console.log("The use effect ran");
  },[]);

  ///COMPONENT UPDATE///////
  useEffect(()=>{
    console.log("The use effect ran");
  },[count]);

  ///COMPONENT UNMOUNT//////
  useEffect(()=>{
    return () => {
  console.log("Unmounted the component")}
  },[]);


  
  return(
    <div className="App-header">
      <p>Count : {count}</p>
      <button onClick={()=>setCount(count + 1)}>Increment the Count</button>
    </div>
  )
}

export default App;

