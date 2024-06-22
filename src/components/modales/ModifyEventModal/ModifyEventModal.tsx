import * as yup from 'yup';
import { useFormik } from "formik"
import { useEffect, useState } from "react";
import { putEvents } from '../../../services/api/Events';
import IEventInterface from '../../../services/interfaces/EventInterface';
import { Button, Modal } from 'flowbite-react';

interface ModifyEventModalProps {
    updateEventsList(): void;
    event: IEventInterface
}

export default function ModifyEventModal(props: ModifyEventModalProps) {
    const { event, updateEventsList } = props
    const [openModal, setOpenModal] = useState(false)
    const [modifiedEvent, setModifiedEvent] = useState<IEventInterface>(event)

    let modifiedEventSchema = yup.object({
        img: yup.mixed(),
        title: yup.string(),
        date: yup.string(),
        location: yup.string(),
        start_time: yup.string(),
        end_time: yup.string(),
        type: yup.string(),
        description: yup.string(),
    });

    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: modifiedEvent,
        // enableReinitialize: true permet de mettre à jour les initialValues quand event obtenue en props change. setModifiedEvent(event) -> change modifiedEvent -> change les initials values
        enableReinitialize: true,
        validationSchema: modifiedEventSchema,
        onSubmit: async values => {
            await putEvents(values);
            updateEventsList();
            setOpenModal(false)
        }

    })

    useEffect(() => {
        setModifiedEvent(event)
    }, [event])

    return (
        <>
            {/* Main modal */}
            <Button onClick={() => setOpenModal(true)}>Modifier</Button>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Modifier l'évènement</Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit} className="space-y-4" action="#">
                        <div>
                            <label htmlFor="img" className="block mb-2 text-sm font-medium text-gray-900 ">Ajouter une image</label>

                            {/* !!!! Changer le type d'input en 'file' quand relier à la DB. Obligé de mettre en text pour faire fonctionner avec les fakers !!!! */}
                            <input onChange={handleChange} value={values.img} type="text" name="img" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" accept=".jpg, .png, .svg" />

                        </div>
                        {errors.img && <div className="error">{errors.img}</div>}
                        <div>
                            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 ">Titre</label>
                            <input onChange={handleChange} value={values.title ? values.title : modifiedEvent.title} type="text" name="title"className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Titre de l'évenement" />
                        </div>
                        {errors.title && <div className="error">{errors.title}</div>}
                        <div>
                            <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 ">Date de l'évènement</label>
                            <input onChange={handleChange} value={values.date ? values.date : modifiedEvent.date} type="date" name="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" />
                        </div>
                        {errors.date && <div className="error">{errors.date}</div>}
                        <div>
                            <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 ">Lieu de l'évènement</label>
                            <input onChange={handleChange} value={values.location ? values.location : modifiedEvent.location} type="text" name="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="ex: Winterfell" />
                        </div>
                        {errors.location && <div className="error">{errors.location}</div>}

                        <div className='flex gap-4'>
                            <div className='flex-1'>
                                <label htmlFor="start_time" className="block mb-2 text-sm font-medium text-gray-900 ">Heure de début</label>
                                <input onChange={handleChange} value={values.start_time ? values.start_time : modifiedEvent.start_time} type="time" name="start_time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="10h00" />
                                {errors.start_time && <div className="error">{errors.start_time}</div>}
                            </div>

                            <div className='flex-1'>
                                <label htmlFor="end_time" className="block mb-2 text-sm font-medium text-gray-900 ">Heure de fin</label>
                                <input onChange={handleChange} value={values.end_time ? values.end_time : modifiedEvent.end_time} type="time" name="end_time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="12h00" />
                                {errors.end_time && <div className="error">{errors.end_time}</div>}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 ">Type d'évènement</label>
                            <select defaultValue={values.type ? values.type : modifiedEvent.type} onChange={handleChange} name="type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                <option value="Choose" disabled>Selectionnez un type d'évènement</option>
                                <option value="Match">Match</option>
                                <option value="Entraînement">Entraînement</option>
                                <option value="Apéro">Apéro</option>
                            </select>
                        </div>
                        {errors.type && <div className="error">{errors.type}</div>}
                        <div>
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                            <textarea onChange={handleChange} value={values.description ? values.description : modifiedEvent.description} name="description"rows={4} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Décrivez l'évènement" />
                        </div>
                        {errors.end_time && <div className="error">{errors.end_time}</div>}


                        <div className="flex gap-4 justify-end">
                            <button onClick={() => setOpenModal(false)} type="button" className=" text-white bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Annuler
                            </button>
                            <button type="submit" className=" text-white bg-custom-287581 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Modifier l'évènement
                            </button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}