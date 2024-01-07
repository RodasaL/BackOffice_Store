// DataDisplay.js
import './DataDisplay.css';
import React, { useEffect, useState } from 'react';

const DataDisplayTotal = ({ flagp }) => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState ([]);

  const readApi = () => {
    fetch('https://sheetdb.io/api/v1/09263jrvrbrlq')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };
  const readApi2 = () => {
    fetch('https://sheetdb.io/api/v1/8z00xfxch855e')
      .then((response) => response.json())
      .then((data2) => {
        setData2(data2);
      });
  };

  useEffect(() => {
    readApi();
    readApi2();
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
        <div className='grid'>
        {data2.map((item) => (
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

export default DataDisplayTotal;
