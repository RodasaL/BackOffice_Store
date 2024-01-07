import Navbartest from "../components/Navbartest";
import DataDisplayTotal from "../components/DataDisplayTotal"
import CreateData from '../components/CreateData';
import DeleteDisplay from '../components/DeleteDisplay';
import UpdateDisplay from '../components/UpdateDisplay';
import NavBarBack from '../components/NavBarBack';




function BackOffice(){


    return(
        <div>
        <NavBarBack></NavBarBack>
        <h1 id="Back">Admin BackOffice</h1>
     
      <DeleteDisplay></DeleteDisplay>
      <UpdateDisplay></UpdateDisplay>
      <CreateData ></CreateData>
      <DataDisplayTotal></DataDisplayTotal>
        
        </div>
    )



}

export default BackOffice;