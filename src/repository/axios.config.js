import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 30000,
    timeoutErrorMessage: "Server Timed out",
    headers:{
        "Content-Type": "application/json",
        Accept: "application/json"
    },

})

axiosInstance.interceptors.response.use(
    (response)=>{
        return response.data;
    },
    (error)=>{
        // if(error.response.status === 401){
        //     // TODO: 
        // }
        throw error.response.data
    }
)

export default axiosInstance