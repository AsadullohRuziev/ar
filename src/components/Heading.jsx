import React from "react";
import styled from "styled-components";
const Heading = ({ title }) => {
  return <H1>{title}</H1>;
};

export default Heading;

const H1 = styled.h2`
  width: 80%;
  color: #333;
  border-bottom: 4px solid #ff914d;
  font-family: Georgia, "Times New Roman", Times, serif;
`;  