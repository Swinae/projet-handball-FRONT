export default interface IMatchInterface {
    id: number,
    is_home: boolean,
    score_home: number,
    score_visitor: number,
    rival_team: string,
    result: "WIN" | "DRAW" | "LOSE",
    created_at: Date;
    updated_at?: Date;
}