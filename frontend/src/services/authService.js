import {api} from '../api/api'

export const userRegister = (userData) =>{
    return api.post('/signup', userData);
}
export const userLogin = (userData) =>{
    return api.post('/login', userData);
}