import IEventInterface from "../interfaces/EventInterface";
import { useApi } from "../hooks/useApi";

const api = useApi()

export async function getEvents(): Promise<any> {
    const { data } = await api.get(`event`);
    return data;
}

export async function getEventById(eventId: number): Promise<IEventInterface> {
    const { data } = await api.get(`event/${eventId}`)
    return data
}

export async function postEvents(event: Omit<IEventInterface, 'id' | 'created_at'>): Promise<IEventInterface> {
    console.log('event :', event);
    const { data } = await api.post('event', event)
    return data
}

export async function putEvents(modifiedEvent: IEventInterface): Promise<IEventInterface> {
    const eventId = modifiedEvent.id
    const { data }  = await api.patch(`event/${eventId}`, modifiedEvent)
    return data
}

export async function deleteEvent(eventId: number): Promise<IEventInterface> {
    const { data }  = await api.delete(`event/${eventId}`)
    return data
}