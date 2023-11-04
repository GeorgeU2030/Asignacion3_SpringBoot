import React, { useEffect, useState } from 'react';
import { getdirectors } from '../config/api';

const DirectorList = () => {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
   
    try{
        getdirectors() 
        .then((data) => {
        setDirectors(data);
      })
    }catch(error){
        throw error
    }
  }, []);

  return (
    <div>
      <h2>Directors</h2>
      <ul>
        {directors.map((director) => (
          <li key={director.id}>{director.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DirectorList;