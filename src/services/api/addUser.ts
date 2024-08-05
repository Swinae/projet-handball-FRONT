//import { useApi } from "../hooks/useApi";
import { users } from "../../components/modales/LoginModal/faker";
//import UserInterface from "../interfaces/UserInterface";

//const api = useApi();

export async function addUser(newUser:any ): Promise<any> {
    console.log('New user added: ', newUser);
    users.push(newUser);
    //const addUser = await api.post(``, newUser);
    //return addUser;
}