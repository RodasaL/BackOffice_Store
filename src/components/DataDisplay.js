// DataDisplay.js
import './DataDisplay.css';
import React, { useEffect, useState } from 'react';

const DataDisplay = ({ flagp }) => {
  const [data, setData] = useState([]);

  const readApi = () => {
    fetch('https://sheetdb.io/api/v1/09263jrvrbrlq')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    readApi();
  }, []);

  return (
    <div>
      <button style={{display:'none' }} className='button-17' id='datbut' onClick={readApi}>
        Carregar Dados
      </button>
      <div className='grid'>
        {data.map((item) => (
          <div className='cells' key={item.id}>
            <p className={flagp === 'dark' ? 'dark' : 'white'}>
              ID: {item.id}, Nome: {item.nome}, Tamanho: {item.tamanho}, Preco: {item.preco}
            </p>
            <img src={item.link} alt={`imagem de ${item.nome}`} style={{ maxWidth: '100%' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataDisplay;
