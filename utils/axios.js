import axios from 'axios'
import Cookie from 'js-cookie'

const customAxios = axios.create({
    baseURL: "https://virtserver.swaggerhub.com/hqms/FDN-WP/"
})

customAxios.interceptors.request.use(
    (config) => {
        const tokenCookie = Cookie.get('token')
        if(tokenCookie){
            config.headers['Authorization'] = 'Bearer ' + tokenCookie 
        }
        return config;
    },
    (error)=> {
        Promise.reject(error)
    }
)

export {customAxios}