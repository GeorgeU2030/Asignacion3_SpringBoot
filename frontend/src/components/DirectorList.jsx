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
      <h1 className='text-2xl text-black font-bold py-5'>Your Directors</h1>
    <div className='bg-second w-5/6 rounded-lg overflow-auto ' style={{ height: '30rem' }}>
  
    {directors.length > 0 ? (
  <div className='grid grid-cols-1 w-full ml-20'>
    {directors.map((director) => (
      <DirectorCard director={director} key={director.id} />
    ))}
  </div>
) : (
  <div className='flex flex-col justify-center items-center h-full'>
    <h1 className='text-third font-semibold text-xl'>You do not have directors added</h1>
  </div>
)}
  
</div>
</div>
  );
};

export default DirectorList;