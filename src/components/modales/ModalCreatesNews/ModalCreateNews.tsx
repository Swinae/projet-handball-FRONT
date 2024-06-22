import { useState } from "react";
import { useFormik } from "formik";
import * as yup from 'yup';
import { createNews } from "../../../services/api/News";
import { SuccessModal } from "../SuccessModal/SuccessModal";

interface ModalCreateNewsProps {
  addArtInNewsList:(newArt:any)=>void
}

export function ModalCreateNews(props: ModalCreateNewsProps) {
  const { addArtInNewsList } = props;
  
  const [formShow, setFormShow] = useState("hidden");
  
  const handleFormShow = () => {
    setFormShow("flex");
  }
  
  const handleFormHidden = () => {
    setFormShow("hidden");
  }

  //define state form
  const [_form, setForm] = useState({});

  //secure form with yup
  let validationSchema = yup.object({
    img: yup.mixed(),
    title: yup.string().max(30, "Veuillez inscrire 30 caractères maximum !").required("Le titre est requis !"),
    content: yup.string().min(20, "Veuillez inscrire au minimum 20 caractères !").required("La description est requise !"),
  })

  const { handleChange, handleSubmit, values, errors, resetForm } = useFormik({
    initialValues: {
      img: "",
      title: "",
      content: "",
    },

    // validation form with validationSchema of yup
    validationSchema: validationSchema,

    //submit if form is validate by validationSchema of yup
    onSubmit: async values => {
      //console.log("les données sont validées, les voici:", values);

      //do request to server
      const artCreated = await createNews(values);

      //console.log('artCreated: ', artCreated);
      
      setForm(values);

      //if artCreated ok
      //close modal
      handleFormHidden();

      //show modal to confirm success
      const successModal = document.getElementById("popup-modal");
      if (successModal) {
        successModal.style.display = "block";
        successModal.addEventListener("click", () => {
          successModal.style.display = 'none';
        })
      }
      addArtInNewsList(artCreated);
      resetForm();
      
      //else rsponse not ok
/*    show modal to indicate failure
      resetForm();
      handleFormShow()
 */ },
  });


  return (
    <div>
      <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" className="bg-custom-FF7D00 hover:bg-custom-818181 text-white rounded-lg p-2 mb-6" type="button" onClick={handleFormShow}>
        Créer une nouvelle actualité
      </button>

      <SuccessModal />
      
      <div id="crud-modal" tab-index="-1" aria-hidden="true" className={formShow + " overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"}>
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

            <div className="flex items-center justify-between p-4 md:p-5">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Créer l'actualité
              </h3>
              <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal" onClick={handleFormHidden}>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            {/*modal */}
            <form className="p-4 md:p-5" onSubmit={handleSubmit}>
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <input className="border border-gray-300" type="file" name="img" id="img" accept="image/*" onChange={handleChange} value={values.img} />
                  {errors.img && <small className="error">{errors.img}</small>}
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titre</label>
                  <input type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Titre de l'actualité" onChange={handleChange} value={values.title} />
                  {errors.title && <small className="error">{errors.title}</small>}
                </div>
                <div className="col-span-2">
                  <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <textarea id="content" name="content" rows={10} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description de l'actualité" onChange={handleChange} value={values.content}></textarea>
                  {errors.content && <small className="error">{errors.content}</small>}
                </div>
              </div>

              <div className="flex justify-end">
                <button type="button" className="bg-red-800 text-white rounded-md p-2 mr-4" /* data-modal-toggle="crud-modal" */ onClick={() => { resetForm(), handleFormHidden() }}>
                  Annuler
                </button>

                <button type="submit" id="submit-news" className="text-white bg-custom-15616D rounded-md p-2">
                  Publier
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}