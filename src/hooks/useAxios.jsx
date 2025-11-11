import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  
});

const useAxios = () => {
    // return axiosInstance;
      return (endpoint, params = {}) => axiosInstance.get(endpoint, { params });
}

export default useAxios;