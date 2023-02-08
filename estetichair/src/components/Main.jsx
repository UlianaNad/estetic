import React from "react";
import '../App.css';
import Divider from "./Main/Devider";
import Prices from "./Main/Prices/Prices";
import Story from "./Main/Story";


const Main = () =>{
    return(
        <div>
            <main>
            <Story />
            <Divider />
            <Prices />

            <div className="booking">
                <button className="bookbtn">Book your time</button>
            </div>
           
            
            </main>
        </div>
    )
}

export default Main;