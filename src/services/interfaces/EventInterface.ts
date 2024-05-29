export default interface IEventInterface {
    id: number;
    type: string
    title: string;
    content: string;
    adress: string;
    img: string;
    start_time: string;
    end_time: string;
    created_at: string;
    updated_at?: string;
    creator_id: number;
    match_id?: number;
}
