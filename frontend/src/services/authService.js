import api from '../api/axiosInstance'

export const userRegister = async (loginData) => {
  const response = await api.post( "/user/signup",loginData );

  return response.data;
};
// export const userRegister = (userData) =>{
//     return api.post('/signup', userData);
// }

export const userLogin = async (loginData) => {
  const response = await api.post("/user/login",loginData);

  return response.data;
};