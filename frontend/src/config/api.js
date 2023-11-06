import axios from 'axios'

const backend = axios.create({
    baseURL: 'http://localhost:8080', 
  });

  const getToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
      return 'Bearer ' + token;
    }
    return null
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
      throw error
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
        throw error
    }
}

export const createDirector = async (director) => {
    try {
      const token = getToken();
      const response = await backend.post('/director/director', director, {
        headers: {
          'Authorization': token,
        },
      })
      return response.data;
    }catch(error){
      throw error
    }
}

export const getDirector = async (id) => {
  try {
    const token = getToken();
    const response = await backend.get(`/director/director/${id}`, {
      headers: {
        'Authorization': token,
      },
    })
    return response.data;
  }catch(error){
    throw error
  }
}

export const updateDirector = async (id,director) => {
  try {
    const token = getToken();
    const response = await backend.put(`/director/director/${id}`,director, {
      headers: {
        'Authorization': token,
      },
    })
    return response.data;
  }catch(error){
    throw error
  }
}

export const deleteDirector = async (id) => {
  try {
    const token = getToken();
    const response = await backend.delete(`/director/director/${id}`, {
      headers: {
        'Authorization': token,
      },
    })
    return response.data;
  }catch(error){
    throw error
  }
}

export const createFilm = async (film) => {
  try {
    const token = getToken();
    const response = await backend.post('/pelicula/pelicula', film, {
      headers: {
        'Authorization': token,
      },
    })
    return response.data;
  }catch(error){
    throw error
  }
}


export const getfilms = async () => {
  try {
      const token = getToken();
      const response = await backend.get('/pelicula/peliculas', {
        headers: {
          'Authorization': token,
        },
      })
      return response.data;
  }catch(error){
      throw error
  }
}

export const getFilm = async (id) => {
  try {
    const token = getToken();
    const response = await backend.get(`/pelicula/pelicula/${id}`, {
      headers: {
        'Authorization': token,
      },
    })
    return response.data;
  }catch(error){
    throw error
  }
}

export const deleteFilm = async (id) => {
  try {
    const token = getToken();
    const response = await backend.delete(`/pelicula/pelicula/${id}`, {
      headers: {
        'Authorization': token,
      },
    })
    return response.data;
  }catch(error){
    throw error
  }
}

export const updateFilm = async (id,film) => {
  try {
    const token = getToken();
    const response = await backend.put(`/pelicula/pelicula/${id}`,film, {
      headers: {
        'Authorization': token,
      },
    })
    return response.data;
  }catch(error){
    throw error
  }
}