export default interface IEventInterface {
    id: number;
    type: string
    title: string;
    content: string;
    adress: string;
    img: string;
    start_time: string;
    end_time: string;
    created_at: Date;
    updated_at?: Date;
    creator_id: number;
    match_id?: number;
}
