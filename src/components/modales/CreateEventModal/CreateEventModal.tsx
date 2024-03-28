import * as yup from 'yup';
import { useFormik } from "formik"
import { useState } from "react";
import { postEvents } from '../../../services/api/Events';
import IEventInterface from '../../../services/interfaces/EventInterface';

interface CreateEventModalProps {
    updateEventsList(): void;
}


export default function CreateEventModal({ updateEventsList } : CreateEventModalProps) {

    const [newEvent, setNewEvent] = useState<IEventInterface>({
        img: '',
        title: '',
        date: '',
        location: '',
        start_time: '',
        end_time: '',
        category: '',
        description: ''
    })

    let newEventSchema = yup.object({
        img: yup.mixed().required(),
        title: yup.string().required(),
        date: yup.string().required(),
        location: yup.string().required(),
        start_time: yup.string().required(),
        end_time: yup.string().required(),
        category: yup.string().required(),
        description: yup.string().required(),
    });

    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: newEvent,
        validationSchema: newEventSchema,
        onSubmit: async values => {
            setNewEvent({
                img: values.img,
                title: values.title,
                date: values.date,
                location: values.location,
                start_time: values.start_time,
                end_time: values.end_time,
                category: values.category,
                description: values.description
            });
            
            await postEvents(values);
            updateEventsList();
        }
    })

    return (
        <>
            {/* Main modal */}
            <div id="create-event-modal" tabIndex={-1} aria-hidden="true" data-modal-backdrop="static" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-md max-h-full">
                    {/* Modal content */}
                    <div className="relative bg-white rounded-lg shadow ">
                        {/* Modal header */}
                        <div className="flex items-center justify-between p-4 md:p-5 rounded-t">
                            <h3 className="text-xl font-semibold text-gray-900">
                                Ajouter un évènement
                            </h3>
                        </div>
                        {/* Modal body */}
                        <div className="p-4 md:p-5">
                            <form onSubmit={handleSubmit} className="space-y-4" action="#">
                                <div>
                                    <label htmlFor="img" className="block mb-2 text-sm font-medium text-gray-900 ">Ajouter une image</label>
                                    <input onChange={handleChange} value={values?.img} type="file" name="img" id="event-img" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" accept=".jpg, .png, .svg" />
                                </div>
                                {errors.img && <div className="error">{errors.img}</div>}
                                <div>
                                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 ">Titre</label>
                                    <input onChange={handleChange} value={values?.title} type="text" name="title" id="event-title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Titre de l'évenement" />
                                </div>
                                {errors.title && <div className="error">{errors.title}</div>}
                                <div>
                                    <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 ">Date de l'évènement</label>
                                    <input onChange={handleChange} value={values?.date} type="date" name="date" id="event-date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" />
                                </div>
                                {errors.date && <div className="error">{errors.date}</div>}
                                <div>
                                    <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 ">Lieu de l'évènement</label>
                                    <input onChange={handleChange} value={values?.location} type="text" name="location" id="event-location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="ex: Winterfell" />
                                </div>
                                {errors.location && <div className="error">{errors.location}</div>}

                                <div className='flex gap-4'>
                                    <div className='flex-1'>
                                        <label htmlFor="start_time" className="block mb-2 text-sm font-medium text-gray-900 ">Heure de début</label>
                                        <input onChange={handleChange} value={values?.start_time} type="time" name="start_time" id="event-start_time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="10h00" />
                                        {errors.start_time && <div className="error">{errors.start_time}</div>}
                                    </div>
                                    
                                    <div className='flex-1'>
                                        <label htmlFor="end_time" className="block mb-2 text-sm font-medium text-gray-900 ">Heure de fin</label>
                                        <input onChange={handleChange} value={values?.end_time} type="time" name="end_time" id="event-end_time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="12h00" />
                                        {errors.end_time && <div className="error">{errors.end_time}</div>}
                                    </div>                                    
                                </div>

                                <div>
                                    <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 ">Type d'évènement</label>
                                    <select onChange={handleChange} name="category" id="event-category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        <option value="" disabled selected>Selectionnez un type d'évènement</option>
                                        <option value="Match">Match</option>
                                        <option value="Entraînement">Entraînement</option>
                                        <option value="Apéro">Apéro</option>
                                    </select>
                                </div>
                                {errors.category && <div className="error">{errors.category}</div>}
                                <div>
                                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                                    <textarea onChange={handleChange} value={values?.description} name="description" id="event-description" rows="4" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Décrivez l'évènement" />
                                </div>
                                {errors.end_time && <div className="error">{errors.end_time}</div>}


                                <div className="flex gap-4 justify-end">
                                    <button type="button" className=" text-white bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" data-modal-hide="create-event-modal">
                                        Annuler
                                    </button>
                                    <button type="submit" className=" text-white bg-custom-287581 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" data-modal-hide="create-event-modal">Créer l'évènement</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}