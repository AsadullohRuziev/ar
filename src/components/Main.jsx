import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import Text from "./Text";

const Main = () => {
  return (
    <Section>
      <Work>
        <Heading title={"Work Experience"} />
        <h4>FRONTEND DEVELOPER</h4>
        <h4>Red Fox IT academy</h4>
        <Text title={"Avg 2020 - Feb 2022"} />
        <Text
          title={"As the Front End Developer, my core activities include"}
        />
        <Text
          dot={<Dot />}
          title={
            "Creating modular, responsive templates using modern CSS techniques and JavaScript libraries."
          }
        />
        <Text
          dot={<Dot />}
          title={
            "Creating new features,functionality and capabilitieson the eCommerce sites using Ajax and JSON."
          }
        />
        <Text
          dot={<Dot />}
          title={
            "Work with senior developers to manage large, complex projects for corporate clients."
          }
        />
      </Work>
      <Edu>
        <Heading title={"Educational History"} />
        <h4>Academic lyceum of Termez State University</h4>
        <h4>Social Sciences</h4>
        <h4>Higher Education Diploma</h4>
        <h4>Sep 2017 - May 2019</h4>
        <Text dot={<Dot/>} title={"Studied project planning,coordination, and ethics"}/>
        <Text dot={<Dot/>} title={"Worked with various startups on launching new apps and services"}/>
      </Edu>
      <Skills>
        <Heading title={"Skills"} />
        <Text dot={<Dot/>} title={"HTML"}/>
        <Text dot={<Dot/>} title={"CSS"}/>
        <Text dot={<Dot/>} title={"SASS"}/>
        <Text dot={<Dot/>} title={"Tailwindcss"}/>
        <Text dot={<Dot/>} title={"Bootstrap"}/>
        <Text dot={<Dot/>} title={"Javascript"}/>
        <Text dot={<Dot/>} title={"Reactjs"}/>
        <Text dot={<Dot/>} title={"Redux"}/>
        <Text dot={<Dot/>} title={"Nextjs"}/>
        <Text dot={<Dot/>} title={"Git"}/>
        <Text dot={<Dot/>} title={"GitHub"}/>
        <Text dot={<Dot/>} title={"PHP "}/>
        <Text dot={<Dot/>} title={"Laravel"}/>
        <Languages>
        <Heading title={"Languages"}/>
        <Text title={"English"}/>
        <Text title={"Uzbek"}/>
        </Languages>
      </Skills>
    </Section>
  );
};

export default Main;

const Section = styled.section`
width: 70%;
margin: 0 auto;
padding-top: 100px;

  display: flex;
  justify-content: center;
  @media (max-width: 1440px){
    flex-direction:column;
    width: 100%;
    margin: 0 auto;
  align-items: center;
  padding-top:100px;

  }
`;

const Work = styled.div`
  width: 33.3%;
  line-height: 30px;
  h4{
      line-height: 40px;
  }
  p{
      line-height: 30px;
  }
  @media (max-width: 1440px){
    width: 50%;
    margin: 0 auto;
    padding-top:100px;
  }
`;

const Edu = styled.div`
  width: 33.3%;
  line-height: 30px;
  h4{
      line-height: 40px;
  }
  p{
      line-height: 30px;
  }
  @media (max-width: 1440px){
    width: 50%;
    margin: 0 auto;
    padding-top:100px;
  }
`;

const Skills = styled.div`
  width: 33.3%;
  line-height: 30px;
  @media (max-width: 1440px){
    width: 50%;
    margin: 0 auto;
    padding-top:100px;
  }
`;
const Languages = styled.div`
  margin-top: 50px;
  line-height: 40px;
  @media (max-width: 1440px){
    width: 100%;
    margin: 0 auto;
    padding-top:100px;
  }
`;

const Dot = styled.div`
  height: 7px;
  width: 7px;
  border-radius: 50%;
  color: red;
  margin: 3px 15px 3px 3px;
  background-color: black;
  display: inline-block;
`;
