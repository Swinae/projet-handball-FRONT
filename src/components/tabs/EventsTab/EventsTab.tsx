import { Button } from "flowbite-react";
import CreateEventModal from "../../modales/CreateEventModal/CreateEventModal";
import { getEvents } from "../../../services/api/Events";
import { useEffect, useState } from "react";
import IEventInterface from "../../../services/interfaces/EventInterface";
import CategoryTag from "../../CategoryTag/CategoryTag";
import ModifyEventModal from "../../modales/ModifyEventModal/ModifyEventModal";
import DeleteEventModal from "../../modales/DeleteEventModal/DeleteEventModal";

export default function EventsTab() {

    const [events, setEvents] = useState<IEventInterface[]>([])
    const [selectedEvent, setSelectedEvent] = useState<IEventInterface>({
        id: 0,
        img: '',
        title: '',
        date: '',
        location: '',
        start_time: '',
        end_time: '',
        category: '',
        description: ''
    });

    useEffect(() => {
        async function loadEvents() {
            const eventList = await getEvents()
            setEvents(eventList)
        }

        loadEvents()

    }, [events])

    const updateEventsList = async () => {
        const eventList = await getEvents()      
        setEvents([...events, eventList]);
    };

    const handleModifyEvent = (event: IEventInterface) => {
        setSelectedEvent(event);
    };

    return (
        <>
            <button type="button" data-modal-target="create-event-modal" data-modal-toggle="create-event-modal" className="text-white bg-custom-FF7D00 hover:bg-[#e77000] focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Ajouter un évènement</button>
            <CreateEventModal updateEventsList={updateEventsList} />
            <ModifyEventModal event={selectedEvent} updateEventsList={updateEventsList}/>
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
                        {events.map((event: IEventInterface, index: number) =>
                        (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {event?.title}
                                </th>
                                <td className="px-6 py-4">
                                    <CategoryTag eventCategory={ event }/>
                                </td>
                                <td className="px-6 py-4">
                                    {event?.date}
                                </td>
                                <td className="px-6 py-4 text-right flex gap-2 justify-end">
                                    <Button onClick={() => handleModifyEvent(event)} data-modal-target="modify-event-modal" data-modal-toggle="modify-event-modal">Modifier</Button>
                                    <DeleteEventModal eventId={event.id} updateEventsList={updateEventsList}/>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}


