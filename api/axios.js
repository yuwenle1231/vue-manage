import axios from 'axios'
import config from './config'

const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

class httpRequest {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }

    getInsideConfig() {
        //定义axios相关的配置
        const config = {
            baseUrl: this.baseUrl,
            headers: {}
        }
        return config
    }
    interceptors(instance) {
        // 添加请求拦截器
        instance.interceptors.request.use(function (config) {
            // 在发送请求之前做些什么
            return config;
        }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });

        // 添加响应拦截器
        instance.interceptors.response.use(function (response) {
            console.log('````````````',response);
            // 对响应数据做点什么
            return response;
        }, function (error) {
            console.log('@@@@@@@@',error);
            // 对响应错误做点什么
            return Promise.reject(error);
        });
    }
    request(options){
        const instance = axios.create()
        options = {...(this.getInsideConfig()),...options}
        this.interceptors(instance)
        return instance(options)
    }
}

export default new httpRequest(baseUrl)