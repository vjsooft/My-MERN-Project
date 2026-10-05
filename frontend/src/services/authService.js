import api from '../api/axiosInstance'

export const userRegister = async (loginData) => {
  const response = await api.post( "/signup",loginData );
  return response.data;
};

export const userLogin = async (loginData) => {
  const response = await api.post("/login",loginData);
  return response.data;
};
export const getProfile = async () => {
  const response = await api.get("/profile");
  return response.data;
};
export const userLogout = async () => {
  const response = await api.post("/logout");
  return response.data;
};