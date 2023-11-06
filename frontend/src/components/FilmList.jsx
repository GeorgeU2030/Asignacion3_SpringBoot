import React, { useEffect, useState } from 'react';
import { getfilms } from '../config/api'
import FilmCard from './FilmCard';

const FilmList = () => {
    const [films, setFilms] = useState([]);
    useEffect(() => {
   
        try{
            getfilms() 
            .then((data) => {
            setFilms(data);
          })
        }catch(error){
            throw error
        }
      }, []);

      return (
        <div className='h-screen w-screen bg-third flex flex-col items-center'>
          <h1 className='text-2xl text-black font-bold py-5'>Your Films</h1>
        <div className='bg-second w-5/6 rounded-lg overflow-auto ' style={{ height: '30rem' }}>
      
        {films.length > 0 ? (
      <div className='grid grid-cols-1 w-full ml-20'>
        {films.map((film) => (
          <FilmCard film={film} key={film.id} />
        ))}
      </div>
    ) : (
      <div className='flex flex-col justify-center items-center h-full'>
        <h1 className='text-third font-semibold text-xl'>You do not have films added</h1>
      </div>
    )}
      
    </div>
    </div>
      );
}

export default FilmList