
export default function EventCard(props: any) {

    const { eventInfo } = props
    console.log(eventInfo);
    

    return (
        <>
            <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="category absolute z-10 bg-red-600 top-4 left-4 py-1 px-4 rounded-full text-white">
                    Match
                </div>
                <a href="#">
                    <img className="rounded-t-lg" src={eventInfo.img} alt="" />
                </a>

                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{eventInfo.title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{eventInfo.description}</p>
                    <div className="flex align-middle justify-between">
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-custom-287581 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Détails
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                        <p className="self-center">{eventInfo.date}</p>
                    </div>
                </div>
            </div>
        </>
    )
}