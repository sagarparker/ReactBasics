import React, { useState } from 'react';
import './App.css';
import Employee from './Employee';
import Logo from './krishi.png'


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
  const [loggedIn,setLoggedIn] = useState(false);
  const [num,setnum] = useState(69);
  return(
    
    <div className="App App-header">
      {console.log(setLoggedIn)}
  <button onClick={()=> setLoggedIn(!loggedIn)}>{loggedIn ? "Log Out" : "Log in"}</button>
  <button onClick={()=> setnum(420)}>Change number</button>
  <h1>{num}</h1>

      {loggedIn ? (
        <h3>Logged in</h3>
      ) : (
        <h3>Not logged in</h3>
      )}



      {
       employee && employee.length > 1 && (
          employee.map(emp =>
            <Employee key={emp.id} f_name={emp.f_name} l_name={emp.l_name} id={emp.id}/>
          )
        )
      }
    </div>
  )
}

export default App;

