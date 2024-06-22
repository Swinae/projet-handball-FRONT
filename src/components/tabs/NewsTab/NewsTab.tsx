import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { useEffect, useState } from "react";
import { NewData } from "../../../services/interfaces/NewData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ModalCreateNews } from "../../modales/ModalCreatesNews/ModalCreateNews";
import { getNewsList } from "../../../services/api/News";
import { ModalModifyNews } from "../../modales/ModalModifyNews/ModalModifyNews";
import { DeleteNewsModal } from "../../modales/DeleteNewsModal/DeleteNewsModal";

export function NewsTab() {
  const [newsList, setNewsList] = useState<NewData[]>([]);
  //console.log("newsList", newsList);

  useEffect(() => {
    const getNewsListRequest = async () => {
      const data = await getNewsList();
      //console.log("response: ",data)
      if (data) {
        //update NewsList
        setNewsList(data);
      }
      else {
        console.log("la requête n'a pas abouti");
      }
    }
    getNewsListRequest();
  }, [])


  const [startIndex, setStartIndex] = useState<number>(0);

  const newsNbrPerPage: number = 4;

  //inverse newsList
  let reversedNewsList;
  if (newsList.length > 0){
    reversedNewsList = [...newsList].reverse();
  }

  //extract element quantity to show them in TableBody
  const visibleNewsList: NewData[] | undefined = reversedNewsList?.slice(startIndex, startIndex + newsNbrPerPage);

  //function to add News
  const addArtInNewsList = (newArt: any) => {
    //console.log('newArt: ', newArt)
    setNewsList([
      ...newsList, {
        ...newArt
      }
    ]);
  }

  //function to edit News
  const addArtModified = (artModified: NewData) => {
    const index = newsList.findIndex((news) => news.id == artModified.id);
    if (index === 0) {//insert to index 0
      setNewsList([
        artModified, ...newsList.slice(index + 1)
      ])
    }
    else if (index === newsList.length - 1) {//insert to index last
      setNewsList([
        ...newsList.slice(0, index), artModified
      ])
    }
    else if (index !== -1) {//insert between start and end
      setNewsList([
        ...newsList.slice(0, index), artModified, ...newsList.slice(index + 1)
      ])
    }
    else {
      console.log("Index de l'article pas trouvé dans newsList");
    }
  }

  //function to delete News
  const deleteArt = (news_id: string) => {
    const newsListModified = newsList.filter((art) => art.id !== news_id);

    //reassign state newsList
    setNewsList(newsListModified)
  }

  //function to handle page next of table
  const handleNext = () => {
    setStartIndex(startIndex + newsNbrPerPage);
  }

  //function to handle page previous of table
  const handlePrevious = () => {
    setStartIndex(Math.max(0, startIndex - newsNbrPerPage));
    if (Math.max(0, startIndex - newsNbrPerPage) === 0) {
    }
  }

  return (
    <div className="overflow-x-auto mb-6">
      <ModalCreateNews addArtInNewsList={addArtInNewsList} />

      <Table className="min-w-96" hoverable>
        <TableHead className="text-white">
          <TableHeadCell className='bg-custom-15616D' >Titre</TableHeadCell>
          <TableHeadCell className='bg-custom-15616D w-1/6' >Date de publication</TableHeadCell>
          <TableHeadCell className='bg-custom-15616D w-1/6' >Actions</TableHeadCell>
        </TableHead>

        <TableBody className="divide-y">
          {visibleNewsList? visibleNewsList.map((art) => {
            return (
              //stockage news ID in attribut id of TableRow
              <TableRow key={art.id} id={art.id} className="tableRow bg-white dark:border-gray-700 dark:bg-gray-800">

                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {art.title}
                </TableCell>

                <TableCell className="hidden whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {art.content}
                </TableCell>

                <TableCell className="hidden whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {art.img}
                </TableCell>

                <TableCell className="text-black text-center">{art.created_at?.split('T')[0].split("-").reverse().join("-")}</TableCell>

                <TableCell>
                  <div className="flex justify-between">
                    <ModalModifyNews addArtModified={addArtModified} id={art.id} />

                    <DeleteNewsModal news_id={art.id} deleteArt={deleteArt} />
                  </div>
                </TableCell>

              </TableRow>
            );
          }) : null}
        </TableBody>
      </Table>

      <div className='flex justify-between mt-4'>

        <button
          className='bg-custom-818181 rounded-md text-white p-1'
          type='button'
          onClick={handlePrevious}
          disabled={startIndex === 0}>
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
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
