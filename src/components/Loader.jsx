import React from "react";
import AnimatedLoader from "../assets/images/logo-animated.gif";

function Loader(){
    return (
        <div className="loader">
            <img className="logo" src={AnimatedLoader} alt="apple loader"/>
        </div>
    );
}

export default Loader;