import React from 'react';
import './App.css';
import CrudApp from './components/CrudApp'
import CrudApi from './components/CrudApi'
import SongSearch from './components/SongSearch'
import {default as SelectsAnidadosDesafio} from './components/desafios/a-SelectsAnidados';
import SelectsAnidadosOriginal from './components/SelectAnidados';


function App() {
  return (
    <div>
      <h1>Ejercico con React</h1>
      <hr />
      <SelectsAnidadosOriginal />
      <hr />
      <SelectsAnidadosDesafio/>
      <hr />
      <SongSearch />
      <hr />
      <CrudApi /> 
      <hr />
      <CrudApp /> 
    </div>
  );
}

export default App;
