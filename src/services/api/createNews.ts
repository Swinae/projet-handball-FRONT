//import { useApi } from "../hooks/useApi";
import { listNews } from "../../pages/News/faker";

//const api=useApi();

export async function createNews(data:any){console.log('data',data);
  const newNewsList=[data,...listNews];
  return newNewsList;
  //const response=await api.post("",data);
  //console.log(response);
  //return response;
}