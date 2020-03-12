import React from "react";
import {Table} from "react-bootstrap";

class FactList extends React.Component {

    render() {
        return (
                <Table striped bordered hover variant="dark">
                    <thead>
                    {this.props.children.map(data =>
                            <tr key={this.props.children.indexOf(data)}>
                                <td>{data.text}</td>
                            </tr>
                        )}
                     </thead>
                </Table>
        )
    }
}

export default FactList;