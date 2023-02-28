import axios from "axios";

export const  api = axios.create({
    baseURL: 'http://192.168.0.174:9000/api',
    

});

api.interceptors.request.use((request) => {

    const token = localStorage.getItem("TOKEN");
    
    if(token) {
        request.headers.Authorization = `Bearer ${token}`;
    }
    return request; 
});

export default api;