import { useParams } from "react-router-dom";
import { getEventById } from "../../services/api/Events";
import { useEffect, useState } from "react";
import IEventInterface from "../../services/interfaces/EventInterface";
import CategoryTag from "../../components/CategoryTag/CategoryTag";

export default function EventDetailsPage() {

    const { idEvent } = useParams()
    const [eventInfo, setEventInfo] = useState<IEventInterface>()

    useEffect(() => {
        async function loadEvent() {
            try {
                const response = await getEventById(Number(idEvent))
                setEventInfo(response)
            } catch (error) {
                console.error(error)
            }
        }

        loadEvent()

    },[])

    return (
        <>
            <div className="applied-padding">
                <article className="my-4 flex flex-col gap-4 max-w-screen-md m-auto">
                    <h2 className="text-4xl font-semibold">{eventInfo?.title}</h2>
                    <img className="rounded-lg" src={eventInfo?.img} alt="" />
                    <div className="flex justify-between items-center">
                        <p><CategoryTag eventCategory={eventInfo} /></p>
                        <time className="text-right mt-2">{eventInfo?.created_at.split("T")[0].split("-").reverse().join("/")}</time>
                    </div>
                    <p>{eventInfo?.content}</p>
                </article>
            </div>

        </>
    )
}