import { useApi } from "../hooks/useApi";
import { DataConnexion } from "../interfaces/DataConnexion";
import { IExtendedUserInterface } from "../interfaces/ExtendedUserInterface";

const api = useApi();

export async function checkAuthentification(userLoginData: DataConnexion): Promise<{ user: IExtendedUserInterface, token: string, refreshToken: string }> {
  const { data } = await api.post(`auth/login`, userLoginData);
  return data;
}