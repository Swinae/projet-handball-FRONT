import axios, { AxiosInstance } from "axios";

export function useApi() {

  const headers = {'Content-Type': 'application/json','Accept': 'application/json'};

  const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_DEV,

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

      if (error.response && error.response.status === 401 && error.response.data.message === "Token expired") {
        const originalRequest = error.config;

        let refreshToken = localStorage.getItem('refreshToken');

        refreshToken ? refreshToken = JSON.parse(refreshToken) : null;

        if (refreshToken) {
          try {
            // Faire une requête pour obtenir un nouveau token en envoyant le refreshToken dans le header
            const { data } = await axios.post(`${import.meta.env.VITE_APP_PROD}/auth/refreshToken`, {}, {
              headers: {
                'Authorization': `Bearer ${refreshToken}`
              }
            });

            // Mettre à jour le token dans le local storage
            localStorage.setItem('token', JSON.stringify(data.token));
            localStorage.setItem('refreshToken', JSON.stringify(data.refreshToken));

            // Mettre à jour le header Authorization de la requête initiale
            originalRequest.headers['Authorization'] = `Bearer ${data.token}`;

            // Réessayer la requête initiale
            return api(originalRequest);
          } 
          catch (refreshError) {
            // Gérer les erreurs de rafraîchissement de token (ex. rediriger vers la page de connexion)
            console.error('Refresh token failed:', refreshError);
          }
        }
      }

      if (error.response && error.response.status === 500) {

      }

      return Promise.reject(error);
    }
  );

  return api;
}