import React, {Component} from 'react';
import { Card } from 'reactstrap';


class Blog extends Component {

    render() {
        return (
            <div>
                <Card className='m-3' body inverse style={{ backgroundColor: '#c3c3c3', borderColor: '#333', overflow: 'scroll', height: 600}}>
                    {this.props.children}
                </Card>
            </div>
        );
    }
}

export default Blog;