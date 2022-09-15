import React from "react";
import "./Header.css"

const Header = (props) => {
    return (
        <div className="header-div">

            <button name="button" value="OK" type="button">HOME</button>
            <button name="button" value="OK" type="button"><a href="https://sit-313-task-10-1.vercel.app//register">REGISTER </a> </button>
            <button name="button" value="OK" type="button"><a href="http://localhost:3000/login">LOGIN </a> </button>
            <button name="button" value="OK" type="button">POST</button>
            <button name="button" value="OK" type="button">CONTACT</button>
            
        </div>
    )

}



export default Header;
