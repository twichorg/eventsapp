import React from 'react'
import styled from 'styled-components'  // Importing styled-components

const Header = () => {
  
  const Container = styled.div`           
    height: 60px;
    `

    const Wrapper = styled.div`         
    display: flex;
    height: 10%;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
      `

    const Logo = styled.div`
      font-size: 35px;
      font-weight: bold;
      color: #333;
      cursor: pointer;
      `

    const Left = styled.div`
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      `
    
    const Right = styled.div`
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;
      `
    const Center = styled.div`
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: center;`

      
    const Link = styled.a`
      display: flex;
      color: #333;
      text-decoration: none;
      font-size: 14px;
      font-weight: bold;
      `

      const LinkItem = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
      cursor: pointer;
      font-size: 25px;
      font-weight: bold;
      color: #333;
      }
      `

//Curren Date
const CurrentDate = () => {   // to get the current date
  const date = new Date().toLocaleDateString()
  return date
}

const DateCur = styled.div`
  font-size: 23px;
  font-weight: bold;
  color: #333;
  margin-right: 20px;

  `

  return (

    <Container>
      <Wrapper> 
        <Left>      
          <Link>
          <LinkItem>Ana sayfa</LinkItem>
          </Link>
        </Left>

        <Center>
        <Logo>
          BileteGel.com
        </Logo>
        </Center>

        <Right>
        <DateCur>Tarih :{CurrentDate()}</DateCur>
        </Right>
        
      </Wrapper>
     </Container>
  )
}

export default Header