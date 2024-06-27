import { useApi } from "../hooks/useApi";
import IMatchInterface from "../interfaces/MatchInterface";

const api = useApi()

export async function getMatchs(): Promise<any> {
    const { data } = await api.get(`match`);
    return data;
}

export async function getMatchById(matchId: number): Promise<IMatchInterface> {
    const { data } = await api.get(`match/${matchId}`)
    return data
}

export async function postMatchs(match: Omit<IMatchInterface, 'id' | 'created_at'>): Promise<IMatchInterface> {
    console.log('match :', match);
    const { data } = await api.post('match', match)
    return data
}

export async function putMatchs(modifiedMatch: IMatchInterface): Promise<IMatchInterface> {
    const matchId = modifiedMatch.id
    const { data }  = await api.patch(`match/${matchId}`, modifiedMatch)
    return data
}

export async function deleteMatch(matchId: number): Promise<IMatchInterface> {
    const { data }  = await api.delete(`match/${matchId}`)
    return data
}