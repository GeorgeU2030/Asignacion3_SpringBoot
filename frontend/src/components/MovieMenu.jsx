import React from 'react'
import ReactPlayer from 'react-player/youtube'

const MovieMenu = ({imageposter, urlyoutube, name, genre, director, date}) => {
  return (
    <>
    <section className='flex '>
        <div className='w-1/3 flex flex-col items-center'>
            <img src={imageposter}
            className='w-72 h-96 mt-10'
            ></img>
        </div>
        <div className='w-2/3 flex flex-col items-center mt-10'>
         <ReactPlayer url={urlyoutube} width="80%" height="80%"/>
         <h1 className='mt-2 font-semibold text-black text-2xl'>{name}</h1>
          <div className='flex mt-2'>
            <h1 className='mr-4 text-black font-semibold'>{director}</h1>
            <h1 className='mr-4 text-black font-semibold'>{genre}</h1>
            <h1 className='mr-4 text-black font-semibold'>{date}</h1>
          </div>
        </div>
    </section>
    </>
  )
}

export default MovieMenu