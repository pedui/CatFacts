import React from "react";
import { Table } from "react-bootstrap";

const FactList  = (props) => {

    return (
            <Table striped bordered hover variant="dark">
                <thead>
                {props.children.map(data =>
                        <tr key={props.children.indexOf(data)}>
                            <td>{data.text}</td>
                        </tr>
                    )}
                 </thead>
            </Table>
    );
};

export default FactList;