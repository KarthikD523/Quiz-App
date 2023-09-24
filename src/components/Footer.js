import React from 'react'
import styled from 'styled-components'


const Container=styled.div`
   height: 100px;
   background-color: rgb(52, 73, 94);
   display: flex;
   justify-content: center;
   align-items: center;

`
const Text=styled.h3`
   font-size: 20px;
   
`
const Footer = () => {
  return (
   <Container>
    <Text>
    Please Read Carefully 
    </Text>
     
   </Container>
  )
}

export default Footer
