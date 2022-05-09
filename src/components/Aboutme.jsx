import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import Text from "./Text";

const Aboutme = () => {
  return (
    <Section>
      <h1>Asadulloh Ruziev</h1>
      <Heading title={"Fontend developer"}/>
      <h3>About me</h3>
      <Text
        title={
          '"Hi, there 🖐I am a Front-end developer with 10 years of experience. I develop responsive websites from simple landings to complex web applications. For my vast experience, I have developed more than 7 online stores on Shopify, more than 30 React projects. I guarantee that the project I created will be fast as it is Google friendly and SEO friendly.    In my work, I use modern web technologies like React, ReactNative, Next.js, Redux, Gatsby, Contentful"'
        }
      />
    </Section>
  );
};

export default Aboutme;

const Section = styled.section`
  width: 45%;
  margin: 0 auto;
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
  @media (max-width: 1440px) {
    width: 50%;
    margin: 0 auto;
    h1, h3, p{
      text-align: center;
    }
    h1{
      padding-bottom:100px;
      font-size: 40px;
    }
  }
  @media (max-width: 425px){
    width:90%;
  }
`;
