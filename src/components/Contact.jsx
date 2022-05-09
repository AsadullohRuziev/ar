import React from "react";
import styled from "styled-components";
import cv from '../assets/AsadullohRuziev.pdf'
const Contact = () => {
  return (
    <Section>
      <Left>
        <h2>Contact me at:</h2>
        <a href="https://goo.gl/maps/BhhwNbFHbAGA7QFh8" target="_blank" rel="noreferrer">
          Address: Toshkent, Uzbekistan
        </a>
        <a href="mailto: asadullohruziev@gmail.com">
          Email: asadullohruziev@gmail.com
        </a>
        <a href="tel:+998996795407">Phone: +998 99 679 54 07</a>
        <a href="www.linkedin.com/in/asadullohruziev" target="_blank" rel="noreferrer">
          LinkedIn: linkedin.com/in/asadullohruziev
        </a>
        <a href="https://github.com/AsadullohRuziev" target="_blank" rel="noreferrer">
          GitHub: github.com/AsadullohRuziev
        </a>
        <a href="https://asadulloh.vercel.app/" target="_blank" rel="noreferrer">
          Website: asadulloh.vercel.app
        </a>
      </Left>
      <Right>
        <h1>AR</h1>
        <Moon>
          <Cv className="button-30" href={cv} download>CV</Cv>
        </Moon>
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
  @media (max-width: 1440px) {
    flex-direction: column-reverse;
    padding: 0;
    margin: 0;
    justify-content: space-between;
  }
`;

const Left = styled.div`
  // width: 40%;
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
  @media (max-width: 1440px) {
    flex-direction: column;
    padding-bottom: 100px;
    margin: 0;
    width: 100%;
    justify-content: space-between;
    h2{
      text-align: center;
    }
    a{
      text-align: center;
    }
  }
`;

const Right = styled.div`
  font-size: 50px;
  h1{
    margin-left: 40px;
    margin-bottom: 20px;
  }
  @media (max-width: 1440px) {
    padding-bottom: 100px;
    padding-top: 100px;

  }
`;


const Moon = styled.div`
    width: 200px;
    height: 100px;
    border-bottom-left-radius: 110px;
    border-bottom-right-radius: 110px;
    border: 7px solid #ff914d;
    border-top: 0;
`;


const Cv = styled.a`
  margin-left: 36%;
  text-decoration: none;
  color: black;
  font-size: 20px;

/* CSS */

  align-items: center;
  appearance: none;
  background-color: #FCFCFD;
  border-radius: 1px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395A;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono",monospace;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s,transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow,transform;
  font-size: 18px;
  &:focus {
  box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;

&:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  transform: translateY(-2px);
}
&:active {
  box-shadow: #D6D6E7 0 3px 7px inset;
  transform: translateY(2px);
}
}



`;