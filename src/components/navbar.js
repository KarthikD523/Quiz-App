import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
   background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,112,1) 72%, rgba(0,212,255,1) 100%);
   height: 10%;
   display: flex;
   justify-content: center;
   align-items: center;
`

const Text=styled.h1`
 font-size: 30px;
`

const Navbar = () => {
  return (
   <Container>
        <Text>QUIZ</Text>
   </Container>
  )
}

export default Navbar
