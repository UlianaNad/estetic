import React from "react";
import '../App.css';


const Footer = () =>{
    return(
        <footer>
            <div className="foot-wrapper">
            <hr />
            <div className="content-foot">
                <div className="info">
                <h3>Follow us</h3>
                <div className="flexing">
                <a href='#'>
                    <img src={require("../img/instagram.png")} alt="" />
                </a>
                <a href='#'>
                    <img src={require("../img/facebook.png")} alt="" />
                </a>
                </div>
                </div>
                <div className="info">
                <h3>Opening hours</h3>
                    <span>Sun: closed</span>
                    <span>Mon-Fri: 9:00 am - 7:00 pm</span>
                    <span>Saturday: 10:00 am - 20:00 pm</span>
                </div>
                <div className="info">
                <h3>Contact information</h3>
                <span>Address: Mannerhementie 100,00250 Helsinki</span>
                <span>Phone: +358465755332</span>
                <span>Email: hairestetic.fi@gmail.com</span>
                </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer;