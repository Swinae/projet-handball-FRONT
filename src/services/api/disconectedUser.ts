//import { useApi } from "../hooks/useApi";
import {users} from '../../components/modales/LoginModal/faker';

//const api=useApi();

export async function disconectedUser(token:string){
  const userFound=users.find((user)=>user.token === token);
  if(userFound!=undefined){
    return userFound
  }
  else{
    return userFound
  }
  //const response=await api.post("/api/logout",token);
  //console.log(response);
  //return response;
}