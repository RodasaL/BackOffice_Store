import Navbartest from "../components/Navbartest";
import DataDisplay from '../components/DataDisplay';
import LogoR from "../components/Logo";
import Footer from "../components/footer";
import Camisolas from '../7592517501_5_1_8.jpg';
import Tenis from '../png.avif';
import "./Home.css";
import { Link, useNavigate } from 'react-router-dom';

function Home(){
  const navigate = useNavigate();

    const handleCamisolas = () =>{
      navigate ('/Camisolas');
    }

    const handleTenis = () =>{
      navigate ('/Tenis');
    }
    return(
        <div className="container">
          <LogoR></LogoR>
      <div className="imagem-container">
        <button className="button-30" onClick={handleCamisolas}role="button">Camisolas</button>
        <img id="Apresentacao1" src={Camisolas} alt="Camisola Img" />
      </div>
      <div className="imagem-container">
        <button id="Bt" onClick={handleTenis} className="button-30" role="button">Tenis</button>
        <img id="Apresentacao2" src={Tenis} alt="Tenis Img" />

         </div>
         <Footer></Footer>
        
       
        </div>
    )



}

export default Home;