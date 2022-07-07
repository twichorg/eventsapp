import React from 'react'
import styled from 'styled-components'
 

export const EventCard = ({eventer}) => {

  const Container = styled.div`
  padding: 8px;
  margin: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  ` 
  const Card = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin: 1px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  `

  const Image =styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px; 
  `

  const Name = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #333;
`
  const Date = styled.h2`
  font-weight: lighter;
  `
  const Venue = styled.h3`
  font-weight: lighter;
  `
  const City = styled.h2`
  font-weight: normal;
  `
  const CategoryName = styled.h4`
  font-weight: lighter;

  `
  const Info = styled.div`
  font-weight: lighter;
  `

  const Button = styled.button`
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 5px;
  margin: 5px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
`

  return (
    <Container>
      <Card>
        <Image src={eventer.poster_url}/>
        <Info>
        <Name>{eventer.name}</Name>
        <City>Şehir :{eventer.venue.city.name}</City>
        <Venue>Mesken :{eventer.venue.name}</Venue>
        <CategoryName>Kategori :{eventer.category.name}</CategoryName>
        <Date>Başlangıç Tarihi :{eventer.start}</Date>
        </Info>
        <Button>Detaylar</Button>
      </Card>
    </Container>
  )
}

export default EventCard