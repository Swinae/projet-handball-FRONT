import EventCard from "../../components/Cards/EventCard";

export default function EventsPage() {
    return(
        <>
            <div className="mt-4 grid grid-cols-3 gap-8">
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
            </div>
        </>
    )
}