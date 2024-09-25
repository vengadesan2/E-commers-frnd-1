import axios from 'axios'

const AxiosService = axios.create({
    baseURL: "https://e-commers-back.onrender.com",
    // baseURL:"https://chillhub.onrender.com",
    headers : {
        "Content-Type" : "application/json",
    }
})

AxiosService.interceptors.request.use((config)=>{
    // const token = localStorage.getItem('token')
    // if(token){
    //     config.headers.Authorization = `Bearer ${token}`
    // }
    return config
},(error)=>{
    return Promise.reject(error)
})

export default AxiosService
