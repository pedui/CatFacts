import logo from "../pictures/kitten-florist.png";
import React from "react";

const LoadingScreen = () =>  {

    return(
        <div className={'factBody'}>
            <img src={logo} className='App-logo' alt='logo'/>
            <h5>Loading a set of fun cat facts...</h5>
        </div>
    );
};

export default LoadingScreen;