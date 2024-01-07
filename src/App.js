import 'devextreme/dist/css/dx.light.css';

import './App.css';
// App.js
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import BackOffice from './pages/Backoffice';
import Login from './pages/Login';
import Camisolas from './pages/Camisolas';
import Tenis from './pages/Tenis';

const App = () => {
 

  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path ="/" element={<Home />}></Route>
      <Route path ="/home" element={<Home />}></Route>
      <Route path ="/admin" element={<BackOffice />}></Route>
      <Route path ="/BackOffice" element={<BackOffice />}></Route>
      <Route path ="/Login" element={<Login />}></Route>
      <Route path ="/Camisolas" element={<Camisolas/>}></Route>
      <Route path ="/Tenis" element={<Tenis/>}></Route>
    



     </Routes>
     </BrowserRouter>
     
    </div>
  );
};

export default App;

/*
<div>
      <Navbartest></Navbartest>
      <h1 id="Back">Admin BackOffice</h1>
      <DeleteDisplay></DeleteDisplay>
      <UpdateDisplay></UpdateDisplay>
      <CreateData onCreateButtonClick={handleDataButtonClick2}></CreateData>
      <DataDisplay onDataButtonClick={handleDataButtonClick} />
      
     
    </div>
    */