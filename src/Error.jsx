import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from './styles/Button'

const Error = () => {
  return (
     <Wrapper>
      <div className='container'>
        <div>
          <h2>404</h2>
          <h2>UH OH! YOU'RE LOST</h2>
          <p>
            the page you are looking does not exist .How you get here is a
            mystery .But you can click the button below to go back to the homepage
          </p>
          <NavLink to="/">
          <Button>
         
          Go back to home
            
          </Button>
          </NavLink> 
            
        </div>
      </div>
     </Wrapper>
  )
}
const Wrapper=styled.section`
.container{
  padding:9rem 0;
  text-align:center;
  h1{
    font-size:10rem;
  }
  p{
    margin:2rem 0;
  }
}`
export default Error