import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import Text from "./Text";

const Aboutme = () => {
  return (
    <Section>
      <h1>Asadulloh Ruziev</h1>
      <Heading title={"Fontend developer"} />
      <h3>About me</h3>
      <Text
        title={
          '" Creative and self-starting Front-End Developer building stable eCommerce websites and apps in fast-paced,collaborative environments. Highly skilled in HTML/CSS/JavaScript and working knowledge of Reactjs. "'
        }
      />
    </Section>
  );
};

export default Aboutme;

const Section = styled.section`
  width: 45%;
  /* margin: 0 auto; */
  margin-left: 45%;

  h1 {
    font-size: 60px;
  }
  h3 {
    margin-top: 25px;
  }
  p {
    margin-top: 10px;
    line-height: 30px;
  }
`;
