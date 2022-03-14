import React from 'react'
import styled from 'styled-components';

const Text = ({dot ,title}) => {
  return (
    <P>
        {dot}
        {title}
    </P>
  )
}

export default Text


const P = styled.p`
  font-size: 20px;
  width: 85%;
`;
