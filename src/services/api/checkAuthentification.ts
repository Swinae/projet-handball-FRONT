//import { useApi } from "../hooks/useApi";
import { users } from "../../components/modales/LoginModal/faker";
import { DataConnexion } from "../interfaces/DataConnexion";

//const api = useApi();

export async function checkAuthentification(userLoginData: DataConnexion):Promise<any> {
  console.log('userLoginData: ',userLoginData);
  const userFound=users.find((user) => user.email === userLoginData.email && user.password === userLoginData.password )
  //const response = await api.post(`/api/auth/login`,userLoginData);
  //console.log(response);
  return userFound? userFound:null;
}