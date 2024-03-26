import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { getNewsList } from "../../../services/api/getNewsList";
import { useEffect, useState } from "react";
import { NewData } from "../../../services/interfaces/NewData";

/*à faire: mettre en place la logique pour afficher maximum 6 premieres actua
puis en cliquant sur suivant il affiche les autres
*/

export function NewTab() {
  const[newsList,setNewsList]=useState<NewData[]>();

  useEffect(()=>{
    const getNewsListRequest=async()=>{
      const response= await getNewsList();
      if(response){
        //update NewsList
        setNewsList(response);
      }
      else{
        console.log("la requête n'a pas abouti");
      }
    }
    getNewsListRequest();
  },[])  

  return (
    <div className="overflow-x-auto mb-6">

      <button className="bg-custom-FF7D00 text-white rounded-lg p-1 mb-6">
        Créer une nouvelle actualité
      </button>

      <Table hoverable>
        <TableHead className="text-white">
          <TableHeadCell className='bg-custom-15616D' >Titre</TableHeadCell>
          <TableHeadCell className='bg-custom-15616D' >Date de publication</TableHeadCell>
          <TableHeadCell className='bg-custom-15616D' >Actions</TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {newsList?.map((art) => {
            return (
              <TableRow key={art.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {art.title}
                </TableCell>
                <TableCell className="text-black">{art.createdAt}</TableCell>
                <TableCell>

                <button className='bg-custom-15616D text-white p-1 rounded-md' type='button'>
                  Modifier
                </button>
                
                <button className='ml-2 bg-red-800 text-white p-1 rounded-md' type='button'>
                  Supprimer
                </button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <div className='flex justify-between mt-4'>
        <button className='bg-custom-818181 rounded-md text-white p-1' type='button' >Précédent</button>
        <button className='bg-custom-818181 rounded-md text-white p-1' type='button' >Suivant</button>
      </div>
    </div>
  );
}
