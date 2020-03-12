import logo from "../kitten-florist.png";
import React from "react";

class LoadingScreen extends React.Component {

    render() {
        return(
            <div className={'App-header'}>
                <img src={logo} className='App-logo' alt='logo'/>
                <h5>Loading a set of fun cat facts...</h5>
            </div>
        )
    }

}


export default LoadingScreen;