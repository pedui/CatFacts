import React from "react";
import Spinner from "react-bootstrap/Spinner";

const LoadingSpinner = () =>  {

    return(
        <div className={'factBody'}>
            <Spinner animation="border" role="status"/>
            <h6>Loading fun facts...</h6>
        </div>
    );
};

export default LoadingSpinner;