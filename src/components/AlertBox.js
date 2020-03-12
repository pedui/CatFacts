import React from "react";
import { Alert } from "react-bootstrap";

const AlertBox = (props) => {

    return (
        <Alert variant={"danger"}>
            <Alert.Heading>Whoops! You got an error! :(</Alert.Heading>
            <p>
                The error message received: {props.children}
            </p>
        </Alert>
    );
};

export default AlertBox;