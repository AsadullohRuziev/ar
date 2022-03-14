import React from 'react'
import styled from 'styled-components'

const Heading = () => {
  return (
    <Head>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque minus </h2>
    </Head>
  )
}

export default Heading



const Head = styled.div`
  border-bottom: 10px solid #ff914d;
  background-color: #ffead5;
  h2{
    color:  red;
  }
`