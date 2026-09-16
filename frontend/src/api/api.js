const API_PATH = import.meta.env.VITE_API_PATH;

export const request = async (endpoint, options = {}) =>{
   
    const response = await fetch(`${API_PATH}${endpoint}`, {
        ...options,
        headers:{
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
    const data = await response.json();
    if(!response.ok){
        throw new Error(data.message || 'Something went wrong');
    }   
    return data;
}
export const api = {
  get: (endpoint) => {
    return request(endpoint, {
      method: "GET",
    });
  },

  post: (endpoint, data) => {
    return request(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  put: (endpoint, data) => {
    return request(endpoint, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  },

  patch: (endpoint, data) => {
    return request(endpoint, {
      method: "PATCH",
      body: JSON.stringify(data),
    });
  },

  delete: (endpoint) => {
    return request(endpoint, {
      method: "DELETE",
    });
  },
};