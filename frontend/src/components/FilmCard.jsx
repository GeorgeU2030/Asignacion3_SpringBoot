import React from 'react'
import { useNavigate } from 'react-router-dom'

const FilmCard = ({film}) => {
 
  const navigate = useNavigate()

  return (
    <div 
    onClick={()=>{
        navigate('/film/'+film.id)
    }
    } className='bg-alter text-white w-5/6 rounded-lg py-6 my-5 cursor-pointer flex flex-col items-center text-2xl hover:bg-third hover:text-alter font-semibold'>
        <h1>{film.name}</h1>   
    </div>
  )
  
}

export default FilmCard