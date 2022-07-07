import { Facebook, Instagram, LinkedIn, MailOutline, Phone, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
display: flex;
background-color: #f5f5f5;
padding: 5px;
`

const Title = styled.h3`
font-size: 1.5em;
font-weight: bold;
margin-bottom: 0.5em;
`

const List= styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`

const ListItem = styled.li`
font-size: 1.1em;
font-weight: bold;
width: 50%;
margin-bottom: 0.5em;
cursor: pointer;
`

const Left = styled.div`
flex: 1;
display: flex;
padding: 20px;
flex-direction: column;
`

const Center = styled.div`
flex: 1;
padding: 20px;
`

const Right = styled.div`
flex: 1;
padding: 20px;
`

const Logo = styled.h1`
`

const Desc = styled.p`
margin: 20px 0px;
`

const SocialContainer = styled.div`
display: flex;
`

const SocialIcon = styled.h1`
cursor: pointer;
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color:${props => props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:25px;
`

const ContactItem = styled.p`
margin-bottom: 20px;
display: flex;
align-items: center;
`
const Payment = styled.img`
width: 50%;
`

const Footer = () => {
  return (
   <Container>

        <Left>
            <Logo>BileteGel.com</Logo>
            <Desc>BileteGel.com 2022 yılında kurulmuş bir anonim şirkettir. Görev ve hizmet alanı, eğlence, etkinlik, konser , sanat, müze ile sınırlıdır.
              Hizmet alanı genişlemektedir.  </Desc>
            <SocialContainer>
                <SocialIcon color='IndianRed'>
                    <Instagram/>
                </SocialIcon>

                <SocialIcon color='CornflowerBlue'>
                    <Facebook />
                </SocialIcon>

                <SocialIcon color='DodgerBlue'>
                    <Twitter/>
                </SocialIcon>

                <SocialIcon color='Indigo'>
                    <LinkedIn/>
                </SocialIcon>
            </SocialContainer>
        </Left>

        <Center>
         <Title>Ana Sayfa</Title>
          <List>
           <ListItem>Etkinlik Takvimi</ListItem>
           <ListItem>Haberler</ListItem>
           <ListItem>Man Fashion</ListItem>
           <ListItem>Woman Fashion</ListItem>
           <ListItem>Accessories</ListItem>
           <ListItem>My Account</ListItem>
           <ListItem>Order Tracking</ListItem>
           <ListItem>Wishlist</ListItem>
           <ListItem>Wishlist</ListItem>
           <ListItem>Terms</ListItem>
          </List>
        </Center>

        <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> canaycan98@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
   </Container>
  )
}

export default Footer