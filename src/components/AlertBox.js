import React from "react";
import {Alert} from "react-bootstrap";

class AlertBox extends React.Component {

    render() {
        return (
            <Alert variant={"danger"}>
                <Alert.Heading>Whoops! You got an error! :(</Alert.Heading>
                <p>
                    The error message received: {this.props.children}
                </p>
            </Alert>
        )
    }
}

export default AlertBox;