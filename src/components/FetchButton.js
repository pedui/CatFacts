import React from "react";
import { Button } from "react-bootstrap";

const FetchButton = (props) =>  {

    return (
        <Button variant={"dark"} size={'lg'} onClick={props.children}>
            CLICK ME FOR MORE CAT FACTS
        </Button>
    );
};

export default FetchButton;