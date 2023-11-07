import React, { useEffect, useState } from 'react';
import { getfilms } from '../config/api'
import FilmCard from './FilmCard';

const FilmList = () => {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
   
        try{
            getfilms() 
            .then((data) => {
            setFilms(data);
            setLoading(false); // Una vez que se cargan los datos, establece loading en falso
          })
        }catch(error){
            throw error
        }
      }, []);

      return (
        <div className='h-screen w-screen bg-third flex flex-col items-center'>
          <h1 className='text-2xl text-black font-bold py-5'>Your Films</h1>
        <div className='bg-second border-2 border-second w-5/6 rounded-lg overflow-auto film-list-container'>
          
        {loading ? (
          <div className='loading-container'>
            <div className='loader'></div>
          </div>
        ) :films.length > 0 ? (
      <div className='grid grid-cols-1 w-full ml-20 film-card-list'>
        <div className='grid grid-cols-3 flex flex-col items-center'><h1 className='text-2xl text-white py-5' >Movie</h1> <h1 className='text-2xl text-white py-5'>Genre</h1> <h1 className='text-2xl text-white py-5'>Director</h1></div> 
        {films.map((film) => (
          <FilmCard film={film} key={film.id} />
        ))}
      </div>
    ) : (
      <div className='flex flex-col justify-center items-center h-full no-film-message'>
        <h1 className='text-third font-semibold text-xl'>You do not have films added</h1>
      </div>
    )}
      
    </div>
    </div>
      );
};

export default FilmList;