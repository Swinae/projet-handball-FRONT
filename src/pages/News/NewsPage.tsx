import { NewCard } from "../../components/NewCard/NewCard";
import { useEffect, useState } from "react";
import { NewData } from "../../services/interfaces/NewData";
import { getNewsList } from "../../services/api/getNewsList";

//faker
import { listNews } from "../../pages/News/faker";

export function NewsPage() {
  const [newsList, setNewsList] = useState<NewData[]>()

  useEffect(()=>{
    const handleNewsList=async()=>{
      try{
        const newsListFromServer=await getNewsList(listNews);
        setNewsList(newsListFromServer);

        //store data in localstorage
        localStorage.setItem("listNews",JSON.stringify(newsListFromServer));
      }
      catch(error){
        console.error("Une erreur s'est produite:",error);
      }
    }
    handleNewsList();
  },[])

  return (
    <>
      <NewCard NewsList={newsList} />
    </>
  )
}