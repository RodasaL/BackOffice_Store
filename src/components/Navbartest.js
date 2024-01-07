
import './Navbartest.css'
import React, {useEffect, useState} from 'react';
import CIcon  from '@coreui/icons-react';
import {cilHouse} from '@coreui/icons';
import { Link, useNavigate } from 'react-router-dom';
import DataDisplay from './DataDisplay';

function Navbartest() {
  const[color,setcolor] = useState('white');
  const [check,setcheck] = useState(false);
  const [flagp,setflagp] = useState(' ');
  const navigate = useNavigate();
  const handlecheck = () =>{
    if (check == false){
    setcheck(!check);//muda o estado de check
    setcolor('dark');
    setflagp('dark');
    console.log(flagp);
    }else{
      setcheck(!check);//muda o estado de check
      setcolor('white')
      setflagp('white');
      console.log(flagp);
    }
  }

  useEffect(() => {
  const body = document.querySelector('body'); // primeira class body
  const text = document.getElementById('Front'); // Front

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
const ClickLogin = () =>{

  navigate('/Login');
};

  return (
    <div>
      <div className='NavbarContainer'>
          <CIcon icon={cilHouse} onClick={ClickHome} style={{'--ci-primary-color': 'green', width: '1.4%', 'margin-left':'14px', 'cursor':'pointer'}}  />
         <nav>
          <ul className="links">
          </ul>
          </nav>
          <label htmlFor='darkmode' id='label2' className={check ? 'checked' : ''}>
          <input type='checkbox' id='darkmode' onChange={handlecheck}></input>
          </label>
          <a onClick={ClickLogin}  id = 'L'href="#login">Login</a>
        
        
      </div>
      <h1 id="Front">Camisolas</h1>
      <DataDisplay flagp = {flagp}/>
      </div>
      // <li><a id='H' href="#home">Home</a></li>
  
  );
}

export default Navbartest;