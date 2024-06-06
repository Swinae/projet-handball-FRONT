
import { Table, TableBody, TableCell, TableRow, Button, CustomFlowbiteTheme, Flowbite } from "flowbite-react";
import { useEffect, useState } from "react";
import { getEvents } from "../../../services/api/Events";
import IEventInterface from "../../../services/interfaces/EventInterface";
import CategoryTag from "../../CategoryTag/CategoryTag";
import { NavLink } from "react-router-dom";


export function EventsTable() {

    const customTheme: CustomFlowbiteTheme = {
        button: {
            color: {
                default: "text-white bg-custom-FF7D00 my-4 mx-auto",
            },
        }
    };

    const [events, setEvents] = useState<IEventInterface[]>([])

    useEffect(() => {
        async function loadEvents() {
            const eventList = await getEvents()
            setEvents(eventList)
        }

        loadEvents()
    }, [])


    return (
        <>
            <h2 className="text-4xl my-4 font-bold">Evènements</h2>
            <div className="overflow-x-auto">
                <Table>
                    <TableBody className="divide-y">
                        {events.sort((a, b) => b.id - a.id).slice(0, 7).map((event: IEventInterface, index: number) => (
                            <TableRow key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <TableCell >
                                    <p className="text-xl font-bold text-black">{event.title}</p>
                                    <p className="line-clamp-2">{event.content}</p>
                                </TableCell>
                                <TableCell className="text-end flex flex-col items-end">
                                    <p>{event.start_time.split("T")[0].split("-").reverse().join("/")}</p>
                                    <p>{<CategoryTag eventCategory={event} />}</p>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Flowbite theme={{ theme: customTheme }}>
                    <NavLink to={'/évènements'}><Button color="default">Voir tous les évènements</Button></NavLink>
                </Flowbite>
            </div>
        </>
    );
}

