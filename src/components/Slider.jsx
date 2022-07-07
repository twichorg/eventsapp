import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { sliderItems } from '../Data'
import { useState } from 'react'


// Container Div
const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
// Arrow Left and Right Div
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
//  Slide Wrapper div
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease; //transition effect with animations
  transform: translateX(${(props) => props.slideIndex * -100}vw); 
`;
// Slide Div
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
// İmage Container div
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
// İmage  styled component
const Image = styled.img`
  height: 80%;
`;
// İnfo Sections
const InfoContainer = styled.div`
  flex: 1;
  padding: 10px;
`;
// Tittle styled component h1
const Title = styled.h1`
  font-size: 70px;
`;
// Description styled component
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
 
//Adresss
 const Adress = styled.div`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  padding: 10px;

  `;


const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Adress>{item.address}</Adress>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;