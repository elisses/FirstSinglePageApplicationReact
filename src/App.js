import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuSuperior from './components/MenuSuperior/MenuSuperior';
import Resumo from './components/Resumo/Resumo';

function App() {
  return (
    <div> 
      <MenuSuperior/> 
      <Resumo/>
    </div>
  );
}

export default App;
