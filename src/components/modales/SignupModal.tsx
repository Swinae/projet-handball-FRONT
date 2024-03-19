export default function SignupModal() {
    return (
        <>
            {/* Modal toggle */}
            <button data-modal-target="signup-modal" data-modal-toggle="signup-modal" className="block text-white hover:underline font-medium  text-sm px-5 py-2.5 text-center" type="button">
                Créer un compte
            </button>

            {/* Main modal */}
            <div id="signup-modal" tabIndex={-1} aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
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
                            <form className="space-y-4" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Adresse email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@company.com" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Mot de passe</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2." required />
                                </div>
                                <div>
                                    <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 ">Confirmer le mot de passe</label>
                                    <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                                </div>
                                <div className="text-sm font-medium text-gray-500">
                                    Déjà un compte? <a href="#" className="text-blue-700 hover:underline">Se connecter</a>
                                </div>

                                <div className="flex gap-4 justify-end">
                                    <button type="button" className=" text-white bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" data-modal-hide="signup-modal">
                                        Annuler
                                    </button>
                                    <button type="submit" className=" text-white bg-custom-287581 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Créer le compte</button>
                                </div>                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}