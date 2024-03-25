import { NewCard } from "../../components/NewCard/NewCard";
import { useEffect, useState } from "react";
import { NewData } from "../../services/interfaces/NewData";
import { getNewsList } from "../../services/api/getNewsList";

export function NewsPage() {
  const [newsList, setNewsList] = useState<NewData[]>()

  useEffect(()=>{
    const handleNewsList=async()=>{
      try{
        const newsListFromServer=await getNewsList();
        setNewsList(newsListFromServer);
      }
      catch(error){
        console.error("La requête a échoué",error);
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