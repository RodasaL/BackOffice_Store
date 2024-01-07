
import './UpdateDisplay.css';
// DataDisplay.js
import React, { useEffect, useState } from 'react';

const UpdateDisplay = ({ onUpdateButtonClick }) => {
    const [data3, setData3] = useState([]);
   
   

const Updaterow = ()=>{
    var rowid = prompt("Id da coluna a dar update: ");
    var name = prompt("Nome do calçado? ");
    var tamanho=prompt("Tamanho do calçado: "); //:TODO: Validar inteiros ou strings
    var preco = prompt("Preco do calçado: ");
    var link = prompt("Link pls: ");
    
    fetch(`https://sheetdb.io/api/v1/8z00xfxch855e/id/${rowid}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: {
                'id': rowid,
                'nome': name,
                'tamanho': tamanho,
                'preco': preco,
                'link': link 
            }
        })
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    
}

  return (
    <div>
      <button className='button-17' id='upbut' onClick={()=>{Updaterow();} }>Update Row</button>
      
    </div>
  );




};
export default UpdateDisplay;