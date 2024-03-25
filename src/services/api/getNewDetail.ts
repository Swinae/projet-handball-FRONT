//import { useApi } from "../hooks/useApi";
//faker
import { listNews } from "../../pages/News/faker";

//const api=useApi();

export async function getNewDetail(idNew:string){
  //const response= await api.get(`${idNew}`);
  //console.log(response);
  //return response;

  //use faker
  const itemFound=listNews.find((item)=>item.id===idNew)
  return itemFound;
}