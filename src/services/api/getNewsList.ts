//import { useApi } from "../../services/hooks/useApi";
import { NewData } from "../interfaces/NewData";
//faker
import { listNews } from "../../pages/News/faker";

//instance axios with useApi()
//const api=useApi();

//request server
export async function getNewsList():Promise<NewData[]> {
  const data=listNews;
  return data
  //const response= await api.get(``);
  //console.log("réponse du serveur:",response)
  //return response
}    