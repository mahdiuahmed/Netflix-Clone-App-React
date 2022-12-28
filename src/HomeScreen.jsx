import React from 'react'
import './HomeScreen.css'
import Nav from './Nav'
import Banner from './Banner'
import Row from './Row'
import requests from './Requests'

function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Nav />

        <Banner />

        <Row
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow />
        <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
    </div>
    
  )
}

export default HomeScreen