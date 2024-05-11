import { useParams } from "react-router-dom"
import { getNewDetail } from "../../services/api/News";
import { useEffect, useState } from "react";

interface newDetail {
  id: string;
  img: string;
  title: string;
  content: string;
  created_at: string;
  creator_id:number;
  updated_at:string;
}

export function NewDetailsPage() {
  const { idNew } = useParams();

  const [newDetail, setNewDetail] = useState<newDetail>();

  useEffect(() => {
    if (idNew) {
      const requestApi = async () => {
        try {
          const response = await getNewDetail(idNew); console.log(response.data)
          setNewDetail(response.data);
        }
        catch (error) {
          console.log("La requête a échoué");
        }
      }
      requestApi();
    }
  }, [])

  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col my-10 w-full">
        <h2 className="text-left text-2xl mb-4 font-bold">
          {newDetail?.title}
        </h2>
        <img className="rounded" src={newDetail && newDetail.img? newDetail.img: "/img_actu_defaut.jpg"} alt="Il s'agit d'une illustration de l'actualité" />
        <time className="text-right mt-2">{newDetail?.created_at.split("T")[0].split("-").reverse().join("-")}</time>
        <p className="mt-2">{newDetail?.content}</p>
      </div>
    </div>
  )
}