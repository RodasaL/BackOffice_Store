// DataDisplay.js
import './DataDisplay.css';
import React, { useEffect, useState } from 'react';

const DataDisplay = ({ flagp }) => {
  const [data, setData] = useState([]);

  const readApi = () => {
    fetch('https://sheetdb.io/api/v1/09263jrvrbrlq', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer 6tyb809a0oacv5ucrl9q6sbi0k9qs3y32angcqny',
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro ${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Dados recebidos:', data);
        setData(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar os dados:', error);
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
