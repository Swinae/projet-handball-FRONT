import { useApi } from "../hooks/useApi";

const api=useApi();

export async function checkAuthentification(userLoginData:any){
  const response = await api.post(``,userLoginData);
  console.log("response :",response)
}