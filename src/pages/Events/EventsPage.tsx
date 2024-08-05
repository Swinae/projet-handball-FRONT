import { useEffect, useState } from "react";
import EventCard from "../../components/Cards/EventCard";
//import { getEvents } from "../../services/api/Events";
import IEventInterface from "../../services/interfaces/EventInterface";


export default function EventsPage() {

    const [events, _setEvents] = useState<any>([])

    useEffect(() => {
        async function loadEvents() {
            /* const eventList = await getEvents()
            setEvents(eventList) */
        }
        
        loadEvents()

    }, [])


    return (
        <>
            <div className="my-4 grid grid-cols-3 gap-8">
                {events.map((event: IEventInterface, index: number) =>
                    (
                        <EventCard key={index} eventInfo={event} />
                    ))
                }
            </div>
        </>
    )
}