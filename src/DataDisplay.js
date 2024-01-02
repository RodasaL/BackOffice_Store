// DataDisplay.js
import './DataDisplay.css';
// DataDisplay.js
import React, { useEffect, useState } from 'react';

const DataDisplay = ({ onDataButtonClick }) => {
  const [data, setData] = useState([]);

  const readApi = () => {
    fetch('https://sheetdb.io/api/v1/8z00xfxch855e')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };

  /*
  useEffect(() => {
    if (onDataButtonClick) {
      readApi();
      console.log('Fui clicado Pai');
    }
  }, [onDataButtonClick]);
//Se tu quiseres dar print quando das o render o inicial é com o use effect
*/
  return (
    <div>
      <button className='button-17' id='datbut' onClick={()=>{readApi(); onDataButtonClick();} }>Carregar Dados</button>
      {data.map((item) => (
        <div key={item.id}>
            <p>
          ID: {item.id}, Nome: {item.nome}, Tamanho: {item.tamanho}, Preco: {item.preco} 
          </p>
        <img src={item.link} alt={'imagem de ${item.nome}'} style={{ maxWidth: '100%' }} />
        </div>
      ))}
    </div>
  );
};

export default DataDisplay;
