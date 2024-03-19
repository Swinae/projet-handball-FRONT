import { FormEvent, useState } from "react";
import * as yup from 'yup';
import { BtnLoginDisconect } from "../../BtnLoginDisconect/BtnLoginDisconect";
import { LoginModalProps } from "../../../services/interfaces/LoginModalProps";
import { DataConnexion } from "../../../services/interfaces/DataConnexion";


export function LoginModal(props:LoginModalProps){
  const{handleRole}=props;

  const [showPassword, setShowPassword] = useState<boolean>(false);

  //function to show or not show password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [userInfos, setUserInfos]=useState<DataConnexion>({
    email:"",
    password:""
  })

  //define a schema with yup
  const validationSchema=yup.object().shape({
    email:yup.string().email(`L'email doit être valide`).required(`L'email est requis !`),
    password:yup.string().min(8,"Il faut minimum 8 caractères").required("Le mot de passe est requis !")
  })

  //get change in input email and password
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value}=e.target;
    setUserInfos({
      ...userInfos,
      [name]:value
    })
  }

  const [isAuthentificated, setIsAuthenticated]=useState<boolean>(false);

  //function submit form
  const handleSubmit= async(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log("données à soumettre:",userInfos);

    //check register data
    try {
      const userData=await validationSchema.validate(userInfos,{abortEarly:false})
      console.log('Le formulaire est validé:',userData)
      
      //use useApi

      setIsAuthenticated(true);
      handleRole()
    }
    catch(error){
      console.error(`Erreurs dans le formulaire:`, error)
    } 
  }
  
  return (
    <>
      <BtnLoginDisconect statut={isAuthentificated?"Se déconnecter":undefined}/>

      <div id="authentication-modal" tabIndex={-1} aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div className="relative p-4 w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="flex items-center justify-between p-4 md:p-5 rounded-t dark:border-gray-600">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          Se connecter
                      </h3>
                  </div>

                  <div className="p-4 md:p-5">
                      <form className="space-y-4" action="#" onSubmit={handleSubmit}>
                          <div>
                              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Email</label>
                              <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required onChange={handleChange} />
                          </div>
                          <div className="relative">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Mot de passe</label>
                            <input type={showPassword?"text":"password"} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={handleChange}/>
                            <i className="far fa-regular fa-eye-slash absolute top-1/2 right-3 transform -translate-y-1/2" onClick={togglePasswordVisibility}></i>
                          </div>
                          <div className="flex justify-between">
                              <a href="#" className="text-custom-15616D text-sm text-blue-700 hover:underline dark:text-blue-500">Mot de passe oublié?</a>
                          </div>
                          <div className="flex justify-end space-x-4">
                            <button type="button" className="cancel-btn bg-red-600 rounded-lg text-white px-3 py-3 w-82 h-38" data-modal-hide="authentication-modal">Annuler</button>
                            <button type="submit" className="bg-teal-800 rounded-lg text-white px-4 py-3 w-82 h-38 " data-modal-hide="authentication-modal">Se connecter</button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div> 
    </>
  )
}