import { NewCard } from "../../components/NewCard/NewCard";
import { useEffect, useState } from "react";
import { NewData } from "../../services/interfaces/NewData";
import { getNewsList } from "../../services/api/News";

export function NewsPage() {
  const [newsList, setNewsList] = useState<NewData[]>()

  useEffect(() => {
    const handleNewsList = async () => {
      try {
        const data = await getNewsList();
        setNewsList(data);
      }
      catch (error) {
        console.error("La requête a échoué", error);
      }
    }
    handleNewsList();
  }, [])

  return (
    <>
      <NewCard NewsList={newsList} />
    </>
  )
}