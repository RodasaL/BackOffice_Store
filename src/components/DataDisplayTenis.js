// DataDisplay.js
import './DataDisplay.css';
import React, { useEffect, useState } from 'react';

const DataDisplayTenis = ({ flagp }) => {
  const [data, setData] = useState([]);

  const readApi = () => {
    fetch('https://sheetdb.io/api/v1/8z00xfxch855e', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer p8af9nxtfau1b45xu1i4o0be76tsgukjkbv3ws74',
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

export default DataDisplayTenis;
