import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://travel-ease-server-kappa.vercel.app',
  // baseURL: 'http://localhost:3000',
  
});

const useAxios = () => {
    // return axiosInstance;
      return (endpoint, params = {}) => axiosInstance.get(endpoint, { params });
}

export default useAxios;