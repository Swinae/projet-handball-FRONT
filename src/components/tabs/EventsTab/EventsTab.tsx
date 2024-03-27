import { Button } from "flowbite-react";
import CreateEventModal from "../../modales/CreateEventModal/CreateEventModal";

export default function EventsTab() {

    return (
        <>
            <button type="button" data-modal-target="create-event-modal" data-modal-toggle="create-event-modal" className="text-white bg-custom-FF7D00 hover:bg-[#e77000] focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Ajouter un évènement</button>
                <CreateEventModal />
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-white uppercase bg-custom-15616D dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Titre
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Type
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Actions</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Match amical contre les White Walkers Handball
                            </th>
                            <td className="px-6 py-4">
                                <div className="category bg-red-600 top-4 left-4 py-1 px-4 rounded-full text-white w-fit">
                                    Match
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                28/03/24
                            </td>
                            <td className="px-6 py-4 text-right flex gap-2 justify-end">
                                <Button>Modifier</Button>
                                <Button color="failure">Supprimer</Button>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Match amical contre les White Walkers Handball
                            </th>
                            <td className="px-6 py-4">
                                <div className="category bg-red-600 top-4 left-4 py-1 px-4 rounded-full text-white w-fit">
                                    Match
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                28/03/24
                            </td>
                            <td className="px-6 py-4 text-right flex gap-2 justify-end">
                                <Button>Modifier</Button>
                                <Button color="failure">Supprimer</Button>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Match amical contre les White Walkers Handball
                            </th>
                            <td className="px-6 py-4">
                                <div className="category bg-red-600 top-4 left-4 py-1 px-4 rounded-full text-white w-fit">
                                    Match
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                28/03/24
                            </td>
                            <td className="px-6 py-4 text-right flex gap-2 justify-end">
                                <Button>Modifier</Button>
                                <Button color="failure">Supprimer</Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>




    );
}


