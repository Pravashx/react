import axiosInstance from "./axios.config";

class HttpService {
    headers;

    getHeader = (config) => {
        this.headers = {}
        if(config && config.file) {
            this.headers ={
                ...this.headers, 
                "Content-Type": "multipart/form-data"
            }
        }
    }

    postRequest = async (url,data={}, config=null) => {
        try {
            this.getHeader(config)
            let response = await axiosInstance.post(url, data, {
                headers: this.headers
            });
            return response;
        } catch(exception) {
            console.log("PostReq: ", exception)
            throw exception;
        }
    }
    getRequest = async (url, config=null) => {
        try {
            this.getHeader(config)
            let response = await axiosInstance.get(url,{
                headers: this.headers
            });
            return response;
        } catch(exception) {
            console.log("GetReq: ", exception)
            throw exception;
        }
    }
}

export default HttpService