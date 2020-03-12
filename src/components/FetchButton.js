import React from "react";
import {Button} from "react-bootstrap";

class FetchButton extends React.Component {

    render() {
        return (
                    <Button variant={"dark"} size={'lg'} onClick={this.props.children}>
                        CLICK ME FOR MORE CAT FACTS
                    </Button>
        )
    }
}

export default FetchButton;