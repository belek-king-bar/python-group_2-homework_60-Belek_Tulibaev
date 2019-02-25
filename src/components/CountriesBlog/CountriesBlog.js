import React, {Component} from 'react';
import { Card } from 'reactstrap';


class Blog extends Component {

    render() {
        return (
            <div>
                <Card className="mt-4" body inverse style={{ backgroundColor: '#c3c3c3', overflowY: 'scroll', height: 580}}>
                    {this.props.children}
                </Card>
            </div>
        );
    }
}

export default Blog;