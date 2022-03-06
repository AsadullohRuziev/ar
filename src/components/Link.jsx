import React from 'react';
import styled from 'styled-components';

const Link = ({link, title,icon, icon2}) => {
  return (
    <A href={link} target="_blank">{title} {icon} {icon2}</A>
  )
}

export default Link



const A = styled.a`
      background-color: #bbb236; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 26px;
`