import React from 'react'
import { useNavigate } from 'react-router-dom'

const DirectorCard = ({director}) => {

    const navigate = useNavigate()

    return (
        <div
            onClick={()=>{
                navigate('/director/'+director.id)
            }
            } className='bg-primary text-black w-5/6 rounded-lg py-6 my-5 cursor-pointer flex flex-col items-center text-2xl hover:border-2 hover:border-white hover:text-white hover:font-semibold'>
            <h1>{director.name}</h1>
        </div>
    )


}

export default DirectorCard
