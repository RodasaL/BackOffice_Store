
import './DeleteDisplay.css';
// DataDisplay.js
import React, { useEffect, useState } from 'react';

const DeleteDisplay = () => {
    const [data2, setData2] = useState([]);
   
   

const Delrow = ()=>{
    var rowid = prompt("Id da coluna a apagar: ");
    
    fetch(`https://sheetdb.io/api/v1/8z00xfxch855e/id/${rowid}`, {
  method: 'DELETE',
  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  }
})
.then((response) => response.json())
.then((data2) => console.log(data2));

}

  return (
    <div>
      <button className='button-17' id='bdel' onClick={()=>{Delrow();} }>Del Row</button>
      
    </div>
  );




};
export default DeleteDisplay;