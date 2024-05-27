import axios, { AxiosInstance } from "axios";

export function useApi() {

  const headers = { 'Access-Control-Allow-Origin': '*' };

  const api: AxiosInstance = axios.create({
    //baseURL: import.meta.env.VITE_APP_DEV,
    baseURL: import.meta.env.VITE_APP_PROD,
    
    //headers
    headers
  })

  api.interceptors.request.use((config) => {
    //Ajouter le Token dans le header

    let token = localStorage.getItem("token");

    token ? token = JSON.parse(token) : null;

    token ? config.headers['Authorization'] = `Bearer ${token}` : ''

    return config;
  })

  api.interceptors.response.use(

    (response) => response,

    async (error) => {

      if (error.response && error.response.status === 401) {

      }

      if (error.response && error.response.status === 500) {

      }

      return Promise.reject(error)
    }

  )

  return api;
}