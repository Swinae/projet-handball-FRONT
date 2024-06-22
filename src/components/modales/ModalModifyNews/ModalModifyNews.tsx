import { useFormik } from "formik";
import * as yup from 'yup';
import { useState, MouseEventHandler, useEffect } from "react";
import { SuccessModal } from "../SuccessModal/SuccessModal";
import { NewData } from "../../../services/interfaces/NewData";
import { modifyNews } from "../../../services/api/News";

interface EditModeProps {
  title: boolean;
  content: boolean;
}

interface ModalModifyNewsProps {
  addArtModified: (artModified: NewData) => void;
  id: string;
}

export function ModalModifyNews(props: ModalModifyNewsProps) {

  const { addArtModified, id } = props;

  //define a editMode to actived field
  const [editMode, setEditMode] = useState<EditModeProps>({
    title: true,
    content: true,
  });

  //function to disabled field
  const handleClick = (field: string) => {
    setEditMode({
      ...editMode,
      [field]: false,
    })
  }

  //define state variable to hidden or not modal
  const [state, setState] = useState("hidden");

  const handleOpenModal = () => {
    setState("flex");
  }

  const handleClosureModal = () => {
    setState("hidden");
  }
  // Use Pick to create type with proprietie will
  type PartialNewData = Pick<NewData, 'id' | 'img' | 'title' | 'content'>;
  
  const [selectedNews, setSelectedNews] = useState<PartialNewData>({
    id: "",
    img: "",
    title: "",
    content: "",
  });

  const handleShowDataInForm: MouseEventHandler<HTMLButtonElement> = (e) => {
    handleOpenModal();
    if (e.target instanceof HTMLElement) {
      //update selectedNews retrieving news infos via DOM 
      setSelectedNews({
        ...selectedNews,
        id: e.target.parentElement?.parentElement?.parentElement?.id || "",//use oprerator null  to assign a empty chain if value is undefined
        title: e.target.parentElement?.parentElement?.parentElement?.children[0]?.textContent || "",
        img: e.target.parentElement?.parentElement?.parentElement?.children[2]?.textContent || "",
        content: e.target.parentElement?.parentElement?.parentElement?.children[1]?.textContent || "",
      });
    }
  }

  //secure form with yup
  let validationSchema = yup.object({
    img: yup.mixed(),
    title: yup.string().max(30, "Veuillez inscrire 30 caractères maximum !").required("Le titre est requis !"),
    content: yup.string().min(20, "Veuillez inscrire au minimum 20 caractères !").required("La description est requise !"),
  })

  const { handleChange, handleSubmit, values, errors, resetForm } = useFormik({
    initialValues: {
      id: "",
      img: "",
      title: "",
      content: "",
    },

    // validation form with validationSchema of yup
    validationSchema: validationSchema,

    //submit if form is validate by validationSchema of yup
    onSubmit: async values => {
      //console.log("les données sont validées, les voici:", values);

      setSelectedNews(values); 
      //console.log("values à envoyer au serveur:", values);

      //do request to server
      const response = await modifyNews(values);
      console.log("response serveur: ", response);
      
      if (response.data) {
        //close modal
        handleClosureModal();

        // show modal to confirm success
        const successModal = document.getElementById("popup-modal");
        if (successModal) {
          successModal.style.display = "block";
          successModal.addEventListener("click", () => {
            successModal.style.display = 'none';
          })
        }

        // update news table with news modified
        addArtModified(response.data);
      }
      else {
        //show failure modal
        resetForm()
        handleClosureModal();
      }
    }
  })

  useEffect(() => {
    values.id = selectedNews.id,
      values.img = selectedNews.img,
      values.title = selectedNews.title,
      values.content = selectedNews.content
  }, [selectedNews])

  return (
    <>
      <button data-modal-target="update-modal" data-modal-toggle="update-modal" className="block text-white bg-custom-287581 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button" onClick={handleShowDataInForm}>
        Modifier
      </button>

      <SuccessModal />
      <div id="update-modal" tab-index="-1" aria-hidden="true" className={state + " overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"}>
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Modifier l'actualité
              </h3>
              <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="update-modal" onClick={handleClosureModal}>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/*modal */}
            <form className="p-4 md:p-5" onSubmit={handleSubmit}>
              <div>
                <div>
                  <label htmlFor={"image-update-" + id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                  <img src={selectedNews.img} alt="Selected Image" className="m-auto max-w-200" />
                  <input className="border border-gray-300 my-4" type="file" name="img" id={"image-update-" + id} accept="image/*" onChange={handleChange} />
                </div>

                <div>
                  <label htmlFor={"title-update-" + id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titre</label>
                  <input readOnly={editMode.title} type="text" name="title" id={"title-update-" + id} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={values.title ? values.title : selectedNews.title} onClick={() => { handleClick("title") }} onChange={handleChange} />
                  {errors.title && values.title !== "" && <small className="error">{errors.title}</small>}
                </div>

                <div className="mb-4">
                  <label htmlFor={"description-update-" + id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <textarea readOnly={editMode.content} id={"description-update-" + id} name="content" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={values.content ? values.content : selectedNews.content} onClick={() => { handleClick("content") }} onChange={handleChange}></textarea>
                  {errors.content && values.content !== "" && <small className="error">{errors.content}</small>}
                </div>
              </div>

              <div className="flex justify-end">
                <button type="button" className="bg-red-800 text-white rounded-md p-2 mr-4" /* data-modal-toggle="update-modal" */ onClick={() => { resetForm(), handleClosureModal() }}>
                  Annuler
                </button>

                <button type="submit" className="text-white bg-custom-15616D rounded-md p-2">
                  Valider
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}