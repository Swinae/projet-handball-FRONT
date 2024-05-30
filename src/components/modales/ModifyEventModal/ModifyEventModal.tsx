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

    
    const convertToISO8601 = (datetimeLocal: string) => {
        const date = new Date(datetimeLocal);
        return date.toISOString();
    };

    let modifiedEventSchema = yup.object({
        img: yup.mixed(),
        title: yup.string(),
        location: yup.string(),
        start_time: yup.string(),
        end_time: yup.string(),
        type: yup.string(),
        content: yup.string()
    });

    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: modifiedEvent,
        // enableReinitialize: true permet de mettre à jour les initialValues quand event obtenue en props change. setModifiedEvent(event) -> change modifiedEvent -> change les initials values
        enableReinitialize: true,
        validationSchema: modifiedEventSchema,
        onSubmit: async values => {
            const transformedValues = {
                ...values,
                start_time: convertToISO8601(values.start_time),
                end_time: convertToISO8601(values.end_time),
            };

            await putEvents(transformedValues);
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
                <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="img" className="block mb-2 text-sm font-medium text-gray-900 ">Ajouter une image</label>
                                <input
                                    onChange={handleChange}
                                    value={values.img}
                                    type="text"
                                    name="img"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    accept=".jpg, .png, .svg"
                                />
                                {errors.img && <div className="error">{errors.img}</div>}
                            </div>

                            <div>
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 ">Titre</label>
                                <input
                                    onChange={handleChange}
                                    value={values.title}
                                    type="text"
                                    name="title"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Titre de l'évenement"
                                />
                                {errors.title && <div className="error">{errors.title}</div>}
                            </div>

                            <div>
                                <label htmlFor="adress" className="block mb-2 text-sm font-medium text-gray-900 ">Lieu de l'évènement</label>
                                <input
                                    onChange={handleChange}
                                    value={values.adress}
                                    type="text"
                                    name="adress"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="ex: Winterfell"
                                />
                                {errors.adress && <div className="error">{errors.adress}</div>}
                            </div>

                            <div className='flex gap-4'>
                                <div className='flex-1'>
                                    <label htmlFor="start_time" className="block mb-2 text-sm font-medium text-gray-900 ">Date et heure de début</label>
                                    <input
                                        onChange={handleChange}
                                        value={values.start_time}
                                        type="datetime-local"
                                        name="start_time"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="10h00"
                                    />
                                    {errors.start_time && <div className="error">{errors.start_time}</div>}
                                </div>

                                <div className='flex-1'>
                                    <label htmlFor="end_time" className="block mb-2 text-sm font-medium text-gray-900 ">Date et heure de fin</label>
                                    <input
                                        onChange={handleChange}
                                        value={values.end_time}
                                        type="datetime-local"
                                        name="end_time"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="12h00"
                                    />
                                    {errors.end_time && <div className="error">{errors.end_time}</div>}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900 ">Type d'évènement</label>
                                <select
                                    value={values.type}
                                    onChange={handleChange}
                                    name="type"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                >
                                    <option value="" disabled>Selectionnez un type d'évènement</option>
                                    <option value="MATCH">Match</option>
                                    <option value="ENTRAINEMENT">Entraînement</option>
                                    <option value="APERO">Apéro</option>
                                </select>
                                {errors.type && <div className="error">{errors.type}</div>}
                            </div>

                            <div>
                                <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                                <textarea
                                    onChange={handleChange}
                                    value={values.content}
                                    name="content"
                                    rows="4"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Décrivez l'évènement"
                                />
                                {errors.content && <div className="error">{errors.content}</div>}
                            </div>

                            <div className="flex gap-4 justify-end">
                                <button onClick={() => setOpenModal(false)} type="button" className="text-white bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                    Annuler
                                </button>
                                <button type="submit" className="text-white bg-custom-287581 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                    Modifier l'évènement
                                </button>
                            </div>
                        </form>
                </Modal.Body>
            </Modal>
        </>
    )
}