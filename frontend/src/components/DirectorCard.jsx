import React from 'react'
import { useNavigate } from 'react-router-dom'

const DirectorCard = ({director}) => {
 
  const navigate = useNavigate()

  return (
    <div 
    onClick={()=>{
        navigate('/director/'+director.id)
    }
    } className='bg-alter text-white w-5/6 rounded-lg py-6 my-5 cursor-pointer flex flex-col items-center text-2xl'>
        <h1>{director.name}</h1>   
    </div>
  )
  
}

export default DirectorCard