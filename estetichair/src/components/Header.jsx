import React from "react";
import '../App.css';


const Header = () =>{
    return(
    <header id="home">
    <div className="background">
    <div className="container">
        <div >
            <img className="logo" src={require("../img/logo3.png")} alt="" />
        </div>
        <div className="dropdown-menu" id="main-nav">
            <ul>
                <li><a href="#home">home</a></li>
                <li> <a href="#story">our story</a></li>
                {/* <li><a href="#beauty_services">Beauty services</a>
                <ul className="submenu">
                    <li className="sub-link"><a href="#" >lashes/brows</a></li>
                    <li className="sub-link"><a href="#" >hands/nails</a></li>
                    <li className="sub-link"><a href="#" >facial treatments</a></li>
                    <li className="sub-link"><a href="#" >foot treatments</a></li>
                    <li className="sub-link"><a href="#" >body treatments</a></li>
                    <li className="sub-link"><a href="#" >epilation</a></li>
                </ul>
                </li>
                <li><a href="#hair_services">Hair services</a>
                <ul className="submenu">
                    <li className="sub-link"><a href="#" >Haircut</a></li>
                    <li className="sub-link" ><a href="#">Dyes</a></li>
                    <li className="sub-link"><a href="#" >Coloring</a></li>
                    <li className="sub-link"><a href="#" >Styling</a></li>
                    <li className="sub-link"><a href="#" >Hair extensions and perms</a></li>
                </ul>
                </li> */}
                <li><a href="#price">services and prices</a></li>
                <li><a href="#contacts">contacts</a></li>
            </ul>
        </div>
    </div>
    <div className="topic">
        <h3>Hairestetic</h3>
        <h5>Providing you with the highest standards of Hair & Beauty Service</h5>
    </div>
    </div>
    </header>
    )
}

export default Header;