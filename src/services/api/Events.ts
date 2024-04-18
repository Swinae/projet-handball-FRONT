//import { useApi } from "../hooks/useApi";
//const api = useApi();
import { eventFaker } from "../../pages/Events/fakerEvents";
import IEventInterface from "../interfaces/EventInterface";

export async function getEvents(): Promise<any> {
    const eventsList = eventFaker
    return eventsList
    //const getEvents = await api.get(`events`);
    //return getEvents;
}

export async function getEventById(eventId: number): Promise<IEventInterface | undefined> {
    const eventById = eventFaker.find((event) => event.id === eventId)
    return eventById
}

export async function postEvents(event: IEventInterface): Promise<any> {
    eventFaker.push(event)
    console.log(eventFaker);
    return eventFaker
    //const postEvent = await api.post(``, event);
    //return postEvent;
}

export async function putEvents(modifiedEvent: IEventInterface): Promise<any> {
    const modifiedEventIndex =  eventFaker.findIndex(({id}) => id === modifiedEvent.id)
    eventFaker[modifiedEventIndex] = modifiedEvent
}

export async function deleteEvent(eventId: number): Promise<any> {
    const deletedEventIndex =  eventFaker.findIndex(({id}) => id === eventId)
    eventFaker.splice(deletedEventIndex, 1) 
    console.log(eventFaker);
}