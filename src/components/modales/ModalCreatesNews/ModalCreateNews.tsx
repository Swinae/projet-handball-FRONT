import { useState } from "react";
import { useFormik } from "formik";
import * as yup from 'yup';
import { createNews } from "../../../services/api/createNews";
import { SuccessModal } from "../SuccessModal/SuccessModal";

export function ModalCreateNews() {
  const[doneRequest,setDoneRequest]=useState(false);
  
  //define state form
  const [form, setForm] = useState({});
  
  //secure form with yup
  let validationSchema = yup.object({
    img: yup.mixed().required("Veuillez choisir une image"),
    title: yup.string().max(30,"Veuillez inscrire 30 caractères maximum !").required("Le titre est requis !"),
    description: yup.string().min(20,"Veuillez inscrire au minimum 20 caractères !").required("La description est requise !"),
  })

  const {handleChange,handleSubmit,values,errors,resetForm} = useFormik({
    initialValues: {
      img:"",
      title: "",
      description: "",
    },
    // validation form with validationSchema of yup
    validationSchema:validationSchema,

    //submit if form is validate by validationSchema of yup
    onSubmit: values => {
      console.log(values);
      setForm(values);
      setDoneRequest(true);
      resetForm();
    },
  });

  if(doneRequest){console.log(doneRequest);
    async function createNewsRequest (){
      const response= await createNews(form);
      console.log(response);
      
      //if response ok
      //show modal to confirm success
      const modal=document.getElementById("top-center-modal");
      if(modal){
        modal.style.display="block";
        modal.addEventListener("click",()=>{
          modal.style.display='none';
        })
      }
      //else show modal to indicate failure
    }
    createNewsRequest();
  }

  return (
    <>
      <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" className="bg-custom-FF7D00 text-white rounded-lg p-2 mb-6" type="button">
        Créer une nouvelle actualité
      </button>
      <SuccessModal/>
      <div id="crud-modal" tab-index="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

            <div className="flex items-center justify-between p-4 md:p-5">
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <form className="p-4 md:p-5" onSubmit={handleSubmit}>
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <input className="border-black" type="file" name="img" id="img" accept="image/*" onChange={handleChange} value={values.img} />
                  {errors.img && <small className="error">{errors.img}</small>}
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titre</label>
                  <input type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Titre de l'actualité" onChange={handleChange} value={values.title} />
                  {errors.title && <small className="error">{errors.title}</small>}
                </div>
                <div className="col-span-2">
                  <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <textarea id="description" name="description" rows={10} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description de l'actualité" onChange={handleChange} value={values.description}></textarea>
                  {errors.description && <small className="error">{errors.description}</small>}
                </div>
              </div>

              <div className="flex justify-end">
                <button type="button" className="bg-red-800 text-white rounded-md p-2 mr-4" data-modal-toggle="crud-modal" onClick={()=>{resetForm()}}>
                  Annuler
                </button>

                <button type="submit" className="text-white bg-custom-15616D rounded-md p-2">
                  Publier
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}