import IEventInterface from "../../services/interfaces/EventInterface"

interface EventProps {
    eventCategory: IEventInterface
}

export default function CategoryTag(props: EventProps) {
    
    const { eventCategory } = props

    return (
        <>
            <div className="category bg-red-600 top-4 left-4 py-1 px-4 rounded-full text-white w-fit">
                {eventCategory?.category}
            </div>
        </>
    )
}

