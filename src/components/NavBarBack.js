
import './NavBarBack.css'
import React, {useEffect, useState} from 'react';
import CIcon  from '@coreui/icons-react';
import {cilHouse} from '@coreui/icons';
import { Link, useNavigate } from 'react-router-dom';

function Navbarback() {
  const[color,setcolor] = useState('white');
  const [check,setcheck] = useState(false);
  const navigate = useNavigate();
  const handlecheck = () =>{
    if (check == false){
    setcheck(!check);//muda o estado de check
    setcolor('dark');
    }else{
      setcheck(!check);//muda o estado de check
      setcolor('white')
    }
  }

  useEffect(() => {
  const body = document.querySelector('body');
  const text = document.getElementById('Back');
  body.classList.add(color);
  text.classList.add(color);
  return () =>{
    body.classList.remove(color);
    text.classList.remove(color);
  };
}, [color]);


const ClickHome = () =>{

  navigate('/Home');
};
const ClickSapatos = () =>{

  navigate('/Tenis');
};
const ClickCamisolas = () =>{

  navigate('/Camisolas');
};

  return (
      <div className='NavbarContainer'>
          <CIcon icon={cilHouse} onClick={ClickHome} style={{'--ci-primary-color': 'green', width: '1.4%', 'margin-left':'14px', 'cursor':'pointer', 'margin-right':'26px'}}  />
         <nav>
          <ul className="links">
            
            <li><a id='S'href="#sapatos" onClick={ClickSapatos}>Sapatos</a></li>
            <li><a id = 'C'href="#camisolas" onClick={ClickCamisolas}>Camisolas</a></li>
          </ul>
          </nav>
          <label htmlFor='darkmode' id='label2' className={check ? 'checked' : ''}>
          <input type='checkbox' id='darkmode' onChange={handlecheck}></input>
          </label>
          
        
        
      </div>
      // <li><a id='H' href="#home">Home</a></li>
  
  );
}

export default Navbarback;