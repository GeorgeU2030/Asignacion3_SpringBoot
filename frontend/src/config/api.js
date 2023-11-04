import axios from 'axios'

const backend = axios.create({
    baseURL: 'http://localhost:8080', 
  });

  const getToken = () => {
    const token = localStorage.getItem('token'); 
    if (token) {
      return 'Bearer ' + token;
    }
    return null;
  };

export const login = async (formData) => {
    try {
      const response = await backend.post('/auth', {
        username: formData.username,
        password: formData.password,
      });
      console.log(response.data)
      return response.data;
    } catch (error) {
      throw error;
    }
};

export const getdirectors = async () => {
    try {
        const token = getToken();
        const response = await backend.get('/director/directores', {
          headers: {
            'Authorization': token,
          },
        })
        return response.data;
    }catch(error){
        throw error;
    }
}

