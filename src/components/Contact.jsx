import React from "react";
import styled from "styled-components";
const Contact = () => {
  return (
    <Section>
      <Left>
        <h2>Contact me at:</h2>
        <a href="https://goo.gl/maps/BhhwNbFHbAGA7QFh8" target="_blank">
          Address: Toshkent, Uzbekistan
        </a>
        <a href="mailto: asadullohruziev@gmail.com">
          Email: asadullohruziev@gmail.com
        </a>
        <a href="tel:+998996795407">Phone: +998 99 679 54 07</a>
        <a href="www.linkedin.com/in/asadullohruziev" target="_blank">
          LinkedIn: linkedin.com/in/asadullohruziev
        </a>
        <a href="https://github.com/AsadullohRuziev" target="_blank">
          GitHub: github.com/AsadullohRuziev
        </a>
        <a href="https://asadulloh.vercel.app/" target="_blank">
          Website: asadulloh.vercel.app/
        </a>
      </Left>
      <Right>
        <h1>AR</h1>
      </Right>
    </Section>
  );
};

export default Contact;

const Section = styled.section`
  padding: 100px 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 40%;
  /* border: 1px solid red; */
  h2{
      font-size: 35px;
      margin-bottom: 20px;
  }
  a {
    text-decoration: none;
    font-size: 20px;
    color: #333;
    display: block;
    font-weight: 500;
    line-height: 28px;
  }
`;

const Right = styled.div`
  /* width: 50%; */
  /* border: 1px solid red; */
  font-size: 50px;
`;
