import React from 'react';
import './App.css';

// import Counter from './Counter';
import Employee from './Employee';

const employeeInfo = [
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

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <h2>Company Directory</h2>
      {
      employeeInfo.map(employee =>{
        const {f_name,l_name} = employee;
        return(
          <Employee key={employee.id} f_name={f_name} l_name={l_name} />
        )
      })
      }

      {/* <Employee f_name="Sagar"  l_name="Parker" />
      <Employee l_name="Verstapen" f_name="Max"  />
      <Employee f_name="Lewis" l_name="Hamilton" /> */}

      </header>
    </div>
  );
}

export default App;
