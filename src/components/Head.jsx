import React from "react";
import me from "../assets/me.jpg";

const Head = () => {
  return (
    <div className=" w-full bg-orange-300 flex pt-24">
      <img src={me} alt="me" className="w-60 h-60 rounded-full shadow-lg" />
      <div className="border-black ">
        <h1>Asadulloh Ruziev</h1>
        <h3>Frontend</h3>
      </div>
    </div>
  );
};

export default Head;
