import './CreateData.css';
// DataDisplay.js
import React, { useEffect, useState } from 'react';

const CreateData = ({  }) => {
    const [data1, setData1] = useState([]);
    var id = 10;//Comeca em 10
    //++id passa para 11 -> 12 -> 13 
    //A primeira vez que adicionarem conteudo adiciona o id 11 pois eu fiz a contar com ja ter 10 produtos na BD
   

const addApi = ()=>{
    var name = prompt("Nome do calçado? ");
    var tamanho=prompt("Tamanho do calçado: "); //:TODO: Validar inteiros ou strings 
    var preco = prompt("Preco do calçado: ");
    var link = prompt("Link pls: ");
    ++id;
    fetch('https://sheetdb.io/api/v1/8z00xfxch855e', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        data: [
            {
                'id': id,
                'nome': name,
                'tamanho': tamanho,
                'preco': preco,
                'link': link 
            }
        ]
    })
})
  .then((response) => response.json())
  .then((data1) => console.log(data1));


}
/*
useEffect(() => {
    if (onCreateButtonClick) {
        addApi();
    }
  }, [onCreateButtonClick]);
*/
//Se tu quiseres dar print quando das o render o inicial é com o use effect

  return (
    <div>
      <button className='button-17' id='AddBut' onClick={()=>{addApi()} }>Adicionar Dados</button>
      
    </div>
  );




};
export default CreateData;