
import './App.css';
// App.js
import React from 'react';
import DataDisplay from './DataDisplay';
import CreateData from './CreateData';
import DeleteDisplay from './DeleteDisplay';
import UpdateDisplay from './UpdateDisplay';

const App = () => {
  let contador = 0;
  let contador2 = 0;
  const handleDataButtonClick = () => {
    // Lógica adicional pode ser adicionada aqui, se necessário
    console.log('Botão clicado!');
    ++contador;
    console.log(contador);
  };
  const handleDataButtonClick2 = () => {
    // Lógica adicional pode ser adicionada aqui, se necessário
    console.log('Botão de adicionar clicado!');
    ++contador2;
    console.log(contador2);
  };

  return (
    <div>
      <h1>Admin BackOffice</h1>
      <DeleteDisplay></DeleteDisplay>
      <UpdateDisplay></UpdateDisplay>
      <CreateData onCreateButtonClick={handleDataButtonClick2}></CreateData>
      <DataDisplay onDataButtonClick={handleDataButtonClick} />
      
     
    </div>
  );
};

export default App;
