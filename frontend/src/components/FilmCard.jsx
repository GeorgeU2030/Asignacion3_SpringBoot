import React from 'react'
import { useNavigate } from 'react-router-dom'

const FilmCard = ({film}) => {
 
  const navigate = useNavigate()

  return (
    <div 
    onClick={()=>{
        navigate('/film/'+film.id)
    }
    } className='bg-primary text-black w-5/6 rounded-lg py-6 my-5 cursor-pointer flex flex-col text-2xl hover:border-2 hover:border-white hover:text-white hover:font-semibold'>
         <div className='grid grid-cols-3 flex flex-col items-center'><h1 className='ml-20'>{film.name}</h1> <h1 className='ml-20'>{film.genre}</h1> <h1 className='ml-28'> {film.director}</h1></div>   
    </div>
  )
  
}

export default FilmCard