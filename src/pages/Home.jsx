import React from 'react'
import Header from '../components/Header'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import EventList from '../components/EventList'

const Home = () => {
 
  return (
    <>
    <Header />
    <Announcement />
    <Slider />
    <EventList />
    <Footer />
    </>
  )
}

export default Home