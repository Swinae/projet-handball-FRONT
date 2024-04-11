import IEventInterface from "../../services/interfaces/EventInterface"

interface EventProps {
    eventCategory: IEventInterface
}

export default function CategoryTag(props: EventProps) {

    const { eventCategory } = props
    let categoryTagColor = ''
    switch (eventCategory.category) {
        case 'Match':
            categoryTagColor = 'bg-red-600';
            break;
        case "Entraînement":
            categoryTagColor = "bg-custom-FF7D00";
            break;
        case "Apéro":
            categoryTagColor = "bg-[#78290F]";
            break;
        default:
            categoryTagColor = "bg-gray-500";
    }


    return (
        <>
            <div className={`category ${categoryTagColor} top-4 left-4 py-1 px-4 rounded-full text-white w-fit`}>
                {eventCategory?.category}
            </div>
        </>
    )
}

