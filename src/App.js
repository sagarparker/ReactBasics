import React from 'react';
import './App.css';
import Employee from './Employee';


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
  return(
    <div className="App App-header">
      {employee.map(emp =>
        <Employee key={emp.id} f_name={emp.f_name} l_name={emp.l_name} id={emp.id}/>
      )}
    </div>
  )
}

export default App;

