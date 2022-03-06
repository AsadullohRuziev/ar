import React from "react";
import Link from "./Link";
import {FaReact, FaHtml5} from 'react-icons/fa'

const Content = () => {
  return <div className=" bg-orange-300 pb-96">
                <h1 className="pb-24 text-center text-3xl">Portifolios</h1>
            <div className="w-3/4 m-auto flex justify-between flex-wrap	">
                <Link link={"https://github.com/AsadullohRuziev/education"} title={'Education'} ></Link>
                <Link link={"https://github.com/AsadullohRuziev/restaurant"} title={'Restaurant'}></Link>
                <Link link={"https://github.com/AsadullohRuziev/food"} title={'Foodshop'}></Link>
                <Link link={"https://github.com/AsadullohRuziev/calculator"} title={'Calculator'}></Link>
                <Link link={"https://github.com/AsadullohRuziev/escape"} title={'Escape'}></Link>
                <Link link={"https://github.com/AsadullohRuziev/tictactoe"} title={'TicTacToe'}></Link>
                <Link link={"https://github.com/AsadullohRuziev/"} title={'More...'}></Link>
            </div>
      </div>;
};

export default Content;
