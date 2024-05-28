import IEventInterface from "../../services/interfaces/EventInterface"

interface EventProps {
    eventCategory: IEventInterface | undefined
}

export default function CategoryTag(props: EventProps) {

    const { eventCategory } = props
    let categoryTagColor = ''
    switch (eventCategory?.type) {
        case 'MATCH':
            categoryTagColor = 'bg-red-600';
            break;
        case "ENTRAINEMENT":
            categoryTagColor = "bg-custom-FF7D00";
            break;
        case "APERO":
            categoryTagColor = "bg-[#78290F]";
            break;
        default:
            categoryTagColor = "bg-gray-500";
    }

    return (
        <>
            <div className={`category ${categoryTagColor} top-4 left-4 py-1 px-4 rounded-full text-white w-fit`}>
                {eventCategory?.type}
            </div>
        </>
    )
}

