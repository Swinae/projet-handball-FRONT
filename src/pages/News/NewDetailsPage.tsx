import { useParams } from "react-router-dom"

export function NewDetailsPage(){
  const{idNew}=useParams();

  let listNews:any=localStorage.getItem("listNews");
  if(listNews){
    listNews=JSON.parse(listNews);
    const foundedNew = listNews.find((news: any) => news.id === idNew);
    if(foundedNew){
      const{title,img,description,createdAt}=foundedNew;
    
      return (
        <div className="flex justify-center items-center h-full">
          <div className="flex flex-col my-10">
            <h2 className="text-left text-2xl mb-4 font-bold">
              {title}
            </h2>
            <img className="rounded" src={"/"+img} alt="Il s'agit d'une illustration de l'actualité"/>
            <time className="text-right mt-2">{createdAt}</time>
            <p className="mt-2">{description}</p>
          </div>
        </div>
      )
    }
    else{
      return <p>Acune Actualité trouvée</p>;
    }
  }
}
