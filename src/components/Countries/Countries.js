import React, {Component} from 'react';
import { Button } from 'reactstrap';


class Countries extends Component {
    render() {
        return (
            <Button className='mb-2' color="link" onClick={this.props.clicked}>
                <h6>{this.props.name}</h6>
            </Button>
        );
    }
}

export default Countries;