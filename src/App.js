import React, { useState,useEffect } from 'react';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import ToDo from './ToDo';
import Counter from './Counter';
import Home from './Home';


function App(){
  const history = useHistory();
  return(
    <div className="App-header">
      <button onClick={()=> history.push("/")}>Home</button>
      <button onClick={()=> history.push("/counter")}>Counter</button>
      <button onClick={()=> history.push("/todo")}>ToDo</button>

      <Link to="/">Home</Link>
      <Link to="/counter">counter</Link>
      <Link to="/todo">todo</Link>
      
      

      <Switch>
        <Route path="/counter">
          <Counter/>
        </Route>
        <Route path="/todo">
          <ToDo/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;

