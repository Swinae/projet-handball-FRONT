import IEventInterface from "../interfaces/EventInterface";
import { useApi } from "../hooks/useApi";

const api = useApi()

export async function getEvents(): Promise<any> {
    const { data } = await api.get(`event`);
    return data;
}

export async function getEventById(eventId: number): Promise<IEventInterface | undefined> {
    const { data } = await api.get(`${eventId}/:id`)
    return data
}

export async function postEvents(event: IEventInterface): Promise<any> {
    const postEvent = await api.post('event', event)
    return postEvent
}

export async function putEvents(modifiedEvent: IEventInterface): Promise<any> {
    const eventId = modifiedEvent.id
    const updatedEvent = await api.put(`event/:${eventId}`)
    return updatedEvent
}

export async function deleteEvent(eventId: number): Promise<any> {
    const deletedEvent = await api.delete(`event/:${eventId}`)
    return deletedEvent
}