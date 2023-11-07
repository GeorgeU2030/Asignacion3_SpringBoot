import React from 'react'
import DirectorList from '../components/DirectorList'
import HeaderApp from '../components/HeaderApp'
import Footer from '../components/Footer'

const DirectorPage = () => {
  return (
    <div>
        <HeaderApp headerTitle={"ListDirectors"}></HeaderApp>
        <DirectorList></DirectorList>
        <Footer></Footer>
    </div>
  )
}

export default DirectorPage