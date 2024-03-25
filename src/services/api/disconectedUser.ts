//import { useApi } from "../hooks/useApi";
import {users} from '../../components/modales/LoginModal/faker';
import { dataUser } from '../interfaces/dataUser';

//const api=useApi();

export async function disconectedUser(data:dataUser){
  const userFound=users.find((user)=>user.id === data.id);
  if(userFound!=undefined){
    return userFound
  }
  else{
    return userFound
  }
  //const response=await api.post("/api/logout",data);
  //console.log(response);
  //return response;
}