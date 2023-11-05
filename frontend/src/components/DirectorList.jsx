import React, { useEffect, useState } from 'react';
import { getdirectors } from '../config/api';
import DirectorCard from './DirectorCard';

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
    <div className='h-screen w-screen bg-third flex flex-col items-center'>
      <h1 className='text-2xl text-white font-bold py-5'>Your Directors</h1>
    <div className='bg-second w-5/6 rounded-lg overflow-auto ' style={{ height: '30rem' }}>
  <div className='grid grid-cols-1 w-full ml-20'>
    {directors.map((director) => (
      <DirectorCard director={director} key={director.id} />
    ))}
  </div>
</div>
</div>
  );
};

export default DirectorList;