import { useFormik } from "formik"
import { ISignupForm } from "../../../services/interfaces/SignupForm";
import { useState } from "react";
import * as yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(yup);
import './SignupModal.css'
import IUserInterface from "../../../services/interfaces/UserInterface";
import { users } from '../LoginModal/faker'
import { addUser } from "../../../services/api/addUser";

export default function SignupModal() {
    const [form, _setForm] = useState<ISignupForm>({
        email: '',
        password: '',
        confirm: ''
    })

    const [newUser, _setNewUser] = useState<IUserInterface>({
        id: users.length + 1,
        role: 'Supporter',
        firstname: 'test',
        lastname: 'test',
        email: '',
        password: '',
        avatar: "avatar_default.jpg",
    })

    let signupSchema = yup.object({
        email: yup.string().email('Le format de l\'email est invalide').required('Veuillez renseigner votre adresse mail'),
        password: yup.string()
            .min(8, 'Le mot de passe doit comporter 8 caractères minimum')
            .required('Veuillez renseigner un mot de passe')
            .minLowercase(1, 'Le mot de passe doit contenir 1 minuscule minimum')
            .minUppercase(1, 'Le mot de passe doit contenir 1 majuscule minimum')
            .minNumbers(1, 'Le mot de passe doit contenir 1 chiffre minimum')
            .minSymbols(1, 'Le mot de passe doit contenir 1 symbole minimum'),
        confirm: yup.string().oneOf([yup.ref('password')], 'Les deux mots de passe ne correspondent pas').required('Veuillez confirmer le mot de passe'),
    });

    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: form,
        validationSchema: signupSchema,
        onSubmit: values => {
            const updatedUser = {
                ...newUser,
                id: users.length + 1,
                email: values.email,
                password: values.password
            };

            const userAlreadyExist = users.find((user) => user.email === updatedUser.email)
            if (userAlreadyExist === undefined) {
                try {
                    addUser(updatedUser)
                
                } catch (error) {
                    console.log(error)
                }

            } else {
                console.log('User already exist')
            }
        }
    })

    return (
        <>
            {/* Modal toggle */}
            <button data-modal-target="signup-modal" data-modal-toggle="signup-modal" className="block text-white hover:underline font-medium  text-sm text-center" type="button">
                Créer un compte
            </button>

            {/* Main modal */}
            <div id="signup-modal" tabIndex={-1} aria-hidden="true" data-modal-backdrop="static" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-md max-h-full">
                    {/* Modal content */}
                    <div className="relative bg-white rounded-lg shadow ">
                        {/* Modal header */}
                        <div className="flex items-center justify-between p-4 md:p-5 rounded-t">
                            <h3 className="text-xl font-semibold text-gray-900">
                                Créer un compte
                            </h3>
                        </div>
                        {/* Modal body */}
                        <div className="p-4 md:p-5">
                            <form onSubmit={handleSubmit} className="space-y-4" action="#">
                                <div>
                                    <label htmlFor="email-signup" className="block mb-2 text-sm font-medium text-gray-900 ">Adresse email</label>
                                    <input onChange={ handleChange } value={ values.email } type="email" name="email" id="email-signup" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="exemple@gmail.com" autoComplete="email" />
                                </div>
                                {errors.email && <div className="error">{errors.email}</div>}

                                <div>
                                    <label htmlFor="password-signup" className="block mb-2 text-sm font-medium text-gray-900 ">Mot de passe</label>
                                    <input onChange={ handleChange } value={ values.password } type="password" name="password" id="password-signup" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2."/>
                                </div>
                                {errors.password && <div className="error">{errors.password}</div>}

                                <div>
                                    <label htmlFor="confirm-signup" className="block mb-2 text-sm font-medium text-gray-900 ">Confirmer le mot de passe</label>
                                    <input onChange={ handleChange } value={ values.confirm } type="password" name="confirm" id="confirm-signup" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                </div>
                                {errors.confirm && <div className="error">{errors.confirm}</div>}

                                <div className="text-sm font-medium text-gray-500">
                                    Déjà un compte? <a href="#" className="text-blue-700 hover:underline">Se connecter</a>
                                </div>

                                <div className="flex gap-4 justify-end">
                                    <button type="button" className=" text-white bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" data-modal-hide="signup-modal">
                                        Annuler
                                    </button>
                                    <button type="submit" className=" text-white bg-custom-287581 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" data-modal-hide="signup-modal">Créer le compte</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}