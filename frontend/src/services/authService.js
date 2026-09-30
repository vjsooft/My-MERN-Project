import api from '../api/axiosInstance'

export const userRegister = async (loginData) => {
  const response = await api.post( "/signup",loginData );
  return response.data;
};

export const userLogin = async (loginData) => {
  const response = await api.post("/login",loginData);
  return response.data;
};
export const userLogout = async (loginData) => {
  const response = await api.post("/logout",loginData);
  return response.data;
};