import IUserInterface from "./UserInterface";

export interface IExtendedUserInterface extends IUserInterface {
  phone_nomber: string
  description:string
  last_connected : Date
  refreshToken : string
  created_at: Date
  updated_at : Date
}