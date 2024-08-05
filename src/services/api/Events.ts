import IEventInterface from "../interfaces/EventInterface";
import { useApi } from "../hooks/useApi";

const api = useApi()

export async function getEvents(): Promise<IEventInterface[]> {
    const { data } = await api.get(`event`);
    return data;
}

export async function getEventById(eventId: number): Promise<IEventInterface> {
    console.log('je suis la');
    const { data } = await api.get(`${eventId}/:id`)
    console.log(data);
    return data
}

export async function postEvents(event: IEventInterface): Promise<IEventInterface> {
    const { data } = await api.post('event', event)
    return data
}

export async function putEvents(modifiedEvent: IEventInterface): Promise<IEventInterface> {
    const eventId = modifiedEvent.id
    const { data }  = await api.put(`event/:${eventId}`)
    return data
}

export async function deleteEvent(eventId: number): Promise<IEventInterface> {
    const { data }  = await api.delete(`event/:${eventId}`)
    return data
}