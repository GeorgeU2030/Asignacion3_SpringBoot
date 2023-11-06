import React from 'react'
import HeaderApp from '../components/HeaderApp'
import FilmList from '../components/FilmList'
import Footer from '../components/Footer'

const FilmPage = () => {
  return (
    <div>
      <HeaderApp headerTitle={"ListFilms"}></HeaderApp>
      <FilmList></FilmList>
      <Footer></Footer>
    </div>
  )
}

export default FilmPage