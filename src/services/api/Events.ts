//import { useApi } from "../hooks/useApi";
//const api = useApi();
import { eventFaker } from "../../pages/Events/fakerEvents";

export async function getEvents(): Promise<any> {
    const eventsList = eventFaker
    return eventsList
    //const getNews = await api.get(`news`);
    //return getNews;
}