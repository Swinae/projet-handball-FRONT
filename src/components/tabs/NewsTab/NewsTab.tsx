import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { getNewsList } from "../../../services/api/getNewsList";
import { useEffect, useState } from "react";
import { NewData } from "../../../services/interfaces/NewData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ModalCreateNews } from "../../modales/ModalCreatesNews/ModalCreateNews";

export function NewsTab() {
  const [newsList, setNewsList] = useState<NewData[]>([]);
  const [startIndex, setStartIndex] = useState<number>(0);
  const newsNbrPerPage:number = 4;

  useEffect(() => {
    const getNewsListRequest = async () => {
      const response = await getNewsList();
      if (response) {
        //update NewsList
        setNewsList(response);
      }
      else {
        console.log("la requête n'a pas abouti");
      }
    }
    getNewsListRequest();
  }, [])

  const visibleNewsList: NewData[] | undefined = newsList?.slice(startIndex, startIndex + newsNbrPerPage);

  const handleNext = () => {
    setStartIndex(startIndex + newsNbrPerPage);
  }

  const handlePrevious=()=>{
    setStartIndex(Math.max(0, startIndex - newsNbrPerPage));
  }

  return (
    <div className="overflow-x-auto mb-6">
      <ModalCreateNews/>

      <Table className="min-w-96" hoverable>
        <TableHead className="text-white">
          <TableHeadCell className='bg-custom-15616D' >Titre</TableHeadCell>
          <TableHeadCell className='bg-custom-15616D w-1/6' >Date de publication</TableHeadCell>
          <TableHeadCell className='bg-custom-15616D w-1/6' >Actions</TableHeadCell>
        </TableHead>

        <TableBody className="divide-y">
          {visibleNewsList?.map((art) => {
            return (
              <TableRow key={art.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">

                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {art.title}
                </TableCell>
                
                <TableCell className="text-black text-center">{art.createdAt}</TableCell>
                
                <TableCell>
                  <div className="flex justify-between gap-">
                    <button className='bg-custom-15616D text-white p-1 rounded-md mr-1' type='button'>
                      Modifier
                    </button>

                    <button className='bg-red-800 text-white p-1 rounded-md ml-1' type='button'>
                      Supprimer
                    </button>
                  </div>
                </TableCell>

              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <div className='flex justify-between mt-4'>

        <button
          className='bg-custom-818181 rounded-md
        text-white p-1'
          type='button'
          onClick={handlePrevious}
          disabled={startIndex === 0}>
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2"/>
          Précédent
        </button>

        <button
          className='bg-custom-818181 rounded-md text-white p-1'
          type='button'
          onClick={handleNext}
          disabled={startIndex + newsNbrPerPage >= newsList?.length}>
          Suivant
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </button>

      </div>
    </div>
  );
}
