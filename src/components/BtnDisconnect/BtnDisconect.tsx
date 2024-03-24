import { useNavigate } from 'react-router-dom';
import { disconectedUser } from '../../services/api/disconectedUser';

interface BtnDisconectProps{
  statut:string;
  redifineUserRole:(role:string)=>void;
  redifineIsAuthentificated:(boolean:boolean)=>void;
}

export function BtnDisconect(props:BtnDisconectProps){
  const {statut,redifineUserRole,redifineIsAuthentificated}=props;
  
  const navigate=useNavigate();
  
  async function handleDisconect(){
    // to recover in localstorage token user
    const userToken=localStorage.getItem("userToken");

    if(userToken){
      //request
      const response=await disconectedUser(userToken);
      if(response!=undefined){
        redifineUserRole("visteur");
        redifineIsAuthentificated(false);
        
        //remove userToken inlocalStorage
        localStorage.removeItem("userToken");

        //rediction to homepage
        navigate("/");

        // reload page
        location.reload();
      }
      else{
        //show error modale
        console.log("La déconnexion s'est mal passée")
      }
    }
  }

  return(
      <button
        className="btn-disconect block text-white bg-custom-FF7D00 font-medium rounded-full text-sm px-5 py-2.5 text-center mt-3 mb-3 mr-14"
        type="button" onClick={handleDisconect}>
          {statut}
      </button>
  )
}