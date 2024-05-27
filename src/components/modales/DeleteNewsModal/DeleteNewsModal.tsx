"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { deleteNews } from "../../../services/api/News";

export function DeleteNewsModal(props:any) {
  const {news_id, deleteArt}= props;

  const [openModal, setOpenModal] = useState(false);

  const handleBtnOk = async () => {
    //request api to delete news
    const response = await deleteNews(news_id);
    console.log("response: ",response);
    
    if (response.data === 204){
      //close modal
      setOpenModal(false);
  
      //delete art
      deleteArt(news_id);
    }
  }

  return (
    <>
      <Button className="group flex items-center justify-center text-center font-medium relative focus:z-10 focus:outline-none transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] border border-transparent enabled:hover:bg-red-800 focus:ring-4 focus:ring-white border-none bg-red-800 text-white p-1 rounded-md ml-1" onClick={() => setOpenModal(true)}>Supprimer</Button>
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Es-tu sûre que tu veux supprimer l'actualité ?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleBtnOk}>
                {"Oui, sûre !"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                Pas sûre !
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
