//import { useApi } from "../hooks/useApi";
import { NewData } from "../interfaces/NewData";
//faker
import { listNews } from "../../pages/News/faker";

//instance axios with useApi()
//const api=useApi();

//request server
export async function getNewsList():Promise<NewData[]> {
  const data=listNews;
  return data
  //const response= await api.get(`news/list`);
  //console.log("réponse du serveur:",response)
  //return response
}

export async function createNews(data:any){console.log('data',data);
  const newNewsList=[...listNews,data];
  return newNewsList;
  //const response=await api.post("news/create",data);
  //console.log(response);
  //return response;
}

export async function deleteNews(news_id:number){console.log('news_id: ',news_id);
/*   const response=await api.delete(`news/delete/${news_id}`);
  console.log(response);
  return response; */
}

export async function modifyNews(data:NewData){console.log('data',data);
  //const response=await api.put("news/update/id",data);
  //console.log(response);
  //return response;
}

export async function getNewDetail(idNew:string){
  //const response= await api.get(`news/id/${idNew}`);
  //console.log(response);
  //return response;

  //use faker
  const itemFound=listNews.find((item)=>item.id===idNew)
  return itemFound;
}