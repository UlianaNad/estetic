import React from "react";
import '../../../App.css';
import Hair from "./NavLink/Hair";
import Navbar from "./NavLink/Navbar";
import Nails from "./NavLink/Nails";
import {Routes, Route} from "react-router-dom";


const Prices = () =>{
    return(
        <div className="price-wrapper">
            <h3 id="price" className="h3-price">Our prices</h3>
            <Navbar />
                <Routes>
                    <Route path="/hair" element={<Hair/>}/>
                    <Route path="/nails" element={<Nails/>}/>
               
                </Routes>

                
        </div>

    )
}

export default Prices;