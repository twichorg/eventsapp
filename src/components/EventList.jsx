import React from 'react'
import { useState, useEffect } from 'react'
import EventCard from './EventCard'
import styled from 'styled-components'

const EventList = () => {

  const [events, setEvents] = useState([]);

  const options = { 
    headers: {"X-Etkinlik-Token": "7ad15269ce29ac424d6fb5eab5bc8b62"}
}
  
// eslint-disable-next-line react-hooks/exhaustive-deps
const fetchData = async () => {
  const res = await fetch('https://backend.etkinlik.io/api/v2/events?take=21', options)
  const data = await res.json()
  setEvents(data.items)
}

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const Container = styled.div`
  padding: 1px;
  margin: 1px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  border-radius: 40px; 
  `

  return( 
    <>
    <Container>
      {events.map(eventer =>
        <EventCard eventer={eventer}/>
      )}
    </Container>
    </>
  )
}

export default EventList