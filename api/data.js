import axios from "./axios";
// 定义接口请求？

export const getMenu = (param)=>{
    return axios.request({
        url:'/permission/getMenu',
        method:'post',
        data:param
    })
}

export const getData = () =>{
    return axios.request({
        url:'/home/getData',
    })
}

export const getUser = (params)=>{
    return axios.request({
        url:'/user/getUser',
        method:'get',
        params
    })
}

// export const getMenu = (param)=>{
//     return axios.request({
//         url:'/permission/getMenu',
//         method:'post',
//         data:param
//     })
// }