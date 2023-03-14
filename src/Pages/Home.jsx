import React from 'react'
import Main from '../Components/Main'
import Row from '../Components/Row'
import requests from '../Requests'

function Home() {
  return (
    <>
        <Main />

        {/* return each row pass the url as a prop to fetch data and set id to be able to use arrows */}
        <Row title='Up Coming' fetchURL={requests.requestUpcoming} rowID='0' />
        <Row title='Popular' fetchURL={requests.requestPopular} rowID='1' />
        <Row title='Trending' fetchURL={requests.requestTrending} rowID='2' />
        <Row title='Top Rated' fetchURL={requests.requestTopRated} rowID='3' />
    </>
  )
}

export default Home