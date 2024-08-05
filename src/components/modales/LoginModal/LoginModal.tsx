import { useState } from "react";
import { useFormik } from "formik";
import * as yup from 'yup';
import { BtnLogin } from "../../BtnLogin/BtnLogin";
import { LoginModalProps } from "../../../services/interfaces/LoginModalProps";
import { DataConnexion } from "../../../services/interfaces/DataConnexion";
import { checkAuthentification } from "../../../services/api/checkAuthentification";
import { BtnDisconect } from "../../BtnDisconnect/BtnDisconect";

export function LoginModal(props: LoginModalProps) {
  //destruct props
  const { handleUserData } = props;

  //Initialize variable to stock showPassword
  const [showPassword, setShowPassword] = useState<boolean>(false);

  //define function to show or not show password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  //Initialize variable to show or not modal
  const [formShow, setFormShow] = useState<String>("hidden");

  //define function to show modal
  const handleFormShow = () => {
    setFormShow("flex");
  }

  //define function to not show modal
  const handleFormHidden = () => {
    setFormShow("hidden");
  }

  //Initialize variable to show a error
  const [internError, setInternError] = useState<Boolean>(false)

  //Initialize variable to stock userInfos
  const [_userInfos, setUserInfos] = useState<DataConnexion>({
    email: "",
    password: ""
  })

  //define a validation schema with yup for connexion registery
  const validationSchema = yup.object({
    email: yup.string().email(`L'email doit être valide`).required(`L'email est requis !`),
    password: yup.string().min(8, "Il faut minimum 8 caractères").required("Le mot de passe est requis !")
  })

  const { handleChange, handleSubmit, values, errors, resetForm } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // validation form with validationSchema of yup
    validationSchema: validationSchema,
    onSubmit: async values => {
      try {
        //do request to server
        const response = await checkAuthentification(values);
        if (response !== undefined) {
          //redifine variable userInfos
          setUserInfos(values);

          //extract user and token key
          const { user, token, refreshToken } = response;

          //stockage user token in localstorage
          localStorage.setItem("token", JSON.stringify(token));
          //stockage user refreshToken in localstorage
          localStorage.setItem("refreshToken", JSON.stringify(refreshToken));

          //redifine UserDataFromServer
          handleUserData(user);

          //redifine authentification
          setIsAuthenticated(true);
        }
      }
      catch (error) {
        // reinitialize register
        resetForm()
        // redifine variable InternError
        setInternError(true);
      }
    },
  })

  //Initialize variable to indicate authentication state of user in order to return an appropriate component
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  //function to redifine isAuthenticated
  function redifineIsAuthenticated(boolean: boolean) {
    setIsAuthenticated(boolean)
  }

  if (!isAuthenticated) {
    return (
      <>
        <BtnLogin statut="Se connecter" handleFormShow={handleFormShow} />
        <div id="authentication-modal" tabIndex={-1} aria-hidden="true" className={formShow +
          " overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"}>
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow">
              <div className="p-4 md:p-5">
                <form className="space-y-4" action="#" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email-login" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Email</label>
                    <input type="email" name="email" id="email-login" className="bg-gray-50 border
                     border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                      dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com"
                      required onChange={handleChange} value={values.email} />
                    {errors.email && <small className="error">{errors.email}</small>}
                  </div>
                  <div className="relative">
                    <label htmlFor="password-login" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Mot de passe</label>
                    <input type={showPassword ? "text" : "password"} name="password" id="password-login" placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                       dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required onChange={handleChange} value={values.password} />
                    <i className="fa-regular fa-eye" onClick={togglePasswordVisibility}></i>
                    {errors.password && <small className="error">{errors.password}</small>}
                  </div>
                  <div className="flex justify-between">
                    <a href="#" className="text-custom-15616D text-sm hover:underline">Mot de passe oublié?</a>
                    {internError && <small className="text-red-700">Une erreur s'est produite, veuillez réessayer.</small>}
                  </div>
                  <div className="flex justify-end space-x-4">
                    <button type="button" className="cancel-btn bg-red-600 rounded-lg text-white px-3 py-3 w-82 h-38" 
                      onClick={() => { resetForm(), setInternError(false), handleFormHidden() }}>Annuler</button>
                    <button id="login" type="submit" className="bg-teal-800 rounded-lg text-white px-4 py-3 w-82 h-38 " >Se connecter</button>
                  </div>
                </form>
              </div>
            </div>
          </div >
        </div >
      </>
    )
  }
  else {
    return <BtnDisconect statut="Se déconnecter" redifineIsAuthenticated={redifineIsAuthenticated} />
  }
}