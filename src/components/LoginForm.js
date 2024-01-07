import "./LoginForm.css";
import CIcon from '@coreui/icons-react';
import { cilAccountLogout, cilAt, cilLockLocked } from '@coreui/icons';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [textvalue, settextvalue] = useState('');
  const navigate = useNavigate();

  const handle = (event) => {
    settextvalue(event.target.value);
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    console.log('Resultado: ', textvalue);

    if (textvalue === 'admin') {
      console.log('Bem Vindo Admin');
      navigate('/Admin');
    } else {
      console.log('Não OK');
    }
  };
  const handleback = () =>{
    navigate('/Home');
  }

  return (
    <div className="divlogin">
      <ul className="container1">
        <li className="container2">
          <h2 className="textlog" id="teste"> Login</h2>
        </li>
        <form onSubmit={handlesubmit}>
          <li className="icon1">
            <CIcon icon={cilAt} style={{ '--ci-primary-color': 'black', width: '3.3%' }} />
            <input type="text" value={textvalue} onChange={handle} />
          </li>
          <li className="icon1">
            <CIcon icon={cilLockLocked} style={{ '--ci-primary-color': 'black', width: '3.3%' }} />
            <input type="password" value={textvalue} onChange={handle} />
          </li>
          <li>
            <button className="buttonLog" type="submit">Login</button>
          </li>
        </form>
        <CIcon onClick={handleback} icon={cilAccountLogout} style={{ '--ci-primary-color': 'black', width: '3.3%'}} />
      </ul>
    </div>
  );
};

export default LoginForm;
