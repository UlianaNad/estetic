import React from "react";
import { NavLink } from "react-router-dom";
import '../../../../App.css';
import s from "./NavLink.module.css";


const Navbar = () =>{
    return(
        <div className="price-link-block">
            <NavLink to="/hair" className={({isActive})=> isActive ? s.active:undefined}>
                <img className="icon-price" src={require("../../../../img/hair-dryer.png")} alt="" />
                <h5>Hair</h5>
            </NavLink>
            <NavLink to="/nails" className={({isActive})=> isActive ? s.active:undefined}>
                <img className="icon-price" src={require("../../../../img/nail-polish.png")} alt="" />
                <h5>Nails</h5>
            </NavLink>
            <NavLink to="/massage" className={({isActive})=> isActive ? s.active:undefined}>
                <img className="icon-price" src={require("../../../../img/massage.png")} alt="" />
                <h5>Massage</h5>
            </NavLink>
            <NavLink to="/brows" className={({isActive})=> isActive ? s.active:undefined}>
                <img className="icon-price" src={require("../../../../img/eyebrow.png")} alt="" />
                <h5>Brows</h5>
            </NavLink>
            <NavLink to="/face_care" className={({isActive})=> isActive ? s.active:undefined}>
                <img className="icon-price" src={require("../../../../img/cream.png")} alt="" />
                <h5>Face care</h5>
            </NavLink>
        </div>

    )
}

export default Navbar;


