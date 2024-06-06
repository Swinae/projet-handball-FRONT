import { useFormik } from "formik"
import { ISignupForm } from "../../../services/interfaces/SignupForm";
import { useState } from "react";
import * as yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(yup);
import './SignupModal.css'
import { signup } from "../../../services/api/Signup";
import { Button, CustomFlowbiteTheme, Flowbite, Modal } from "flowbite-react";

export default function SignupModal() {
    
    const customTheme: CustomFlowbiteTheme = {
        button: {
            color: {
                default: "text-white",
            },
        }
    };
    
    const [form, setForm] = useState<ISignupForm>({
        email: '',
        password: '',
        confirm: ''
    })

    const [openModal, setOpenModal] = useState(false);

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
        onSubmit: async values => {
            await signup(values)
        }
    })

    return (
        <>
            <Flowbite theme={{ theme: customTheme }}>
                <Button color="default" onClick={() => setOpenModal(true)}>Créer un compte</Button>
                <Modal show={openModal} onClose={() => setOpenModal(false)}>
                    <Modal.Header>Créer un compte</Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleSubmit} className="space-y-4" action="#">
                            <div>
                                <label htmlFor="email-signup" className="block mb-2 text-sm font-medium text-gray-900 ">Adresse email</label>
                                <input onChange={handleChange} value={values.email} type="email" name="email" id="email-signup" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="exemple@gmail.com" autoComplete="email" />
                            </div>
                            {errors.email && <div className="error">{errors.email}</div>}

                            <div>
                                <label htmlFor="password-signup" className="block mb-2 text-sm font-medium text-gray-900 ">Mot de passe</label>
                                <input onChange={handleChange} value={values.password} type="password" name="password" id="password-signup" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2." />
                            </div>
                            {errors.password && <div className="error">{errors.password}</div>}

                            <div>
                                <label htmlFor="confirm-signup" className="block mb-2 text-sm font-medium text-gray-900 ">Confirmer le mot de passe</label>
                                <input onChange={handleChange} value={values.confirm} type="password" name="confirm" id="confirm-signup" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                            </div>
                            {errors.confirm && <div className="error">{errors.confirm}</div>}

                            <div className="text-sm font-medium text-gray-500">
                                Déjà un compte? <a href="#" className="text-blue-700 hover:underline">Se connecter</a>
                            </div>

                            <div className="flex gap-4 justify-end">
                                <button type="button" onClick={() => setOpenModal(false)} className=" text-white bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" data-modal-hide="signup-modal">
                                    Annuler
                                </button>
                                <button type="submit" className=" text-white bg-custom-287581 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" data-modal-hide="signup-modal">Créer le compte</button>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
            </Flowbite>
        </>
    )
}