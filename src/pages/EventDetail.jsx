import React from 'react'
import { useLocation } from 'react-router-dom'

const EventDetail = () => {
    const location = useLocation();

  return (
    <div>{location.state.name}</div>
  )
}

export default EventDetail