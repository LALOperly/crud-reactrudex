import logo from './logo.svg';
import './App.css';
import React,{useEffect} from 'react';
import AddEmploye from './components/AddEmploye';
import ListEmploye from './components/ListEmploye';

function App() {

  return (
    <div className="App">
      <AddEmploye />
      <ListEmploye />
    </div>
  );
}

export default App;
