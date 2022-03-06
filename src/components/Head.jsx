import React from "react";
import me from "../assets/me.jpg";

const Head = () => {
  return (
    <div className=" w-full bg-orange-300 flex pt-24 pb-24 items-center justify-center">
      <img src={me} alt="me" className="w-60 h-60 rounded-full shadow-lg" />
      <div className="border-black ml-40">
        <h1 className="text-6xl">Asadulloh Ruziev</h1>
        <h3 className="text-4xl pt-6">Frontend</h3>
      </div>
    </div>
  );
};

export default Head;
